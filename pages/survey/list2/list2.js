import {
  survey
} from '../../../mockdata/survey/index.js'
import {
  courses
} from '../../../mockdata/courses.js'
import {
  teachers
} from '../../../mockdata/teachers.js'
import { compareDate } from '../../../utils/util.js' 
import {
  addSurvey,
  checkSurvey,
  checkSubmitSurvey
} from '../../../api/survey.js'
Page({
  toDetail(ev) {
    var item = ev.currentTarget.dataset.item
    var {
      surveyIds,id
    } = item
    wx.navigateTo({
      url: `../detail2/detail?surveyIds=${surveyIds}&courseId=${id}`
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    timer: null,
    isLoading: false,
    type: 1,
    typeName: null,
    surveyType: null, // 问卷类型
    survey: survey,
    unSubmitcourses: [], // 当前时间还可以答题的课程
    teachers: teachers
  },

  /**
   * 生命周期函数--监听页面加载
   */
  refreshSurvey: function() {
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '加载中...',
      icon: 'none'
    })
    checkSubmitSurvey(this.data.user.id).then(res => {
      let submitCourseIds = res.submitSurvey;
      let nowDate = res.time;
      const unSubmitcourses = courses.filter(item => {
        // 判断课程是否含有题目
        if (!item.surveyIds) {
          return false
        }
        // 判断课程是否已经提交
        if (submitCourseIds.indexOf(item.id) !== -1) {
          return false
        }
        // 判断该课程是否已经到时间可以答题
        if (!compareDate(nowDate, item.startTime, item.endTime)) {
          return false
        }
        return true
      })
      
      this.setData({
        isLoading: false,
        unSubmitcourses: unSubmitcourses
      })
      wx.hideLoading()
    })
  },
  onLoad: function(options) {
    const user = JSON.parse(wx.getStorageSync('user'))
    this.setData({
      user: user
    })
    this.refreshSurvey()
    this.setData({
      'timer': setInterval(this.refreshSurvey, 1000 * 60)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    clearInterval(this.data.timer)
  }
})