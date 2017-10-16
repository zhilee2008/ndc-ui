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
    Toast
} from '../../packages';
import Page from '../components/page';
import wx from 'weixin-js-sdk'
import './RepairForm.css'

import $ from 'jquery';
import sign from '../utils/sign'


const firstDeviceTypetems = [
    {
        value: '',
        label: '选择产品',
    },
    {
        value: '冶金工业系列产品',
        label: '冶金工业系列产品(Accuray, IRM)',
        children: [{
            value: 'FVXR-1(43kv)',
            label: 'FVXR-1(43kv)',

        }, {
            value: 'Rometer',
            label: 'Rometer',

        }, {
            value: 'T100',
            label: 'T100',

        }, {
            value: 'THAM-2（Am-241）',
            label: 'THAM-2（Am-241）',

        }, {
            value: 'TLXR-2（less than 10kv）',
            label: 'TLXR-2（less than 10kv）',

        }, {
            value: 'TM-5（Sr-90）',
            label: 'TM-5（Sr-90）',

        }, {
            value: 'TM-6（Sr-90）',
            label: 'TM-6（Sr-90）',

        }, {
            value: 'TVXR-1（up to 50 kv）',
            label: 'TVXR-1（up to 50 kv）',

        }, {
            value: 'TVXR-2（up to 130KV）',
            label: 'TVXR-2（up to 130KV）',

        }, {
            value: 'UNI 500（QNX4）',
            label: 'UNI 500（QNX4）',

        }, {
            value: 'UNI 600（QNX6）',
            label: 'UNI 600（QNX6）',

        }, {
            value: 'UNI 700 TDI',
            label: 'UNI 700 TDI',

        }, {
            value: 'W10',
            label: 'W10',

        }, {
            value: 'W100',
            label: 'W100',

        }, {
            value: 'W200',
            label: 'W200',

        }],
    },
    {
        value: '系统选项',
        label: '系统选项',
        children: [{
            value: '5000/6000 Microbric 系统',
            label: '5000/6000 Microbric 系统',
        }, {
            value: '8000 Microbric 系统',
            label: '8000 Microbric 系统',
        }, {
            value: '8000 TDI 系统',
            label: '8000 TDI 系统',
        }, {
            value: 'Gamma射线传感器',
            label: 'Gamma射线传感器',
        }, {
            value: '激光传感器',
            label: '激光传感器',
        }, {
            value: 'Optimike',
            label: 'Optimike',
        }, {
            value: 'Pronet',
            label: 'Pronet',
        }, {
            value: 'PronetTDI',
            label: 'PronetTDI',
        }, {
            value: 'X射线传感器',
            label: 'X射线传感器',
        }]
    },
    {
        value: '红外传感器系列产品',
        label: '红外传感器系列产品',
        children: [{
            value: 'Infralab 710',
            label: 'Infralab 710',
        }, {
            value: 'Infralab e-series',
            label: 'Infralab e-series',
        },
        {
            value: 'MX8000',
            label: 'MX8000'
        },
        {
            value: '710系列红外反向散射传感器',
            label: '710系列红外反向散射传感器',
            children: [{
                value: 'MM710',
                label: 'MM710'

            }, {
                value: 'TM710',
                label: 'TM710'

            }, {
                value: 'FL710',
                label: 'FL710'

            }, {
                value: 'CM710',
                label: 'CM710'

            }, {
                value: 'SR710',
                label: 'SR710'

            }, {
                value: 'IG710',
                label: 'IG710'

            }]
        }, {
            value: '710系列红外穿透型传感器',
            label: '710系列红外穿透型传感器',
            children: [{
                value: 'FG710',
                label: 'FG710'

            }, {
                value: 'TFG710',
                label: 'TFG710'

            }, {
                value: 'FS710',
                label: 'FS710'

            }]
        }, {
            value: '710e和710s系列红外反向散射传感器',
            label: '710e和710s系列红外反向散射传感器',
            children: [{
                value: 'MM710e',
                label: 'MM710e'

            }, {
                value: 'TM710e',
                label: 'TM710e'

            }, {
                value: 'IG710e/s',
                label: 'IG710e/s'

            }, {
                value: 'SR710s',
                label: 'SR710s'

            }, {
                value: 'CM710e',
                label: 'CM710e'

            }, {
                value: 'FL710e',
                label: 'FL710e'

            }]
        }, {
            value: '710e和710s系列红外穿透性传感器',
            label: '710e和710s系列红外穿透性传感器',
            children: [{
                value: 'FG710S',
                label: 'FG710S'

            }, {
                value: 'TFG710S',
                label: 'TFG710S'

            }, {
                value: 'FilmPro',
                label: 'FilmPro'

            }]
        }]
    },
    {
        value: 'Beta LaserMike和Zmike 系列产品',
        label: 'Beta LaserMike和Zmike 系列产品',
        children: [{
            value: 'Benchmike',
            label: 'Benchmike',
        }, {
            value: 'Beta传感器',
            label: 'Beta传感器',
        }, {
            value: 'BLM软件工具',
            label: 'BLM软件工具',
        }, {
            value: '电容仪',
            label: '电容仪',
        }, {
            value: '偏心仪',
            label: '偏心仪',
        }, {
            value: '控制系统',
            label: '控制系统',
            children: [{
                value: 'DP500',
                label: 'DP500',
            }]
        }, {
            value: '直径仪',
            label: '直径仪',
            children: [{
                value: '缺陷监测仪',
                label: '缺陷监测仪'

            }, {
                value: 'FLM101',
                label: 'FLM101'

            }, {
                value: 'I/O 模块',
                label: 'I/O 模块'

            }, {
                value: 'ICON',
                label: 'ICON'

            }, {
                value: 'Laserspeed MID系列',
                label: 'Laserspeed MID系列'

            }, {
                value: 'LS4000 系列',
                label: 'LS4000 系列'

            }, {
                value: 'LS8000 系列',
                label: 'LS8000 系列'

            }, {
                value: 'LS9000 系列',
                label: 'LS9000 系列'

            }, {
                value: 'Preheater预加热',
                label: 'Preheater预加热'

            }, {
                value: 'Sparktester火花测试机',
                label: 'Sparktester火花测试机'

            }, {
                value: '超声波测试仪',
                label: '超声波测试仪'

            }, {
                value: 'DCM',
                label: 'DCM'

            }]
        }]
    }
];


