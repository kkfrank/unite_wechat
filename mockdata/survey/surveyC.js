const surveyC = [
  {
    id: 'C1',
    question: '您使用Unity的开发经验是',
    answers: ['没有使用', '0-1年', '1-3年', '不赞同', '3年以上'],
    chooseAnswer: null,
    type: 'C'
  },
  {
    id: 'C2',
    question: '您现在使用的Unity版本',
    answers: ['Unity Pro专业版', 'Unity Plus 加强版', 'Unity Perpetual 永久版', 'Unity Personal 个人版', '没有使用'],
    chooseAnswer: null,
    type: 'C'
  },
  {
    id: 'C3',
    question: '您是如何得知此次活动的（可多选）', //问题
    answers: ['Unity 官网', '朋友/同事', '官方微博/微信', '邮件', '公司', '其他'], //选项
    chooseAnswer: null, // 答案
    type: 'C', // 问卷类型
    isMultiple: true // 是否是多选
  },
  {
    id: 'C4',
    question: '您对Unity相关的哪个领域最感兴趣',
    answers: ['VR/AR/MR', '游戏', '新媒体交互设计', '工业制造（汽车、建筑等）', '动漫影视'],
    chooseAnswer: null,
    type: 'C'
  }
]
export { surveyC }