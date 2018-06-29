// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    preparedReply: false,
    replyContent: "", 
    replyPostId: '',
    channels: [{name: "全部", id: 1}, {name: "本地新闻", id: 2}, {name: "旅游攻略", id: 3}],
    channel: 1,
    posts: [],
    origin_posts: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'origin_posts',
      success: function(res) {
        that.setData({
          origin_posts: res.data,
        })
      },
    })
    console.log('name is -----');
    console.log(name);
  
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

  postInfo: function(event){
    console.log('event is ---- \n');
    console.log(event);
    let postId = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: '../post_info/post_info?postId=' + postId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  likePost: function(event){
    console.log("like post is ----");
  },
  imageInfo: function(){
    wx.navigateTo({
      url: '../image_info/image',
    })
  },
  changeChannel: function(event){
    var data = event.currentTarget.dataset.channelId;
    console.log("data is-----" + data);
    var channel_posts = this.channelData(this.data.origin_posts, data);
    this.setData({
      channel: data,
      posts: channel_posts,
    })
  },
  channelData: function(posts, channel){
    var id = channel || this.data.channel;
    return posts.filter(function(item){
      return item.channel == id;
    })
  },
  postReply: function(){
    var app = getApp();
    var model = app.replyModel;
    var postId = this.data.replyPostId;
    var content = this.data.replyContent
    model.create(postId, content);
    this.setData({
      preparedReply: false,
    })

    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }, 
  prepareReply: function(event){
    var reply = this.toggleColumn('preparedReply');
    var postId = event.currentTarget.dataset.postId;
    console.log(reply);
    console.log('postid is ------------');
    console.log(postId);
    this.setData({
      preparedReply: reply,
      replyPostId: postId,
    })
  }, 
  cancelPostReply: function(){
    this.setData({
      preparedReply: false,
      replyContent: "",
    })
  }, 
  setReplyContent: function(event){
    this.setData({
      replyContent: event.detail.value
    })
  }, 
  toggleColumn: function(column){
    return !this.data[column];
  }, 
  cancelLikePost: function(event){
    var postId = event.currentTarget.dataset.postId;
    this.updatePosts(postId, function(item){
      item['liked'] = false;
    })
  }, 
  likePost: function(event){
    var postId = event.currentTarget.dataset.postId;
    this.updatePosts(postId, function(item){
      item['liked'] = true;
    })
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  updatePosts: function(postId, fun){
    var posts = this.data.origin_posts.map(function(item){
      if(item.id === postId){
        fun(item);
      }
      return item;
    })
    var channelPosts = this.channelData(posts);
    this.setData({
      origin_posts: posts,
      posts: channelPosts,
    })
    wx.setStorage({
      key: 'origin_posts',
      data: posts,
    })
  }
})