import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    ButtonArea,
    Button,
    MediaBoxDescription,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from '../../packages';
import './menu.css';
import './statusqueryitem.css';
const baoxiuicon = <img src="/images/baoxiu-@2x.png" />
const fuwuicon = <img src="/images/fuwu@2x.png" />
const gongchengshiicon = <img src="/images/gongchengshi@2x.png" />
const shangmenicon = <img src="/images/shangmen@2x.png" />
const weixiuicon = <img src="/images/weixiu-@2x.png" />


class StatusQueryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    detailsItemClick = () => {
        let path = '/orderdetails';
        this.props.history.push(path);
    };

    render() {
        return (
            <div>
                <Cell className={'titlebar'}>
                    <CellHeader style={{ height: '65px',marginTop:'25px' }} >
                        <img style={{ float: 'left' }} src='/images/jiantu@2x.png' />
                        <div className={'titlebarback'}>
                            返回
                     </div>
                    </CellHeader>

                    <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                        报修状态查询
                  </CellBody>
                    <CellFooter style={{ width: '20%' }} >
                        <img src='/images/menu12@2x.png' />
                    </CellFooter>
                </Cell>
                {/* <img src='/images/touying@2x.png' /> */}
                <div className={'touying'}>
                    <img className={'dian'} src='/images/dian@2x.png'/>
                    <div style={{color: '#1887fc',}} className={'diancontent'}>您的报修单号</div>
                    <div style={{color: 'lightgrey',}} className={'diancontentright'}>M20112223123123123</div>
                </div>
                <MediaBox key={1} type="appmsg" href="javascript:void(0);" >
                    <MediaBoxHeader>{baoxiuicon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>{'报修'}</MediaBoxTitle>
                        <div style={{ marginTop: '5px',}}>
                            <img style={{ marginTop: '2px', width: '15px', float: 'left' }} src='/images/shijian---huise@2x.png' />
                            <div style={{ color: '#999999', fontSize: '13px',marginLeft:'22px' }}>
                                完成时间
                             </div>
                        </div>
                    </MediaBoxBody>
                    <CellFooter><img src='/images/tijiai@2x.png' /></CellFooter>
                    <CellFooter>已提交</CellFooter>
                </MediaBox>
                <MediaBox key={2} type="appmsg" href="javascript:void(0);" >
                    <MediaBoxHeader>{fuwuicon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>{'服务中心'}</MediaBoxTitle>
                        <div style={{ marginTop: '5px',}}>
                            <img style={{ marginTop: '2px', width: '15px', float: 'left' }} src='/images/shijian---huise@2x.png' />
                            <div style={{ color: '#999999', fontSize: '13px',marginLeft:'22px' }}>
                                完成时间
                             </div>
                        </div>
                    </MediaBoxBody>
                    <CellFooter><img src='/images/tijiai@2x.png' /></CellFooter>
                    <CellFooter>已提交</CellFooter>
                </MediaBox>
                <MediaBox key={3} type="appmsg" href="javascript:void(0);" >
                    <MediaBoxHeader>{gongchengshiicon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>{'工程师'}</MediaBoxTitle>
                        <div style={{ marginTop: '5px',}}>
                            <img style={{ marginTop: '2px', width: '15px', float: 'left' }} src='/images/shijian---huise@2x.png' />
                            <div style={{ color: '#999999', fontSize: '13px',marginLeft:'22px' }}>
                                完成时间
                             </div>
                        </div>
                    </MediaBoxBody>
                    <CellFooter><img src='/images/tijiai@2x.png' /></CellFooter>
                    <CellFooter>已提交</CellFooter>
                </MediaBox>
                <MediaBox key={4} type="appmsg" href="javascript:void(0);" >
                    <MediaBoxHeader>{shangmenicon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>{'上门服务'}</MediaBoxTitle>
                        <div style={{ marginTop: '5px',}}>
                            <img style={{ marginTop: '2px', width: '15px', float: 'left' }} src='/images/shijian---huise@2x.png' />
                            <div style={{ color: '#999999', fontSize: '13px',marginLeft:'22px' }}>
                                完成时间
                             </div>
                        </div>
                    </MediaBoxBody>
                    <CellFooter><img src='/images/tijiai@2x.png' /></CellFooter>
                    <CellFooter>已提交</CellFooter>
                </MediaBox>
                <MediaBox key={5} type="appmsg" href="javascript:void(0);" >
                    <MediaBoxHeader>{weixiuicon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>{'维修完成'}</MediaBoxTitle>
                        <div style={{ marginTop: '5px',}}>
                            <img style={{ marginTop: '2px', width: '15px', float: 'left' }} src='/images/shijian---huise@2x.png' />
                            <div style={{ color: '#999999', fontSize: '13px',marginLeft:'22px' }}>
                                完成时间
                             </div>
                        </div>
                    </MediaBoxBody>
                    <CellFooter><img src='/images/tijiai@2x.png' /></CellFooter>
                    <CellFooter>已提交</CellFooter>
                </MediaBox>
                <ButtonArea>
                    <Button onClick={this.detailsItemClick.bind(this)}>
                        了解详情
                        </Button>
                </ButtonArea>
            </div>
        );
    }
}

export default withRouter(StatusQueryItem);

