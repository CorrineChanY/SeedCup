/**
 * 配置文件
 * @file config.js
 * @author 
 * @copyright 
 * @createDate 2021-01-27
 */

export const BASE_URL = 'http://www.holdice.club:8087';

export const TIMEOUT = 5000;

export const CONTENT_TYPE = 'application/json'; 

export const URL = {
  login : '/api/user/log_in',
  logout : '/api/user/log_out',
  signup : '/api/user/sign_up',
  myinfo : '/api/user/my_info',
  search : '/api/user/search',
  getcap : '/api/sms/send_captcha',
  all : '/api/user/all',

  newteam : '/api/team/sign_up',
  editteam : '/api/team/edit_introduction',
  addmember : '/api/team/member/add/{userId}',
  delemember : '/api/team/member/delete/{userId}',
  teaminfo : '/api/team/info',
  rank : '/api/rank'
}
