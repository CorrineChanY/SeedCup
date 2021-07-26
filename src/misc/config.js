/**
 * 配置文件
 * @file config.js
 * @author 
 * @copyright 
 * @createDate 2021-01-27
 */

export const BASE_URL = 'http://82.157.0.52:8087/api';

export const TIMEOUT = 5000;

export const CONTENT_TYPE = 'application/json'; 

export const URL = {
  // 用户相关
  login : '/user/log_in',
  signup : '/user/sign_up',
  myinfo : '/user/my_info',
  search : '/user/search',
  getcap : '/sms/send_captcha',
  all : '/user/all',

  // 队伍相关
  newteam : '/team/create',
  editteam : '/team/edit_introduction',
  addmember : '/team/member/add/',
  delemember : '/team/member/delete/',
  teaminfo : '/team/info/',
  rank : '/rank'
}

export const TABLE_DISPLAY = {
  UserSearch: [
    {title: '姓名', dataIndex: 'username', key: 'usename'},
    {title: '班级', dataIndex: 'className', key: 'className'},
    {title: '电话', dataIndex: 'phoneNumber', key: 'phoneNumber'},
    {title: '邮箱', dataIndex: 'email', key: 'email'},
  ],
}
