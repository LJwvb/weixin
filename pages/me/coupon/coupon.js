Page({
  data: {
    currentTab: 0,
    coupons: []
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  onLoad: function (options) {
    var coupons = this.loadCoupons(0);
    this.setData({coupons:coupons});
  },
  switchNav: function (e) {
    var page = this;
    var index = e.target.dataset.current;
    if (this.data.currentTab == index) {
      return false;
    } else {
      page.setData({ currentTab: index });
    }
    var coupons = this.loadCoupons(index); 
    page.setData({coupons:coupons});
  },
  loadCoupons: function (flag) {
    var coupons = new Array();
    var coupon = new Object();
    coupon.id = "1";
    coupon.price = "200";
    coupon.condition = "满1000可用";
    coupon.goods = "仅可购买网络品类指定商品";
    coupon.way = "全平台";
    coupon.date = "无期限";
    coupon.type="0";
    coupons.push(coupon);

    var coupon2 = new Object();
    coupon2.id = "2";
    coupon2.price = "100";
    coupon2.condition = "满500可用";
    coupon2.goods = "仅可购买网络品类指定商品";
    coupon2.way = "全平台";
    coupon2.date = "2020.3.22-2020.4.22";
    coupon2.type="0";
    coupons.push(coupon2);

    var coupon3 = new Object();
    coupon3.id = "3";
    coupon3.price = "50";
    coupon3.condition = "满100可用";
    coupon3.goods = "仅可购买网络品类指定商品";
    coupon3.way = "全平台";
    coupon3.date = "2020.3.22-2020.3.29";
    coupon3.type="0";
    coupons.push(coupon3);

    var coupon4 = new Object();
    coupon4.id = "4";
    coupon4.price = "200";
    coupon4.condition = "满800可用";
    coupon4.goods = "仅可指定商品";
    coupon4.way = "全平台";
    coupon4.date = "2019.11.22-2020.12.22";
    coupon4.type="0";
    coupons.push(coupon4);

    var coupon5 = new Object();
    coupon5.id = "5";
    coupon5.price = "300";
    coupon5.condition = "满5199可用";
    coupon5.goods = "仅可购买自营iPhone手机部分商品";
    coupon5.way = "全平台";
    coupon5.date = "2019.12.1-2020.1.6";
    coupon5.type="1";
    coupons.push(coupon5);

    var coupon6 = new Object();
    coupon6.id = "6";
    coupon6.price = "30";
    coupon6.condition = "满500可用";
    coupon6.goods = "全品类(特例商品除外)";
    coupon6.way = "全平台";
    coupon6.date = "2020.1.1-2020.1.3";
    coupon6.type="1";
    coupons.push(coupon6);

    var coupon7 = new Object();
    coupon7.id = "7";
    coupon7.price = "10";
    coupon7.condition = "满200可用";
    coupon7.goods = "全品类(特例商品除外)";
    coupon7.way = "全平台";
    coupon7.date = "2019.12.22-2019.12.25";
    coupon7.type="1";
    coupons.push(coupon7);

    var coupon8 = new Object();
    coupon8.id = "8";
    coupon8.price = "50";
    coupon8.condition = "满598可用";
    coupon8.goods = "限购指定商品";
    coupon8.way = "全平台";
    coupon8.date = "2020.1.3-2020.3.31";
    coupon8.type="2";
    coupons.push(coupon8);
    var result = new Array();
    for(var i=0;i<coupons.length;i++){
       if(flag==coupons[i].type){
          result.push(coupons[i]);
       }
    }
    return result;
  }
 
})