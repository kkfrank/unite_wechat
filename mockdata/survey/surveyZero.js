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
    question: '技术分享日下午您参与了',
    answers: ['下午场技术讲座', 'Workshop', '我没有参与下午的活动'],
    isChangeSurvey: true,
    chooseAnswer: null,
    type: 'Zero'
  },
]
export { surveyZero }