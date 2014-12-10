// counter starts at 0
Session.setDefault("counter", 0);

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
    // increment the counter when button is clicked
    // Session.set("counter", Session.get("counter") + 1);
    Meteor.call('buttonClick', function (error, result) {
      console.log('1:');
      if(error) {
        console.log(error);
      } else {
        console.log(result);
        Session.set('result1', result);
      }
    });
  },
  'click #btn2': function () {
    // increment the counter when button is clicked
    // Session.set("counter", Session.get("counter") + 1);
    Meteor.call('buttonClick2', function (error, result) {
      console.log('2:');
      if(error) {
        console.log(error);
      } else {
        console.log(result);
        Session.set('result2', result);
      }
    });
  }
});