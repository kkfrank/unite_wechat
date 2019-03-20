// components/questionnaire/questionnaire.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    startIndex: {
      type: Number,
      value: 1,
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），通常 newVal 就是新设置的数据， oldVal 是旧数
        // 新版本基础库不推荐使用这个字段，而是使用 Component 构造器的 observer 字段代替（这样会有更强的功能和更好的性能）
      }
    },
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
    optionsMap: ['A', 'B', 'C', 'D', 'E', 'F']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeAnswer(e) {
      let item = e.target.dataset.item
      let index = e.target.dataset.index
      let chooseAnswer = e.detail.value
      item.chooseAnswer = chooseAnswer
      item.index = index
      this.triggerEvent('answerQuestion', item)
    }
  }
})