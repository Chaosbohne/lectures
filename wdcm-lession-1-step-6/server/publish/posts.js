Meteor.publish('posts', function() {
  return Posts.find();
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