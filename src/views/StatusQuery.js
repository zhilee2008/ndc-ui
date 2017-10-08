import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    ButtonArea,
    Button,
    Form,
    FormCell,
    Input,
    FooterText,
    CellHeader,
    CellBody,
    CellFooter,
    Cell
} from '../../packages';
import './statusquery.css';
import './menu.css';

class StatusQuery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '131***1212',
            itemId: '',
        };
    }

    queryItemClick = () => {
        if (this.state.itemId) {
            const path = '/statusqueryitem';
            this.props.history.push(path);
        } else {

        }
    };

    handleChangeItemId = (event) => {
        this.setState({
            itemId: event.target.value
        });
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
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
                <div style={{ marginTop: '95px' }}>
                    <img style={{ width: '30%' }} src="/images/touxiang@2x.png" />
                    <FooterText>{this.state.userId}</FooterText>
                </div>

                <Form>
                    <FormCell>
                        <CellBody>
                            <Input className={'queryinput'} value={this.state.itemId}
                                onChange={this.handleChangeItemId} type="text" placeholder="输入报修单号" />
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea >
                    <Button style={{ marginTop: '100px' }} onClick={this.queryItemClick.bind(this)}>
                        提交
                        </Button>
                </ButtonArea>
            </div>
        );
    }
}

export default withRouter(StatusQuery);

