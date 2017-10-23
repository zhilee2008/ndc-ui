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
            value: 'Rometer平直度仪',
            label: 'Rometer平直度仪',

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
            value: 'Laser 激光传感器',
            label: 'Laser 激光传感器',
        }, {
            value: 'Optimike',
            label: 'Optimike',
        }, {
            value: 'Pronet 系统',
            label: 'Pronet 系统',
        }, {
            value: 'PronetTDI 系统',
            label: 'PronetTDI 系统',
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
            value: 'Capacitance 电容仪',
            label: 'Capacitance 电容仪',
        }, {
            value: 'Concentricity 偏心仪',
            label: 'Concentricity 偏心仪',
        }, {
            value: '控制系统',
            label: '控制系统',
            children: [
                {
                    value: "In Control",
                    label: 'In Control',
                }, {
                    value: "900/1000/2000 过程控制",
                    label: "900/1000/2000 过程控制",
                }, {
                    value: "DP5000",
                    label: "DP5000",
                }, {
                    value: "DP3000",
                    label: "DP3000",
                }, {
                    value: "DP1000",
                    label: "DP1000",
                }, {
                    value: "182/192 过程控制",
                    label: "182/192 过程控制",
                }
            ]
        }, {
            value: 'DP500 显示器',
            label: 'DP500 显示器',
        }, {
            value: '直径仪',
            label: '直径仪',
            children: [
                {
                    value: "Accuscan 5000",
                    label: "Accuscan 5000",
                }, {
                    value: "Accuscan 1000",
                    label: "Accuscan 1000",
                }, {
                    value: "Accuscan 3000",
                    label: "Accuscan 3000",
                }, {
                    value: "Accuscan 4000",
                    label: "Accuscan 4000",
                }, {
                    value: "Accuscan 6000",
                    label: "Accuscan 6000",
                }
            ]
        }, {
            value: '缺陷监测仪',
            label: '缺陷监测仪'

        }, {
            value: 'FLM101 外径测试仪',
            label: 'FLM101 外径测试仪'

        }, {
            value: 'I/O 模块',
            label: 'I/O 模块'

        }, {
            value: 'ICON 系列',
            label: 'ICON 系列'

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
            value: 'Ultrasonics 超声波测试仪',
            label: 'Ultrasonics 超声波测试仪'

        }, {
            value: 'DCM 系列产品',
            label: 'DCM 系列产品'

        }]
    }
];


const firstDeviceElements = [];
const secondDeviceElements = [];
const thirdDeviceElements = [];
const recordTimer = null;
// const radiodiv =<div><div id={'recordbutton'} onClick={this.playRadio.bind(this)} className={'savedradio'}>录音{radioCount}</div><img id={'deleteradiobutton'} className={'deleteradio'} src={'/images/delete.png'} /></div>;
const radioCount = 1;

class RepairForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // admin: this.props.match.params.admin,
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
            firstDeviceData: [],
            secondDeviceData: [],
            thirdDeviceData: [],
            displayDeviceTypeII: { display: "none" },
            displayDeviceTypeIII: { display: "none" },
            radionumber: 1,
            audioId: '',
            audioMediaId: '',
            imageId: '',
            imageIdArr: [],
            imageMediaId: '',
            imageMediaIdArr: [],
            imageUrlArr: [],
            imagecount: 0,
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
            radioText: '',
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

    componentWillMount() {
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
                const url = 'http://xn.geekx.cn/repairsubmit';
                const jsApiObject = sign(jsapiticket, url);
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: appId, // 必填，公众号的唯一标识
                    jsApiList: ['startRecord',
                        'stopRecord',
                        'onVoiceRecordEnd',
                        'playVoice',
                        'previewImage',
                        'chooseImage',
                        'uploadImage',
                        'uploadVoice'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    jsapi_ticket: jsApiObject.jsapi_ticket,
                    nonceStr: jsApiObject.nonceStr,
                    timestamp: jsApiObject.timestamp,
                    url: jsApiObject.url,
                    signature: jsApiObject.signature
                });
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

    componentDidMount() {
        const self = this;
        wx.ready(function () {

            let START, END;

            $('#talk_btn').on('touchstart', function (event) {
                event.preventDefault();
                START = new Date().getTime();
                recordTimer = setTimeout(function () {
                    wx.startRecord({
                        success: function () {
                            localStorage.rainAllowRecord = 'true';
                            self.setState({
                                showWarn: true,
                            })
                        },
                        cancel: function () {
                            alert('用户拒绝授权录音');
                        }
                    });
                }, 300);
            });
            $('#talk_btn').on('touchend', function (event) {
                event.preventDefault();
                END = new Date().getTime();
                if ((END - START) < 300) {
                    END = 0;
                    START = 0;
                    //小于300ms，不录音
                    clearTimeout(recordTimer);
                } else {
                    // alert('s1');
                    wx.stopRecord({
                        success: function (res) {
                            // alert('s2');
                            var localId = res.localId;
                            self.setState({
                                audioId: localId,
                                showWarn: false,
                                radioText: localId
                            })
                            self.addRadioDev(localId);
                        },
                        fail: function (res) {
                            alert('录音功能暂不可用:' + JSON.stringify(res));
                        }
                    });
                }
            });

            $('#addimagebutton').on('click', function (event) {
                // alert('image');
                wx.chooseImage({
                    count: 9,
                    sourceType: ['album', 'camera'],
                    success: function (res) {
                        // alert('imageuploadsuccessful');
                        self.setState({
                            imageIdArr: res.localIds,
                        })
                        var u = navigator.userAgent, app = navigator.appVersion;
                        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
                        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                        if (isAndroid) {
                            if (self.state.imagecount + res.localIds.length > 9) {
                                alert('每次最多允许上传9张图片');
                            } else {
                                for (let id of res.localIds) {
                                    self.addImageDev(id);
                                    self.state.imageUrlArr.push(id);
                                }
                            }
                        }
                        if (isIOS) {
                            // alert('arr' + res);
                            if (self.state.imagecount + res.localIds.length > 9) {
                                alert('每次最多允许上传9张图片');
                            } else {
                                for (let id of res.localIds) {
                                    wx.getLocalImgData({
                                        localId: id, // 图片的localID
                                        success: function (res) {
                                            var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                                            self.addImageDev(localData);
                                            self.state.imageUrlArr.push(localData);
                                        }
                                    });
                                }
                            }
                        }

                        // self.setState({
                        //     imagecount: imagecount + res.localIds.length,
                        // })
                    }
                });
            });

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
        const self = this;
        wx.ready(function () {
            wx.uploadVoice({
                localId: self.state.audioId, // 需要上传的音频的本地ID，由stopRecord接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    var serverId = res.serverId; // 返回音频的服务器端ID
                    // alert(JSON.stringify(res));
                    self.setState({
                        audioMediaId: serverId
                    }, () => {
                        let count = 0;
                        for (let id of self.state.imageIdArr) {
                            wx.uploadImage({
                                localId: id,
                                success: function (res) {
                                    var serverId = res.serverId; // 返回音频的服务器端ID
                                    self.state.imageMediaIdArr.push(serverId);
                                    count++;
                                    if (count === self.state.imageIdArr.length) {
                                        self.sendRequest();
                                    }
                                },
                                fail: function (res) {
                                    count++;
                                    if (count === self.state.imageIdArr.length) {
                                        self.sendRequest();
                                    }
                                }
                            });
                        }
                        // alert('count:'+count+'++self.state.imageIdArr.length:'+self.state.imageIdArr.length);
                        if (count === self.state.imageIdArr.length) {
                            self.sendRequest();
                        }
                    });
                },
                fail: function (res) {
                    let count = 0;
                    for (let id of self.state.imageIdArr) {
                        wx.uploadImage({
                            localId: id,
                            success: function (res) {
                                var serverId = res.serverId; // 返回音频的服务器端ID
                                self.state.imageMediaIdArr.push(serverId);
                                count++;
                                if (count === self.state.imageIdArr.length) {
                                    self.sendRequest();
                                }
                            },
                            fail: function (res) {
                                count++;
                                if (count === self.state.imageIdArr.length) {
                                    self.sendRequest();
                                }
                            }
                        });
                    }

                }
            });

        });
    };

    sendRequest() {
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
            audioMediaId: this.state.audioMediaId,
            imageMediaId: this.state.imageMediaIdArr.join(','),

        };

        let requestUrl = process.env.REACT_APP_HTTP_PREFIX + "/repairs/add";

        var request = $.ajax({
            url: requestUrl,
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(payload),
        });
        const self = this;
        request.done(function (msg) {

            if (msg) {
                // alert('orderid:' + msg);
                self.setState({
                    orderId: msg,
                    showLoading: false
                }, () => {
                    self.setState({
                        showWarn: false,
                        showIOS1: true
                    });
                });
                // alert('showLoading:' + this.state.showLoading);
            }

        });

        request.fail(function (jqXHR, textStatus) {
            console.log(jqXHR);
            console.log(textStatus);
            self.setState({

            });
            console.log("Request failed: " + textStatus)
        });
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
    hideWarningDialog = () => {
        this.setState({
            showWarningDialog: false
        });
    };
    hideDialog() {
        this.setState({
            showIOS1: false,
        });
        // if (this.state.admin === 'admin') {
        //     this.props.history.push('/menu/admin');
        // } else {
        //     this.props.history.push('/menu/common');
        // }
        window.history.go(-1);
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
        let secondDeviceType = '';
        if (children.length > 0) {
            secondDeviceType = children[0].value;
        }
        this.setState({
            firstDeviceType: deviceType,
            secondDeviceData: children,
            secondDeviceType: secondDeviceType
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
        let thirdDeviceType = '';
        if (children.length > 0) {
            thirdDeviceType = children[0].value;
        }
        this.setState({
            secondDeviceType: deviceType,
            thirdDeviceData: children,
            thirdDeviceType: thirdDeviceType
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
    startRadio(e) {
        wx.startRecord();
        this.setState({
            showWarn: true,
        })

    }


    addRadioDev(localId) {
        // alert('adddiv');
        $('#buttoncontainer').empty();
        const radiodiv = "<div style='float:left;width:100%'><div id='" + localId + "' class='savedradio'>点击播放录音</div><img class='deleteradio' src='/images/delete.png' /></div>";
        $('#buttoncontainer').append(radiodiv);
        $('.deleteradio').click(function (e) {
            e.target.parentNode.remove();
        });
        $('.savedradio').click(function (e) {
            wx.playVoice({
                localId: e.target.id
            });
        });
    }

    addImageDev(src) {
        // alert(src);
        // $('#imagecontainer').empty();
        // const imagediv = "<div style='float:left'><div id='" + localId + "' class='savedimage'>点击查看图片</div><img class='deleteimage' src='/images/delete.png' /></div>";
        const self = this;
        const imagediv = "<div style='float:left'><img class='savedimage'  src='" + src + "' /><img class='deleteimage' src='/images/delete.png' /></div>";
        $('#imagecontainer').append(imagediv);
        $('.deleteimage').click(function (e) {
            e.target.parentNode.remove();
            self.setState({
                imageUrlArr: self.state.imageUrlArr.remove(e.target.src)
            });
        });
        $('.savedimage').click(function (e) {
            wx.previewImage({
                current: src,
                urls: this.state.imageUrlArr
            });
        });
    }

    addVideo(e) {
        alert('添加视频功能开发中');
    }

    render() {

        return (
            <div>
                <Cell className={'titlebar'}>
                    <CellHeader onClick={() => { window.history.go(-1) }} style={{ width: '20%', height: '65px', marginTop: '25px' }} >
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
                        <Toptips type="warn" show={this.state.showWarn}>录音中...</Toptips>
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
                            <FormCell style={{ paddingBottom: '0px' }} className={"weui-label-align-top"}>
                                <CellHeader>
                                    <Label>故障细节</Label>
                                    <Button id="talk_btn" className={'radioimage'} >&nbsp;</Button>
                                </CellHeader>
                                <CellBody>
                                    <TextArea name='bugDetail'
                                        value={this.state.bugDetail}
                                        onChange={this.handleChange.bind(this)} placeholder="输入故障细节" rows="3"></TextArea>
                                </CellBody>
                            </FormCell>
                            <div style={{ height: '30px' }} id="buttoncontainer"></div>
                        </div>
                        <div className={"RepairBorder"}>
                            <FormCell className={"weui-label-align-top"}>
                                <CellHeader>
                                    <Label>附件文档</Label>
                                    <img id="addimagebutton" src='/images/tupian@2x.png' className={"imagebutton"} />
                                </CellHeader>
                                <CellBody>
                                    <TextArea name='files' placeholder="上传相关文件与视频" rows="3"></TextArea>
                                    {/* <img onClick={this.addVideo.bind(this)} src='/images/shipin@2x.png' onClick={this.addVideo.bind(this)} className={"videoimage"} /> */}
                                </CellBody>

                            </FormCell>
                            <div className={'savedimagecontainer'} style={{ paddingBottom: '5px' }} id="imagecontainer"></div>
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
