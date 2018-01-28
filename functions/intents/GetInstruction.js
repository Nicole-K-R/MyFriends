const lib = require('lib');

/**
* SendEvent intent, no parameters
* @returns {object}
*/
module.exports = (callback) => {
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
