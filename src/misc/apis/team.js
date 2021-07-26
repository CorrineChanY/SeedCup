/**
 * @file team.js
 * @author Chen Yi
 * 
 * @brief 队伍API
 */
import axios from '../interface'
import { URL } from '../config'

/**
 * 创建队伍
 * @param {object} params 
 * @returns 
 */
export function newTeam(params) {
  return axios.post(URL.newteam, params)
}

/**
 * 获取队伍信息
 * @param {number} id 队伍id，-1时表示自己所在队伍
 * @returns 
 */
export function getTeamInfo(id) {
  return axios.get(URL.teaminfo + id, {
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}


// 获取排名
export function getRank(status) {
  return axios.get(URL.rank, {
    params: status // 注意status是object {gameStatus: xxx}
  });
}

export function addMember(userId) {
  return axios.post(URL.addmember + userId)
}