// pages/lookvideo/index.js
var i = getApp(), o = i.requirejs("core")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    o.get("goods/video", {

    }, function (t) {
      that.setData({
        weishipinglist: t
      })
    });
  },
  lookvideo:function(e){

    var pages = getCurrentPages();   //当前页面

    var prevPage = pages[pages.length - 2];   //上一页面

    prevPage.setData({

      //直接给上一个页面赋值
      hkindex: e.currentTarget.dataset.index,

    });
    wx.navigateBack({
      //返回
      delta: 1

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