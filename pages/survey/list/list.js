import { surveyZero } from '../../../mockdata/survey/surveyZero.js'
import { surveyA } from '../../../mockdata/survey/surveyA.js'
import { surveyB } from '../../../mockdata/survey/surveyB.js'
import { surveyC } from '../../../mockdata/survey/surveyC.js'
Page({
  /***
   * 当用户选择不同的调查问卷时
   */
  answerQuestion(e) {
    console.log(e)
  },
  /**
   * 页面的初始数据
   */
  data: {
    surveyZero: surveyZero,
    surveyA: surveyA,
    surveyB: surveyB,
    surveyC: surveyC
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

  }
})