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
    Label
} from '../../packages';
import Page from '../components/page';
import $ from 'jquery';

class RepairManagementItems extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.id);
        this.setState({
            status: this.props.match.params.status
        });
        let status = this.props.match.params.status;
        this.getListByStatus(status);
    }


    getListByStatus = (status) => {
        let url = process.env.REACT_APP_HTTP_PREFIX + "/repairs/list/" + status;
        var request = $.ajax({
            url: url,
            method: "GET",
            contentType: "application/json; charset=utf-8"
        });

        var self = this;

        request.done(function (msg) {
            if (msg) {
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

        this.props.history.push(path);
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
            >
                <Page className="infinite" >
                    <Cell className={'titlebar'}>
                        <CellHeader onClick={e => this.props.history.push('/repairmanagement')} style={{width: '20%', height: '65px', marginTop: '25px' }} >
                            <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                            <div className={'titlebarback'}>
                                返回
                     </div>
                        </CellHeader>
                        <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                            报修状态查询
                  </CellBody>
                        <CellFooter style={{ width: '20%' }} >
                            <img style={{ width: '30px' }} src='/images/menu12@2x.png' />
                        </CellFooter>
                    </Cell>
                    {/* <img src='/images/touying@2x.png' /> */}
                    <div className={'touying'}>
                        <div style={{ color: '#1887fc', textAlign: 'center' }} >以下为待接的报修单,请点击了解详情并操作</div>
                    </div>
                    <Cells style={{ marginTop: '0px' }}>
                        {
                            this.state.items.map((itemId, i) => {
                                return (
                                    <Cell onClick={this.detailsItemClick.bind(this, itemId)} href="javascript:;" key={i} access>
                                        <CellHeader>
                                            <Label>订单编号</Label>
                                        </CellHeader>
                                        <CellBody style={{ marginLeft: '20px', color: 'lightgray' }}>
                                            {itemId}
                                        </CellBody>
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


