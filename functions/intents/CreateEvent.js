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
    if (Event === null) {
        return callback(null, {
            outputSpeech: {
                type: 'PlainText',
                text: err ? `Error: ${err.message}` : ("Please repeat and specify an event")
            },
            card: {
                type: "Simple",
                title: "Create Events",
                content: "Please repeat and specify an event"
              },
            shouldEndSession: true
        });
     }
    if (Date !== null && Time !== null){
        return callback(null, {
            outputSpeech: {
                type: 'PlainText',
                text: "Successfully added " + Event + " on " + Date + " at " + Time + " to your events"
            },
            card: {
                type: "Simple",
                title: "Create Events",
                content: "Successfully added " + Event + " on " + Date + " at " + Time + " to your events"
              },
            shouldEndSession: true
        });
    }
    if (Date === null) {Date = "Tomorrow" ; }
    if (Time === null) {Time = "noon"; }
    return callback(null, {
        outputSpeech: {
            type: 'PlainText',
            text: "Successfully added " + Event + " to your events"
        },
        card: {
            type: "Simple",
            title: "Create Events",
            content: "Successfully added " + Event + " to your events"
          },
        shouldEndSession: true
    });
    console.log("Hello_Nicole: ", Event, ' ', Date, ' ', Time);
    
};
