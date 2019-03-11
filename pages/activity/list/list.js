// pages/argument/list/list.js
Page({
  // 修改activTab
  changeActiveTab() {
    let list = JSON.parse(JSON.stringify(this.data.tabList))
    list.map((ele, index) => {
      if (index === this.data.currentTab) {
        ele.isActive = true
      } else {
        ele.isActive = false
      }
    })
    this.setData({
      'tabList': list
    })
  },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    let cur = e.target.dataset.current
    this.setData({
      'currentTab': cur
    })
    this.changeActiveTab()
  },
  // 滚动切换标签样式
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.changeActiveTab()
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    tabList: [{
        name: '未开始',
        isActive: true
      },
      {
        name: '进行中',
        isActive: false
      },
      {
        name: '评价',
        isActive: false
      }
    ],
    list: [{
      url: 'https://10.url.cn/eth/ajNVdqHZLLCIgUe7QmgPibps3nDVKYMUYKu8Q0yP7qjUMDhm1KXd0JEdO19soD9icicq7Umo5Ua7Cs/',
      name: '悟空',
      startTime: '2019-09-02',
      endTime: '2019-10-02',
      place: '上海交通大学',
      profession: '高级讲师',
      result: '一年店铺销售额两千万上亿企业运营总监',
      advantage: '搜索优化、直通ada',
      description: '专业电商从业讲师数据化定制辅导淘宝天猫店铺爆款打造/标题制作/标题优化/手淘首页流量获取/手淘自然搜索流量获取/直通车付费推广/提升直通车质量分/淘宝客推广/生意参谋解析/关键词权重解析/钻展推广/淘宝社区/淘宝直播/活动报名/内容营销/双十一活动淘宝货源/店铺创业网络远程名师在线学习'
    }, {
      url: 'https://10.url.cn/eth/ajNVdqHZLLCIgUe7QmgPibps3nDVKYMUYKu8Q0yP7qjUMDhm1KXd0JEdO19soD9icicq7Umo5Ua7Cs/',
      name: '悟空',
      startTime: '2019-09-02',
      endTime: '2019-10-02',
      place: '上海交通大学',
      profession: '高级讲师',
      result: '一年店铺销售额两千万上亿企业运营总监',
      advantage: '搜索优化、直通ada',
      description: '专业电商从业讲师数据化定制辅导淘宝天猫店铺爆款打造/标题制作/标题优化/手淘首页流量获取/手淘自然搜索流量获取/直通车付费推广/提升直通车质量分/淘宝客推广/生意参谋解析/关键词权重解析/钻展推广/淘宝社区/淘宝直播/活动报名/内容营销/双十一活动淘宝货源/店铺创业网络远程名师在线学习'
    }]
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