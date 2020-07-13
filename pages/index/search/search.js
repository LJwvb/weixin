// pages/index/search/search.js
Page({
  data: {
    change:'换一批',
    tips:["手机","TNT显示屏","路由器","罗永浩", "时尚套女装","锤子" ]
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  resetSearch: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  change:function(e){
    if (this.data.change == '换一批'){
      this.setData({
        tips: ["华为手机", "男装", "手表", "冰箱", "空调", "蓝牙耳机"],
        change:''
      })
    }else{
      this.setData({
        tips: ["手机", "TNT显示屏", "路由器", "罗永浩", "时尚套女装", "锤子"],
         change: '换一批'
      })
    }

    
   

    
  }

})