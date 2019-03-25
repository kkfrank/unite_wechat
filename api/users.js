import { request} from './request.js'

function register(params = {}) {
  return request('post', `/users`, params);
}
function getById(id) {
  return request('get', `/users/${id}`);
}
function code2session(code){
  return request('get', `/users/code2session`, {code:code});
}

function getByUnionId(unionId){
  return request('get', `/users/by-unionId`, { unionId:openId})
}
function search(params={}){
  return  request('get', `/users`,params)
}
function getPhoneNumber(){
  //{encryptedData:'xxx',openId:'xxx'} 
  return request('get', `/users/phoneNumber`, params)
}
export {
  register,
  code2session,
  search,
  getById,
  getByUnionId,
  getPhoneNumber
}