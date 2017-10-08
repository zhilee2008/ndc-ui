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
import './orderdetailsupdate.css'
class OrderDetailsUpdate extends Component {

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
                            处理中
                  </CellBody>
                        <CellFooter style={{ width: '20%' }} >
                            <img src='/images/menu12@2x.png' />
                        </CellFooter>
                    </Cell>

                    <Form className={'formupdate'}>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>报修单号</Label>
                            </CellHeader>
                            <CellBody style={{ marginLeft: '20px', color: 'lightgray' }}>
                            T1234567
                        </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>工程师姓名</Label>
                            </CellHeader>
                            <CellBody>
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>上门时间</Label>
                            </CellHeader>
                            <CellBody>
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: 'lightgrey' }}>故障描述</Label>
                            </CellHeader>
                            <CellBody>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <Form className={'formupdate'}>

                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>选项</Label>
                            </CellHeader>
                            <CellBody>
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: 'lightgrey' }}>备注</Label>
                            </CellHeader>
                            <CellBody>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <Form className={'formupdate'}>

                        <FormCell>
                            <CellHeader>
                                <Label style={{ color: '#000' }}>维修完成</Label>
                            </CellHeader>
                            <CellBody>
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
                                是
                        </CellBody>
                        </FormCell>

                    </Form>

                    <ButtonArea>
                        <Button>
                            提交
                        </Button>
                    </ButtonArea>


                </Page>
            </div>
        );
    }
}
export default withRouter(OrderDetailsUpdate);
