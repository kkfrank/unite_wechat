import { request } from './request.js'

function getSurveys(params = {}) {
  return request('post', `/survey/list`, params);
}

function checkSurvey(id) {
  return request('get', `/users/${id}/check_redeem`);
}

function checkSubmitSurvey(id) {
  return request('get', `/users/${id}/check_survey`);
}

function addSurvey(data) {
  return request('post', `/surveys`, data);
}


export {
  getSurveys,
  checkSurvey,
  checkSubmitSurvey,
  addSurvey
}