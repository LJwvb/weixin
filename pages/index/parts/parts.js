
Page({
  //获取应用实例
    data: {
      indexTab:0,
      currentTab: 0 ,
      hidden: false,
      good: {},
      quantity: 0
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
  onLoad: function (options) {
    var orders = wx.getStorageSync("orders");
    this.setData({ quantity: orders.length });
    this.loadingChange();

  },
  addGood: function (e) {//添加商品到购物车
    // console.log(e);
    var id = e.currentTarget.dataset.id;
    var orders = wx.getStorageSync("orders");
    var flag = true;
    var newOrders = [];
    if (orders) {//先判断购物车里是否有该商品，如果有，就在数量上加1
      for (var i = 0; i < orders.length; i++) {
        var order = orders[i];
        if (id == order.id) {
          order.quantity = order.quantity + 1;
          flag = false;
        }
        newOrders.push(order);
      }
    }
    if (flag) {//如果购物车里没有商品,就添加到购物车里
      var goods = wx.getStorageSync("goods");
      for (var i = 0; i < goods.length; i++) {
        var good = goods[i];
        if (id == good.id) {
          good.quantity = 1;
          newOrders.push(good);
          break;
        }
      }
    }
    wx.setStorageSync("orders", newOrders);//将商品保存到本地数据
    wx.showToast({//提示保存成功
      title: '成功',
      icon: 'success',
      duration: 500
    });
    var page = this;
    page.setData({ quantity: newOrders.length });//购物车数量显示
  },
  buy: function (e) {//直接购买
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/shopping/shopping',
      })
    }, 1500)
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
  selected6: function (e) {
    this.setData({
      indexTab: e.target.dataset.index,

    })
  },
  selected7: function (e) {
    this.setData({
      indexTab: e.target.dataset.index,

    })
  },
  selected8: function (e) {
    this.setData({
      indexTab: e.target.dataset.index,

    })
  },
  selected9: function (e) {
    this.setData({
      indexTab: e.target.dataset.index,
    })
  },


})