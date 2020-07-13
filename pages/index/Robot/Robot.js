
Page({
  data: {
    hidden: false,

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
    this.loadingChange()
  },
})