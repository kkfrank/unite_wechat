import { request } from './request.js'

function getDetail(id,params={}){
  return request('get',`/sponsors/${id}`,params);
}
function search(params={}){
  return request('get','/sponsors',params);
}

export{
  getDetail,
  search
}