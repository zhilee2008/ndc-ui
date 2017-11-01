import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PDF from 'react-pdf-js';
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


class PDFViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemId: this.props.match.params.id,
            title: '',

        };
        var u = navigator.userAgent,
        app = navigator.appVersion;
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        this.state.isIos = isIOS;

    }

    componentWillMount() {

    }

    onDocumentComplete = (pages) => {
        this.setState({ page: 1, pages });
    }

    onPageComplete = (page) => {
        this.setState({ page });
    }

    handlePrevious = () => {
        this.setState({ page: this.state.page - 1 });
    }

    handleNext = () => {
        this.setState({ page: this.state.page + 1 });
    }

    renderPagination = (page, pages) => {
        let previousButton = <li className="previous" onClick={this.handlePrevious} style={{width: '40%', float: 'left', textAlign: 'right'}}><a href="#"><i className="fa fa-arrow-left"></i>上一页</a></li>;
        if (page === 1) {
            previousButton = <li className="previous disabled"  style={{width: '40%', float: 'left', textAlign: 'right'}}><a href="#"><i className="fa fa-arrow-left"></i>上一页</a></li>;
        }
        let nextButton = <li className="next" onClick={this.handleNext}  style={{width: '40%', float: 'right'}}><a href="#">下一页<i className="fa fa-arrow-right"></i></a></li>;
        if (page === pages) {
            nextButton = <li className="next disabled"  style={{width: '40%', float: 'right'}}><a href="#">下一页<i className="fa fa-arrow-right"></i></a></li>;
        }
        return (
            <nav>
                <ul className="pager" style={{listStyle: 'none'}}>
                    {previousButton}
                    {nextButton}
                </ul>
            </nav>
        );
    }




    render() {
        let pagination = null;
        if (this.state.pages) {
            pagination = this.renderPagination(this.state.page, this.state.pages);
        }

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

                    <div style={{marginTop: '5px'}}>
                        <PDF file="http://ndc.way-may.com/img/demo.pdf" onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} />
                        {pagination}
                    </div>




                </Page>
            </div>
        );
    }
}

export default withRouter(PDFViewer);

