const lib = require('lib');

/**
* GetEvents intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @returns {object}
*/
module.exports = (Event = null, Date = null, Time = null, callback) => {
  // Call DB to get events
  var err = null;
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
