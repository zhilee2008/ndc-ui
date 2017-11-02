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
                    targetLink: "/viewpdf/123"
                },
                {
                    name: "710Utility-1",
                    targetLink: "http://ndc.way-may.com/viewpdf/123"
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

    playVideo = (targetLink) => {
        this.props.history.push(targetLink);
    };

    render() {
        return (
            <div>
                <Cell className={'titlebar'}>
                    <CellBody style={{ textAlign: 'center' }} className={'titlebarcontent'}>
                        培训视频
                    </CellBody>
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
                      <Cell onClick={this.playVideo.bind(this, details['targetLink'])}>
                          <CellBody className={'cellLink'}  >
                              {details["name"]}
                          </CellBody>
                      </Cell>
                    )}
                </Cells>
            </div>
        );
    }

}

export default withRouter(WatchVedio);