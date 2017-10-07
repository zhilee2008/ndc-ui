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
} from '../../packages';
import Page from '../components/page';




const productTypeItems = [];


const productTypeItemsI = [];
const productTypeItemsII = [];
const productTypeItemsIII = [];



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
            showIOS1: false,
            style1: {
                buttons: [
                    {
                        label: '确定',
                        onClick: this.hideDialog.bind(this)
                    }
                ]
            },
            showWarn: false,
            gallery: false,
            demoFiles: [
                {
                    url: '',
                }
            ],
        };
    }
    renderGallery() {
        if (!this.state.gallery) return false;

        let srcs = this.state.demoFiles.map(file => file.url)

        return (
            <Gallery
                src={srcs}
                show
                defaultIndex={this.state.gallery.id}
                onClick={e => {
                    //avoid click background item
                    e.preventDefault()
                    e.stopPropagation();
                    this.setState({ gallery: false })
                }}
            >

                <GalleryDelete onClick={(e, id) => {
                    this.setState({
                        demoFiles: this.state.demoFiles.filter((e, i) => i !== id),
                        gallery: this.state.demoFiles.length <= 1 ? true : false
                    })
                }} />

            </Gallery>
        )
    }
    hideDialog() {
        this.setState({
            showIOS1: false,
        });
        this.props.history.push('/');
    }

    handleChange(e) {
        let prop = e.target.name;
        console.log(e.target.name)
        this.setState({
            [prop]: e.target.value
        });
        console.log(this.state)
    }

    handleChangeIndustry = (e) => {
        // 订单生成首字母T 1
        // 订单生成首字母P 2
        // 订单生成首字母P 3
        // 订单生成首字母T 4
        // 订单生成首字母M 5
        // 订单生成首字母T 6
        // 订单生成首字母P 7
        // 订单生成首字母C 8
        // 订单生成首字母P 9
        // 订单生成首字母T 10
        // 订单生成首字母C 11
        // 订单生成首字母O 12
        // console.log(e.target.value)
        this.setState({
            industry: e.target.value
        });
    }

    handleChangeProductTypeI = (e) => {
        this.setState({
            productTypeItemsI: e.target.value,
            productTypeItemsArrII: productTypeItems
        });
    }
    handleChangeProductTypeII = (e) => {
        this.setState({
            productTypeItemsII: e.target.value,
            productTypeItemsArrIII: productTypeItems
        });
    }
    handleChangeProductTypeIII = (e) => {
        this.setState({
            productTypeItemsIII: e.target.value
        });
    }


    render() {

        return (
            <div>
                <Page className="input" title={this.state.title}>

                    <CellsTitle>基本信息</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>公司名称:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.companyName}
                            </CellBody>
                        </FormCell>

                        <FormCell>
                            <CellHeader>
                                <Label>姓名:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.name}
                            </CellBody>
                        </FormCell>
                        <FormCell vcode>
                            <CellHeader>
                                <Label>手机号:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.mobile}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>邮箱:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.email}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>产品序列号:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.productId}
                            </CellBody>
                        </FormCell>
                        <FormCell select selectPos="after">
                            <CellHeader>
                                <Label>设备类型:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.productType}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>详细公司地址:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.companyAddress}
                            </CellBody>
                        </FormCell>
                    </Form>
                    {/* <CellsTips>Form Footer Tips</CellsTips> */}
                    {/* <CellsTitle>故障细节</CellsTitle> */}
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>报修单号:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.companyAddress}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>工程师:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.companyAddress}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>上门时间:</Label>
                            </CellHeader>
                            <CellBody>
                                {this.state.companyAddress}
                            </CellBody>
                        </FormCell>
                    </Form>
                    <CellsTitle>备注</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellBody>
                                <TextArea name='troubleDetail'
                                    value={this.state.troubleDetail}
                                    rows="3"></TextArea>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <ButtonArea>
                        <Button onClick={e => this.setState({ showWarn: true, showIOS1: true })}>
                            更新
                        </Button>
                    </ButtonArea>
                    <Dialog type="ios" title={this.state.style1.title} buttons={this.state.style1.buttons} show={this.state.showIOS1}>
                        <b>提示</b>
                        <p>您的保修单已生成,请截屏记录</p>
                        报修单号:{'123456'}
                    </Dialog>

                </Page>
            </div>
        );
    }
}

export default withRouter(OrderDetailsForm);