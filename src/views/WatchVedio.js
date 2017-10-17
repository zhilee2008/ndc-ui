/**
 * Created by icdw on 17/10/2017.
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    Cells,
    CellsTitle,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from '../../packages';
import './WatchVedio.css'
import Page from '../components/page';
import iconSrc from '../../public/images/chuli.png';

class WatchVedio extends Component {
    render() {
        return (
                <Page className="cell" title="List">
                    <Cells>
                        <Cell href="javascript:;" access>
                            <CellBody>
                                 <a href="http://v.youku.com/v_show/id_XMzA4OTM5ODYyNA==.html?spm=a2h3j.8428770.3416059.1">
                                HMI</a>
                            </CellBody>
                        </Cell>
                        <Cell href="javascript:;" access>
                            <CellBody>
                                <a href="http://v.youku.com/v_show/id_XMzA4OTM5OTQ1Mg==.html?spm=a2h3j.8428770.3416059.1">
                                    710Utility-1</a>
                            </CellBody>
                        </Cell>
                        <Cell href="javascript:;" access>
                            <CellBody>
                                <a href="http://v.youku.com/v_show/id_XMzA4OTQwMDQ0MA==.html?spm=a2h3j.8428770.3416059.1">
                                    710Utility-2</a>
                            </CellBody>
                        </Cell>
                    </Cells>
            </Page>
        );
    }

}

export default withRouter(WatchVedio);