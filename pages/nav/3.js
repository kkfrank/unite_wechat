// pages/nav/nav.js
import {
  checkSurvey,
  checkSubmitSurvey
} from '../../api/survey.js'
import {
  courses
} from '../../mockdata/courses.js'
import { compareDate } from '../../utils/util.js' 
Page({
  // 检查用户未答题的问卷
  refreshSurvey: function () {
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '加载中...',
      mask: true,
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
  // 用户点击tips，查看相应活动
  toSurvey() {
    wx.navigateTo({
      url: '/pages/survey/list2/list2',
    })
  },
  /**
   * 用户跳转不同的nav
   */
  switchNav(e) {
    wx.navigateTo({
      url: `${e.target.dataset.url}?id=${this.data.user.id}`
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: false,
    unSubmitcourses:[],
    timer: null,
    user: {
    },
    navList: [{
        name: '日程',
        url: '../agenda/list/list'
      },
      {
        name: '讲师',
        url: '../teacher/list/list'
      },
      {
        name: '调查问卷',
        isSurvey: true,
        url: '../survey/list2/list2'
      },
      {
        name: '个人中心',
        url: '../user/user/user'
      },
      {
        name: '关于活动',
        url: '../unity/unity'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
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
    var user = JSON.parse(wx.getStorageSync('user'));
    this.setData({
      user: user
    })
    clearInterval(this.data.timer)
    this.refreshSurvey()
    this.setData({
      'timer': setInterval(this.refreshSurvey, 1000*60*60)
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    clearInterval(this.data.timer)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    clearInterval(this.data.timer)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})