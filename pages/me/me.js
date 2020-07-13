Page({
  data: {

  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },

  gotocoupon: function () {
    wx.navigateTo({
      url: '/pages/me/coupon/coupon'
    })
  },
  gotoshopping:function(){
    wx.switchTab({
      url: '/pages/shopping/shopping',
    })

  },
  onLoad: function (options) {

  },
})