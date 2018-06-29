// pages/post_info/post_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons: ["全部", "本地新闻", "旅游攻略", "信息交换", "帮助"],
    post: undefined,
    replies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.postId;
    var app = getApp();
    var postModel = app.postModel,
      replyModel = app.replyModel;
    this.setData({
      replies: replyModel.postReplies(postId),
      post: postModel.find(postId),
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
    console.log(arguments);
  
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
  
  },
  imageInfo: function(){
    wx.navigateTo({
      url: '/images',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})