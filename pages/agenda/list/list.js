// pages/agenda/list/list.js
import { courses } from '../../../mockdata/courses.js';
console.log(courses)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    courses: courses 
  },
  toDetail:function(ev){
    console.log(ev.currentTarget.dataset);
    var item = ev.currentTarget.dataset.item;
    if(!item  || !item.isCourse){
      return
    }
    var { id, teacherId} = item;
    console.log(id,teacherId)
    wx.redirectTo({
      url: `../detail/detail?id=${id}&teachId=${teacherId}`,
    })
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




 
})