//app.js
App({
  onLaunch: function () {
    var goods = wx.getStorageSync('goods');
    if (!goods) {
      goods = this.loadGoods();
    }
    wx.setStorageSync('goods', goods);
  },
  loadGoods: function () {

    var goods = new Array();

    var good = new Object();
    good.id = "1";//商品唯一标识
    good.pic = '/image/phone/a1.png'; //商品图片
    good.name = '坚果 Pro 3 黑色';//商品名称
    good.price = '2399.00';//商品现价
    goods[0] = good;

    var good1 = new Object();
    good1.id = "2";//商品唯一标识
    good1.pic = '/image/phone/a2.png'; //商品图片
    good1.name = '坚果 Pro 3 白色';//商品名称
    good1.price = '2399.00';//商品现价
    goods[1] = good1;

    var good2 = new Object();
    good2.id = "3";//商品唯一标识
    good2.pic = '/image/phone/a3.png'; //商品图片
    good2.name = '坚果 Pro 3 松绿色';//商品名称
    good2.price = '2599.00';//商品现价
    goods[2] = good2;

    var good3 = new Object();
    good3.id = "4";//商品唯一标识
    good3.pic = '/image/phone/b1.png'; //商品图片
    good3.name = '坚果 Pro 2S 碳黑色（细红线版)';//商品名称
    good3.price = '1798.00';//商品现价
    goods[3] = good3;

    var good4 = new Object();
    good4.id = "5";//商品唯一标识
    good4.pic = '/image/phone/b2.png'; //商品图片
    good4.name = '坚果 Pro 2S 炫光蓝';//商品名称
    good4.price = '1798.00';//商品现价
    goods[4] = good4;

    var good5 = new Object();
    good5.id = "6";//商品唯一标识
    good5.pic = '/image/phone/b3.png'; //商品图片
    good5.name = '坚果 Pro 2S 炫光红';//商品名称
    good5.price = '1798.00';//商品现价
    goods[5] = good5;

    var good6 = new Object();
    good6.id = "7";//商品唯一标识
    good6.pic = '/image/phone/b4.png'; //商品图片
    good6.name = '坚果 Pro 2S 纯白色';//商品名称
    good6.price = '1798.00';//商品现价
    goods[6] = good6;

    var good7 = new Object();
    good7.id = "8";//商品唯一标识
    good7.pic = '/image/phone/c1.png'; //商品图片
    good7.name = '坚果 Pro 2 特别版 碳黑色';//商品名称
    good7.price = '1899.00';//商品现价
    goods[7] = good7;

    var good8 = new Object();
    good8.id = "9";//商品唯一标识
    good8.pic = '/image/phone/c2.png'; //商品图片
    good8.name = '坚果 Pro 2 特别版 酒红色';//商品名称
    good8.price = '1899.00';//商品现价
    goods[8] = good8;

    var good9 = new Object();
    good9.id = "10";//商品唯一标识
    good9.pic = '/image/phone/c3.png'; //商品图片
    good9.name = '坚果 Pro 2 特别版 浅金色';//商品名称
    good9.price = '1899.00';//商品现价
    goods[9] = good9;

    var good10 = new Object();
    good10.id = "11";//商品唯一标识
    good10.pic = '/image/phone/d1.png'; //商品图片
    good10.name = '坚果 R1 碳黑色（细红线版';//商品名称
    good10.price = '2999.00';//商品现价
    goods[10] = good10;

    var good11 = new Object();
    good11.id = "12";//商品唯一标识
    good11.pic = '/image/phone/d2.png'; //商品图片
    good11.name = '坚果 R1 纯白色';//商品名称
    good11.price = '2999.00';//商品现价
    goods[11] = good11;

    var good12 = new Object();
    good12.id = "13";//商品唯一标识
    good12.pic = '/image/phone/d3.png'; //商品图片
    good12.name = '坚果 R1 蓝色';//商品名称
    good12.price = '2999.00';//商品现价
    goods[12] = good12;

    var good13 = new Object();
    good13.id = "14";//商品唯一标识
    good13.pic = '/image/parts/a1.png'; //商品图片
    good13.name = 'Smartisan 真无线蓝牙耳机';//商品名称
    good13.price = '249.00';//商品现价
    goods[13] = good13;

    var good14 = new Object();
    good14.id = "15";//商品唯一标识
    good14.pic = '/image/parts/a2.png'; //商品图片
    good14.name = 'smartisan 颈挂蓝牙耳机(黑色)';//商品名称
    good14.price = '189.00';//商品现价
    goods[14] = good14;

    var good15 = new Object();
    good15.id = "16";//商品唯一标识
    good15.pic = '/image/parts/a3.png'; //商品图片
    good15.name = 'smartisan 颈挂蓝牙耳机(薄荷绿)';//商品名称
    good15.price = '189.00';//商品现价
    goods[15] = good15;
    
    var good16 = new Object();
    good16.id = "17";//商品唯一标识
    good16.pic = '/image/parts/a4.png'; //商品图片
    good16.name = 'Smartisan 半入耳式耳机(红色)';//商品名称
    good16.price = '39.00';//商品现价
    goods[16] = good16;

    var good17 = new Object();
    good17.id = "18";//商品唯一标识
    good17.pic = '/image/parts/a5.png'; //商品图片
    good17.name = 'Smartisan 半入耳式耳机(黑色)';//商品名称
    good17.price = '39.00';//商品现价
    goods[17] = good17;

    var good18 = new Object();
    good18.id = "19";//商品唯一标识
    good18.pic = '/image/parts/a6.png'; //商品图片
    good18.name = 'Smartisan 半入耳式耳机(白色)';//商品名称
    good18.price = '59.00';//商品现价
    goods[18] = good18;

    var good19= new Object();
    good19.id = "20";//商品唯一标识
    good19.pic = '/image/parts/b1.png'; //商品图片
    good19.name = '坚果 弯头数据线（Type-C）';//商品名称
    good19.price = '24.90';//商品现价
    goods[19] = good19;

    var good20= new Object();
    good20.id = "21";//商品唯一标识
    good20.pic = '/image/parts/b2.png'; //商品图片
    good20.name = 'C-force USB-C多功能转接器';//商品名称
    good20.price = '148.00';//商品现价
    goods[20] = good20;

    var good21= new Object();
    good21.id = "22";//商品唯一标识
    good21.pic = '/image/parts/b3.png'; //商品图片
    good21.name = '坚果彩虹数据线';//商品名称
    good21.price = '16.00';//商品现价
    goods[21] = good21;

    var good22= new Object();
    good22.id = "23";//商品唯一标识
    good22.pic = '/image/parts/b4.png'; //商品图片
    good22.name = '坚果 Type-C To Type-C 数据线';//商品名称
    good22.price = '36.00';//商品现价
    goods[22] = good22;

    var good23= new Object();
    good23.id = "24";//商品唯一标识
    good23.pic = '/image/parts/b5.png'; //商品图片
    good23.name = 'Smartisan 耳机转接头';//商品名称
    good23.price = '16.00';//商品现价
    goods[23] = good23;

    var good24= new Object();
    good24.id = "25";//商品唯一标识
    good24.pic = '/image/parts/b6.png'; //商品图片
    good24.name = '坚果 QuickCharge 4+ 快速充电器';//商品名称
    good24.price = '58.00';//商品现价
    goods[24] = good24;

    var good25= new Object();
    good25.id = "26";//商品唯一标识
    good25.pic = '/image/parts/b7.png'; //商品图片
    good25.name = 'Smartisan 原装快充充电器 18W';//商品名称
    good25.price = '39.00';//商品现价
    goods[25] = good25;



    return goods;

  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})