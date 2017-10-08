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

class RepairManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {

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

    render() {
        return (
            <div>
                <Cell className={'titlebar'}>
                    <CellHeader onClick={e => this.props.history.push('/')} style={{ height: '65px', marginTop: '25px' }} >
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
                            <div className={'repair-small-title'}>等待接单10</div>
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
                            <div className={'repair-small-title'}>等待处理21</div>
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
                            <div className={'repair-small-title'}>已完成订单101</div>
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

