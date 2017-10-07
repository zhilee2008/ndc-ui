import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    InfiniteLoader,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter
} from '../../packages';
import Page from '../components/page';

class RepairManagementItems extends Component {
    
        constructor(props){
            super(props)
    
            this.state = {
                items: [...Array(10).keys()]
            }
        }
        detailsItemClick = (pageId) => {
            let path = '/orderdetails';
            
            this.props.history.push(path);
          };
    
        render(){
            return (
                <InfiniteLoader
                    onLoadMore={ (resolve, finish) => {
                        //mock request
                        setTimeout( ()=> {
                            if(this.state.items.length > 5){
                                finish()
                            }else{
                                this.setState({
                                    items: this.state.items.concat([this.state.items.length])
                                }, ()=> resolve())
                            }
                        }, 1000)
                    }}
                >
                <Page className="infinite" title="订单列表" subTitle="订单列表" >
    
                        <CellsTitle>订单列表</CellsTitle>
                        <Cells>
                        {
                            this.state.items.map( (item, i) => {
                                return (
                                    <Cell onClick={this.detailsItemClick.bind(this)} href="javascript:;" key={i} access>
                                        <CellBody>
                                            {'订单编号:'}{item}
                                        </CellBody>
                                        <CellFooter/>
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

