/**
 * @file team.js
 * @author Chen Yi
 * @brief 队伍API
 */
import axios from '../interface'
import { URL } from '../config'

/**
 * 创建队伍
 * 创建人默认为队长
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
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}


/**
 * 获取排行榜
 * @param {Object} status 
 * @returns 
 */
export function getRank(status) {
  return axios.get(URL.rank, {
    params: status
  });
}

/**
 * 添加队员
 * 仅队长可操作
 * @param {Number} userId 
 * @returns 
 */
export function addMember(userId) {
  return axios.post(URL.addmember + userId)
}

/**
 * 删除队员
 * 仅队长可操作
 * @param {Number} userId 
 * @returns 
 */
export function deleteMember(userId) {
  return axios.post(URL.delemember + userId)
}

/**
 * 修改队伍介绍信息
 * 仅队长可操作
 * @param {String} introduction 
 * @returns 
 */
export function editTeamIntro(introduction) {
  return axios.post(URL.editteam, { introduction })
}