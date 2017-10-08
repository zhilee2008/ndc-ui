import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    Cell,
    CellFooter,
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

import $ from 'jquery';




const firstDeviceTypetems = [
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


const firstDeviceTypetemsI = [];
const firstDeviceTypetemsII = [];
const firstDeviceTypetemsIII = [];



class RepairForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '我要报修',
            company: '',
            name: '',
            mobile: '',
            email: '',
            industry: 0,
            serial: '',
            firstDeviceType: '',
            secondDeviceType: '',
            thirdDeviceType: '',
            billAddress: '',
            companyAddress: '',
            bugDetail: '',
            orderId: '',

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
            warnTimer: null,
            gallery: false,
            demoFiles: [
                {
                    url: '',
                }
            ],
        };

    }

  addRepairForm = () => {

    console.log('添加保修单');
    var payload = {
      company: this.state.company,
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email,
      industry: this.state.industry,
      serial: this.state.serial,
      firstDeviceType: this.state.firstDeviceType,
      secondDeviceType: this.state.secondDeviceType,
      thirdDeviceType: this.state.thirdDeviceType,
      billAddress: this.state.billAddress,
      companyAddress: this.state.companyAddress,
      bugDetail: this.state.bugDetail

    };

    let requestUrl = process.env.REACT_APP_HTTP_PREFIX + "/repairs/add";

    var request = $.ajax({
      url: requestUrl,
      method: "POST",
      contentType:"application/json; charset=utf-8",
      data: JSON.stringify(payload),
    });

    var self = this;

    request.done(function( msg ) {

      if(msg){
          self.setState({
            orderId: msg
          }, ()=>{
            self.setState({
              showWarn: false,
              showIOS1: true
            });
          });
      }

    });

    request.fail(function( jqXHR, textStatus ) {
        console.log(jqXHR);
        console.log(textStatus);
      self.setState({

      });
      console.log("Request failed: " + textStatus)
    });


  };

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

    handleChangefirstDeviceType = (e) => {
        this.setState({
            firstDeviceTypetemsI: e.target.value,
            firstDeviceTypetemsArrII: firstDeviceTypetems
        });
    }
    handleChangesecondDeviceType = (e) => {
        this.setState({
            firstDeviceTypetemsII: e.target.value,
            firstDeviceTypetemsArrIII: firstDeviceTypetems
        });
    }
    handleChangethirdDeviceType = (e) => {
        this.setState({
            firstDeviceTypetemsIII: e.target.value
        });
    }

    handleSubmit(e) {
        if (this.state.industry === 0) {
            this.setState({
                showWarn: true,
            })
            this.state.warnTimer = setTimeout(()=> {
                this.setState({showWarn: false});
            }, 2000);
        } else {
            this.setState({
                showWarn: false,
                showIOS1: true
            })
        }

    }

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
                        我要报修
                    </CellBody>
                    <CellFooter style={{ width: '20%' }} >
                        <img style={{ width: '30px' }} src='/images/menu12@2x.png' />
                    </CellFooter>
                </Cell>
                <div className={"repair-header-wrapper"}>
                    <img src={"/images/header-1.svg"} className={"repair-header"} />
                    <img src={"/images/24H@2x.png"} className={"relative-header"} />
                    <span className={"relative-title"}>请完整填写以下报修信息</span>
                </div>

                <Page className="input" >
                    <Form>
                        <div className={"RepairBorder"}>
                            <FormCell>
                                <CellHeader>
                                    <Label>公司名称:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input name='company'
                                        value={this.state.company}
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
                                        onChange={this.handleChange.bind(this)} type="text" placeholder="输入邮箱" />
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
                                    <Select defaultValue="" onChange={this.handleChangeIndustry} data={[
                                        {
                                            value: '',
                                            label: '请选择行业'
                                        },
                                        {
                                            value: '化工品和药品',
                                            label: '化工品和药品'
                                        },
                                        {
                                            value: '涂布复合',
                                            label: '涂布复合'
                                        },
                                        {
                                            value: '薄膜和片材挤出',
                                            label: '薄膜和片材挤出'
                                        },
                                        {
                                            value: '食品加工',
                                            label: '食品加工'
                                        },
                                        {
                                            value: '冶金工业',
                                            label: '冶金工业'
                                        },
                                        {
                                            value: '矿石和松散物',
                                            label: '矿石和松散物'
                                        },
                                        {
                                            value: '无纺布和纺织品',
                                            label: '无纺布和纺织品'
                                        },
                                        {
                                            value: '软管及管材',
                                            label: '软管及管材'
                                        },
                                        {
                                            value: '橡胶和乙烯基压延',
                                            label: '橡胶和乙烯基压延'
                                        },
                                        {
                                            value: '烟草加工',
                                            label: '烟草加工'
                                        },
                                        {
                                            value: '电线，电缆和光纤',
                                            label: '电线，电缆和光纤'
                                        },
                                        {
                                            value: '其他',
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
                                    <Input name='serial'
                                        value={this.state.serial}
                                        onChange={this.handleChange.bind(this)} type="text" placeholder="产品序列号" />
                                </CellBody>
                            </FormCell>
                        </div>

                        <div className={"RepairBorder"}>
                            <FormCell select selectPos="after">
                                <CellHeader>
                                    <Label>设备类型I:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Select onChange={this.handleChangefirstDeviceType.bind(this)} data={firstDeviceTypetems} />
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell select selectPos="after">
                                <CellHeader>
                                    <Label>设备类型II:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Select onChange={this.handleChangesecondDeviceType.bind(this)} data={this.state.firstDeviceTypetemsArrII} />
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell select selectPos="after">
                                <CellHeader>
                                    <Label>设备类型III:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Select onChange={this.handleChangethirdDeviceType.bind(this)} data={this.state.firstDeviceTypetemsArrIII} />
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
                                    <TextArea name='bugDetail'
                                        value={this.state.bugDetail}
                                        onChange={this.handleChange.bind(this)} placeholder="输入故障细节" rows="3"></TextArea>
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell className={"weui-label-align-top"}>
                                <CellHeader>
                                    <Label>附件文档:</Label>
                                </CellHeader>
                                <CellBody>
                                    <TextArea name='files'
                                        value={this.state.bugDetail}
                                        onChange={this.handleChange.bind(this)} placeholder="上传相关文件与视频" rows="3"></TextArea>
                                </CellBody>
                            </FormCell>
                        </div>
                    </Form>

                    <ButtonArea>
                        <Button onClick={this.addRepairForm}>
                            提交
                        </Button>
                    </ButtonArea>
                    <Dialog type="ios" title={this.state.style1.title} buttons={this.state.style1.buttons} show={this.state.showIOS1}>
                        <b>提示</b>
                        <p>您的保修单已生成,请截屏记录</p>
                        报修单号:{this.state.orderId}
                    </Dialog>

                </Page>
            </div>
        );
    }
}

export default withRouter(RepairForm);