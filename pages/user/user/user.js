// pages/user/user.js
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
      name: 'kobe',
      industry: 'IT',
      telephone: '13020271731',
      email: '2025506282@qq.com',
      profession: 'Web开发',
      company: 'Unity'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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