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
        
    if(title.length < 3) {
      Session.set('titleError', 'title should contain at least 3 chars');
    }else {
      Session.set('titleError', null);  
    }
    
    if(_isNull(Session.get('titleError'))){
      //submit
    }
    
  }
});