import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    InfiniteLoader,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter,
    CellHeader,
    Label
} from '../../packages';
import Page from '../components/page';

class RepairManagementItems extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: ['T12311123', 'T24223423', 'T34212343']
        }
    }
    detailsItemClick = (pageId) => {
        let path = '/orderdetails';

        this.props.history.push(path);
    };

    render() {
        return (
            <InfiniteLoader
                onLoadMore={(resolve, finish) => {
                    //mock request
                    setTimeout(() => {
                        if (this.state.items.length > 5) {
                            finish()
                        } else {
                            this.setState({
                                items: this.state.items.concat([this.state.items.length])
                            }, () => resolve())
                        }
                    }, 1000)
                }}
            >
                <Page className="infinite" >
                    <Cell className={'titlebar'}>
                        <CellHeader style={{ height: '65px', marginTop: '25px' }} >
                            <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                            <div className={'titlebarback'}>
                                返回
                     </div>
                        </CellHeader>
                        <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                            报修状态查询
                  </CellBody>
                        <CellFooter style={{ width: '20%' }} >
                            <img style={{ width: '30px' }} src='/images/menu12@2x.png' />
                        </CellFooter>
                    </Cell>
                    {/* <img src='/images/touying@2x.png' /> */}
                    <div className={'touying'}>
                        <div style={{ color: '#1887fc', textAlign: 'center' }} >以下为待接的报修单,请点击了解详情并操作</div>
                    </div>
                    <Cells style={{ marginTop: '0px' }}>
                        {
                            this.state.items.map((item, i) => {
                                return (
                                    <Cell onClick={this.detailsItemClick.bind(this)} href="javascript:;" key={i} access>
                                        <CellHeader>
                                            <Label>订单编号</Label>
                                        </CellHeader>
                                        <CellBody style={{ marginLeft: '20px', color: 'lightgray' }}>
                                            {item}
                                        </CellBody>
                                    </Cell>
                                )
                            })
                        }
                    </Cells>

                </Page>
            </InfiniteLoader>
        )
    }
}

export default withRouter(RepairManagementItems);


