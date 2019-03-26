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
    if (e.target.dataset.survey) {
      // 判断是否含有优惠码
      if (this.data.survey.couponCode) {
        wx.navigateTo({
          url: `../survey/finished/finished?couponCode=${this.data.survey.couponCode}`
        })
      } else if (!this.data.survey.surveyType) {
        wx.navigateTo({
          url: '../survey/wait/wait'
        })
      } else {
        wx.navigateTo({
          url: e.target.dataset.url
        })
      }
    } else {
      wx.navigateTo({
        url: `${e.target.dataset.url}?id=${this.data.user.id}`
      })
    }
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
        url: '../survey/list/list',
        isSurvey: true
      },
      {
        name: '个人中心',
        url: '../user/user/user'
      },
      {
        name: '关于Unity',
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
    if(!wx.getStorageSync('survey').couponCode){
      wx.showLoading({
        title: '加载中...',
        icon: 'none'
      })
      checkSurvey(this.data.user.id).then((res) => {
        wx.hideLoading()
        this.setData({
          'survey': res
        })
        wx.setStorageSync('survey', res)
      })
    } else {
      this.setData({
        'survey': wx.getStorageSync('survey')
      })
    }
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