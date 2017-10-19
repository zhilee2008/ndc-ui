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
import Page from '../components/page';
import './orderdetails.css'
import $ from 'jquery';
import Util from '../utils/Util';

class OrderDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemId: '',
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
            engineerName:'',
            homeServiceTime: '',

            completed: '',
            showIKnowBtn: true,
            engineers: []
        };
    }

    detailsUpdate = () => {
        let path = '/orderdetailsupdate/'+this.state.itemId;

        this.props.history.push(path);
    };

    componentDidMount() {
        // console.log(this.props.match.params.id);
        let showIKnowBtn = this.props.match.params.showIKnowBtn;
        if (showIKnowBtn === 'false') {
            showIKnowBtn = false;
        }else {
            showIKnowBtn = true;
        }

        this.setState({
            itemId: this.props.match.params.id,
            showIKnowBtn: showIKnowBtn
        });
        let itemId = this.props.match.params.id;

        this.getStatusById(itemId);
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
                    engineers:orderdetails.OrderLog.Engineers,

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
                        <CellHeader onClick={() => {window.history.go(-1)}} style={{width: '20%', height: '65px', marginTop: '25px' }} >
                            <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                            <div className={'titlebarback'}>
                                返回
             </div>
                        </CellHeader>

                        <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                            报修状态查询
                  </CellBody>
                        <CellFooter style={{ width: '20%' }} >
                            <img style={{ width: '30px',display:'none' }} src='/images/menu12@2x.png' />
                        </CellFooter>
                    </Cell>
                    {/* <img src='/images/touying@2x.png' /> */}
                    <div className={'touying'}>
                        <img className={'dian'} src='/images/dian@2x.png' />
                        <div style={{ color: '#1887fc', }} className={'diancontent'}>您的报修单号</div>
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


                    <ButtonArea className={(this.state.completed === 'completed' || !this.state.showIKnowBtn) ? 'hideKnowBtn' : 'showKnowBtn'}>
                        <Button onClick={this.detailsUpdate.bind(this)}>
                            我知道了
                        </Button>
                    </ButtonArea>


                </Page>
            </div>
        );
    }
}

export default withRouter(OrderDetails);

