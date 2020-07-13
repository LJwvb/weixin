Page({ 
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  TopIndex:0,
  indicatorDots: true,
  autoplay: true,
  interval: 5000,
  duration: 1000,
  imgUrls: [
    "/image/lunbo/a.jpg",
    "/image/lunbo/b.jpg",
    "/image/lunbo/c.png",
    "/image/lunbo/d.png"
  ],
    navs: []
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  onLoad:function(options) {
    var page = this;
    var navs = this.loadNavData();
    page.setData({ 
      navs: navs
    })
  },
  miaosha:function(e){
    var index=e.currentTarget.dataset.index;
    this.setData({
      TopIndex:index
    })

  },
  search:function(){
    wx.navigateTo({
      url: '/pages/index/search/search'
    })
  },
  navBtn: function (e) {
    var id = e.currentTarget.id;
    if (id == "0") {
      wx.navigateTo({
        url: '/pages/index/phone/phone'
      })
    }
    if (id == "1") {
      wx.navigateTo({
        url: '/pages/index/parts/parts'
      })
    }
    if (id == "2") {
      wx.navigateTo({
        url: '/pages/index/bag/bag'
      })
    }
    if (id == "3") {
      wx.navigateTo({
        url: '/pages/index/Printer/Printer'
      })
    }
    if (id == "4") {
      wx.navigateTo({
        url: '/pages/index/Robot/Robot'
      })
    }
    if (id == "5") {
      wx.navigateTo({
        url: '/pages/index/show/show'
      })
    }
    if (id == "6") {
      wx.navigateTo({
        url: '/pages/index/service/service'
      })
    }
  },
  imgBtn_a:function(){
    wx.navigateTo({
      url: '/pages/index/show/show'
    })
  },
  imgBtn_b: function () {
    wx.navigateTo({
      url: '/pages/index/phone/phone'
    })
  },
  imgBtn_c: function () {
    wx.navigateTo({
      url: '/pages/index/bag/bag'
    })
  },
  imgBtn_d: function () {
    wx.navigateTo({
      url: '/pages/index/more/more'
    })
  },
  imgBtn_e: function () {
    wx.navigateTo({
      url: '/pages/index/Robot/Robot'
    })
  },
  imgBtn_f: function () {
    wx.navigateTo({
      url: '/pages/index/Printer/Printer'
    })
  },
  loadNavData: function () {
    var navs = [];
    var nav0 = new Object();
    nav0.img = '../../image/icon/phone.png';
    nav0.name = '手机';
    navs[0] = nav0;
    var nav1 = new Object();
    nav1.img = '../../image/icon/parts.png';
    nav1.name = '官方配件';
    navs[1] = nav1;
    var nav2 = new Object();
    nav2.img = '../../image/icon/bag.png';
    nav2.name = '服饰箱包';
    navs[2] = nav2;
    var nav3 = new Object();
    nav3.img = '../../image/icon/Printer.png';
    nav3.name = '打印机';
    navs[3] = nav3;
    var nav4 = new Object();
    nav4.img = '../../image/icon/Robot.png';
    nav4.name = '机器人';
    navs[4] = nav4;
    var nav5 = new Object();
    nav5.img = '../../image/icon/show.png';
    nav5.name = '显示屏';
    navs[5] = nav5;
    var nav6 = new Object();
    nav6.img = '../../image/icon/service.png';
    nav6.name = '服务';
    navs[6] = nav6;
    var nav7 = new Object();
    nav7.img = '../../image/icon/more.png';
    nav7.name = '更多';
    navs[7] = nav7;
    return navs
  },
 
  })