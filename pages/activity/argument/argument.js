// pages/argument/detail/detail.js
Page({
  /***
   * 用户点击提交按钮
   */
  submit () {
    wx.navigateBack({
      //url: '/pages/survey/list/list',
    })
    setTimeout(function(){
      wx.showModal({
        content: '提交成功，您的优惠码为：abcd-efgh(个人中心查看我的优惠码)',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    },200)
  
    // wx.redirectTo({
    //   url: '/pages/survey/list/list',
    // })
  },
  /***
   * 用户点击星星，进行评分
   */
  changeStar(e) {
    let starList = JSON.parse(JSON.stringify(this.data.starList))
    let activeIndex = e.target.dataset.index
    starList.map((ele, index) => {
      if (index <= activeIndex) {
        ele.className = 'icon-star'
      } else {
        ele.className = 'icon-xiaoxingxing'
      }
    })
    this.setData({
      'starList': starList
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    starList: [{
      className: 'icon-xiaoxingxing'
    }, {
      className: 'icon-xiaoxingxing'
    }, {
      className: 'icon-xiaoxingxing'
    }, {
      className: 'icon-xiaoxingxing'
    }, {
      className: 'icon-xiaoxingxing'
    }],
    teacher: {
      url: 'https://10.url.cn/eth/ajNVdqHZLLCIgUe7QmgPibps3nDVKYMUYKu8Q0yP7qjUMDhm1KXd0JEdO19soD9icicq7Umo5Ua7Cs/',
      name: '悟空',
      profession: '高级讲师',
      result: '一年店铺销售额两千万上亿企业运营总监',
      advantage: '搜索优化、直通ada',
      description: '专业电商从业讲师数据化定制辅导淘宝天猫店铺爆款打造/标题制作/标题优化/手淘首页流量获取/手淘自然搜索流量获取/直通车付费推广/提升直通车质量分/淘宝客推广/生意参谋解析/关键词权重解析/钻展推广/淘宝社区/淘宝直播/活动报名/内容营销/双十一活动淘宝货源/店铺创业网络远程名师在线学习'
    }
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