var Future = Npm.require('fibers/future');
var device;
// var answer;

Meteor.startup( function() {
  Spark.login({accessToken: "e2718dc81e1fd936bb4f6e8f6b2b9fbac4ebb2b0"});
  Spark.getDevice("53ff6e066667574845422467", function(err, dev){
    if(err) {
      console.log(err);
    } else {
      // console.log('device found');
      device = dev;
    }
  });
});

Meteor.methods({
  'buttonClick': function() {
    console.log('button clicked');
    // console.log(future);
    var func = Meteor.bindEnvironment(function() {
      // var a;
      var toReturn;
      var future = new Future();
      var rand = Math.random();
      console.log("rand is", rand);
      if(rand>=.9) {
        pausecomp(3000);
        // var x = 0;
        // while(x<1000000000) {
        //   x+=1;
        // }
      }

      device.callFunction('getCounter', '1', function(err, data) {
        if(err) {
          console.log(err);
          future.throw( new Meteor.Error(error.type, error.message) );
        } else {
          // answer = data.return_value;
          toReturn = data.return_value;
          a = data.return_value;
          console.log('about to return:', toReturn);
          console.log("ending rand is", rand);
          future.return(toReturn);
        }
      });
      // console.log('waiting');
      // console.log('about to return: ' + a);
      return future.wait();
      // return toReturn;
      // console.log(future);
    });
    // return toReturn;
    var ret = func();
    // console.log("returning");
    return ret;
  },
  'buttonClick2': function() {
    return answer;
  }
})

function pausecomp(millis)
 {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < millis);
}