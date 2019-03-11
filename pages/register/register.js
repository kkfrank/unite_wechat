// pages/register/register.js
Page({
  /***
   * 监听用户输入邮箱
   */
  bindEmailInput(e) {
    this.setData({
      'user.email':e.detail.value
    })
  },
  /***
   * 监听用户输入职位
   */
  bindProfessionInput(e) {
    this.setData({
      'user.profession': e.detail.value
    })
  },
  /***
   * 监听用户输入公司
   */
  bindCompanyInput(e) {
    this.setData({
      'user.company': e.detail.value
    })
  },
  /**
   * 点击这册按钮进行注册
   */
  register(e) {
    let reg = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')
    if(!reg.test(this.data.user.email)){
      wx.showToast({
        title: '邮箱格式错误',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.redirectTo({
        url: '../nav/nav',
      })
    }
    // console.log(e.detail.errMsg)
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
  },
  /**
   * 页面的初始数据
   */
  data: {
    user: {
      email: null,
      profession: null,
      company: null
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