import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    ButtonArea,
    Button,
    CellBody,
    Form,
    FormCell,
    Input,
    FooterText,
} from '../../packages';

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
                <div>
                    <img style={{ width: '100%' }} src="/images/queryimage.png" />
                    <FooterText>{this.state.userId}</FooterText>
                </div>

                <Form>
                    <FormCell>
                        <CellBody>
                            <Input value={this.state.itemId}
                                onChange={this.handleChangeItemId} type="text" placeholder="输入报修单号" />
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button onClick={this.queryItemClick.bind(this)}>
                        查询
                        </Button>
                </ButtonArea>
            </div>
        );
    }
}

export default withRouter(StatusQuery);

