// pages/register/register.js
import {
  userApi
} from '../../api/main.js';
import * as util from '../../utils/util.js'
Page({
  toService() {
    wx.navigateTo({
      url: '/pages/browser/browser',
    })
    return false
  },
  // 监听用户是否勾选
  changeChecked(e) {
    let isChecked = !this.data.isChecked
    this.setData({
      'isChecked': isChecked
    })
  },
  /***
   * 监听用户选择行业
   */
  bindIndustriesChange(e) {
    let index = e.detail.value
    this.setData({
      'user.industry': this.data.industries[index]
    })
  },
  /***
   * 监听用户输入姓名
   */
  bindNameInput(e) {
    this.setData({
      'user.name': e.detail.value
    })
  },
  /***
   * 监听用户输入邮箱
   */
  bindEmailInput(e) {
    this.setData({
      'user.email': e.detail.value
    })
  },
  /***
   * 监听用户输入职位
   */
  bindProfessionInput(e) {
    let index = e.detail.value
    this.setData({
      'user.profession': this.data.professions[index]
    })
  },
  /***
   * 监听用户输入公司
   */
  bindCompanyInput(e) {
    this.setData({
      'user.company': e.detail.value
    })
  },
  /**
   * 点击这册按钮进行注册
   */
  register(e) {
    if (!this.data.user.name) {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    let reg = /^(.+)@(.+){1,}\.(.+)$/
    if (!reg.test(this.data.user.email)) {
      wx.showToast({
        title: '邮箱格式错误',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    if (!this.data.user.company) {
      wx.showToast({
        title: '请填入公司',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if (!this.data.user.industry) {
      wx.showToast({
        title: '请选择行业',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if (!this.data.user.profession) {
      wx.showToast({
        title: '请选择职位',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if (!this.data.isChecked) {
      wx.showToast({
        title: '请勾选服务条款',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    // wx.redirectTo({
    //   url: '../nav/nav',
    // })
    // return false;
    util.showLoading();
    let openId = wx.getStorageSync('openId');
    let telephone = '';
    let unionId = ''
    let {
      name,
      email,
      industry,
      profession,
      company
    } = this.data.user
    userApi.register({
      "name": name,
      "email": email,
      "industry": industry,
      "company": company,
      "profession": profession,
      "open_id": openId,
      "union_id": unionId,
      telephone: telephone
    }).then(res => {
      wx.setStorageSync('user', JSON.stringify(res));
      wx.redirectTo({
        url: '../nav/nav',
      })
    }).catch(error => {
      util.showToast({
        title: error.errMsg
      })
    }).finally(() => {
      util.hideLoading();
      //
      // wx.redirectTo({
      //   url: '../nav/nav',
      // })
    })

    // console.log(e.detail.errMsg)
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
  },
  /**
   * 页面的初始数据
   */
  data: {
    isChecked: false, //默认没有选中服务条款
    industries: [
      '游戏',
      '院校教育/职业培训',
      '硬件',
      '平台/电商',
      '视频',
      '建筑',
      '医疗',
      '旅游',
      '军事/航空航天',
      '出版',
      '政府',
      '教育产品',
      '广告/媒体/艺术',
      '影视',
      '其他'
    ],
    professions: [
      'CEO/COO',
      'CTO/技术总监/技术专家',
      '技术经理',
      '程序员',
      '美术/策划',
      '学生',
      '市场/商务/销售',
      '院校教师',
      '广告/媒体/导演',
      '其他'
    ],
    user: {
      name: null,
      industry: '',
      email: null,
      profession: '',
      company: null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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