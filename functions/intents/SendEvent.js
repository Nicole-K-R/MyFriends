const lib = require('lib')({token: 'o450zjXYYYTEDHZMAH_7Hs_V1xM_Ro8hFkzipClXf3sp-e6mK7g0t89Lq4fGgUmN'});
var cmd = require('node-cmd');
var sleep = require('thread-sleep');
var fs = require('fs');
var jsonfile = require('jsonfile')
var file = 'db.json'

// var sendSMS = function(number, message, callback){
//   console.log('Received: ', number, ' : ', message);
//   lib.utils.sms({
//     to: number,
//     body: message
//   }, function(err, results) {
//       // Handle error
//       console.log('Helloooooo');
//       if (err === null) { console.log('Sent message successfully'); }
//       else { console.log(err); }
//       return callback(null, results)
//   });
// }

// console.log('Event is null');
//     lib.utils.sms({
//       to: number,
//       body: message
//     }, function(err, result) {
//       if (err) {
//         console.log('Error: ', err);
//         return callback(error, results);
//       }

/**
* SendEvent intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @returns {object}
*/
module.exports = (Event = null, Date = null, Time = null, callback) => {
  var number = '6476227473', message = ('Sent message for ' + Event); // Get data from DB
  var err = null;
  
  console.log('Null: ', Event);
  if(Event !== null){
    var cmdRun = 'lib utils.sms --to ' + number + ' --body ' + message + ' > test.txt';
    console.log("CMD: " + cmdRun);
    cmd.run(cmdRun);
    console.log('Ran cmd file');
    while (!fs.existsSync('test.txt')){

    }
    console.log('File exists');
    // sleep(3000);
    return callback(null, {
      outputSpeech: {
        type: 'PlainText',
        text: err ? `Error: ${err.message}` : ("Successfully sent sent event " + Event + " through SMS")
      },
      card: {
        type: "Simple",
        title: "Send Event",
        content: ("Successfully sent sent event " + Event + " through SMS to " + number)
      },
      shouldEndSession: true
    });
  }
  else {
    return callback(null, {
      outputSpeech: {
        type: 'PlainText',
        text: err ? `Error: ${err.message}` : ("Testing")
      },
      card: {
        type: "Simple",
        title: "Send Event",
        content: ("Testing")
      },
      shouldEndSession: true
    });
  }

  // if (Event === null && Date === null && Time === null){
  //   cmd.run('lib utils.sms --to ' + number + ' --body ' + message);
  //   sleep(2000);
  //   return callback(null, {
  //     outputSpeech: {
  //       type: 'PlainText',
  //       text: err ? `Error: ${err.message}` : ("Successfully sent sent event " + Event + " through SMS")
  //     },
  //     card: {
  //       type: "Simple",
  //       title: "Send Event",
  //       content: ("Successfully sent sent event " + Event + " through SMS to " + number)
  //     },
  //     shouldEndSession: true
  //   });
  // } 

  // Create message based on event

  // Get numbers for DB
  // sendSMS(number, message);
};
