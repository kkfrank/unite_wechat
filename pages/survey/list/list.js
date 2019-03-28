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
  surveyC
} from '../../../mockdata/survey/surveyC.js'
import {
  addSurvey,
  checkSurvey
} from '../../../api/survey.js'
Page({
  /**
   * 用户点击提交调查问卷
   */
  submit() {
    let typeMap = new Map([
      ['下午场技术讲座', 'surveyA'],
      ['Workshop', 'surveyB'],
      ['我没有参与下午的活动', 'surveyC']
    ])
    let typeNameMap = new Map([
      ['下午场技术讲座', 'A'],
      ['Workshop', 'B'],
      ['我没有参与下午的活动', 'C']
    ])
    let list = [...this.data.surveyZero, ...this.data[typeMap.get(this.data.typeName)]]
    let noAnswerIndex = 0
    let submitForm = {
      'userId': this.data.user['id'],
      'type': typeNameMap.get(this.data.typeName),
      'questions': []
    }
    list.map((ele, index) => {
      if (!ele.chooseAnswer) {
        noAnswerIndex = index + 1
      }
      submitForm.questions.push({
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

    let that = this
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    addSurvey(submitForm).then(res => {
      wx.hideLoading()
      this.setData({
        'survey.couponCode': res.couponCode
      })
      wx.showModal({
        showCancel: false,
        title: '提示',
        content: '问卷至此结束，凭问卷赠予优惠码购买Unite Shanghai 2019 门票获100元优惠！优惠码仅限使用一次，请妥善使用和保管。感谢您对Unity的支持！',
        success(resp) {}
      })
    })
  },
  /***
   * 当用户选择不同的调查问卷时
   */
  answerQuestion(e) {
    let item = e.detail
    // 判断该题是否为改变调查问卷的那道题
    if (item.isChangeSurvey) {
      this.setData({
        'typeName': item.chooseAnswer
      })
    }
    // 设置用户选择试卷答案
    this.setData({
      [`survey${item.type}[${item.index}].chooseAnswer`]: item.chooseAnswer,
      [`survey${item.type}[${item.index}].chooseAnswerIndex`]: item.chooseAnswerIndex
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    isLoading: false,
    type: 1,
    typeName: null,
    surveyType: null, // 问卷类型
    surveyZero: surveyZero,
    surveyA: surveyA,
    surveyB: surveyB,
    surveyC: surveyC
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const user = JSON.parse(wx.getStorageSync('user'));
    this.setData({
      user: user
    })
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    this.setData({
      'isLoading': true
    })
    checkSurvey(this.data.user.id).then((res) => {
      wx.hideLoading()
      this.setData({
        'survey': res,
        'isLoading': false
      })
      wx.setStorageSync('survey', res)
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

  }
})