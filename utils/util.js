import { courses } from '../mockdata/courses.js'
import { teachers } from '../mockdata/teachers.js'
// 调查问卷中，调查题需要改变多选题的数据结构,如{value:x,isChecked: false}
const transMultiplyChoice = (list) => {
  let newList = JSON.parse(JSON.stringify(list))
  newList.map((ele,eleIndex)=>{
    if (ele.isMultiple) {
      let newAnswers = []
      ele.answers.map((answer,index)=>{
        let obj = {
          value: answer,
          isChecked: false
        }
        newAnswers.push(obj)
      })
      ele.answers = newAnswers
    }
  })
  return newList
}
/***
 * 获取讲师详情时，根据id来获取课程
 */
const getCourseByTeacherId = (id) => {
  let list = []
  courses.map((course) => {
    if (id === course.teacherId) {
      list.push(course)
    }
  })
  return list
}
/***
 * 获取讲师详情时，根据id来获取讲师信息
 */
const getTeacherById = (id) => {
  let obj = {}
  teachers.map((teacher) => {
    if (id === teacher.id) {
      obj = JSON.parse(JSON.stringify(teacher))
    }
  })
  return obj
}
/***
 * arr:[
 *        {key1: value1}
 *        {key2: value2}
 *      ]
 */
const getItemByKey = (arr, key, val) =>{
  if (!arr || arr.length ===0 || !key ){
    return {};
  }
  return arr.filter(item=>item[key]==val)[0] || {}
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function showLoading(options = {}) {
  let { mask, title } = options;
  console.log(mask, title)
  wx.showLoading({
    mask: mask === undefined ? true : mask,
    title: title || '加载中',
  })
}

function hideLoading() {
  wx.hideLoading();
}

function showToast(options = {}) {
  let { title, icon, duration } = options;
  wx.showToast({
    title: title,
    icon: icon || 'none',
    duration: duration || 3000
  })
}
function compareDate(nowDate, startDate, endDate, late = 30 * 60) {
<<<<<<< HEAD
  let nowTime = parseInt(new Date(nowDate.replace(/-/g, "/")).getTime()/1000)
  let startTime = parseInt(new Date(startDate.replace(/-/g, "/")).getTime()/1000)
  let endTime = parseInt(new Date(endDate.replace(/-/g, "/")).getTime()/1000)
  if (((nowTime - late) < endTime) && ((nowTime -late) > startTime)) {
=======
  let nowTime = parseInt(new Date(nowDate).getTime()/1000,10)
  let startTime = parseInt(new Date(startDate).getTime()/1000,10)
  let endTime = parseInt(new Date(endDate).getTime()/1000,10)
  if ((nowTime - late) < endTime && ((nowTime -late) > startTime)) {
>>>>>>> 9101a0dca14666885a66eb0b2bbdd40552cce4e7
    return true
  }
  return false
}
export {
  //or formatTime as something
  formatTime,
  showLoading,
  hideLoading,
  getCourseByTeacherId,
  getTeacherById,
  compareDate,
  getItemByKey,
  transMultiplyChoice,
  showToast
}
