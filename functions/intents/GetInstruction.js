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
      text: err ? `Error: ${err.message}` : "Hello World"
    },
    card: {
      type: "Simple",
      title: "Instructions",
      content: "Sample Text \n more text"
    },
    shouldEndSession: true
  });
};
