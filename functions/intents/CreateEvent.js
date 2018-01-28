const lib = require('lib');
var jsonfile = require('jsonfile')
var file = 'db.json'

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
    if (Event !== null && Time !== null && Date !== null){ // Event, Date, Time
        var obj = {
            eventName: Event,
            eventTime: Time,
            eventDate: Date
        }
        // jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
        //     console.error(err);
        // })
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
    }else if (Event !== null && Time !== null){ // Event, Time
        var obj = {
            eventName: Event,
            eventTime: Time,
            eventDate: null
        }
        // jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
        //     console.error(err);
        // })
        return callback(null, {
            outputSpeech: {
                type: 'PlainText',
                text: "Successfully added " + Event + " at " + Time + " to your events"
            },
            card: {
                type: "Simple",
                title: "Create Events",
                content: "Successfully added " + Event + " at " + Time + " to your events"
              },
            shouldEndSession: true
        });
    }else if (Event !== null && Date !== null){ // Event, Date
        var obj = {
            eventName: Event,
            eventTime: null,
            eventDate: Date
        }
        // jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
        //     console.error(err);
        // })
        return callback(null, {
            outputSpeech: {
                type: 'PlainText',
                text: "Successfully added " + Event + " on " + Date + " to your events"
            },
            card: {
                type: "Simple",
                title: "Create Events",
                content: "Successfully added " + Event + " on " + Date + " to your events"
              },
            shouldEndSession: true
        });
    }
    else if (Event !== null){ // Event
        var obj = {
            eventName: Event,
            eventTime: null,
            eventDate: null
        }
        // jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
        //     console.error(err);
        // })
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
    }
};
