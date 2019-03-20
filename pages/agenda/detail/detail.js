// pages/agenda/detail/detail.js
import { courses } from '../../../mockdata/courses.js';
import { teachers }  from '../../../mockdata/teachers.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course:{},
    teacher:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let { id, teacherId } = options
    var course = courses.filter((item) => item.id == id)[0]
    var teacher = teachers.filter((item)=>item.id == teacherId)[0]
    console.log(course, teacher)
    this.setData({
      course: course,
      teacher: teacher
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