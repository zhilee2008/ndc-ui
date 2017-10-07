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
import './orderdetailsform.css'

class OrderDetailsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            productTypeArrI: '',
            productTypeArrII: '',
            productTypeArrIII: '',
            billAddress: '',
            companyAddress: '',
            troubleDetail: '',

        };
    }

    render() {

        return (
            <div className={'orderbackground'}>
                <Page className="input">
                    <Cell className={'titlebar'}>
                        <CellHeader style={{ height: '65px', marginTop: '25px' }} >
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
                        <img className={'dian'} src='/images/dian@2x.png' />
                        <div style={{ color: '#1887fc', }} className={'diancontent'}>您的报修单号</div>
                        <div style={{ color: 'lightgrey', }} className={'diancontentright'}>M20112223123123123</div>
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
                            <CellBody>
                                {this.state.companyName}
                            </CellBody>
                        </FormCell>

                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>姓名:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.name}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>手机号:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.mobile}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>邮箱:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.email}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>产品序列号:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.productId}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>设备类型:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.productType}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>详细公司地址:</Label>
                            </CellHeader>
                            <CellBody>
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
                            <CellBody>
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
                            <CellBody>
                                {this.state.companyAddress}
                            </CellBody>
                        </FormCell>
                    </Form>
                    {/* <CellsTips>Form Footer Tips</CellsTips> */}
                    {/* <CellsTitle>故障细节</CellsTitle> */}
                    <Form className={'orderborder'}>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>工程师姓名:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.companyAddress}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>上门时间:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.companyAddress}
                            </CellBody>
                        </FormCell>
                    </Form>

                    <ButtonArea>
                        <Button>
                            我知道了
                        </Button>
                    </ButtonArea>


                </Page>
            </div>
        );
    }
}

export default withRouter(OrderDetailsForm);