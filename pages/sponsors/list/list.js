import { sponsors } from '../../../mockdata/sponsors.js';
import {sponsorsApi} from '../../../api/main.js';
import * as util from '../../../utils/util.js'
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    //sponsors: sponsors
    sponsors: [],
    sponsorType:{
      "0":"金牌赞助商",
      "1": "银牌赞助商",
      "2": "铜牌赞助商",
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //模拟数据
    this.setData({
      //sponsors: sponsors
      sponsors: this.solveSponsors(sponsors)
    })
    return
    util.showLoading();
    var openId =wx.getStorageSync('openId');
    var skey =wx.getStorageSync('skey');
    const list = sponsorsApi.search({ openId: openId, sessionKey:skey}).then(res=>{
      console.log(res)
      if(res.data){
        this.setData({
          sponsors:res.data.list
        })
      } 
    }).catch(error=>{
      console.log(error)
    }).finally(()=>{
        util.hideLoading();
      //模拟数据
      // this.setData({
      //   sponsors: this.solveSponsors(sponsors)
      // })
    });
  },
  solveSponsors: function (sponsors){
    return sponsors.sort((a,b)=>{
      return a.type - b.type
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