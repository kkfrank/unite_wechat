import { request} from './request1.js'

function register(params = {}) {
  return request('post', `/users`, params);
}

function login(code){
  return request('get', `/users/code2session`, {code:code});
}

export {
  register,
  login
}