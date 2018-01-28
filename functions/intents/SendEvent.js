const lib = require('lib');

var sendSMS = function(number, message){
  lib.utils.sms({
    to: number,
    body: message
  }, function(err) {
      // Handle error
      if (err === null) { console.log('Sent message successfully'); }
      else { console.log(err); }
  });
}

/**
* SendEvent intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @returns {object}
*/
module.exports = (Event = null, Date = null, Time = null, callback) => {
  var number, message; // Get data from DB
  // Create message based on event

  // Get numbers for DB
  sendSMS(number, message);
  return callback(null, {
    outputSpeech: {
      type: 'PlainText',
      text: err ? `Error: ${err.message}` : "Successfully added _event_ to your events"
    },
    card: {
      type: "Simple",
      title: "Sample Title",
      content: "Sample Text \n more text"
    },
    shouldEndSession: true
  });
};
