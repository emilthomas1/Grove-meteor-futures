
Template.hello.helpers({
  result1: function () {
    return Session.get("result1");
  },
  result2: function () {
    return Session.get("result2");
  }
});

Template.hello.events({
  'click #btn1': function () {
    Meteor.call('buttonClick', function (error, result) {
      // console.log('1:');
      if(error) {
        console.log(error);
      } else {
        console.log(result);
        Session.set('result1', result);
      }
    });
  },
  'click #btn2': function () {
    Meteor.call('buttonClick2', function (error, result) {
      // console.log('2:');
      if(error) {
        console.log(error);
      } else {
        console.log(result);
        Session.set('result2', result);
      }
    });
  }
});