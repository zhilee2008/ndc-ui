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
            <div>
                <Cell className={'titlebar'}>
                    <CellHeader onClick={() => { window.history.go(-1) }} style={{ width: '20%', height: '65px', marginTop: '25px' }} >
                        <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                        <div className={'titlebarback'}>
                            返回
         </div>
                    </CellHeader>

                    <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                        培训视频
          </CellBody>
                    <CellFooter style={{ width: '20%' }} >
                        <img style={{ width: '30px', display: 'none' }} src='/images/menu12@2x.png' />
                    </CellFooter>
                </Cell>
                <Cells>
                    <Cell>
                        <CellBody className={'cellTitle'}>
                            烟草行业
                </CellBody>
                        <CellFooter>
                            <img src='/images/jiantou@2x.png' style={{marginRight:'20px'}} />
                        </CellFooter>
                    </Cell>
                    <Cell href="http://v.youku.com/v_show/id_XMzA4OTM5ODYyNA==.html?spm=a2h3j.8428770.3416059.1" access>
                        <CellBody className={'cellLink'}  >
                            HMI
                    </CellBody>
                    </Cell>
                    <Cell href="http://v.youku.com/v_show/id_XMzA4OTM5OTQ1Mg==.html?spm=a2h3j.8428770.3416059.1" access>
                        <CellBody className={'cellLink'} >
                            710Utility-1
                    </CellBody>
                    </Cell>
                    <Cell href="http://v.youku.com/v_show/id_XMzA4OTQwMDQ0MA==.html?spm=a2h3j.8428770.3416059.1" access>
                        <CellBody className={'cellLink'} >
                            710Utility-2
                    </CellBody>
                    </Cell>
                </Cells>
            </div>
        );
    }

}

export default withRouter(WatchVedio);