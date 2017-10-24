import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    ButtonArea,
    Button,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Input,
    Label,
    TextArea,
    Select,
    Toptips,
    Uploader,
    Gallery,
    GalleryDelete,
    Dialog,
    CellsTips,
    Cell,
} from '../../packages';
import wx from 'weixin-js-sdk'
import Page from '../components/page';
import './orderdetails.css'
import $ from 'jquery';
import Util from '../utils/Util';
import sign from '../utils/sign'

class OrderDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemId: this.props.match.params.id,
            title: '订单信息',
            companyName: '',
            name: '',
            mobile: '',
            email: '',
            industry: 0,
            productId: '',
            productTypeI: '',
            productTypeII: '',
            productTypeIII: '',
            billAddress: '',
            companyAddress: '',
            troubleDetail: '',
            errorMsg: '',
            engineerName: '',
            homeServiceTime: '',
            imageSrc: '',
            completed: '',
            showIKnowBtn: true,
            engineers: [],
            caption: '',
            fromQuery: false,
            imageurls: [],
            audioMediaId:'',
        };

        let url = process.env.REACT_APP_HTTP_PREFIX + "/repairs/weixin-jsapiticket";
        var request = $.ajax({
            url: url,
            method: "GET",
            contentType: "application/json; charset=utf-8"
        });

        var self = this;

        request.done(function (msg) {
            if (msg) {
                const jsticketObject = JSON.parse(msg);
                const jsapiticket = jsticketObject.jsapi_ticket;
                const appId = jsticketObject.appId;
                const url = 'http://ndc.way-may.com/orderdetails/' + self.props.match.params.id + '/' + self.props.match.params.showIKnowBtn + '/' + self.props.match.params.status + '/' + self.props.match.params.fromQuery;
                alert(url);
                sign(jsapiticket, url, (jsApiObject) => {
                    // alert(JSON.stringify(jsApiObject));
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: appId, // 必填，公众号的唯一标识
                        jsApiList: [
                            'playVoice',
                            'downloadVoice',
                            'previewImage'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                        jsapi_ticket: jsApiObject.jsapi_ticket,
                        nonceStr: jsApiObject.nonceStr,
                        timestamp: jsApiObject.timestamp,
                        url: jsApiObject.url,
                        signature: jsApiObject.signature
                    });
                });
                // alert(jsApiObject);
            }

        });

        request.fail(function (jqXHR, textStatus) {
            self.setState({
                errorMsg: '录音和上传图片功能暂不可用'
            });
            alert('录音和上传图片功能暂不可用');
            console.log("Request failed: " + textStatus)
        });

    }

    detailsUpdate = () => {
        let path = '/orderdetailsupdate/' + this.state.itemId;

        this.props.history.push(path);
    };
    returnUp = () => {
        let path = '/repairmanagement';
        if (this.state.fromQuery) {
            path = '/statusquery';
        }
        this.props.history.push(path);
    }



    componentWillMount() {
        // console.log(this.props.match.params.id);
        let showIKnowBtn = this.props.match.params.showIKnowBtn;
        if (showIKnowBtn === 'false') {
            showIKnowBtn = false;
        } else {
            showIKnowBtn = true;
        }
        let status = this.props.match.params.status;
        if (status === 'new') {
            this.setState({
                caption: '待接'
            });
        } else if (status === 'handling') {
            this.setState({
                caption: '处理中'
            });
        } else {
            this.setState({
                caption: '已完成'
            });
        }
        let fromQueryParam = this.props.match.params.fromQuery;
        if (fromQueryParam == 'true') {
            this.setState({
                fromQuery: true
            });
        } else {
            this.setState({
                fromQuery: false
            });
        }

        this.setState({
            // itemId: this.props.match.params.id,
            showIKnowBtn: showIKnowBtn
        });
        let itemId = this.props.match.params.id;

        this.getStatusById(itemId);

    }

    playVoice() {
        const self = this;
        // alert(src);
        // alert('1'+self.state.audioMediaId);
        wx.ready(function () {
            wx.downloadVoice({
                serverId: self.state.audioMediaId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                isShowProgressTips: 0, // 默认为1，显示进度提示
                success: function (res) {
                    // alert('2'+res.localId);
                    // voice.localId = res.localId; // 返回音频的本地ID
                    wx.playVoice({
                        localId: res.localId
                    });
                }
            });

        });
    }

    showImage(src) {
        const self = this;
        // alert(src);
        wx.ready(function () {

            wx.previewImage({
                current: src,
                urls: self.state.imageurls
            });

        });
    }

    getStatusById = (itemId) => {
        let url = process.env.REACT_APP_HTTP_PREFIX + "/repairs/query/" + itemId;
        var request = $.ajax({
            url: url,
            method: "GET",
            contentType: "application/json; charset=utf-8"
        });

        var self = this;

        request.done(function (msg) {
            if (msg) {
                const orderdetails = JSON.parse(msg);
                self.setState({
                    companyName: orderdetails.Company,
                    name: orderdetails.Name,
                    mobile: orderdetails.Mobile,
                    email: orderdetails.Email,
                    industry: orderdetails.Industry,
                    productId: orderdetails.Serial,
                    productTypeI: orderdetails.FirstDeviceType,
                    productTypeII: orderdetails.SecondDeviceType,
                    productTypeIII: orderdetails.ThirdDeviceType,
                    billAddress: orderdetails.BillAddress,
                    companyAddress: orderdetails.CompanyAddress,
                    troubleDetail: orderdetails.BugDetail,
                    engineers: orderdetails.OrderLog.Engineers,
                    imageurls: orderdetails.ImageUrls,
                    audioMediaId: orderdetails.AudioMediaId,
                    completed: orderdetails.Status
                });

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



    render() {

        return (
            <div className={'orderbackground'}>
                <Page className="input">
                    <Cell className={'titlebar'}>
                        <CellHeader onClick={() => { window.history.go(-1) }} style={{ width: '20%', height: '65px', marginTop: '25px' }} >
                            <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                            <div className={'titlebarback'}>
                                返回
             </div>
                        </CellHeader>

                        <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                            报修状态查询
                  </CellBody>
                        <CellFooter style={{ width: '20%' }} >
                            <img style={{ width: '30px', display: 'none' }} src='/images/menu12@2x.png' />
                        </CellFooter>
                    </Cell>
                    {/* <img src='/images/touying@2x.png' /> */}
                    <div className={'touying'}>

                        <img className={'dian'} src='/images/dian@2x.png' />
                        <div style={{ color: '#1887fc', }} className={'diancontent'}>该报修单号( {this.state.caption} )</div>
                        <div style={{ color: 'grey', }} className={'diancontentright'}>{this.state.itemId}</div>
                    </div>
                    <Form className={'orderborder'}>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>订单信息</Label>
                            </CellHeader>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>公司名称:</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.companyName}
                            </CellBody>
                        </FormCell>

                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>姓名:</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.name}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>手机号:</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.mobile}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>邮箱:</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.email}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>产品序列号:</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.productId}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>报修设备类型:</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.productTypeI}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>设备类型II:</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.productTypeII}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>设备类型III:</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.productTypeIII}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>详细公司地址:</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.companyAddress}
                            </CellBody>
                        </FormCell>
                    </Form>
                    <Form className={'orderborder'}>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>详细公司地址:</Label>
                            </CellHeader>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: 'lightgrey' }}>公司地址</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.companyAddress}
                            </CellBody>
                        </FormCell>
                    </Form>
                    <Form className={'orderborder'}>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>订单故障描述:</Label>
                            </CellHeader>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: 'lightgrey' }}>故障描述</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.troubleDetail}
                            </CellBody>
                        </FormCell>
                    </Form>
                    <Form className={'orderborder'}>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>语音描述:</Label>
                            </CellHeader>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                {
                                    this.state.audioMediaId === '' ? '' : <div style={{ width: '100%' }}><div onClick={this.playVoice.bind(this)} style={{ width: '100%', margin: '0px' }} className={'savedradio'}>点击播放录音</div></div>
                                }

                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <Form className={'orderborder'}>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>图片描述:</Label>
                            </CellHeader>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <div className={'savedimagecontainer'} style={{ paddingBottom: '5px' }} id="imagecontainerview">
                                    {this.state.imageurls.map(url =>
                                        <div style={{ float: 'left' }}><img onClick={this.showImage.bind(this, url)} className={'savedimage'} src={url} /></div>
                                    )
                                    }

                                </div>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                            </CellBody>
                        </FormCell>

                    </Form>
                    {/* <CellsTips>Form Footer Tips</CellsTips> */}
                    {/* <CellsTitle>故障细节</CellsTitle> */}
                    {this.state.engineers.slice(0).reverse().map(engineer =>

                        <Form className={'orderborder'}>

                            <FormCell>
                                <CellHeader>
                                    <Label style={{ color: '#000' }}>工程师姓名:</Label>
                                </CellHeader>
                                <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                    {engineer['Name']}
                                </CellBody>
                            </FormCell>
                            <FormCell>
                                <CellHeader>
                                    <Label style={{ color: '#000' }}>工程师手机:</Label>
                                </CellHeader>
                                <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                    {engineer['Mobile']}
                                </CellBody>
                            </FormCell>
                            <FormCell>
                                <CellHeader>
                                    <Label style={{ color: '#000' }}>上门/维修时间:</Label>
                                </CellHeader>
                                <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                    {Util.timeStamp2TString(engineer['Homeservicetime'])}
                                </CellBody>
                            </FormCell>
                            <FormCell>
                                <CellHeader>
                                    <Label style={{ color: '#000' }}>选项:</Label>
                                </CellHeader>
                                <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                    {engineer['SelectedOption']}
                                </CellBody>
                            </FormCell>
                            <FormCell>
                                <CellHeader>
                                    <Label style={{ color: '#000' }}>备注:</Label>
                                </CellHeader>
                                <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                    {engineer['Notes']}
                                </CellBody>
                            </FormCell>
                        </Form>
                    )}


                    <ButtonArea className={(this.state.completed === 'completed' || !this.state.showIKnowBtn) ? 'hideKnowBtn' : 'showKnowBtn'} direction="horizontal">

                        <Button onClick={this.returnUp.bind(this)}>
                            返回
                        </Button>

                        <Button className={!this.state.showIKnowBtn ? 'hideKnowBtn' : 'showKnowBtn'} style={{ margin: '0 auto' }} onClick={this.detailsUpdate.bind(this)}>
                            处理
                        </Button>

                    </ButtonArea>


                </Page>
            </div>
        );
    }
}

export default withRouter(OrderDetails);

