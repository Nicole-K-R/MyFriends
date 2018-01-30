// Required node_modules //
const lib = require('lib');

/**
* @param {string} name Intent Name to trigger
* @param {object} slots Slot Information
* @param {object} request Request Object (required)
* @returns {any}
*/

module.exports = (name = '', slots = {}, request = {}, context, callback) => {
  // If request.intent already exists set it equal to itself otherwise set it equal to JSON object 
    // with name and slots
  request.intent = request.intent || {
    name: name,
    slots: Object.keys(slots).reduce((obj, key) => {
      obj[key] = (slots[key] && typeof slots[key] === 'object') ?
        slots[key] : {name: key, value: slots[key]};
      return obj[key];
    }, {})
  };

  // If request intent name is false (DNE) --> intent name is required
  if (!request.intent.name) {
    return callback(new Error('Intent name is required'));
  }

  // Get parameters based on the intent
  let params = Object.keys(request.intent.slots || {}).reduce((params, key) => {
    params[key] = request.intent.slots[key].value;
    return params;
  }, {});

  // Result is what is received from the intent files  
  lib[`${context.service.identifier}.intents.${request.intent.name}`](params, function(err, result) {
    // If error occurred
    if (err) {
      // Return to function on line 35 (with error = null)
      return callback(null, {
        version: context.service.environment,
        sessionAttributes: {},
        response: {
          outputSpeech: {
            type: 'PlainText',
            text: `Error: ${err.message}`
          },
          card: {
            type: "Simple",
            title: "Error",
            content: "Error in main file: " + err.message
          }
        }
      });
    }
    // Return to function on line 35 (with error = null)
    return callback(null, {
      version: context.service.environment,
      sessionAttributes: {},
      response: result
    });
  });
};
