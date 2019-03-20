import { courses } from '../mockdata/courses.js'
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
    duration: duration || 2000
  })
}
export {
  //or formatTime as something
  formatTime,
  showLoading,
  hideLoading,
  getCourseByTeacherId,
  showToast
}
