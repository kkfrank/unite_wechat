import {
  surveyZero
} from '../../../mockdata/survey/surveyZero.js'
import {
  surveyA
} from '../../../mockdata/survey/surveyA.js'
import {
  surveyB
} from '../../../mockdata/survey/surveyB.js'
import {
  survey
} from '../../../mockdata/survey/index.js'
import {
  addSurvey
} from '../../../api/survey.js'
Page({

  /***
   * 当用户选择不同的调查问卷时
   */
  answerQuestion(e) {
    let item = e.detail
    // 判断该题是否为改变调查问卷的那道题
    console.log(item)
    // 设置用户选择试卷答案
    this.setData({
      [`showSurvey[${item.index}].chooseAnswer`]: item.chooseAnswer,
      [`showSurvey[${item.index}].chooseAnswerIndex`]: item.chooseAnswerIndex
    })
  },
  /**
   * 用户点击提交调查问卷
   */
  submit() {
    let noAnswerIndex = 0
    let submitForm = {
      'userId': this.data.user['id'],
      'questions': []
    }
    this.data.showSurvey.map((ele, index) => {
      if (!ele.chooseAnswer) {
        noAnswerIndex = index + 1
      }
      submitForm.questions.push({
        'courseId': this.data.courseId,
        'id': ele.id,
        'answer': ele.chooseAnswerIndex instanceof Array ? ele.chooseAnswerIndex.join('#') : ele.chooseAnswerIndex,
        'isMultiple': ele.isMultiple
      })
    })
    if (noAnswerIndex) {
      wx.showToast({
        icon: 'none',
        title: `第${noAnswerIndex}题没有选择`,
      })
      return false
    }
    addSurvey(submitForm).then(res => {
      wx.showToast({
        title: '提交成功',
        icon: 'none',
        duration: 2000,
        success: function(){
          wx.reLaunch({
            url: '/pages/nav/nav',
          })
        }
      })
      
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    showSurvey: [],
    courseId: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const showSurvey = survey.filter(item => {
      if (options.surveyIds.indexOf(item.id) !== -1) {
        return true
      }
    })
    const user = JSON.parse(wx.getStorageSync('user'));
    this.setData({
      'courseId': options.courseId,
      'user': user,
      'showSurvey': showSurvey
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})