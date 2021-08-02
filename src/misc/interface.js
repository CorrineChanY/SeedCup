/**
 * @description 请求配置
 * @file interface.js
 * @author Chen Yi
 * @createDate 2021-01-23
 */

import axios from "axios"
import { BASE_URL, TIMEOUT, CONTENT_TYPE } from '../misc/config'
import { getToken } from '../misc/utils'

const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: { 'Content-Type': CONTENT_TYPE },
  withCredentials: true,
});


// a response interceptor
Axios.interceptors.response.use(function (response) {
  switch (response.data.code) {
    case "-1":
      if (response.data.data === null && response.data.message === "failed") {
        alert('用户名或密码不正确');
        throw new Error("用户名或密码不正确");
      }
      break;
    case "101":
      if (response.data.data.length > 0 && response.data.message === "duplicate information") {
        alert('该' + response.data.data[0] + '已注册！');
        throw new Error("duplicate information");
      }
      break;
    case "102":
      if (response.data.data === "Empty username" && response.data.message === "value invalid") {
        alert('用户名不能为空！');
        throw new Error("用户名不能为空！");
      } else if (response.data.data === "Empty password" && response.data.message === "value invalid") {
        alert('密码不能为空！');
        throw new Error("密码不能为空！");
      } else if (response.data.data === "wrong length of captcha" && response.data.message === "value invalid") {
        alert('验证码长度错误！');
        throw new Error("验证码长度错误！");
      }
      break;
    case "104":
      if (response.data.message === "need login") {
        alert('未登陆！');
        throw new Error("未登陆！");
      }
      break;
    case "105":
      if (response.data.message === "verification code error" && response.data.data === null) {
        alert('验证码错误！');
        throw new Error("验证码错误！");
      }
      break;
    case "106":
      if (response.data.message === "permission denied") {
        alert('目标用户不能是自己！');
        throw new Error("目标用户不能是自己！");
      }
      break;
    case "108":
      if (response.data.message === "apply captcha too frequently") {
        alert('获取验证码太频繁！');
        throw new Error("获取验证码太频繁！");
      }
      break;
    case "109":
      if (response.data.message === "already in team") {
        alert('目标用户已经有队伍！');
        throw new Error("目标用户已经有队伍！");
      }
      break;
    case "110":
      if (response.data.message === "not yet in team") {
        // alert('您还不在队伍中！');
        throw new Error("您还不在队伍中！");
      }
      break;
    case "997":
      if (response.data.message === "apply captcha too frequently" && response.data.data === null) {
        alert('获取验证码太频繁！');
        throw new Error("获取验证码太频繁！");
      }
      break;
    default:
      break;
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});


// a request interceptor
Axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = getToken();
    return config;
  },
  (err) => {
    Promise.reject(err);
  });

export default Axios;