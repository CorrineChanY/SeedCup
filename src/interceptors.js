/**
 * 拦截器
 * 所有拦截器写在一起, 都是错误的情况
 * 在使用的时候需要import这个.js
 * @file interceptors.js
 * @author 
 * @copyright 
 * @createDate 2021-01-23
 */

import axios from "axios"

// a response interceptor
axios.interceptors.response.use(function (response) {
    switch(response.data.code){
        case "100":
            console.log("code: 100");
            if(response.data.data === null && response.data.message === "failed"){
                throw new Error("用户名或密码不正确！");
            }
            break;
        case "103":
            console.log("code: 103");
            if(response.data.data === "Empty username" && response.data.message === "value invalid"){
                throw new Error("用户名不能为空！");
            }else if(response.data.data === "Empty password" && response.data.message === "value invalid"){
                throw new Error("密码不能为空！");
            }
            break;
        case "997":
            console.log("code: 997");
            if(response.data.message === "apply captcha too frequently" && response.data.data === null){
                throw new Error("获取验证码太频繁！");
            }
            break;
        default:
            console.log("default");
            break;
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});

// a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });