const lib = require('lib');

/**
* CreateEvent intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @returns {object}
*/
module.exports = (Event, Date, Time, callback) => {
    // Send data to DB

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
