import { request} from './request.js'

function register(params = {}) {
  return request('post', `/users`, params);
}

function login(code){
  return request('get', `/users/code2session`, {code:code});
}

function getByOpenId(openId){
  return request('get', `/users/by-openId`, { openId:openId})
}

export {
  register,
  login,
  getByOpenId
}