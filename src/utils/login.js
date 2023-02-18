/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-08-30 19:00:01
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-30 19:00:03
 * @FilePath: /t1/src/utils/login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 先把值保留，如果没错误就处理之后返回，否则返回有错误的。
export function localGet (key) {
    const value = window.localStorage.getItem(key)
    try {
        return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
        return value;
    }
}

export function localSet (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function localRemove (key) {
    window.localStorage.removeItem(key);
}

export const pathMap = {
    index: '首页',
    login: '登录',
    add: '添加商品'
  }