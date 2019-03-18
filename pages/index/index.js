import { userApi } from '../../api/main.js';
import * as util from '../../utils/util.js'
Page({
  // 点击‘走进unity'跳转到首页
  toUnity() {
    util.showLoading();
    //for test
    wx.clearStorage()
    wx.redirectTo({ url: '/pages/register/register' })
    return

    var loginFlag = wx.getStorageSync('skey');
    if (loginFlag) {
      wx.checkSession({
        success() {// session_key 未过期，并且在本生命周期一直有效
          wx.redirectTo({ url: '/pages/nav/nav' }) // jsut use absolute path
        },
        fail() {// session_key 已经失效，需要重新执行登录流程
          console.log('sessoin invliad, do login again')
          this.doLogin()
        }
      })
    } else {//first login
      this.doLogin();
    }
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
  doLogin: function () {
    wx.login({// 登录
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        userApi.login(res.code).then(res => {
          console.log('success', res)

          var openId = res.data.openId;
          wx.setStorageSync('openId', res.data.openId);
          wx.setStorageSync('skey', res.data.sessionKey);

          userApi.getByUnionId(openId).then(res1 => {
            console.log('res1', res1)
            if (res1.data) {//have register
              wx.redirectTo({ url: '/pages/nav/nav' })
            } else {
              wx.redirectTo({ url: '/pages/register/register' })
            }
          }).catch(err1 => {
            console.log(err1)
            // jsut for test
            wx.redirectTo({ url: '/pages/register/register' })
          })

        }).catch(err => {
          console.log('err', err)
          // jsut for test
          wx.redirectTo({ url: '/pages/register/register' })
        }).finally(() => {

        })
      }
    })
  }
})