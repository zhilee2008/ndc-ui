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
            showlink:false,
            linkDetail: [
                {
                    name: "HMI",
                    targetLink: "http://v.youku.com/v_show/id_XMzA4OTM5ODYyNA==.html?spm=a2h3j.8428770.3416059.1"
                },
                {
                    name: "710Utility-1",
                    targetLink: "http://v.youku.com/v_show/id_XMzA4OTM5OTQ1Mg==.html?spm=a2h3j.8428770.3416059.1"
                },{
                    name: "710Utility-2",
                    targetLink: "http://v.youku.com/v_show/id_XMzA4OTQwMDQ0MA==.html?spm=a2h3j.8428770.3416059.1"
                },{
                    name: "Gaugetools",
                    targetLink: "http://v.youku.com/v_show/id_XMzA4OTQwMjE4MA==.html?spm=a2h3j.8428770.3416059.1"
                },{
                    name: "GaugeToolsXL-1",
                    targetLink: "http://v.youku.com/v_show/id_XMzA4OTQwMzYyMA==.html?spm=a2h3j.8428770.3416059.1"
                },{
                    name: "GaugeToolsXL-2",
                    targetLink: "http://v.youku.com/v_show/id_XMzA4OTQwNDk2NA==.html?spm=a2h3j.8428770.3416059.1"
                },{
                    name: "InfraLab710e",
                    targetLink: "http://v.youku.com/v_show/id_XMzA4OTQwNjA0NA==.html?spm=a2h3j.8428770.3416059.1"
                },{
                    name: "Setting the Infralab to run through RS232",
                    targetLink: "http://v.youku.com/v_show/id_XMzA4OTM5ODYyNA==.html?spm=a2h3j.8428770.3416059.1"
                },{
                    name: "TM710e",
                    targetLink: "http://v.youku.com/v_show/id_XMzA4OTQwNzI1Mg==.html?spm=a2h3j.8428770.3416059.1"
                }, {
                    name: "TM710e-0307温度",
                    targetLink: "http://v.youku.com/v_show/id_XMzA4OTQwOTQ4NA==.html?spm=a2h3j.8428770.3416059.1"
                },  
                
            ]
        }
    };
    showLink = () => {
        this.setState({
            showlink: !this.state.showlink
        });
    };
    
    render() {
        return (
            <div>
                <Cell className={'titlebar'}>
           
                    {/* <CellHeader onClick={() => { window.history.go(-1) }} style={{ width: '20%', height: '65px', marginTop: '25px' }} >
                     <img style={{ float: 'left', height: '25px', marginTop: '8px' }} src='/images/jiantu@2x.png' />
                     <div className={'titlebarback'}>
                         返回
      </div>
                 </CellHeader> */} 

             
                    
                    <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                        培训视频
          </CellBody>
      
              {/*<CellFooter style={{ width: '20%' }} >
              <img style={{ width: '30px', display: 'none' }} src='/images/menu12@2x.png' />
        </CellFooter>*/}
         
                    
                </Cell>
                <Cells>
                    <Cell onClick={this.showLink}>
                        <CellBody className={'cellTitle'}>
                            烟草行业
                        </CellBody>
                        <CellFooter>
                            {
                                this.state.showlink? <img src='/images/jiantou_xia@2x.png' style={{marginRight:'20px'}} /> : <img src='/images/jiantou@2x.png' style={{marginRight:'20px'}} />
                            }
                        </CellFooter>
                    </Cell>
                    { !this.state.showlink? "" :
                        this.state.linkDetail.map(details =>
                      <Cell href={details["targetLink"]} access>
                      <CellBody className={'cellLink'}  >
                          {details["name"]}
                  </CellBody>
                  </Cell> 
                    )}
                    
                    {/*
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
                    */}
                </Cells>
            </div>
        );
    }

}

export default withRouter(WatchVedio);