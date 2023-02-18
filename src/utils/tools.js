/*
 * @Author: arvin(王德江)
 * @Date: 2022-08-05 14:34:43
 * @LastEditors: arvin(王德江)
 * @LastEditTime: 2022-08-05 15:00:11
 * @Description: 工具库
 */

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function deepClone(source) {
  if (!isObject(source)) return source; // 如果不是对象的话直接返回
  const target = Array.isArray(source) ? [] : {}; // 数组兼容
  Object.keys(source).forEach((k) => {
    if (Reflect.has(source, k)) {
      if (typeof source[k] === 'object') {
        target[k] = deepClone(source[k]);
      } else {
        target[k] = source[k];
      }
    }
  });
  return target;
}

// 防抖
function debounce(func, time = 50) {
  let timerId = null;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, time);
  };
}
/**
 * @param {Function} func 需要节流的函数对象
 * @param {number} time 间隔时间，默认300ms
 * @returns 加入节流功能的原函数对象
 */
function throttle(func, time = 300) {
  let valid = true;
  return function (...args) {
    if (!valid) return false;
    valid = false;
    func.apply(this, args);
    setTimeout(() => {
      valid = true;
    }, time);
  };
}

export default {
  deepClone,
  debounce,
  throttle
}