/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-08-25 05:37:23
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-25 09:11:53
 * @FilePath: /t1/src/services/jsError/jsError.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'https://koa-monitorrver-koa-dxsjkmwnnu.cn-hangzhou.fcapp.run/api/mp',
    // https://koa-monitorrver-koa-dxsjkmwnnu.cn-hangzhou.fcapp.run/api/mp/mountArr
    timeout: 5000
  })

  return instance(config)
}