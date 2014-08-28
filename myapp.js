DBFiles = new Meteor.Collection('dbfiles');
if (Meteor.isClient) {
  Template.layout.images = function(){
    return DBFiles.find({user:"Abhijeet"});
  };

  Template.layout.events({
    'submit form': function(e, template) {
      e.preventDefault();
      var file = template.find('#fileinput').files[0];
//      var meteoruser = Meteor.userId();
      var reader = new FileReader();
      reader.onload = function(e) {
        DBFiles.insert({src:e.target.result,user:"Abhijeet"});
      };
      reader.readAsDataURL(file);
    }
  });
}
if(Meteor.isServer){
  Meteor.methods({
    'deleteImages':function(){
      DBFiles.remove({});
    }
  })
}