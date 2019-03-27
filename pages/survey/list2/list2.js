import {
  surveyZero
} from '../../../mockdata/survey/surveyZero.js'
import {
  surveyA
} from '../../../mockdata/survey/surveyA.js'
import {
  surveyB
} from '../../../mockdata/survey/surveyB.js'
import {
  surveyC
} from '../../../mockdata/survey/surveyC.js'
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
    var item = ev.currentTarget.dataset.item;

    var {
      surveyIds,id
    } = item;
    wx.navigateTo({
      url: `../detail2/detail?surveyIds=${surveyIds}&courseId=${id}`
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    isLoading: false,
    type: 1,
    typeName: null,
    surveyType: null, // 问卷类型
    surveyZero: surveyZero,
    surveyA: surveyA,
    surveyB: surveyB,
    surveyC: surveyC,
    survey: survey,
    unSubmitcourses: [],
    teachers: teachers
  },

  /**
   * 生命周期函数--监听页面加载
   */
  refreshSurvey: function() {
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
        if (!compareDate('2019-03-29 16:29:11', item.startTime, item.endTime)) {
          return false
        }
        return true
      })
      this.setData({
        unSubmitcourses: unSubmitcourses
      })
    })

  },
  onLoad: function(options) {
    const user = JSON.parse(wx.getStorageSync('user'));
    this.setData({
      user: user
    })
    this.refreshSurvey()
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

  }
})