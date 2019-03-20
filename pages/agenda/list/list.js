// pages/agenda/list/list.js
import { courses } from '../../../mockdata/courses.js';
import teachers from '../../../mockdata/teachers.js';

console.log(courses)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    courses: [] 
  },
  toDetail:function(ev){
    var item = ev.currentTarget.dataset.item;
    if(!item  || !item.isCourse){
      return
    }
    var { id, teacherId} = item;
    console.log(id,teacherId)
    wx.navigateTo({
      url: `../detail/detail?id=${id}&teacherId=${teacherId}`,
    })
  },
  couputeTime:function(startTime,endTime){
    console.log(startTime + endTime.split(' ')[1])
    return startTime + endTime.split(' ')[1]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newCourses = courses.map(function(item){
      if(item.teacherId){
        return{
          ...item,
          teacher: (teachers.filter(t => t.id == item.teacherId))[0]
        }
      }else{
        return item
      }
    })
    console.log(newCourses)
    this.setData({
      courses:newCourses
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




 
})