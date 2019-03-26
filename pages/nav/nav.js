// pages/nav/nav.js
import {
  checkSurvey
} from '../../api/survey.js'
Page({
  // 用户点击tips，查看相应活动
  toDetail() {
    wx.navigateTo({
      url: '../activity/detail/detail',
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
    tips: '现在王老师正在讲课，是否前往?',
    user: {
    },
    // 检查survey
    survey: {},
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
        url: '../survey/list/list'
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