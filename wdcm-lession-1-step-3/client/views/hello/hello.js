Template.hello.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
    
    Session.set('wdcm', 'Fancy things');
  }
});

Template.hello.helpers({
  greeting: function() {
    return "Welcome to wdcm.";
  },
  reactive: function() {
    return Session.get('wdcm');
  }
  
});

Template.hello.created = function() {
};

Template.hello.rendered = function() {
};

Template.hello.destroyed = function() {
};