const firstDeviceElements = [];
const secondDeviceElements = [];
const thirdDeviceElements = [];



class RepairForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '我要报修',
            company: '',
            name: '',
            mobile: '',
            email: '',
            industry: '',
            serial: '',
            firstDeviceType: '',
            secondDeviceType: '',
            thirdDeviceType: '',
            billAddress: '',
            companyAddress: '',
            bugDetail: '',
            orderId: '',
            showLoading: false,
            showWarningDialog: false,
            validElement: '',
            localId: '',
            firstDeviceData: [],
            secondDeviceData: [],
            thirdDeviceData: [],
            displayDeviceTypeII: { display: "none" },
            displayDeviceTypeIII: { display: "none" },
            warningStyle: {
                buttons: [
                    {
                        label: '确定',
                        onClick: this.hideWarningDialog
                    }
                ]
            },
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

    };

    componentDidMount() {

        const url = 'http://xn.geekx.cn';
        const jsApiObject = sign('HoagFKDcsGMVCIY2vOjf9gX73yWPTGVXRHKIZHi4E1IoWHbeJ8zz_843FzDl3CfG92Iepakr5Qc_V39F5owV_g', url);
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx457ecf3c803c3774', // 必填，公众号的唯一标识
            // timestamp: 1415171822, // 必填，生成签名的时间戳
            // nonceStr: '82zklqj7ycoywrk', // 必填，生成签名的随机串
            // signature: '',// 必填，签名，见附录1
            jsApiList: ['startRecord',
                'stopRecord',
                'onVoiceRecordEnd',
                'playVoice'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            jsapi_ticket: jsApiObject.jsapi_ticket,
            nonceStr: jsApiObject.nonceStr,
            timestamp: jsApiObject.timestamp,
            url: jsApiObject.url,
            signature: jsApiObject.signature,
        });
    }

    validRepairForm = () => {
        if (this.state.company === '') {
            this.setState({
                validElement: '请填写公司名称',
                showWarningDialog: true
            });
            return;
        }
        if (this.state.name === '') {
            this.setState({
                validElement: '请填写姓名',
                showWarningDialog: true
            });
            return;
        }
        if (this.state.mobile === '') {
            this.setState({
                validElement: '请填写手机号',
                showWarningDialog: true
            });
            return;
        }
        if (this.state.email === '') {
            this.setState({
                validElement: '请填写邮箱',
                showWarningDialog: true
            });
            return;
        }
        // if (this.state.industry === '') {
        //     this.setState({
        //         validElement: '请选择行业',
        //         showWarningDialog: true
        //     });
        //     return;
        // }
        if (this.state.serial === '') {
            this.setState({
                validElement: '请填写产品序列号',
                showWarningDialog: true
            });
            return;
        }
        if (this.state.firstDeviceType === '') {
            this.setState({
                validElement: '请选择设备类型',
                showWarningDialog: true
            });
            return;
        }
        if (this.state.companyAddress === '') {
            this.setState({
                validElement: '请填写公司详细地址',
                showWarningDialog: true
            });
            return;
        }
        this.addRepairForm();
    }
    addRepairForm = () => {

        this.setState({
            showLoading: true
        });
        console.log('添加保修单');
        var payload = {
            company: this.state.company,
            name: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email,
            serial: this.state.serial,
            firstDeviceType: this.state.firstDeviceType,
            secondDeviceType: this.state.secondDeviceType,
            thirdDeviceType: this.state.thirdDeviceType,
            billAddress: this.state.billAddress,
            companyAddress: this.state.companyAddress,
            bugDetail: this.state.bugDetail,


        };

        let requestUrl = process.env.REACT_APP_HTTP_PREFIX + "/repairs/add";

        var request = $.ajax({
            url: requestUrl,
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(payload),
        });

        var self = this;

        request.done(function (msg) {

            if (msg) {
                self.setState({
                    orderId: msg,
                    showLoading: false
                }, () => {
                    self.setState({
                        showWarn: false,
                        showIOS1: true
                    });
                });
            }

        });

        request.fail(function (jqXHR, textStatus) {
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
    hideWarningDialog = () => {
        this.setState({
            showWarningDialog: false
        });
    };
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
        let deviceType = e.target.value;
        let children = []
        for (var i = 0; i < firstDeviceTypetems.length; i++) {
            let child = firstDeviceTypetems[i];
            if (child['value'] === deviceType) {
                children = child['children'];
                break;
            }
        }
        this.setState({
            firstDeviceType: deviceType,
            secondDeviceData: children,
        });
        if (children !== undefined && children.length > 0) {
            this.setState({
                displayDeviceTypeII: { display: "block" }
            });
        } else {
            this.setState({
                displayDeviceTypeII: { display: "none" }
            });
        }
    }
    handleChangesecondDeviceType = (e) => {
        let deviceType = e.target.value;
        let children = []
        for (var i = 0; i < this.state.secondDeviceData.length; i++) {
            let child = this.state.secondDeviceData[i];
            if (child['value'] === deviceType) {
                children = child['children'];
                break;
            }
        }

        this.setState({
            secondDeviceType: deviceType,
            thirdDeviceData: children,

        });
        if (children !== undefined && children.length > 0) {
            this.setState({
                displayDeviceTypeIII: { display: "block" }
            });
        } else {
            this.setState({
                displayDeviceTypeIII: { display: "none" }
            });
        }
    }
    handleChangethirdDeviceType = (e) => {
        this.setState({
            thirdDeviceType: e.target.value
        });
    }

    handleSubmit(e) {
        if (this.state.industry === 0) {
            this.setState({
                showWarn: true,
            })
            this.state.warnTimer = setTimeout(() => {
                this.setState({ showWarn: false });
            }, 2000);
        } else {
            this.setState({
                showWarn: false,
                showIOS1: true
            })
        }

    }
    startRadio(e) {
        wx.startRecord();
        alert('s');
    }
    endRadio(e) {

        var self = this;
        wx.stopRecord({
            success: function (res) {
                alert('ppp');
                var localId = res.localId;
                self.setState({
                    localId: localId,
                })
                alert(localId)
            }
        });
    }
    playRadio(e) {
        wx.playVoice({
            localId: this.state.localId
        });

    }
    addImage(e) {
        wx.playVoice({
            localId: '' // 需要播放的音频的本地ID，由stopRecord接口获得
        });
    }
    addVideo(e) {

    }

    render() {

        return (
            <div>
                <Cell className={'titlebar'}>
                    <CellHeader onClick={e => this.props.history.push('/')} style={{ width: '20%', height: '65px', marginTop: '25px' }} >
                        <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                        <div className={'titlebarback'}>
                            返回
                        </div>
                    </CellHeader>

                    <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                        我要报修
                    </CellBody>
                    <CellFooter style={{ width: '20%', }} >
                        <img style={{ width: '30px', display: 'none' }} src='/images/menu12@2x.png' />
                    </CellFooter>
                </Cell>
                <div className={"repair-header-wrapper"}>
                    <div className={"repair-header-wrapper-image"}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={"/images/24H@2x.png"} className={"relative-header-hours"} />
                        </div>
                        <span className={"relative-title"}>请完整填写以下报修信息</span>
                    </div>
                </div>

                <Page className="input" >
                    <Form>
                        <div className={"RepairBorder"}>
                            <FormCell>
                                <CellHeader>
                                    <Label>公司名称 <span className={'must-input-label'}>*</span></Label>
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
                                    <Label>真实姓名 <span className={'must-input-label'}>*</span></Label>
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
                                    <Label>手机号码 <span className={'must-input-label'}>*</span></Label>
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
                                    <Label>电子邮箱 <span className={'must-input-label'}>*</span></Label>
                                </CellHeader>
                                <CellBody>
                                    <Input name='email'
                                        value={this.state.email}
                                        onChange={this.handleChange.bind(this)} type="text" placeholder="输入邮箱" />
                                </CellBody>
                            </FormCell>
                        </div>
                        {/* <div className={"RepairBorder"}>
                            <FormCell select selectPos="after" >
                                <CellHeader>
                                    <Label>行业 <span className={'must-input-label'}>*</span></Label>
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
                        </div> */}
                        <div className={"RepairBorder"}>
                            <FormCell>
                                <CellHeader>
                                    <Label>产品序列号 <span className={'must-input-label'}>*</span></Label>
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
                                    <Label>报修设备类型:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Select onChange={this.handleChangefirstDeviceType.bind(this)} data={firstDeviceTypetems} />
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"} style={this.state.displayDeviceTypeII}>
                            <FormCell select selectPos="after">
                                <CellHeader>
                                    <Label>设备类型II:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Select onChange={this.handleChangesecondDeviceType.bind(this)} data={this.state.secondDeviceData} />
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"} style={this.state.displayDeviceTypeIII}>
                            <FormCell select selectPos="after">
                                <CellHeader>
                                    <Label>设备类型III:</Label>
                                </CellHeader>
                                <CellBody>
                                    <Select onChange={this.handleChangethirdDeviceType.bind(this)} data={this.state.thirdDeviceData} />
                                </CellBody>
                            </FormCell>
                        </div>

                        <div className={"RepairBorder"}>
                            <FormCell>
                                <CellHeader>
                                    <Label>寄付帐单地址</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input name='billAddress'
                                        value={this.state.billAddress}
                                        onChange={this.handleChange.bind(this)} type="text" placeholder="如与公司详细地址相同可不填" />
                                </CellBody>
                            </FormCell>
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell>
                                <CellHeader>
                                    <Label>详细公司地址</Label>
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
                                    <Label>故障细节</Label>
                                    <Button onClick={this.startRadio.bind(this)} className={'radioimage'} />
                                    {/* <Button  onClick={this.endRadio.bind(this)} className={'radioimage'}/> */}

                                    {/* <Label><img src='/images/yuiyn@2x.png' ontouchend={this.endRadio.bind(this)} ontouchstart={this.startRadio.bind(this)} className={"radioimage"}/></Label> */}
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
                                    <Label>附件文档</Label>
                                    <img src='/images/tupian@2x.png' onClick={this.addImage.bind(this)} className={"imagebutton"} />
                                </CellHeader>
                                <CellBody>
                                    <TextArea name='files' placeholder="上传相关文件与视频" rows="3"></TextArea>

                                    <img src='/images/shipin@2x.png' onClick={this.addVideo.bind(this)} className={"videoimage"} /></CellBody>

                            </FormCell>
                        </div>
                    </Form>

                    <ButtonArea>
                        <Button onClick={this.validRepairForm}>
                            提交
                        </Button>
                    </ButtonArea>
                    <Dialog type="ios" title={this.state.style1.title} buttons={this.state.style1.buttons} show={this.state.showIOS1}>
                        <b>提示</b>
                        <p>您的保修单已生成,请截屏记录或保留短信</p>
                        报修单号:{this.state.orderId}
                    </Dialog>
                    <Dialog type="ios" title={'警告'} buttons={this.state.warningStyle.buttons} show={this.state.showWarningDialog}>
                        {this.state.validElement}
                    </Dialog>
                    <Toast icon="loading" show={this.state.showLoading}>上传中...</Toast>
                </Page>
            </div>
        );
    }
}

export default withRouter(RepairForm);