import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle
} from '../../packages';
import './RepairManagement.css'
import './menu.css'
import $ from 'jquery';

class RepairManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMsg: '',
            newcount: 0,
            handlingcount: 0,
            completecount: 0,
        };
    }

    menuItemClick = (pageId) => {
        let path = '/';
        if (pageId === '1') {
            path = '/repairmanagementitems/new';
        }
        if (pageId === '2') {
            path = '/repairmanagementitems/handling';
        }
        if (pageId === '3') {
            path = '/repairmanagementitems/complete';
        }

        this.props.history.push(path);
    };

    componentDidMount() {
        this.getNewCount();
        this.getHandlingCount();
        this.getCompleteCount();
    }

    getNewCount = () => {
        let urlnew = process.env.REACT_APP_HTTP_PREFIX + "/repairs/list/new";
        var request = $.ajax({
            url: urlnew,
            method: "GET",
            contentType: "application/json; charset=utf-8"
        });

        var self = this;

        request.done(function (msg) {
            if (msg) {
                const orderdetails = JSON.parse(msg);
                if (orderdetails) {
                    self.setState({
                        newcount: orderdetails.length,
                    });
                }

            }

        });

        request.fail(function (jqXHR, textStatus) {
            self.setState({
                handlingcount: 0,
            });
        });
    };
    getHandlingCount = () => {
        let urlnew = process.env.REACT_APP_HTTP_PREFIX + "/repairs/list/handling";
        var request = $.ajax({
            url: urlnew,
            method: "GET",
            contentType: "application/json; charset=utf-8"
        });

        var self = this;

        request.done(function (msg) {
            if (msg) {
                const orderdetails = JSON.parse(msg);
                if (orderdetails) {
                    self.setState({
                        handlingcount: orderdetails.length,
                    });
                }

            }

        });

        request.fail(function (jqXHR, textStatus) {
            self.setState({
                handlingcount: 0,
            });
        });
    };
    getCompleteCount = () => {
        let urlnew = process.env.REACT_APP_HTTP_PREFIX + "/repairs/list/complete";
        var request = $.ajax({
            url: urlnew,
            method: "GET",
            contentType: "application/json; charset=utf-8"
        });

        var self = this;

        request.done(function (msg) {
            if (msg) {
                const orderdetails = JSON.parse(msg);
                if (orderdetails) {
                    self.setState({
                        completecount: orderdetails.length,
                    });
                }
            }

        });

        request.fail(function (jqXHR, textStatus) {
            self.setState({
                handlingcount: 0,
            });
        });
    };



    render() {
        return (
            <div>
                <Cell className={'titlebar'}>
                    <CellHeader onClick={e => this.props.history.push('/')} style={{width: '20%', height: '65px', marginTop: '25px' }} >
                        <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                        <div className={'titlebarback'}>
                            返回
                 </div>
                    </CellHeader>

                    <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                        报修管理
                    </CellBody>
                    <CellFooter style={{ width: '20%' }} >
                        <img style={{ width: '30px' }} src='/images/menu12@2x.png' />
                    </CellFooter>
                </Cell>
                <MediaBox key={1} type="appmsg" href="javascript:void(0);" onClick={this.menuItemClick.bind(this, '1')}>
                    <MediaBoxHeader>
                        <img src={'/images/jiedan.png'} className={'repair-header-image'} />
                    </MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>
                            <div className={'repair-big-title'}>{'待接单'}</div>
                            <div className={'repair-small-title'}>等待接单{this.state.newcount}</div>
                        </MediaBoxTitle>
                    </MediaBoxBody>
                    <div>
                        <img src={'/images/jiantou.png'} className={'repair-jiantou'} />
                    </div>
                </MediaBox>
                <MediaBox key={2} type="appmsg" href="javascript:void(0);" onClick={this.menuItemClick.bind(this, '2')}>
                    <MediaBoxHeader>
                        <img src={'/images/chuli.png'} className={'repair-header-image'} />
                    </MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>
                            <div className={'repair-big-title'}>{'处理中'}</div>
                            <div className={'repair-small-title'}>等待处理{this.state.handlingcount}</div>
                        </MediaBoxTitle>

                    </MediaBoxBody>
                    <div>
                        <img src={'/images/jiantou.png'} className={'repair-jiantou'} />
                    </div>
                </MediaBox>
                <MediaBox key={3} type="appmsg" href="javascript:void(0);" onClick={this.menuItemClick.bind(this, '3')}>
                    <MediaBoxHeader>
                        <img src={'/images/wancheng.png'} className={'repair-header-image'} />
                    </MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>
                            <div className={'repair-big-title'}>{'已完成'}</div>
                            <div className={'repair-small-title'}>已完成订单{this.state.completecount}</div>
                        </MediaBoxTitle>
                    </MediaBoxBody>
                    <div>
                        <img src={'/images/jiantou.png'} className={'repair-jiantou'} />
                    </div>
                    <div style={{ border: '1px solid grey' }}></div>
                </MediaBox>
            </div>
        );
    }
}

export default withRouter(RepairManagement);

