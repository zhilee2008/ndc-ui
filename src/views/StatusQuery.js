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
    GalleryDelete
} from '../../packages';
import Page from '../components/page';

class StatusQuery extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    queryItemClick = (pageId) => {
        let path = '/statusqueryitem';

        this.props.history.push(path);
    };

    render() {
        return (
            <div>
                <Page className="input" title="状态查询">

                    <CellsTitle>报修单号</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellBody>
                                <Input type="tel" placeholder="输入报修单号" />
                            </CellBody>
                        </FormCell>
                    </Form>
                    <ButtonArea>
                    <Button onClick={this.queryItemClick.bind(this,'id')}>
                        查询
                        </Button>
                </ButtonArea>
                </Page>
            </div>
        );
    }
}

export default withRouter(StatusQuery);

