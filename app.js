import { userApi } from '/api/main.js';
import * as util from '/utils/util.js'

App({
  onLaunch: function () {
    util.showLoading();
    //for test
    wx.redirectTo({ url: '/pages/register/register', })
    return
    wx.clearStorage();// for test
    var loginFlag = wx.getStorageSync('skey');
    if(loginFlag){
      wx.checkSession({
        success() {// session_key 未过期，并且在本生命周期一直有效
          wx.redirectTo({ url: '/pages/nav/nav' }) // jsut use absolute path
        },
        fail() {// session_key 已经失效，需要重新执行登录流程
          console.log('sessoin invliad, do login again')
          this.doLogin()
        }
      })
    }else{//first login
      this.doLogin();
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res, wx.getStorageSync('skey'))
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  doLogin:function(){
    wx.login({// 登录
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        userApi.login(res.code).then(res => {
          console.log('success', res)

          var openId = res.data.openId;
          wx.setStorageSync('openId', res.data.openId);
          wx.setStorageSync('skey', res.data.sessionKey);

          userApi.getByUnionId(openId).then(res1=>{
            console.log('res1',res1)
            if (res1.data) {//have register
              wx.redirectTo({ url: '/pages/nav/nav' })
            }else{
              wx.redirectTo({ url: '/pages/register/register' })
            }
          }).catch(err1=>{
            console.log(err1)
            // jsut for test
            wx.redirectTo({ url: '/pages/register/register'})
          })
        
        }).catch(err => {
          console.log('err', err)
          // jsut for test
         // wx.redirectTo({ url: '../register/register'})
          wx.redirectTo({ url: '/pages/register/register' })
        }).finally(() => {

        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})