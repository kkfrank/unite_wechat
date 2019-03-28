const surveyZero = [
  {
    id: 'Zero1',
    question: '您所在的团队规模是', // 问题
    answers: ['1人', '2-4人', '5-10人', '11-20人', '21-50人', '50人以上'],// 答案
    chooseAnswer: null, // 选择的答案
    type: 'Zero' // 调差问卷类型
  },
  {
    id: 'Zero2',
    question: '您对本次活动的整体评价',
    answers: ['非常满意', '满意', '一般', '不满意', '非常不满意'],
    chooseAnswer: null,
    type: 'Zero'
  },
  {
    id: 'Zero3',
    question: '《Unity引擎源码解析- ShadeLab原理及优化》中，Unity讲师具备符合主题的知识、演讲技巧和完善的课程内容？（PPT，视频和Demos）',
    answers: ['非常赞同', '赞同', '一般', '不赞同', '非常不赞同'],
    chooseAnswer: null,
    type: 'Zero'
  },
  {
    id: 'Zero4',
    question: '《使用摄影制图法打造3A级人物角色》中，Unity讲师具备符合直播主题的知识、演讲技巧和完善的课程内容？（PPT，视频和Demos）',
    answers: ['非常赞同', '赞同', '一般', '不赞同', '非常不赞同'],
    chooseAnswer: null,
    type: 'Zero'
  },
  {
    id: 'Zero5',
    question: '您使用Unity的开发经验是',
    answers: ['没有使用', '0-1年', '1-3年', '不赞同', '3年以上'],
    chooseAnswer: null,
    type: 'Zero'
  },
  {
    id: 'Zero6',
    question: '您现在使用的Unity版本',
    answers: ['Unity Pro专业版', 'Unity Plus 加强版', 'Unity Perpetual 永久版', 'Unity Personal 个人版', '没有使用'],
    chooseAnswer: null,
    type: 'Zero'
  },
  {
    id: 'Zero7',
    question: '您是如何得知此次活动的（可多选）',
    answers: ['Unity 官网', '朋友/同事', '官方微博/微信', '邮件', '公司', '其他'],
    chooseAnswer: null,
    type: 'Zero',
    isMultiple: true
  },
  {
    id: 'Zero8',
    question: '您对Unity相关的哪个领域最感兴趣',
    answers: ['VR/AR/MR', '游戏', '新媒体交互设计', '工业制造（汽车、建筑等）', '动漫影视'],
    chooseAnswer: null,
    type: 'Zero'
  }
]
export { surveyZero }