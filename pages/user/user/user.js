// pages/user/user.js
import { getById } from '../../../api/users.js'
Page({
  // 点击我的礼物，去我的礼物页面
  toMyGift() {
    wx.navigateTo({
      url: '../gift/gift',
    })
  },
  // 点击我的评论，去我的评论页面
  toMyArument() {
    wx.navigateTo({
      url: '../argument/argument',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    user: {
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
      mask: true,
      icon: 'none'
    })
    getById(options.id).then(res=>{
      this.setData({
        'user': res
      })
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})