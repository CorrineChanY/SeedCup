/**
 * @description 接口文件
 *              所有拦截器写在一起, 都是错误的情况
 * @file interface.js
 * @author 
 * @copyright 
 * @createDate 2021-01-23
 */

import axios from "axios"
import Qs from "qs"
import { BASE_URL, TIMEOUT, CONTENT_TYPE, URL} from '../misc/config'


const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {'Content-Type': CONTENT_TYPE}
});

export const API = {

  SignIn : function (data) {return instance.post(URL.login, data);},

  getCaptcha: function (phone) {
    return instance.get(URL.getcap, {
      params: phone
    })
  },

  SignUp : function (data) {return instance.post(URL.signup, data);},

  getRank : function(status) {
    return instance.get(URL.rank, {
      params: status // 注意status是对象{gameStatus: xxx}
    })
  }
}



// a response interceptor
instance.interceptors.response.use(function (response) {
  console.log(response);
  switch(response.data.code){
      case "-1":
          console.log("code: -1")
          if(response.data.data === null && response.data.message === "failed") {
            throw new Error("用户名或密码不正确");
          }
          break;
      case "102":
          console.log("code: 102");
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
      case "105":
          console.log("code: 105");
          if(response.data.message === "verification code error" && response.data.data === null){
            throw new Error("验证码错误！");
          }
          break;
      default:
          console.log("default");
          break;
  }
  return response;
}, function (error) {
  return Promise.reject(error);
  // return error;
});


// a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// /**
//  * @description get方法，对应get请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// export function get(url, params){    
//   return new Promise((resolve, reject) =>{        
//       instance.get(url, {            
//           params: params        
//       }).then(res => {
//           // resolve(res.data);
//         console.log(res.data);
//       }).catch(err =>{
//         console.log(err.data);
//         // reject(err.data)        
//   })    
// });}

// /** 
//  * @description post方法，对应post请求 
//  * @param {String} url [请求的url地址] 
//  * @param {Object} params [请求时携带的参数] 
//  */
// export function post(url, params) {
//   return new Promise((resolve, reject) => {
//     instance.post(url, Qs.stringify(params))
//     .then(res => {
//         // resolve(res.data);
//         console.log(res.data);
//     })
//     .catch(err =>{
//         // reject(err.data);
//         console.log(err.data);
//     })
//   });
// }


