var courses = [
  {
    id: "1", 
    startTime: "2019-03-29 9:30",
    endTime:"2019-03-29 10:00",
    title: '签到，unity宣传影片赏析',
    isCourse: false
  },
  {
    id: "2", // 课程id
    surveyIds:["Zero3"],
    teacherId:'lwx', // 讲师的id
    startTime: "2019-03-29 10:00", // 讲课开始时间
    endTime: "2019-03-29 11:00",// 讲课结束时间
    title: 'Unity引擎源码解析-ShaderLab原理及优化', // 主题
    teacher: '刘伟贤', // 讲师名称
    isCourse: true, // 是否是课程还是休息时间
    desc: "ShaderLab是一套跨平台，高易用性的开发语言，管理着运行时Shader的加载和使用。开发者使用ShaderLab可以高效的开发出适用于不同平台，不同设备的Shader。在游戏开发中，对于ShaderLab资源的管理和优化是非常重要的一环。Unity技术支持工程师刘伟贤将结合Unity引擎源代码，深入讲解ShaderLab背后的设计思想和实现原理，分析ShaderLab资源的管理策略，同时对游戏开发过程中如何高效使用ShaderLab资源给出建议。"
    }, // 课程描述
  {
    id: "3",
    surveyIds: ["Zero4"],
    teacherId: 'ly',
    startTime: "2019-03-29 11:00",
    endTime: "2019-03-29 12:00",
    title: '使用摄影制图法打造3A级人物角色',
    teacher: '林宇',
    isCourse: true,
    desc: "摄影制图法是通过使用多张真实世界物体的照片建立可重复使用，数字化资源的过程。摄影制图法可以帮助开发者节省在3D软件中进行建模的时间，同时生成高分辨率面部纹理，从而提高人物角色在游戏中的真实性品质效果。Unity技术美术林宇将介绍创建实时人物角色从扫描到最后渲染效果的工作流程，以及当前国外领先的工作室如何使用摄影制图法，修改光照对纹理的颜色偏差和处理扫描后模型的优化。你将学习使用Unity最新的高清晰渲染管线HDRP自带的SSS效果去实现皮肤材质，以及分享一些开源的工程资源。"
  },
  {
    id: "4",
    startTime: "2019-03-29 12:00",
    endTime: "2019-03-29 14:00",
    title: '午休',
    isCourse: false
  },
  {
    id: "5",
    surveyIds: ["A1"],
    teacherId: 'ycy',
    startTime: "2019-03-29 14:00",
    endTime: "2019-03-29 15:00",
    title: '使用Visual Effect Graph实现酷炫的特效',
    teacher: '殷崇英',
    isCourse: true,
    desc: "Visual Effect Graph使用在GPU运行的计算着色器和基于节点的工作流程，可以产生大量粒子并能实现复杂的特效。Unity技术经理殷崇英将通过案例演示如何使用Visual Effect Graph，通过介绍节点和属性模块的使用方法，以及指导更贴近项目的工作流程，帮助你轻松掌握使用VisualEffect Graph制作酷炫的视觉特效。"
  },
  {
    id: "6",
    surveyIds: ["A2"],
    teacherId: 'zlm',
    startTime: "2019-03-29 15:00",
    endTime: "2019-03-29 16:00",
    title: 'Unity性能优化经验分享',
    teacher: '张黎明',
    isCourse: true,
    desc: "在移动游戏在追求更高画质，更复杂的玩法的当下，对游戏性能的需求日益显著。在游戏上线前，研发团队可能会遇到各种游戏卡顿，内存不足导致的崩溃，以及帧率低，游戏运行不流畅等问题。游戏的性能优化成为了重中之重，也是很多开发者面对的最大难题。Unity大中华区技术总监张黎明将介绍常用的Unity性能分析工具，分享常见性能问题和一些性能优化技巧，帮助你掌握找到并解决项目中疑难杂症的方法。"
  },
  {
    id: "7",
    surveyIds: ["A3"],
    teacherId: 'cl',
    startTime: "2019-03-29 16:00",
    endTime: "2019-03-29 17:00",
    title: 'Unity 2018.3版本新功能介绍',
    teacher: '成亮',
    isCourse: true,
    desc: "作为Unity 2018的最后一个技术前瞻Tech版本，Unity 2018.3带来了许多非常重要的新功能。包括：预制件工作流、原有的影视级工具Timeline、Cinemachine、世界构建工具以及引擎主体的一些功能。Unity 2018.3在2D方面、粒子系统、DCC工具流以及图形方向也带来了许多非常惊艳的新技术。Unity技术经理成亮将给各位开发者纵览Unity 2018.3众多新变化，帮助使用启发Unity创作的可能性。"
  },
  {
    id: "8",
    surveyIds: ["B1", "B2","B3"],
    startTime: "2019-03-29 14:00",
    endTime: "2019-03-29 17:20",
    title: 'Workshop ：项目性能诊断与美术指导',
    isCourse: false
  },
  {
    id: "type",
    surveyIds: ["Zero1", "Zero2", "Zero5", "Zero6", "Zero7", "Zero8"],
    startTime: "2019-03-29 11:30",
    endTime: "2019-03-29 17:20",
    title: '问卷',
    specialSurvey: true,
    isCourse: false
  }
]
export {courses}