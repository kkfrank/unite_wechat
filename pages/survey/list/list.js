import { courses } from '../../../mockdata/courses.js';
import { teachers } from '../../../mockdata/teachers.js';
import * as util from '../../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var coursesId=['2','3'];
    var newCourses = coursesId.map(function(id){
      var course = util.getItemByKey(courses,'id',id)
      return {
        ...course,
        teacher: util.getItemByKey(teachers, 'id', course.teacherId)
      }
    })

    this.setData({
      courses: newCourses
    })
    console.log(courses)
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

  }
})