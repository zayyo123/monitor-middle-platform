import { request } from "./jsError";

export function getJsError () {
  return request({
    url: '/getJsError'
  })
}
export function jsSituation () {
  return request({
    url: '/jsSituation'
  })
}
export function jshealth () {
  return request({
    url: '/health'
  })
}
