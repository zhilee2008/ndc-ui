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

class OrderDetailsUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orderId: '',
            engineerName: '',
            engineerMobile: '',
            homeServiceTime: '',
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
        }

    };
  componentWillMount(){
    let itemId = this.props.match.params.id;
    if (itemId !== ''){
        this.setState({
          orderId: itemId
        });
    }
  }
  hideWarningDialog = () => {
    this.setState({
      showWarningDialog: false
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

  validForm = () => {

    if (this.state.engineerName === ''){
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
      homeServiceTime: this.state.homeServiceTime,
      notes: this.state.notes,
      fixcompleted: this.state.fixCompleted,
      smsUser: this.state.smsUser
    };

    let requestUrl = process.env.REACT_APP_HTTP_PREFIX + "/repairs/update";

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
          showLoading: false
        }, ()=>{
          self.setState({
            showWarningDialog: true,
            dialogTitle: '成功',
            validElement: '状态更新成功'
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

    render() {
        return (

            <div className={'orderbackground'}>
                <Page className="input">
                    <Cell className={'titlebar'}>
                        <CellHeader onClick={() => {window.history.go(-1)}} style={{ height: '65px', marginTop: '25px' }} >
                            <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                            <div className={'titlebarback'}>
                                返回
                     </div>
                        </CellHeader>

                        <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                            处理中
                  </CellBody>
                        <CellFooter style={{ width: '20%' }} >
                            <img style={{ width: '30px' }} src='/images/menu12@2x.png' />
                        </CellFooter>
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
                                <Input name='engineerName'
                                       value={this.state.engineerName}
                                       onChange={this.handleChange.bind(this)} type="text" placeholder="工程师姓名" />
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
                                <Label style={{ color: '#000' }}>上门时间</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="datetime-local" name='homeServiceTime'
                                       value={this.state.homeServiceTime}
                                       onChange={this.handleChange.bind(this)} placeholder="上门时间" />
                            </CellBody>
                        </FormCell>

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
                                <Select name={'fixCompleted'} onChange={this.handleChange.bind(this)} data={this.state.fixCompleteData} />
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
                                <Select name={'smsUser'} onChange={this.handleChange.bind(this)} data={this.state.smsUserData} />
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
