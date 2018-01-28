const lib = require('lib');

/**
* SendEvent intent, no parameters
* @returns {object}
*/
module.exports = (callback) => {
    var err = null;
  return callback(null, {
    outputSpeech: {
      type: 'PlainText',
      text: err ? `Error: ${err.message}` : "You are in the instructions area"
    },
    card: {
      type: "Simple",
      title: "Get Instructions",
      content: "Sample Text \n more text"
    },
    shouldEndSession: true
  });
};
