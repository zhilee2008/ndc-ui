import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    ButtonArea,
    Button,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Icon,
    Input,
    Label,
    TextArea,
    Switch,
    Select,
    Toptips,
    Uploader,
    Gallery,
    GalleryDelete,
    Dialog,
} from '../../packages';
import Page from '../components/page';

class RepairForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showIOS1: false,
            style1: {
                buttons: [
                    {
                        label: 'Ok',
                        onClick: this.hideDialog.bind(this)
                    }
                ]
            },
            gallery: false,
            demoFiles: [
                {
                    url: '',
                }
            ]
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
                        demoFiles: this.state.demoFiles.filter((e, i) => i != id),
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
    }


    render() {

        return (
            <div>
                <Page className="input" title="报修保单录入">

                    <CellsTitle>基本信息</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>公司名称:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="text" placeholder="输入公司名称" />
                            </CellBody>
                        </FormCell>
                        <FormCell select selectPos="after">
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
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>姓名:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="text" placeholder="输入姓名" />
                            </CellBody>
                        </FormCell>
                        <FormCell vcode>
                            <CellHeader>
                                <Label>手机号:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="number" placeholder="输入手机号码" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>邮箱:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="text" placeholder="输入邮箱" />
                            </CellBody>
                        </FormCell>
                        <FormCell select selectPos="after" >
                            <CellHeader>
                                <Label>行业:</Label>
                            </CellHeader>
                            <CellBody>
                                <Select data={[
                                    {
                                        value: 1,
                                        label: '所有行业'
                                    },
                                    {
                                        value: 2,
                                        label: '化工品和药品'
                                    },
                                    {
                                        value: 3,
                                        label: '涂布复合'
                                    },
                                    {
                                        value: 4,
                                        label: '薄膜和片材挤出'
                                    },
                                    {
                                        value: 5,
                                        label: '食品加工'
                                    },
                                    {
                                        value: 6,
                                        label: '冶金工业'
                                    },
                                    {
                                        value: 7,
                                        label: '矿石和松散物'
                                    },
                                    {
                                        value: 8,
                                        label: '无纺布和纺织品'
                                    },
                                    {
                                        value: 9,
                                        label: '软管及管材'
                                    },
                                    {
                                        value: 10,
                                        label: '橡胶和乙烯基压延'
                                    },
                                    {
                                        value: 11,
                                        label: '烟草加工'
                                    },
                                    {
                                        value: 12,
                                        label: '电线，电缆和光纤'
                                    },
                                    {
                                        value: 13,
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
                                <Input type="text" placeholder="输入寄付帐单地址" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>详细公司地址:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="text" placeholder="输入详细公司地址" />
                            </CellBody>
                        </FormCell>
                        <CellsTitle>设备信息</CellsTitle>
                        <FormCell>
                            <CellHeader>
                                <Label>产品序列号:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="text" placeholder="输入产品序列号" />
                            </CellBody>
                        </FormCell>
                        <FormCell select selectPos="after">
                            <CellHeader>
                                <Label>设备类型:</Label>
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
                        </FormCell>
                        <FormCell select selectPos="after">
                            <CellHeader>
                                <Label>详细设备类型:</Label>
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
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>产品序列号:</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="text" placeholder="输入产品序列号" />
                            </CellBody>
                        </FormCell>

                    </Form>
                    {/* <CellsTips>Form Footer Tips</CellsTips> */}
                    <CellsTitle>故障细节</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellBody>
                                <TextArea placeholder="输入故障细节" rows="3"></TextArea>
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
                        <Button onClick={ e=> this.setState({ showIOS1: true}) }>
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