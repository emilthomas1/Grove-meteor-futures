var Future = Npm.require('fibers/future');
var device;

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
    console.log('button clicked');
    var func = Meteor.bindEnvironment(function() {
      var toReturn;
      var future = new Future();
      device.callFunction('getCounter', '1', function(err, data) {
        if(err) {
          console.log(err);
          future.throw( new Meteor.Error(error.type, error.message) );
        } else {
          toReturn = data.return_value;
          future.return(toReturn);
        }
      });
      return future.wait();
    });
    var ret = func();
    return ret;
  },
  'buttonClick2': function() {
    return answer;
  }
})