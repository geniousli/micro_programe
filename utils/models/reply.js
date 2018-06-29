function create(postId, content){
  var app = getApp();
  var reply = {content: content, post_id: postId};
  reply['user'] = { name: "wildimagine" };
  var replies = wx.getStorageSync('replies');
  console.log(replies);
  var maxId = replies.reduce(function(maxValue, item) {
    if(item.id > maxValue){
      maxValue = item.id;
    }
    return maxValue;
  }, 0);
  var newId = (maxId || 0) + 1;
  reply['id'] = newId;
  replies.push(reply);
  wx.setStorage({
    key: 'replies',
    data: replies,
  })
  console.log("-----------; replies is -----");
  console.log(replies);
  return reply;
}
function all(){
  var replies = wx.getStorageSync("replies");
  replies = replies.map(function(item){
    if(item.user && item.user.name){
      item['user']['name'] = item.user.name.substring(0, 4);
    }
    return item;  
  })
  return replies;
}

function postReplies(postId){
  var replies = all();
  return replies.filter(function(item){
    return item.post_id == postId;
  });
}

module.exports.create = create;
module.exports.postReplies = postReplies;
module.exports.all = all;
// should like active record interface