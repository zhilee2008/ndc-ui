import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle
} from '../../packages';
import './menu.css';
import $ from 'jquery';

const repairsubmiticon = <img src="/images/baoxiu-@2x.png" />
const statusqueryicon = <img src="/images/cahxun@2x.png" />
const repairmanagementicon = <img src="/images/guanli-@2x.png" />

class First extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {

      $.ajax(
        {
          type:'get',
          url : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx457ecf3c803c3774&redirect_uri=http://xn.geekx.cn/menu&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect',
          dataType : 'jsonp',
          jsonp:"jsoncallback",
          async: false,
          success  : function(data) {
            alert(data);
            alert(JSON.stringify(data));
          },
          error : function(data) {
            alert(JSON.stringify(data));
            alert('fail');
          }
        }
      );

    }



    render() {
        return (
            <div>

            </div>
        );
    }
}

export default withRouter(First);

