var Future = Npm.require('fibers/future');
var device;
var answer;

Meteor.startup( function() {
  Spark.login({accessToken: "e2718dc81e1fd936bb4f6e8f6b2b9fbac4ebb2b0"});
  Spark.getDevice("53ff6e066667574845422467", function(err, dev){
    if(err) {
      console.log(err);
    } else {
      device = dev; 
    }
  });
});

Meteor.methods({
  'buttonClick': function() {
    var toReturn;
    device.callFunction('getCounter', '1', function(err, data) {
      if(err) {
        console.log(err);
      } else {
        answer = data.return_value;
        toReturn = data.return_value;
      }
    })
    return toReturn;
  },
  'buttonClick2': function() {
    return answer;
  }
})