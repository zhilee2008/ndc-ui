import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    ButtonArea,
    Button,
    CellsTitle,
    CellHeader,
    CellBody,
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
} from '../../packages';
import Page from '../components/page';




const productTypeItems = [];


const productTypeItemsI=[];
const productTypeItemsII=[];
const productTypeItemsIII=[];



class OrderDetailsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '我要报修',
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
                                <Input name='companyName'
                                    value={this.state.companyName}
                                    onChange={this.handleChange.bind(this)} type="text" placeholder="输入公司名称" />
                            </CellBody>
                        </FormCell>
                        {/* <FormCell select selectPos="after">
                            <CellHeader>
                                <Label>区域:</Label>
                            </CellHeader>
                            <CellBody>
                                <Select data={[
                                    {
                                        value: 1,
                                        label: '中国'
                                    },
                                    {
                                        value: 2,
                                        label: '海外'
                                    }
                                ]} />
                            </CellBody>
                        </FormCell> */}
                        <FormCell>
                            <CellHeader>
                                <Label>姓名:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input name='name'
                                    value={this.state.name}
                                    onChange={this.handleChange.bind(this)} type="text" placeholder="输入姓名" />
                            </CellBody>
                        </FormCell>
                        <FormCell vcode>
                            <CellHeader>
                                <Label>手机号:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input name='mobile'
                                    value={this.state.mobile}
                                    onChange={this.handleChange.bind(this)} type="number" placeholder="输入手机号码" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>邮箱:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this)} type="number" type="text" placeholder="输入邮箱" />
                            </CellBody>
                        </FormCell>
                        <FormCell select selectPos="after" >
                            <CellHeader>
                                <Label>行业:</Label>
                            </CellHeader>
                            <CellBody>
                                <Toptips type="warn" show={this.state.showWarn}>请选择行业</Toptips>
                                <Select defaultValue="0" onChange={this.handleChangeIndustry} data={[
                                    {
                                        value: 0,
                                        label: '请选择行业'
                                    },
                                    {
                                        value: 1,
                                        label: '化工品和药品'
                                    },
                                    {
                                        value: 2,
                                        label: '涂布复合'
                                    },
                                    {
                                        value: 3,
                                        label: '薄膜和片材挤出'
                                    },
                                    {
                                        value: 4,
                                        label: '食品加工'
                                    },
                                    {
                                        value: 5,
                                        label: '冶金工业'
                                    },
                                    {
                                        value: 6,
                                        label: '矿石和松散物'
                                    },
                                    {
                                        value: 7,
                                        label: '无纺布和纺织品'
                                    },
                                    {
                                        value: 8,
                                        label: '软管及管材'
                                    },
                                    {
                                        value: 9,
                                        label: '橡胶和乙烯基压延'
                                    },
                                    {
                                        value: 10,
                                        label: '烟草加工'
                                    },
                                    {
                                        value: 11,
                                        label: '电线，电缆和光纤'
                                    },
                                    {
                                        value: 12,
                                        label: '其他'
                                    }
                                ]} />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>寄付帐单地址:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input name='billAddress'
                                    value={this.state.billAddress}
                                    onChange={this.handleChange.bind(this)} type="text" placeholder="输入寄付帐单地址" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>详细公司地址:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input name='companyAddress'
                                    value={this.state.companyAddress}
                                    onChange={this.handleChange.bind(this)} type="text" placeholder="输入详细公司地址" />
                            </CellBody>
                        </FormCell>
                        <CellsTitle>设备信息</CellsTitle>
                        <FormCell>
                            <CellHeader>
                                <Label>产品序列号:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input name='productId'
                                    value={this.state.productId}
                                    onChange={this.handleChange.bind(this)} type="text" placeholder="输入产品序列号" />
                            </CellBody>
                        </FormCell>
                        <FormCell select selectPos="after">
                            <CellHeader>
                                <Label>设备类型I:</Label>
                            </CellHeader>
                            <CellBody>
                                <Select onChange={this.handleChangeProductTypeI.bind(this)} data={productTypeItems} />
                            </CellBody>
                        </FormCell>
                        <FormCell select selectPos="after">
                            <CellHeader>
                                <Label>设备类型II:</Label>
                            </CellHeader>
                            <CellBody>
                                <Select onChange={this.handleChangeProductTypeII.bind(this)} data={this.state.productTypeItemsArrII} />
                            </CellBody>
                        </FormCell>
                        <FormCell select selectPos="after">
                            <CellHeader>
                                <Label>设备类型III:</Label>
                            </CellHeader>
                            <CellBody>
                                <Select onChange={this.handleChangeProductTypeIII.bind(this)} data={this.state.productTypeItemsArrIII} />
                            </CellBody>
                        </FormCell>
                    </Form>
                    {/* <CellsTips>Form Footer Tips</CellsTips> */}
                    <CellsTitle>故障细节</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellBody>
                                <TextArea name='troubleDetail'
                                    value={this.state.troubleDetail}
                                    onChange={this.handleChange.bind(this)} placeholder="输入故障细节" rows="3"></TextArea>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <CellsTitle>上传照片</CellsTitle>
                    {this.renderGallery()}
                    <Form>
                        <FormCell>
                            <CellBody>
                                <Uploader
                                    maxCount={9}
                                    files={this.state.demoFiles}
                                    onError={msg => alert(msg)}
                                    onChange={(file, e) => {
                                        let newFiles = [...this.state.demoFiles, { url: file.data }];
                                        this.setState({
                                            demoFiles: newFiles
                                        });
                                    }}
                                    onFileClick={
                                        (e, file, i) => {
                                            console.log('file click', file, i)
                                            this.setState({
                                                gallery: {
                                                    url: file.url,
                                                    id: i
                                                }
                                            })
                                        }
                                    }
                                    lang={{
                                        maxError: maxCount => `最多上传 ${maxCount} 张照片`
                                    }}
                                />
                            </CellBody>
                        </FormCell>
                    </Form>
                    <ButtonArea>
                        <Button onClick={e => this.setState({ showWarn: true, showIOS1: true })}>
                            提交
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