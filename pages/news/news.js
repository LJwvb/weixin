
var numCom = 0
var timer
Page({
  data: {
    hidden: false,
    colorCircleFirst: '#FFDF2F',//圆点颜色1
    colorCircleSecond: '#FE4D32',//圆点颜色2
    btnState: false,
    winNum: 0,//获胜次数
    result: "",//结果
    player: "/image/game/wenhao.jpg",//玩家
    computer: "",//电脑
    srcs: [
      '/image/game/shitou.jpg',
      '/image/game/jiandao.jpg',
      '/image/game/bu.jpg'
    ]
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
  //储存获胜纪录
  onLoad: function () {
    var oldWinNum = wx.getStorageSync('winNum');
    if (oldWinNum != null && oldWinNum != '') {
      this.data.winNum = oldWinNum;
    }
    this.timerGo();
    //圆点设置
    var leftCircle = 0;
    var topCircle = 0;
    var circleList = [];
    for (var i = 0; i < 24; i++) {

      if (i == 0) {
        topCircle = 15;
        leftCircle = 15;
      } else if (i < 6) {
        topCircle = 15;
        leftCircle = leftCircle + 100;//top
      } else if (i == 6) {
        topCircle = 15;
        leftCircle = 620;
      } else if (i < 12) {
        topCircle = topCircle + 93;
        leftCircle = 620;//right
      } else if (i == 12) {
        topCircle = 565;
        leftCircle = 620;
      } else if (i < 18) {
        topCircle = 565;
        leftCircle = leftCircle - 100;//bottom
      } else if (i == 18) {
        topCircle = 565;
        leftCircle = 15;
      } else if (i < 24) {
        topCircle = topCircle - 93;
        leftCircle = 15;//left
      } else {
        return;
      }
      //加入
      circleList.push({ topCircle: topCircle, leftCircle: leftCircle });
    }
    //显示
    this.setData({
      circleList: circleList
    })

    //圆点闪烁
    var _this = this;
    setInterval(function () {
      if (_this.data.colorCircleFirst == '#FFDF2F') {
        _this.setData({
          colorCircleFirst: '#FE4D32',
          colorCircleSecond: '#FFDF2F',
        })
      } else {
        _this.setData({
          colorCircleFirst: '#FFDF2F',
          colorCircleSecond: '#FE4D32',
        })
      }
    }, 500)
    
    this.loadingChange()

  },

  choose_one(e) {
    if (this.data.btnState == true) {
      return;
    }
    this.setData({
      player: this.data.srcs[e.currentTarget.id]
    });

    clearInterval(timer);

    var pl = this.data.player;
    var com = this.data.computer;
    var num = this.data.winNum;
    var str = '0.0~\n你还真是个人才啊!';

    if (pl == "/image/game/shitou.jpg" && com == "/image/game/jiandao.jpg") {
      num++;
      str = 'Ho~\n这游戏就是这么玩儿的，朋友!';
      wx.setStorageSync('winNum', num);
    };
    if (pl == "/image/game/jiandao.jpg" && com == "/image/game/bu.jpg") {
      num++;
      str = 'Ho~\n保持这个气势!';
      wx.setStorageSync('winNum', num);
    };
    if (pl == "/image/game/bu.jpg" && com == "/image/game/shitou.jpg") {
      num++;
      str = 'Ho~\n你的表现真不错!';
      wx.setStorageSync('winNum', num);
    };

    if (pl == com) {
      str = '/(ㄒoㄒ)/~~\n我觉得你下次能赢!';
    }


    this.setData({
      winNum: num,
      result: str,
      btnState: true
    });
  },


  timerGo() {
    timer = setInterval(this.move, 100);
  },


  move() {
    if (numCom >= 3) {
      numCom = 0;
    }
    this.setData({
      computer: this.data.srcs[numCom],
    })
    numCom++;
  },

  again() {
    if (this.data.btnState == false) {
      return;
    }

    this.timerGo();

    this.setData({
      btnState: false,
      result: '',

    });
  }
})
