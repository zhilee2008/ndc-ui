import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    ButtonArea,
    Button,
    Form,
    FormCell,
    Input,
    FooterText,
    CellHeader,
    CellBody,
    CellFooter,
    Cell,
    Dialog
} from '../../packages';

import './statusquery.css';
import './menu.css';
import $ from 'jquery';

class StatusQuery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            itemId: '',
            warningStyle: {
                buttons: [
                    {
                        label: '确定',
                        onClick: this.hideWarningDialog
                    }
                ]
            },
            showWarningDialog: false,
            validElement: '',
            isIos: false,
        };
        var u = navigator.userAgent,
        app = navigator.appVersion;
    //var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    this.state.isIos = isIOS;
    }

    hideWarningDialog = () => {
        this.setState({
            showWarningDialog: false
        });
    };

    handleChangeItemId = (event) => {
        this.setState({
            itemId: event.target.value
        });
    }

  backToIndex = () =>{
    //window.history.go(-1)
    let path = localStorage.getItem("path");

    this.props.history.push('/menu/'+ path);
  };
  queryItemClick = () => {
        if (this.state.itemId === "") {
            this.setState({
                validElement: '请输入订单号',
                showWarningDialog: true
            });
            return;
        }
        let url = process.env.REACT_APP_HTTP_PREFIX + "/repairs/status/" + this.state.itemId;
        var request = $.ajax({
            url: url,
            method: "GET",
            contentType: "application/json; charset=utf-8"
        });

        var self = this;

        request.done(function (msg) {
            if (msg) {
                const path = '/statusqueryitem/' + self.state.itemId;
                self.props.history.push(path);
            } else {
                self.setState({
                    validElement: '订单号有误请重试',
                    showWarningDialog: true
                });
                return;
            }
        });

        request.fail(function (jqXHR, textStatus) {
            self.setState({
                validElement: '订单号有误请重试',
                showWarningDialog: true
            });
            return;
        });
    };

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <Cell className={'titlebar'}>
                {
                    this.state.isIos? '' :
                    <CellHeader onClick={this.backToIndex} style={{ width: '20%', height: '65px', marginTop: '25px' }} >
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
                <div style={{ marginTop: '95px' }}>
                    <img style={{ width: '30%' }} src="/images/LOGO@2x.png" />
                </div>
                 <div style={{ marginTop: '5px' }}>
                    <img style={{ width: '30px' }} src="/images/underlogo@2x.png" />
                    <FooterText>{this.state.userId}</FooterText>
                </div>
                <Form>
                    <FormCell>
                        <CellBody>
                            <Input className={'queryinput'} value={this.state.itemId}
                                onChange={this.handleChangeItemId} type="text" placeholder="输入报修单号" />
                        </CellBody>
                    </FormCell>
                </Form>
                <Dialog type="ios" title={'警告'} buttons={this.state.warningStyle.buttons} show={this.state.showWarningDialog}>
                    {this.state.validElement}
                </Dialog>
                <ButtonArea >
                    <Button style={{ marginTop: '100px' }} onClick={this.queryItemClick.bind(this)}>
                        提交
                        </Button>
                </ButtonArea>
            </div>
        );
    }
}

export default withRouter(StatusQuery);

