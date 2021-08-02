
/**
 * @file user.js
 * @author Chen Yi
 * @brief 用户API
 */
import axios from '../interface'
import { URL } from '../config'

// 登录
export function LogIn(params) {
  return axios.post(URL.login, params);
}

// 获取当前用户
export function getCurrent() {
  return axios.get(URL.myinfo);
}

// 注册获取验证码
export function getCaptcha(phoneNumber) {
  return axios.get(URL.getcap, {
    params: { phoneNumber }
  });
}

// 注册
export function signUp(params) {
  return axios.post(URL.signup, params);
}

// 搜索用户
export function searchUser(keyword) {
  return axios.get(URL.search, {
    params: { keyword }
  })
}