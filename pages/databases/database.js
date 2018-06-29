// pages/databases/database.js
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
  
  },
  clearDb: function(){
    wx.clearStorage();
  },
  initDb: function(){
    wx.setStorageSync('origin_posts', [
      { channel: 1, user: { name: "爱因斯坦" }, title: "爱因斯坦名言", content: "如果你无法简洁的表达你的想法，那只说明你还不够了解它。", images: [], id: 1 },
      { channel: 2, user: { name: "非洲" }, title: "非洲", content: "最灵繁的人也看不见自己的背脊。。", images: [], id: 2 },
      {
        channel: 2, user: { name: "非洲" }, title: "非洲", content: "最灵繁的人也看不见自己的背脊。。", images: ['http://cn.bing.com/az/hprichbg/rb/LeuchtturmWarnemuende_ZH-CN8673593712_1920x1080.jpg', 'http://cn.bing.com/az/hprichbg/rb/MudstoneBadlands_ZH-CN9863836503_1920x1080.jpg',
          'http://cn.bing.com/az/hprichbg/rb/HeronIslandShark_ZH-CN12565902939_1920x1080.jpg'], liked: true, id: 3
      },
      {
        channel: 2, user: { name: "非洲" }, title: "非洲", content: "最灵繁的人也看不见自己的背脊。。", images: ['http://cn.bing.com/az/hprichbg/rb/LeuchtturmWarnemuende_ZH-CN8673593712_1920x1080.jpg', 'http://cn.bing.com/az/hprichbg/rb/MudstoneBadlands_ZH-CN9863836503_1920x1080.jpg',
          'http://cn.bing.com/az/hprichbg/rb/HeronIslandShark_ZH-CN12565902939_1920x1080.jpg'], id: 4
      },
      {
        channel: 2, user: { name: "非洲" }, title: "非洲", content: "最灵繁的人也看不见自己的背脊。。", images: ['http://cn.bing.com/az/hprichbg/rb/LeuchtturmWarnemuende_ZH-CN8673593712_1920x1080.jpg', 'http://cn.bing.com/az/hprichbg/rb/MudstoneBadlands_ZH-CN9863836503_1920x1080.jpg',
          'http://cn.bing.com/az/hprichbg/rb/HeronIslandShark_ZH-CN12565902939_1920x1080.jpg'], id: 5
      },
      {
        channel: 3, user: { name: "非洲" }, title: "非洲", content: "最灵繁的人也看不见自己的背脊。。", images: ['http://cn.bing.com/az/hprichbg/rb/LeuchtturmWarnemuende_ZH-CN8673593712_1920x1080.jpg', 'http://cn.bing.com/az/hprichbg/rb/MudstoneBadlands_ZH-CN9863836503_1920x1080.jpg',
          'http://cn.bing.com/az/hprichbg/rb/HeronIslandShark_ZH-CN12565902939_1920x1080.jpg'], id: 6
      },
    ]);
    var replies = [];
    wx.setStorage({
      key: 'replies',
      data: replies,
    })
  }, 
  outputDb: function(){
    wx.getStorage({
      key: 'replies',
      success: function(res) {
        console.log('-------------------------');
        console.log(res.data);
      },
    });
  }
})