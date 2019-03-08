// pages/place/list/list.js
Component({
  data: {
    elements: [{
      title: 'unite场馆1',
      name: 'uniteVR',
      color: 'cyan',
      imgNum: '111',
      url: '../detailVR/detailVR',
      icon: 'newsfill'
    },
    {
      title: 'unite场馆2',
      name: 'uniteAR',
      color: 'blue',
      imgNum: '111',
      url: '../detailAR/detailAR',
      icon: 'colorlens'
    },
    {
      title: 'unite场馆3',
      name: 'unite2D',
      color: 'purple',
      imgNum: '111',
      url: '../detail2D/detail2D',
      icon: 'font'
    },
    {
      title: 'unite场馆4',
      name: 'unite3D',
      color: 'mauve',
      imgNum: '111',
      url: '../detail3D/detail3D',
      icon: 'icon'
    },
    {
      title: 'unite场馆5',
      name: 'unityAsset',
      color: 'pink',
      imgNum: '111', 
      url: '../detailAsset/detailAsset',
      icon: 'btn'
    },
    {
      title: 'unite场馆6',
      name: 'unitySubs',
      color: 'brown',
      imgNum: '111',
      url: '../detailSubs/detailSubs',
      icon: 'tagfill'
    } 
    ],
  },
  methods: {
    onLoad() {
      let that = this;
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (!res.authSetting['scope.userInfo']) {
            wx.redirectTo({
              url: '/pages/auth/auth'
            })
          }
        }
      })
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    onShareAppMessage() {
      return {
        title: 'UniteShanghai2019',
        imageUrl: 'https://image.weilanwl.com/color2.0/share2215.jpg',
        path: '/pages/basics/home/home'
      }
    },
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})