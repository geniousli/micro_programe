function all(){
  return wx.getStorageSync('origin_posts');
}

function find(postId){
  var posts = all() || [];
  var ary = posts.filter(function(item){
    return item.id == postId;
  });
  if(ary.length >= 1){
    return ary[0];
  }else{
    return undefined;
  }
}

module.exports.all = all;
module.exports.find = find;