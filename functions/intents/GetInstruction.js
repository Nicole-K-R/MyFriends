// Required node_modules //
const lib = require('lib');

/**
* SendEvent intent, no parameters
* @returns {object}
*/

module.exports = (callback) => {
  var err = null;
  // Return output speech and card to __main__.js and end session upon Alexa speaking the message
  return callback(null, {
    outputSpeech: {
      type: 'PlainText',
      text: err ? `Error: ${err.message}` : "To get instructions see card in your Alexa app"
    },
    card: {
      type: "Simple",
      title: "Get Instructions",
      content: "Create Event: 'Alexa, tell MyFriends to create event {Event}' \n" +
        "'Alexa, tell MyFriends to create event {Event} on {Date}' \n" +
        "'Alexa, tell MyFriends to create event {Event} on {Date} at {Time}' \n\n" +
        "Get Event: 'Alexa, tell MyFriends to get event' \n" +
        "'Alexa, tell MyFriends to get events on {Date}' \n\n" +
        "Send Event: 'Alexa, tell MyFriends to send event {Event}' \n" +
        "'Alexa, tell MyFriends send event {Event}'"
    },
    shouldEndSession: true
  });
};
