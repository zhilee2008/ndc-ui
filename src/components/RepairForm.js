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

import './RepairForm.css'



const productTypeItems = [
    {
        value: 0,
        label: '选择产品',
    },
    {
        value: 1,
        label: '冶金工业系列产品(Accuray, IRM)',
        children: [{
            value: 1,
            label: 'FVXR-1（43kv）',

        }, {
            value: 2,
            label: 'Rometer',

        }, {
            value: 3,
            label: 'T100',

        }, {
            value: 4,
            label: 'THAM-2（Am-241）',

        }, {
            value: 5,
            label: 'TLXR-2（less than 10kv）',

        }, {
            value: 6,
            label: 'TM-5（Sr-90）',

        }, {
            value: 7,
            label: 'TM-6（Sr-90）',

        }, {
            value: 8,
            label: 'TVXR-1（up to 50 kv）',

        }, {
            value: 9,
            label: 'TVXR-2（up to 130KV）',

        }, {
            value: 10,
            label: 'UNI 500（QNX4）',

        }, {
            value: 11,
            label: 'UNI 600（QNX6）',

        }, {
            value: 12,
            label: 'UNI 700 TDI',

        }, {
            value: 13,
            label: 'W10',

        }, {
            value: 14,
            label: 'W100',

        }, {
            value: 15,
            label: 'W200',

        }],
    },
    {
        value: 2,
        label: '系统选项',
        children: [{
            value: 1,
            label: '5000/6000 Microbric 系统',
        }, {
            value: 2,
            label: '8000 Microbric 系统',
        }, {
            value: 3,
            label: '8000 TDI 系统',
        }, {
            value: 4,
            label: 'Gamma射线传感器',
        }, {
            value: 5,
            label: '激光传感器',
        }, {
            value: 6,
            label: 'Optimike',
        }, {
            value: 7,
            label: 'Pronet',
        }, {
            value: 8,
            label: 'PronetTDI',
        }, {
            value: 9,
            label: 'X射线传感器',
        }]
    },
    {
        value: 3,
        label: '红外传感器系列产品',
        children: [{
            value: 1,
            label: 'Infralab 710',
        }, {
            value: 2,
            label: 'Infralab e-series',
        }, {
            value: 3,
            label: '710系列红外反向散射传感器',
            children: [{
                value: 1,
                label: 'MM710'

            }, {
                value: 2,
                label: 'TM710'

            }, {
                value: 3,
                label: 'FL710'

            }, {
                value: 4,
                label: 'CM710'

            }, {
                value: 5,
                label: 'SR710'

            }, {
                value: 6,
                label: 'IG710'

            }]
        }, {
            value: 4,
            label: '710系列红外穿透型传感器',
            children: [{
                value: 1,
                label: 'FG710'

            }, {
                value: 2,
                label: 'TFG710'

            }, {
                value: 3,
                label: 'FS710'

            }]
        }, {
            value: 5,
            label: '710e和710s系列红外反向散射传感器',
            children: [{
                value: 1,
                label: 'MM710e'

            }, {
                value: 2,
                label: 'TM710e'

            }, {
                value: 3,
                label: 'IG710e/s'

            }, {
                value: 4,
                label: 'SR710s'

            }, {
                value: 5,
                label: 'CM710e'

            }, {
                value: 6,
                label: 'FL710e'

            }]
        }, {
            value: 6,
            label: '710e和710s系列红外穿透性传感器',
            children: [{
                value: 1,
                label: 'FG710S'

            }, {
                value: 2,
                label: 'TFG710S'

            }, {
                value: 3,
                label: 'FilmPro'

            }]
        }]
    },
    {
        value: 4,
        label: 'Beta LaserMike和Zmike 系列产品',
        children: [{
            value: 1,
            label: 'Benchmike',
        }, {
            value: 2,
            label: 'Beta传感器',
        }, {
            value: 3,
            label: 'BLM软件工具',
        }, {
            value: 4,
            label: '电容仪',
        }, {
            value: 5,
            label: '偏心仪',
        }, {
            value: 6,
            label: '控制系统',
            children: [{
                value: 1,
                label: 'DP500',
            }]
        }, {
            value: 7,
            label: '直径仪',
            children: [{
                value: 1,
                label: '缺陷监测仪'

            }, {
                value: 2,
                label: 'FLM101'

            }, {
                value: 3,
                label: 'I/O 模块'

            }, {
                value: 4,
                label: 'ICON'

            }, {
                value: 5,
                label: 'Laserspeed MID系列'

            }, {
                value: 6,
                label: 'LS4000 系列'

            }, {
                value: 7,
                label: 'LS8000 系列'

            }, {
                value: 8,
                label: 'LS9000 系列'

            }, {
                value: 9,
                label: 'Preheater预加热'

            }, {
                value: 10,
                label: 'Sparktester火花测试机'

            }, {
                value: 11,
                label: '超声波测试仪'

            }, {
                value: 12,
                label: 'DCM'

            }]
        }]
    }
];


const productTypeItemsI=[];
const productTypeItemsII=[];
const productTypeItemsIII=[];



class RepairForm extends Component {

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
                <Page className="input" >
                    <Form>
                        <div className={"RepairBorder"}>
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
                        </div>
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
                        <div className={"RepairBorder"}>
                            <FormCell>
                                <CellHeader>
                                    <Label>真实姓名:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input name='name'
                                        value={this.state.name}
                                        onChange={this.handleChange.bind(this)} type="text" placeholder="输入姓名" />
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell>
                                <CellHeader>
                                    <Label>手机号码:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input name='mobile'
                                        value={this.state.mobile}
                                        onChange={this.handleChange.bind(this)} type="text" placeholder="输入手机号码" />
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell>
                                <CellHeader>
                                    <Label>电子邮箱:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input name='email'
                                           value={this.state.email}
                                           onChange={this.handleChange.bind(this)} type="number" type="text" placeholder="输入邮箱" />
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"}>
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
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell>
                                <CellHeader>
                                    <Label>产品序列号:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input name='email'
                                           value={this.state.email}
                                           onChange={this.handleChange.bind(this)} type="number" type="text" placeholder="输入邮箱" />
                                </CellBody>
                            </FormCell>
                        </div>

                        <div className={"RepairBorder"}>
                            <FormCell select selectPos="after">
                                <CellHeader>
                                    <Label>报修设备类型I:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Select onChange={this.handleChangeProductTypeI.bind(this)} data={productTypeItems} />
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell select selectPos="after">
                                <CellHeader>
                                    <Label>报修设备类型II:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Select onChange={this.handleChangeProductTypeII.bind(this)} data={this.state.productTypeItemsArrII} />
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell select selectPos="after">
                                <CellHeader>
                                    <Label>报修设备类型III:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Select onChange={this.handleChangeProductTypeIII.bind(this)} data={this.state.productTypeItemsArrIII} />
                                </CellBody>
                            </FormCell>
                        </div>

                        <div className={"RepairBorder"}>
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
                        </div>
                        <div className={"RepairBorder"}>
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
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell className={"weui-label-align-top"}>
                                <CellHeader>
                                    <Label>故障细节:</Label>
                                </CellHeader>
                                <CellBody>
                                <TextArea name='troubleDetail'
                                          value={this.state.troubleDetail}
                                          onChange={this.handleChange.bind(this)} placeholder="输入故障细节" rows="3"></TextArea>
                                </CellBody>
                            </FormCell>
                        </div>
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

export default withRouter(RepairForm);