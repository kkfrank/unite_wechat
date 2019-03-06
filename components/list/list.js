// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），通常 newVal 就是新设置的数据， oldVal 是旧数
        // 新版本基础库不推荐使用这个字段，而是使用 Component 构造器的 observer 字段代替（这样会有更强的功能和更好的性能）
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /***
     * 点击列表去详情页面
     */
    toDetail(e) {
      console.log(e)
      wx.navigateTo({
        url: '../detail/detail',
      })
    },
  }
})