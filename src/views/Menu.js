import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle
} from '../../packages';

const repairsubmiticon = <img src="/images/baoxiu-@2x.png" />
const statusqueryicon = <img src="/images/cahxun@2x.png" />
const repairmanagementicon = <img src="/images/guanli-@2x.png" />

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    menuItemClick = (pageId) => {
        let path = '/';
        if(pageId==='1'){
            path = '/repairsubmit';
        }
        if(pageId==='2'){
            path = '/statusquery';
        }
        if(pageId==='3'){
            path = '/repairmanagement';
        }
        
        this.props.history.push(path);
      };

    render() {
        return (
            <div>
                <MediaBox key={1} type="appmsg" href="javascript:void(0);" onClick={this.menuItemClick.bind(this,'1')}>
                <MediaBoxHeader>{repairsubmiticon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>{'我要报修'}</MediaBoxTitle>
                    </MediaBoxBody>
                </MediaBox>
                <MediaBox key={2} type="appmsg" href="javascript:void(0);" onClick={this.menuItemClick.bind(this,'2')}>
                    <MediaBoxHeader>{statusqueryicon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>{'状态查询'}</MediaBoxTitle>
                        
                    </MediaBoxBody>
                </MediaBox>
                <MediaBox key={3} type="appmsg" href="javascript:void(0);"onClick={this.menuItemClick.bind(this,'3')}>
                    <MediaBoxHeader>{repairmanagementicon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>{'报修管理'}</MediaBoxTitle>
                    </MediaBoxBody>
                </MediaBox>
            </div>
        );
    }
}

export default withRouter(Menu);

