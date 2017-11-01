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
    Toast
} from '../../packages';
import Page from '../components/page';
import './orderdetailsupdate.css'
import $ from 'jquery';
import Util from '../utils/Util';

class OrderDetailsUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orderId: '',
            engineerName: '',
            engineerMobile: '',
            homeServiceTime: 0,
            repairTime:0,
            notes: '',
            fixCompleted: 'false',
            smsUser: 'false',
            fixCompleteData: [{
                label: '是',
                value: 'true'
            }, {
                label: '否',
                value: 'false'
            }],
            smsUserData: [{
                label: '是',
                value: 'true'
            }, {
                label: '否',
                value: 'false'
            }],
            dialogTitle: '',
            validElement: '',
            showWarningDialog: false,
            showLoading: false,
            warningStyle: {
                buttons: [
                    {
                        label: '确定',
                        onClick: this.hideWarningDialog
                    }
                ]
            },
            selectedOpention: '',
          engineerData: [
            {
              value: "",
              label: "请选择工程师",
              mobile: "",
            }
            ,
            {
            value: "刘伟",
            label: "刘伟",
            mobile: "13917092518",
          },
            {
                value: "沈军港",
                label: "沈军港",
              mobile: "13701671977"
            },
            {
              value: "朱国杰",
              label: "朱国杰",
              mobile: "13701671977"
            },
            {
              value: "季耀安",
              label: "季耀安",
              mobile: "13916606238"
            },
            {
              value: "李峰",
              label: "李峰",
              mobile: "15921668171"
            },{
              value: "徐希金",
              label: "徐希金",
              mobile: "15102193435"
            },
            {
              value: "杨文才",
              label: "杨文才",
              mobile: "13810436262"
            },
            {
              value: "曹守国",
              label: "曹守国",
              mobile: "13810580743"
            },
            {
              value: "钟志强",
              label: "钟志强",
              mobile: "13602732766"
            },
            {
              value: "曲成强",
              label: "曲成强",
              mobile: "13925061346"
            },
            {
              value: "杨文",
              label: "杨文",
              mobile: "13922309809"
            },
            {
              value: "韩任",
              label: "韩任",
              mobile: "13888358828"
            },
            {
              value: "何涛",
              label: "何涛",
              mobile: "13708451143"
            },

          ],
          engineerOpention:[
            {
                value: "",
                label: "请选择订单变更原因"
             }, 
            {
                value: "1.缺少或等配件",
                label: "1.缺少或等配件"
             },{
                value: "2.还没有轮到修",
                label: "2.还没有轮到修"
              }, {
                value: "3.老型号仪器，很少维修，缺少配件和维修能力",
                label: "3.老型号仪器，很少维修，缺少配件和维修能力"
              },{
                  value: "4.其他",
                  label: "4.其他"
              },
          ],
          isIos: false,

        };
        var u = navigator.userAgent,
        app = navigator.appVersion;
    //var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    this.state.isIos = isIOS;

    };
    componentWillMount() {
        let itemId = this.props.match.params.id;
        if (itemId !== '') {
            this.setState({
                orderId: itemId
            });
        }
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
                let engineers = orderdetails.OrderLog.Engineers;
                let lastEngineerName = "";
                let lastEngineerMobile = "";
                if (engineers){
                    let lastEngineer = engineers[engineers.length - 1];
                    lastEngineerName = lastEngineer['Name'];
                    lastEngineerMobile = lastEngineer['Mobile'];
                }
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

                    engineerName: lastEngineerName,
                    engineerMobile: lastEngineerMobile,
                    //engineerOpention: orderdetails.Opention,
                    // homeServiceTime: Util.timeStamp2TString(orderdetails.OrderLog.Engineer.Homeservicetime),
                    // repairTime: Util.timeStamp2TString(orderdetails.OrderLog.Engineer.RepairTime),
                    // fixCompleted: orderdetails.OrderLog.Engineer.Complete,
                    // smsUser: orderdetails.OrderLog.Engineer.Smsuser,
                    // notes: orderdetails.OrderLog.Engineer.Notes,
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
    hideWarningDialog = () => {
        this.setState({
            showWarningDialog: false
        }, ()=> {
          if (this.state.dialogTitle ==='成功') {
            let path = '/repairmanagement';
            this.props.history.push(path);
          }

        });
    };
    handleChange(e) {
        let prop = e.target.name;
        console.log(e.target.name)
        this.setState({
            [prop]: e.target.value
        });
        console.log(this.state)
    };


    handleEngineerNameChange = (e) => {
        let name = e.target.value;
        this.setState({
          engineerName: name
        });
        for (let i=0; i< this.state.engineerData.length; i++){
            let currentEngineerData = this.state.engineerData[i];
            if (name == currentEngineerData['value']){
                this.setState({
                  engineerMobile: currentEngineerData['mobile']
                });
            }
        }
    };
    handleEngineerOpentionChange = (e) => {
        let name = e.target.value;
        this.setState({
            selectedOpention : name
        });
    };
    validForm = () => {

        if (this.state.engineerName === '') {
            this.setState({
                dialogTitle: '警告',
                validElement: '请填写工程师姓名',
                showWarningDialog: true
            });
            return;
        }

        this.updateForm();
    }
    updateForm = () => {

        this.setState({
            showLoading: true
        });
        console.log('添加保修单');
        var payload = {
            orderId: this.state.orderId,
            engineerName: this.state.engineerName,
            engineerMobile: this.state.engineerMobile,
            engineerOpention: this.state.selectedOpention,
            homeServiceTime: String(this.state.homeServiceTime),
            // repairTime: this.state.repairTime,
            notes: this.state.notes,
            fixcompleted: String(this.state.fixCompleted),
            smsUser: String(this.state.smsUser),
            selectedOption: this.state.selectedOpention
        };

        let requestUrl = process.env.REACT_APP_HTTP_PREFIX + "/repairs/update";

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
                    showLoading: false
                }, () => {
                    self.setState({
                        showWarningDialog: true,
                        dialogTitle: '成功',
                        validElement: '状态更新成功'
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

    render() {
        return (

            <div className={'orderbackground'}>
                <Page className="input">
                    <Cell className={'titlebar'}>
                    {
                        this.state.isIos? '' :
                      <CellHeader onClick={() => { window.history.go(-1) }} style={{ width: '20%', height: '65px', marginTop: '25px' }} >
                      <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                      <div className={'titlebarback'}>
                          返回
               </div>
                  </CellHeader>
                    }
                        

                        <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                            处理中
                  </CellBody>
                  {
                      this.state.isIos? '' :
                      <CellFooter style={{ width: '20%' }} >
                      <img style={{ width: '30px',display:'none' }} src='/images/menu12@2x.png' />
                  </CellFooter>
                  }
                        
                    </Cell>

                    <Form className={'formupdate'}>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>报修单号</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'grey' }}>
                                {this.state.orderId}
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>工程师姓名</Label>
                            </CellHeader>
                            <CellBody>

                                <Select value={this.state.engineerName} onChange={this.handleEngineerNameChange.bind(this)} data={this.state.engineerData} />

                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>工程师电话</Label>
                            </CellHeader>
                            <CellBody>
                                <Input name='engineerMobile'
                                    value={this.state.engineerMobile}
                                    onChange={this.handleChange.bind(this)} type="text" placeholder="工程师电话" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>上门/维修时间</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="date" name='homeServiceTime'
                                    value={this.state.homeServiceTime}
                                    onChange={this.handleChange.bind(this)} placeholder="上门时间" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>订单变更原因</Label>
                            </CellHeader>
                            <CellBody>

                                <Select value={this.state.selectedOpention} onChange={this.handleEngineerOpentionChange.bind(this)} data={this.state.engineerOpention} />

                            </CellBody>
                        </FormCell>
                        {/*<FormCell>*/}
                            {/*<CellHeader>*/}
                                {/*<Label style={{ color: '#000' }}>维修时间</Label>*/}
                            {/*</CellHeader>*/}
                            {/*<CellBody>*/}
                                {/*<Input type="date" name='repairTime'*/}
                                    {/*value={this.state.repairTime}*/}
                                    {/*onChange={this.handleChange.bind(this)} placeholder="维修时间" />*/}
                            {/*</CellBody>*/}
                        {/*</FormCell>*/}

                    </Form>
                    <Form className={'formupdate'}>

                        <FormCell className={"weui-label-align-top"}>
                            <CellHeader>
                                <Label style={{ color: 'lightgrey' }}>备注</Label>
                            </CellHeader>
                            <CellBody>
                                <TextArea name='notes'
                                    value={this.state.notes}
                                    onChange={this.handleChange.bind(this)} placeholder="" rows="3"></TextArea>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <Form className={'formupdate'}>

                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>维修完成</Label>
                            </CellHeader>
                            <CellBody>
                                <Select value={this.state.fixCompleted} name={'fixCompleted'} onChange={this.handleChange.bind(this)} data={this.state.fixCompleteData} />
                            </CellBody>
                        </FormCell>

                    </Form>
                    {/* <CellsTips>Form Footer Tips</CellsTips> */}
                    {/* <CellsTitle>故障细节</CellsTitle> */}
                    <Form className={'orderborder'}>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>是否发短信给用户</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'lightgray' }}>
                                <Select value={this.state.smsUser} name={'smsUser'} onChange={this.handleChange.bind(this)} data={this.state.smsUserData} />
                            </CellBody>
                        </FormCell>

                    </Form>

                    <ButtonArea>
                        <Button onClick={this.validForm}>
                            提交
                        </Button>
                    </ButtonArea>

                    <Dialog type="ios" title={this.state.dialogTitle} buttons={this.state.warningStyle.buttons} show={this.state.showWarningDialog}>
                        {this.state.validElement}
                    </Dialog>
                    <Toast icon="loading" show={this.state.showLoading}>上传中...</Toast>
                </Page>
            </div>
        );
    }
}
export default withRouter(OrderDetailsUpdate);
