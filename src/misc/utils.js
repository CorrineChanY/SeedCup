/**
 * utils
 * @file utils.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */


 /* 验证手机号 */
 function checkPhone(value) {
  // var regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/; 
  var regex = /^1[3458]\d{9}$/; 
  if (value) {
      // react使用正则表达式变量的test方法进行校验
      // 直接使用value.match(regex)显示match未定义
      if (regex.test(value)) { 
          // callback();
          return 1;
      } else { 
          // callback('请输入正确的手机号码！');
          return 0;
      }
  } else {
      // 这里的callback函数会报错
      return 100;
  }
}