import { userApi } from '../../api/main.js';
import * as util from '../../utils/util.js'
Page({
  // 点击‘走进unity'跳转到首页
  toUnity() {
    util.showLoading();
    //for test
    // wx.clearStorage()
    // wx.redirectTo({ url: '/pages/register/register' })
    // return
    this.doLoginOrRegister();

    // var loginFlag = wx.getStorageSync('skey');
    // if (loginFlag) {
    //   wx.checkSession({
    //     success() {// session_key 未过期，并且在本生命周期一直有效
    //       wx.redirectTo({ url: '/pages/nav/nav' }) // jsut use absolute path
    //     },
    //     fail() {// session_key 已经失效，需要重新执行登录流程
    //       console.log('sessoin invliad, do login again')
    //       this.doLogin()
    //     }
    //   })
    // } else {//first login
    //   this.doLogin();
    // }
  },
  getPhoneNumber(e){
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  data: {
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
  doLoginOrRegister: function () {
    wx.login({// 登录
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        userApi.code2session(res.code).then(res => {
          console.log('success', res)
          var openId = res.openid;
          var sessionKey = res.sessionKey
          wx.setStorageSync('openId', openId);
          wx.setStorageSync('skey', sessionKey);
          //userApi.getByUnionId(openId).then(res1 => {
          userApi.search({ 'open_id': openId}).then(users => {
            console.log('res1', users)
            if (users && users.length>0) {//have register
              wx.setStorageSync('user', JSON.stringify(users[0]));
              wx.redirectTo({ url: '/pages/nav/nav' })
            } else {
              wx.redirectTo({ url: '/pages/register/register' })
            }
          }).catch(err1 => {
            console.log(err1)
            // jsut for test
            //wx.redirectTo({ url: '/pages/register/register' })
          })
        }).catch(err => {
          console.log('err', err)
          // jsut for test
          //wx.redirectTo({ url: '/pages/register/register' })
        }).finally(() => {
        })
      }
    })
  }
})