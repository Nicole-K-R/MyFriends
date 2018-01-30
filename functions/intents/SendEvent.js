// Required node_modules //
const lib = require('lib')({token: 'o450zjXYYYTEDHZMAH_7Hs_V1xM_Ro8hFkzipClXf3sp-e6mK7g0t89Lq4fGgUmN'});
var cmd = require('node-cmd');
var sleep = require('thread-sleep');
var fs = require('fs');
var jsonfile = require('jsonfile')
// Variables //
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
  // Default value for number if none else is added
  var number = '6476227473'; // Get data from DB
  // Declare messag to tell Alexa
  var message = 'Do you want to ' + Event;
  // If Date and/or Time is not null add it to message
  if (Date !== null){ message += ' on  ' + Date; }
  if (Time !== null){ message += ' at ' + Time; }
  message += "? (p.s. it's from your only friend)";

  // Change number depending on what the user said to Alexa
  if (Number === 'Tracy') { number = '5195809810'; }
  else if (Number === 'Matt' || Number === 'matt') { number = '9054641350'; }
  else if (Number === 'Nicole') { number = '6476227473'; }
  else if (Number === 'Andrew') { number = '4165712421'; }
  else if (Number === 'Raveena') { number = '6472050990'; }

  // Return to __main__.js as callback
  // lib.utils.sms({} sends the SMS text
  return lib.utils.sms({
    to: number,
    body: message
  }, (err, result) => { // Callback of function
    if (err) {
      return callback(err);
    }
    // If event is not null
    if(Event !== null){
      // Return output speech and card to __main__.js and end session upon Alexa speaking the message
      return callback(null, {
        outputSpeech: {
          type: 'PlainText',
          text: err ? `Error: ${err.message}` : ("Successfully sent event " + Event + " through SMS to " + Number)
        },
        card: {
          type: "Simple",
          title: "Send Event",
          content: ("Successfully sent event " + Event + " through SMS to " + Number + '(' + number + ')')
        },
        shouldEndSession: true
      });
    }
    // If Event is null (really only occurs when Alexa can't hear full request)
    else {
      // Return output speech and card to __main__.js and end session upon Alexa speaking the message
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
};
