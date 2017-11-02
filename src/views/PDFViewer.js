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
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class PDFViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemId: this.props.match.params.id,
            title: '',
            images: [
                {
                    original: 'http://res.cloudinary.com/keystone-demo/image/upload/c_fit,h_450,w_750/z2gnsu37720vhtwrmtg4.png',
                    thumbnail: 'http://res.cloudinary.com/keystone-demo/image/upload/c_fit,h_450,w_750/z2gnsu37720vhtwrmtg4.png',
                },
                {
                    original: 'http://res.cloudinary.com/keystone-demo/image/upload/c_fit,h_450,w_750/kw1uehpbrq510hnmepgq.jpg',
                    thumbnail: 'http://res.cloudinary.com/keystone-demo/image/upload/c_fit,h_450,w_750/kw1uehpbrq510hnmepgq.jpg'
                },
                {
                    original: 'http://res.cloudinary.com/keystone-demo/image/upload/c_fit,h_450,w_750/ao01g3lmucmlvtu8relb.jpg',
                    thumbnail: 'http://res.cloudinary.com/keystone-demo/image/upload/c_fit,h_450,w_750/ao01g3lmucmlvtu8relb.jpg'
                }
            ]
        };

        var u = navigator.userAgent,
        app = navigator.appVersion;
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        this.state.isIos = isIOS;
    }

    componentWillMount() {

    }

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
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
                                PDF
                        </CellBody>
                        {
                          this.state.isIos? '' :
                          <CellFooter style={{ width: '20%' }} >
                            <img style={{ width: '30px', display: 'none' }} src='/images/menu12@2x.png' />
                          </CellFooter>
                        }
                    </Cell>

                    <div style={{marginTop: '2px'}}>
                        <ImageGallery
                            items={this.state.images}
                            slideInterval={2000}
                            onImageLoad={this.handleImageLoad}
                            infinite={false}
                            showThumbnails={false}
                        />
                    </div>




                </Page>
            </div>
        );
    }
}

export default withRouter(PDFViewer);

