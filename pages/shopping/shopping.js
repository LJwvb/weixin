
Page({
  data: {
    orders: [],//加入到购物车里的商品集合
    selectedAll: false,//全选按钮标志位
    totalPrice: 0 ,//总金额
  
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh();
    this.loadOrders();
  },
  money:function(){
    wx.navigateTo({
      url: '/pages/shopping/money/money',
    })

  },
remove:function(e){
  var orders = wx.getStorageSync('orders');
  wx.removeStorageSync("orders");
  this.loadOrders();
  
},
  loadOrders: function () { //加载购物车里的商品
    var orders = wx.getStorageSync('orders');//从本地缓存数据orders里获取数据
    var newOrders = [];
    var totalPrice = 0;
    var selectedAll = true;
    for (var i = 0; i < orders.length; i++) {
      var order = orders[i];
      if (order.selected) {
        totalPrice += order.price * order.quantity;//计算选中商品的金额，
      } else {
        selectedAll = false;
      }
      newOrders.push(order);
    }
    wx.setStorageSync("orders", newOrders);//重新加入缓存
    this.setData({ totalPrice: totalPrice, orders: newOrders, selectedAll: selectedAll });//数据绑定到页面里
  },
  checkboxChange: function (e) {//每件商品前的复选框操作
    var ids = e.detail.value;//会把选中的复选框的id值，以数组集合的形式传递过来
    var orders = wx.getStorageSync('orders');
    var totalPrice = 0;
    var newOrders = [];
    for (var i = 0; i < orders.length; i++) {
      var order = orders[i];
      var flag = true;
      for (var j = 0; j < ids.length; j++) {
        if (order.id == ids[j]) {//传递过来的ids数组集合值，都是选中的商品，需要计算总的金额
          totalPrice += order.price * order.quantity;
          order.selected = true;//代表该件商品是选中状态
          flag = false;//代表该件商品是选中状态
        }
      }
      if (flag) {
        order.selected = false;
      }
      newOrders.push(order);
    }
    wx.setStorageSync("orders", newOrders);//重新加入缓存数据
    this.loadOrders();//重新加载页面
  },
  checkAll: function (e) {//全选复选框操作函数
    var orders = wx.getStorageSync("orders");
    // console.log(e);
    var newOrders = [];
    var selectedAll = this.data.selectedAll;
    for (var i = 0; i < orders.length; i++) {
      var order = orders[i];
      if (selectedAll) {//如果当前状态值是全选中
        order.selected = false;
      } else {
        order.selected = true;
      }
      newOrders.push(order);
    }
    wx.setStorageSync("orders", newOrders)//重新加入缓存数据
    this.loadOrders();//重新加载页面
  },
  addOrders: function (e) {//添加商品数量函数
    var id = e.currentTarget.id;
    var orders = wx.getStorageSync('orders');
    var addOrders = new Array();
    for (var i = 0; i < orders.length; i++) {
      var order = orders[i];
      if (order.id == id) {
        var quantity = order.quantity;
        order.quantity = quantity + 1;//找到该件商品数量加1
      }
      addOrders[i] = order;
    }

    wx.setStorageSync('orders', addOrders);//重新加入缓存数据
    this.loadOrders();//重新加载页面
  },
  minusOrders: function (e) {//减少商品数量函数
    // console.log(e);
    var id = e.currentTarget.id;

    var orders = wx.getStorageSync('orders');
    var addOrders = new Array();
    var add = true;
    for (var i = 0; i < orders.length; i++) {
      var order = orders[i];
      if (order.id == id) {
        var count = order.quantity;
        if (count >= 2) {
          order.quantity = count - 1;//找到该件商品数量减1
        }
      }
      addOrders[i] = order;
    }
    wx.setStorageSync('orders', addOrders);//重新加入缓存数据
    this.loadOrders();//重新加载页面
  },
  onLoad: function () {
    this.loadOrders();

  },
})