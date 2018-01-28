const lib = require('lib');
var jsonfile = require('jsonfile');
var path = require('path');
var file = "db.json";
var fileTxt = "db.txt";

var setVal = async (obj) => {
    console.log(obj);
    var valueInt;
    console.log('HEREEEE');
    let value = await lib.utils.storage.get('key');
    value.push(obj);
    console.log(value);
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
    // Send data to DB
    var err = null;
    console.log('Start of createEvent');
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
    if (Event !== null && Time !== null && Date !== null){ // Event, Date, Time
        var obj = {
            eventName: Event,
            eventTime: Time,
            eventDate: Date,
            eventPerson: "Nicole"
        }
        await setVal(obj);
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
        var obj = {
            eventName: Event,
            eventTime: Time,
            eventDate: null,
            eventPerson: "Nicole"
        }
        await setVal(obj);
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
        var obj = {
            eventName: Event,
            eventTime: null,
            eventDate: Date,
            eventPerson: "Nicole"
        }
        await setVal(obj);
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
        var obj = {
            eventName: Event,
            eventTime: null,
            eventDate: null,
            eventPerson: "Nicole"
        }
        await setVal(obj);
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
