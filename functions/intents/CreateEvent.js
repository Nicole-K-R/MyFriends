const lib = require('lib');

/**
* CreateEvent intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @returns {object}
*/
module.exports = (Event = null, Date = null, Time = null, callback) => {
    // Send data to DB
    var err = null;
    return callback(null, {
        outputSpeech: {
            type: 'PlainText',
            text: err ? `Error: ${err.message}` : "Successfully added _event_ to your events"
        },
        card: {
            type: "Simple",
            title: "Instructions",
            content: "Sample Text \n more text"
          },
        shouldEndSession: true
    });
};
