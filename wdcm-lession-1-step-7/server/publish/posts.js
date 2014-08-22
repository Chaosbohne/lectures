Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.methods({
  insertPost : function(post){
    
    var user = Meteor.user();
    
    if(!user) 
      throw new Meteor.Error(401, "Unknown user");
    
    if(!post.title)
      throw new Meteor.Error(422, "Missing title");
    
    if(!post.message)
      throw new Meteor.Error(422, "Missing message");
    
    var newpost = _.pick(post, 'message', 'title');
    
    if(newpost.title.length < 3)
      throw new Meteor.Error(422, "Title should have at least 2 chars");
    
    newpost.userId = user._id;
    newpost.submitted = new Date().getTime();
    
    return Posts.insert(newpost);
  }
});

Posts.allow({
  insert: function (userId, doc) {
    return true;
    //return (userId);
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

/*
Posts.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
*/