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
    constructor(props) {
        super(props);
        this.state = {
            isIos: false,
        };
        var u = navigator.userAgent,
        app = navigator.appVersion;
    //var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    this.state.isIos = isIOS;
    };
    render() {
        return (
            <div>
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
                        培训视频
          </CellBody>
          {
              this.state.isIos? '' :
              <CellFooter style={{ width: '20%' }} >
              <img style={{ width: '30px', display: 'none' }} src='/images/menu12@2x.png' />
          </CellFooter>
          }
                    
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
                    <Cell href="http://v.youku.com/v_show/id_XMzA4OTQwMjE4MA==.html?spm=a2h3j.8428770.3416059.1" access>
                        <CellBody className={'cellLink'} >
                            Gaugetools
                        </CellBody>
                    </Cell>
                    <Cell href="http://v.youku.com/v_show/id_XMzA4OTQwMzYyMA==.html?spm=a2h3j.8428770.3416059.1" access>
                        <CellBody className={'cellLink'} >
                            GaugeToolsXL-1
                        </CellBody>
                    </Cell>
                    <Cell href="http://v.youku.com/v_show/id_XMzA4OTQwNDk2NA==.html?spm=a2h3j.8428770.3416059.1" access>
                        <CellBody className={'cellLink'} >
                            GaugeToolsXL-2
                        </CellBody>
                    </Cell>
                    <Cell href="http://v.youku.com/v_show/id_XMzA4OTQwNjA0NA==.html?spm=a2h3j.8428770.3416059.1" access>
                        <CellBody className={'cellLink'} >
                            InfraLab710e
                        </CellBody>
                    </Cell>
                    <Cell href="http://v.youku.com/v_show/id_XMzA4OTQwNzI1Mg==.html?spm=a2h3j.8428770.3416059.1" access>
                        <CellBody className={'cellLink'} >
                            Setting the Infralab to run through RS232
                        </CellBody>
                    </Cell>
                    <Cell href="http://v.youku.com/v_show/id_XMzA4OTQwODQ0MA==.html?spm=a2h3j.8428770.3416059.1" access>
                        <CellBody className={'cellLink'} >
                            TM710e
                        </CellBody>
                    </Cell>
                    <Cell href="http://v.youku.com/v_show/id_XMzA4OTQwOTQ4NA==.html?spm=a2h3j.8428770.3416059.1" access>
                        <CellBody className={'cellLink'} >
                            TM710e-0307温度
                        </CellBody>
                    </Cell>
                </Cells>
            </div>
        );
    }

}

export default withRouter(WatchVedio);