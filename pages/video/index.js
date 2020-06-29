// pages/video/index.js
var i = getApp(), o = i.requirejs("core")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hkindex:0,
    weishipinglist:[]
  },
  indexFn:function(e){
    wx.switchTab({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '视频加载中.',
    })
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let height = clientHeight;
        that.setData({
          height: height
        });
      }
    });
    o.get("goods/video", {

    }, function (t) {
    
      that.setData({
        weishipinglist:t
      })
      wx.hideLoading()
    });
    if (options.index) {
      console.log(options.index)
      this.setData({
        hkindex: options.index
      })
    }
  },
  bindchange(e) {
    this.setData({
      hkindex: e.detail.current
    })
    var indx = e.detail.current;
    let videoContext = wx.createVideoContext("myvideo" + e.detail.current + "")
    let videoContexta = wx.createVideoContext("myvideo" + indx + "")
    
    videoContexta.pause();
    videoContexta.seek(0);
    videoContext.play();
    let xz = this.data.weishipinglist.length - e.detail.current;
    if (xz == 3) {
      // this.chaxunzhi();  //加载更多视频
    }
  },
  goShopFn:function(e){
    wx.navigateTo({
      url: '../goods/detail/index?id=' + e.currentTarget.dataset.id,
    })
  },
  allLook:function(e){
    wx.navigateTo({
      url: '../lookvideo/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
