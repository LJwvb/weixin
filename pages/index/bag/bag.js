Page({
  data: {
    hidden: false,
    indexTab: 0,
    currentTab: 0,
    src: ['/image/bag/a.png'],
    name: ['黑色']
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  loadingChange() {
    setTimeout(() => {
      this.setData({
        hidden: true
      })
    }, 2000)
  },
  changTab: function (event) {
    this.setData({
      currentTab: event.target.dataset.current
    })
  },
  selected: function (e) {
    this.setData({
      indexTab: e.target.dataset.index,
    })
  },
  selected1: function (e) {
    this.setData({
      indexTab: e.target.dataset.index,
    })
  },
  selected2: function (e) {
    this.setData({
      indexTab: e.target.dataset.index,
    })
  },
  selected3: function (e) {
    this.setData({
      indexTab: e.target.dataset.index,
    })
  },
  selected4: function (e) {
    this.setData({
      indexTab: e.target.dataset.index,

    })
  },
  selected5: function (e) {
    this.setData({
      indexTab: e.target.dataset.index,
    })
  },
  select:function(e){
    var index = e.target.dataset.index;
       if(index==0){
         this.setData({
           src: "/image/bag/a.png",
           name:'黑色'
         })
       }
       else if (index == 1){
        this.setData({
          src: "/image/bag/a1.png",
          name: '白色'
        })
      } else if (index == 2) {
        this.setData({
          src: "/image/bag/a2.png",
          name: '灰色'
        })
      } else if (index == 3) {
        this.setData({
          src: "/image/bag/a3.png",
          name: '深蓝色'
        })
      } else if (index == 4) {
        this.setData({
          src: "/image/bag/a4.png",
          name: '天蓝色'
        })
      }
    
      
    },
   
  
  onLoad: function (options) {
    this.loadingChange()

  },

})