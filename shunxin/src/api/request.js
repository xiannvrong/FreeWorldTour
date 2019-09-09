import axios from "axios";
import router from "router";
import { filterParams } from "../common/mUtils";
import qs from "qs";

//var config = require('../../config/index')
var port = "8080";

//var _baseUrl = process.env.NODE_ENV == 'development' ? `http://localhost:${port}/api` : 'http://api.mojoy.cc'
//var _baseUrl = process.env.NODE_ENV == 'development' ? ' ' : 'http://na.wenes.com/API'

export const Request = {};
//请求超时时长
const TIMEOUT = 5000;
//http请求授权header属性
const AUTH_KEY = "X-Authorization";
var request = options => {
    //开放cookie 本地操作 并且操作后的cookie 携带过去
    // axios.defaults.withCredentials = true;
    options.headers = { 
        "Accept":"application/json", 
        "Content-Type":"application/json"
    }, 
    //处理查询参数，过滤空值参数
    //filterParams(options.params || options.body);

    options.headers = { ...(options.headers || {}) };

    options.body = { ...(options.body || {}) };
    //options.body.power = 'user';

    let _xtoken = localStorage.getItem("Xtoken");

    if (_xtoken) {
        options.body.Xtoken = _xtoken;
        // document.cookie = 'Xtoken=' + _xtoken;
        // alert('已写入cookie' + JSON.stringify(document.cookie));
    }

    //参数格式化
    if (Object.prototype.toString.call(options.body) === "[object Object]") {
        options.body = qs.stringify(options.body);
    }

    return axios
        .request({
            headers: options.headers,
            //url: _baseUrl + options.action,
            url: options.action,
            method: options.method,
            data: options.body,
            params: options.params,
            timeout: TIMEOUT,
            emulateJSON: true
            // })
        })
        .then(response => {
            //请求结束
            var result = response;
            // if (result.code >= 401 && result.code <= 405) {
            //   location.href = '/#/login';
            //   throw result;
            // }
            // if (result && result.code == 200) {
            //   var msg = (typeof result.message === 'object' ? JSON.stringify(result.message) : result.message)

            //   // alert('接口code不为10000:' + JSON.stringify(result))
            //   throw result;
            // }
            return result;
        })
        .catch(e => {
            // alert('前端请求错误:' + JSON.stringify(e))
            //抛出异常
            throw e;
        });
};
//http请求方式
const http = {};
["get", "post", "put", "delete"].forEach(method => {
    http[method] = (
        action,
        params,
        typs = 1,
        extra = { headers: {}, loadig: false, includeToken: false }
    ) => {
        method = method.toUpperCase();
        if (process.env.NODE_ENV == "development") {
            // 测试接口
            if (typs == 1) action = "http://172.16.8.150:8888" + action;
            if (typs == 66) action = "http://view.wps.cn" + action; 
        } else {
            // 正式接口
            if (typs == 1) action = "http://172.16.8.150:8888" + action;
            if (typs == 66) action = "http://view.wps.cn" + action; 
        }
        if (method === "GET") {
            return request({
                action,
                params,
                method,
                headers: extra.headers,
                loading: extra.loading,
                includeToken: extra.includeToken
            });
        }
        return request({
            action,
            body: params,
            method,
            headers: extra.headers,
            loading: extra.loading,
            includeToken: extra.includeToken
        });
    };
});
Request.http = http;
