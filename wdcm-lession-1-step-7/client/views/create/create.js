Template.create.helpers({
  titleError: function(){
    return Session.get('titleError');
  }
});

Template.create.events({
  'submit form': function(event, template) {
    event.preventDefault();
    
    var title = template.find('[name=title]').value;
    var message = template.find('[name=message]').value;
      
    
    var post = {
        title : title,
        message: message
    };
    
    Meteor.call('insertPost', post, function(error, id) {
      if(error)
        return alert(error.reason);
    });
    
  }
});