import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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


class VideoViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemId: this.props.match.params.id,
            title: '',
            screenWidth: '100%'

        };
        var u = navigator.userAgent,
        app = navigator.appVersion;
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        this.state.isIos = isIOS;

    }

    componentWillMount() {
        let screenWidth = document.documentElement.clientWidth;
        this.setState({
           screenWidth: screenWidth * 0.9 + 'px'
        });
    }


    render() {
        return (
            <div>
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
                                视频
                        </CellBody>
                        {
                          this.state.isIos? '' :
                          <CellFooter style={{ width: '20%' }} >
                            <img style={{ width: '30px', display: 'none' }} src='/images/menu12@2x.png' />
                          </CellFooter>
                        }
                    </Cell>

                    <div style={{marginTop: '5px', marginLeft: '5%'}}>
                        <video src={'http://ndc.way-may.com:9090/vedio/HMI.mp4'} width={this.state.screenWidth} controls></video>
                    </div>




                </Page>
            </div>
        );
    }
}

export default withRouter(VideoViewer);

