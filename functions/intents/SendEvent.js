const lib = require('lib')({token: 'o450zjXYYYTEDHZMAH_7Hs_V1xM_Ro8hFkzipClXf3sp-e6mK7g0t89Lq4fGgUmN'});
var cmd = require('node-cmd');
var sleep = require('thread-sleep');
var fs = require('fs');
var jsonfile = require('jsonfile')
var file = 'db.json'

/**
* SendEvent intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @param {string} Number Number value
* @returns {object}
*/
module.exports = (Event = null, Date = null, Time = null, Number = null, callback) => {
  var err = null;
  var number = '6476227473'; // Get data from DB
  var message = 'Do you want to ' + Event;
  if (Date !== null){ message += ' on  ' + Date; }
  if (Time !== null){ message += ' at ' + Time; }

  if (Number === 'Tracy') { number = '5195809810'; }
  else if (Number === 'Matt') { number = '9054641350'; }
  else if (Number === 'Nicole') { number = '6476227473'; }
  else if (Number === 'Tracy') { number = '4165712421'; }

  return lib.utils.sms({
    to: number,
    body: message
  }, (err, result) => {
    if (err) {
      return callback(err);
    }
    if(Event !== null){
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

  }); 

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
