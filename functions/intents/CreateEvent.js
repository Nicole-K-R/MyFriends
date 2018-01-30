/* Notes
* -Could have declared object for all test scenarios at one since value is only set to null in the 
* object if the variable is also null (meaning Date is only null in obj if Date received from Alexa is null)
* -Could have declared message at once and used if statements to add or not add Date and Time
*/

// Required node_modules //
const lib = require('lib');
var jsonfile = require('jsonfile');
var path = require('path');
// Variables //
var file = "db.json";
var fileTxt = "db.txt";

// Get value in storage then push obj to it and set it to storage
var setVal = async (obj) => {
    let value = await lib.utils.storage.get('key');
    value.push(obj);
    return await lib.utils.storage.set('key', value);
}

/**
* CreateEvent intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @returns {object}
*/

module.exports = async (Event = null, Date = null, Time = null) => {
    var err = null;
    // If Event is null tell Alexa to say 'Please repeat and specify an event' and create a card
    if (Event === null) {
        return {
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
        };
    }
    //  If Event, Time, and Date are all not null tell Alexa to say successfully created event with details
    if (Event !== null && Time !== null && Date !== null){ // Event, Date, Time
        // Declare object to be pushed to storage (no values are null)
        var obj = {
            eventName: Event,
            eventTime: Time,
            eventDate: Date,
            eventPerson: "Nicole"
        }
        // Call setVal with obj to push obj to storage
        await setVal(obj);
        // Return output speech and card to __main__.js and end session upon Alexa speaking the message
        return {
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
        };
    }else if (Event !== null && Time !== null){ // Event, Time
        // Declare object to be pushed to storage (Date is null)
        var obj = {
            eventName: Event,
            eventTime: Time,
            eventDate: null,
            eventPerson: "Nicole"
        }
        // Call setVal with obj to push obj to storage
        await setVal(obj);
        // Return output speech and card to __main__.js and end session upon Alexa speaking the message
        return {
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
        };
    } else if (Event !== null && Date !== null){ // Event, Date
        // Declare object to be pushed to storage (Time is null)
        var obj = {
            eventName: Event,
            eventTime: null,
            eventDate: Date,
            eventPerson: "Nicole"
        }
        // Call setVal with obj to push obj to storage
        await setVal(obj);
        // Return output speech and card to __main__.js and end session upon Alexa speaking the message
        return {
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
        };
    }
    else if (Event !== null){ // Event
        // Declare object to be pushed to storage (Date and Time are null)
        var obj = {
            eventName: Event,
            eventTime: null,
            eventDate: null,
            eventPerson: "Nicole"
        }
        // Call setVal with obj to push obj to storage
        await setVal(obj);
        // Return output speech and card to __main__.js and end session upon Alexa speaking the message
        return {
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
        };
    }
};
