import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    InfiniteLoader,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter,
    CellHeader,
    Label,
    Button,
    ButtonArea,
  Dialog,
} from '../../packages';
import Page from '../components/page';
import $ from 'jquery';

import './RepairManagementItems.css'
class RepairManagementItems extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [],
            status: '',
              warningStyle: {
                buttons: [
                  {
                    label: '确定',
                    onClick: this.deleteOrder
                  },
                  {
                    label: '取消',
                    onClick: this.hideWarningDialog
                  }
                ]
              },
              showWarningPanel: false,
          orderId: '',
          title: '',
          isIos: false,
            screenHeight: '800px'
        };
        var u = navigator.userAgent,
        app = navigator.appVersion;
    //var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    this.state.isIos = isIOS;
    }

    componentWillMount() {
        let screenHeight = document.documentElement.clientHeight;
        alert(screenHeight);
        // console.log(this.props.match.params.id);
        this.setState({
            status: this.props.match.params.status,
            screenHeight: screenHeight + 'px'
        }, ()=> {
          if (this.state.status === 'new'){
              this.setState({
                title: '待接'
              });
          } else if (this.state.status === 'handling'){
              this.setState({
                title: '处理中'
              });
          } else {
              this.setState({
                title: '已完成'
              });
          }
        });
        let status = this.props.match.params.status;
        this.getListByStatus(status);
        alert(this.state.screenHeight);
    }

    hideWarningDialog = () => {
        this.setState({
          showWarningPanel: false
        });
    };

    getListByStatus = (status) => {
        let url = process.env.REACT_APP_HTTP_PREFIX + "/repairs/list/" + status;
        var request = $.ajax({
            url: url,
            method: "GET",
            contentType: "application/json; charset=utf-8"
        });

        var self = this;

        request.done(function (msg) {
            if (msg && msg !== 'null') {
                const orderlist = JSON.parse(msg);
                // console.log(Util.timeStamp2String(orderlog.servicecenter.time))
                const items = [];
                if (orderlist) {
                    orderlist.forEach(function (item) {
                        items.push(item.orderid);
                    });
                    self.setState({
                        items: items
                    });
                }
            }else {
              self.setState({
                items: []
              })
            }

        });

        request.fail(function (jqXHR, textStatus) {
            self.setState({
                errorMsg: '出错了，请刷新重试，或者联系管理员'
            });
            alert('出错了，请刷新重试，或者联系管理员');
            console.log("Request failed: " + textStatus)
        });
    };



    detailsItemClick = (itemId) => {
        let path = '/orderdetails/' + itemId;
        if (this.state.status === 'completed') {
          path = path + '/false'
        }else {
          path = path + '/true'
        }
        path = path + '/' + this.state.status + '/false';
        // this.props.history.push(path);
        window.location.href=path;
    };

    topOrder = (itemId) => {
      let url = process.env.REACT_APP_HTTP_PREFIX + "/repairs/top";

      var payload = {
        orderId: itemId,
        top: 'true'
      };

      var request = $.ajax({
        url: url,
        method: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(payload),
      });

      var self = this;

      request.done(function (msg) {
        self.getListByStatus(self.state.status)
      });

      request.fail(function (jqXHR, textStatus) {
        self.setState({
          errorMsg: '出错了，请刷新重试，或者联系管理员'
        });
        alert('出错了，请刷新重试，或者联系管理员');
        console.log("Request failed: " + textStatus)
      });
    };
    confirmDeleteOrder = (itemId) => {
        this.setState({
          showWarningPanel: true,
          orderId: itemId
        });
    };
    deleteOrder = () => {
        let url = process.env.REACT_APP_HTTP_PREFIX + "/repairs/delete";

        var payload = {
          orderid: this.state.orderId
        };

        var request = $.ajax({
          url: url,
          method: "POST",
          contentType: "application/json; charset=utf-8",
          data: JSON.stringify(payload),
        });

        var self = this;

        request.done(function (msg) {
            self.setState({
              showWarningPanel: false
            }, ()=>{
              self.getListByStatus(self.state.status)
            });
        });

        request.fail(function (jqXHR, textStatus) {
          self.setState({
            errorMsg: '出错了，请刷新重试，或者联系管理员'
          });
          alert('出错了，请刷新重试，或者联系管理员');
          console.log("Request failed: " + textStatus)
        });
    };


    render() {
        return (
            <InfiniteLoader
                onLoadMore={(resolve, finish) => {
                    //mock request
                    setTimeout(() => {
                        if (this.state.items.length > 5) {
                            finish()
                        } else {
                            this.setState({
                                items: this.state.items.concat([this.state.items.length])
                            }, () => resolve())
                        }
                    }, 1000)
                }}
                style={{height: this.state.screenHeight}}
            >
                <Page className="infinite" style={{minHeight: '800px'}}>
                    <Cell className={'titlebar'}>
                    {
                        this.state.isIos? '' :
                        <CellHeader onClick={e => this.props.history.push('/repairmanagement')} style={{width: '20%', height: '65px', marginTop: '25px' }} >
                        <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                        <div className={'titlebarback'}>
                            返回
                 </div>
                    </CellHeader>
                    }
                        
                        <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                            报修状态查询
                  </CellBody>
                  {
                     this.state.isIos? '' :
                     <CellFooter style={{ width: '20%' }} >
                     <img style={{ width: '30px',display:'none' }} src='/images/menu12@2x.png' />
                     </CellFooter>
                  }
                        
                    </Cell>
                    {/* <img src='/images/touying@2x.png' /> */}
                    <div className={'touying'}>
                        <div style={{ color: '#1887fc', textAlign: 'center' }} >以下为{this.state.title}报修单,请点击了解详情并操作</div>
                    </div>
                    <Cells style={{ marginTop: '0px' }}>
                        {
                            this.state.items.map((itemId, i) => {
                                return (
                                    <Cell  href="javascript:;" key={i} access>
                                        <CellHeader>
                                            <Label>订单编号</Label>
                                        </CellHeader>
                                        <CellBody style={{ marginLeft: '10px', color: 'lightgray' }} onClick={this.detailsItemClick.bind(this, itemId)}>
                                            {itemId}
                                        </CellBody>
                                        <CellFooter>
                                            <ButtonArea direction="horizontal">
                                                <Button type="warn" onClick={this.topOrder.bind(this, itemId)}>置顶</Button>
                                                <Button type="warn" className={'delete-order-btn'} onClick={this.confirmDeleteOrder.bind(this, itemId)}>删除</Button>
                                            </ButtonArea>
                                        </CellFooter>
                                        <Dialog type="default" title={'警告'} buttons={this.state.warningStyle.buttons} show={this.state.showWarningPanel}>
                      确定要删除订单{this.state.orderId}吗?
                    </Dialog>
                                    </Cell>
                                )
                            })
                        }
                    </Cells>
                    
                </Page>
            </InfiniteLoader>
        )
    }
}

export default withRouter(RepairManagementItems);


