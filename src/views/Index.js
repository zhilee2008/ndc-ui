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
    MediaBoxTitle,
    Toast
} from '../../packages';
import './menu.css';
import $ from 'jquery';

const repairsubmiticon = <img src="/images/baoxiu-@2x.png" />
const statusqueryicon = <img src="/images/cahxun@2x.png" />
const repairmanagementicon = <img src="/images/guanli-@2x.png" />

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };

    }

    componentWillMount() {
      let params = this.props.location.search;
      //?code=12&state=1
      let paramsWithoutQuestionMask = params.split('?');
      if (paramsWithoutQuestionMask.length >= 1) {
        paramsWithoutQuestionMask = paramsWithoutQuestionMask[1];
        let paramsWithoutAndMask = paramsWithoutQuestionMask.split('&');
        for (let param in paramsWithoutAndMask){
          let codeContent = paramsWithoutAndMask[param];
          if (codeContent.startsWith('code')){
            let codes = codeContent.split('code=')
            if (codes.length >= 1){
              let codeValue = codes[1];
              this.state.code = codeValue;
              this.authentication();
            }
          }
        }

      }else {
        alert('没有code');
      }
    }



    authentication = () => {

      let url = process.env.REACT_APP_HTTP_PREFIX + "repairs/weixin-code/" + this.state.code;

      var request = $.ajax({
        url: url,
        method: "GET",
        contentType: "application/json; charset=utf-8"
      });

      var self = this;
      let path = '/menu';
      request.done(function (msg) {

        if (msg) {

            if (msg === 'admin'){
                localStorage.setItem("path", "admin");
                path = path + '/admin'
            }else {
                path = path + '/common'
                localStorage.setItem("path", "common");
            }

        }else {
            path = path + '/common';
            localStorage.setItem("path", "common");
        }

        self.props.history.push(path);
      });

      request.fail(function (jqXHR, textStatus) {

        path = path + '/common';
        localStorage.setItem("path", "common");
        self.props.history.push(path);
        console.log("Request failed: " + textStatus)
      });

    };

    render() {
        return (
            <div>
                <Toast icon="loading" show={true}>加载中...</Toast>
            </div>
        );
    }
}

export default withRouter(Index);

