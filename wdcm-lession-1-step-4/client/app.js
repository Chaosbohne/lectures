Meteor.startup(function() {
  Session.setDefault('wdcm', 'A reactive date source');
  Session.setDefault('titleError', null);  
  
  Meteor.subscribe('posts');
});