// pages/nav/nav.js
Page({
  /**
   * 用户跳转不同的nav
   */
  switchNav(e) {
    wx.navigateTo({
      url: e.target.dataset.url
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    navList:[
      {
        name: '评论',
        url: '../argument/list/list'
      },
      {
        name: '赞助商',
        url: '../sponsors/list/list'
      },
      {
        name: '场地',
        url: '../place/list/list'
      },
      {
        name: '讲师',
        url: '../teacher/list/list'
      },
      {
        name: '个人中心',
        url: '../user/user'
      }
    ]
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