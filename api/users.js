import { request} from './request.js'

function register(params = {}) {
  return request('post', `/users`, params);
}
function getById(id) {
  return request('get', `/users/${id}`);
}
function login(code){
  return request('get', `/users/code2session`, {code:code});
}

function getByUnionId(unionId){
  return request('get', `/users/by-unionId`, { unionId:openId})
}

export {
  register,
  login,
  getById,
  getByUnionId
}