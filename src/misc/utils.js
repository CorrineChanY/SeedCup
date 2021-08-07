/**
 * utils
 * @file utils.js
 * @author Chen Yi
 * @copyright 
 * @createDate 2020-12-15
 */

export function setToken(content) {
  if (!localStorage) {
    throw new Error("您的浏览器不支持localStorage,请尝试更新浏览器");
  }
  localStorage.setItem("token", content);
}

export function getToken() {
  if (!localStorage) {
    return "";
  }
  const token = localStorage.getItem("token") || "";
  return token;
}

export function removeToken() {
  localStorage.removeItem("token");
}

/**
 * @description 验证手机号格式
 * @param {string} value 
 * @returns true -- 格式正确
 *          false -- 格式错误
 *          null -- 没有输入
 */
export function checkPhone(value) {
  var regex = /^1[3458]\d{9}$/;
  if (value) {
    if (regex.test(value)) {
      return true;
    } else {
      return false;
    }
  } else {
    return null;
  }
}

/**
 * 验证邮箱格式
 * @param {string} email 
 * @returns true -- 格式正确
 *          false -- 格式错误
 *          null -- 没有输入
 */
export function checkEmail(email) {
  var reg = RegExp('[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+')
  if (email) {
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  } else {
    return null;
  }
}

/**
 * 计算各队伍的排名
 * 同分同名
 * @param {Object[]} data
 * @returns {Object[]}
 */
 export const getDataRank = (data) => {
  const length = data.length;
  let dataAddRank = data;
  dataAddRank[0].rank = 1;
  for (let i = 1; i <= length - 1; i++) {
    if (data[i].finalScore === data[i - 1].finalScore) {
      dataAddRank[i].rank = dataAddRank[i - 1].rank;
    } else {
      dataAddRank[i].rank = i + 1;
    }
  }
  return dataAddRank;
};