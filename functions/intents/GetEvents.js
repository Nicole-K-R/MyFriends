// Required node_modules //
const lib = require('lib');
var jsonfile = require('jsonfile');
// Variables //
var file = 'db.json'

// Returns and logs what is in storage under key 'key'
var getEventLists = async () => { // Get list of events from storage
  let value = await lib.utils.storage.get('key');
  console.log('Value: ' + value);
  return await value;
}

// Returs message based on name and what events are in the list
var getEvents = function(name, eventsLists){
  // Create message for {Name}
  var message = '';
  // All messages have event name
  for (var i = 0; i < eventsLists[name].length; i ++){
    message += 'going to ' + eventsLists[name][i][0];
    // If Date is not null add Date to message
    if (eventsLists[name][i][1] !== null){
      message += ' on ' + eventsLists[name][i][1];
    }
    // If Time is not null add Time to message
    if (eventsLists[name][i][2] !== null){
      message += ' at ' + eventsLists[name][i][2];
    }
    // If there is still another event to add, add ' and '
    if (i !== eventsLists[name].length - 1) { message += ' and '; } 
  }
  return message;
}

/**
* GetEvents intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @param {string} Name Name value
* @returns {object}
*/

module.exports = async (Event = null, Date = null, Time = null, Name = null) => {
  // Alexa sends 'Matt' as 'matt' so convert to 'Matt' for code below
  if (Name === 'matt') { Name = 'Matt'; }
  // eventsLists is a JSON object that has a list for the event, date, and time corresponding to each person
  var err = null, eventsLists = {'Tracy': [], 'Nicole': [], 'Matt': []};
  // Call getEventLists()
  let events = await getEventLists();

  // If there are no events
  if (events.length === 0){ // All parameters are null
    return {
      outputSpeech: {
        type: 'PlainText',
        text: "You have no events"
      },
      card: {
        type: "Simple",
        title: "Get Events",
        content: "You have no events"
      },
      shouldEndSession: true
    }
  }

  // Add each event to each person's list
  for (var i = 0; i < events.length; i ++){
    eventsLists[events[i].eventPerson].push([events[i].eventName, events[i].eventDate, events[i].eventTime]);
  }

  // If Name is not null and not 'my friends'
  if (Name !== null && Name !== 'my friends'){
    // Call get events
    var message = getEvents(Name, eventsLists);
    // Return output speech and card to __main__.js and end session upon Alexa speaking the message
    return {
      outputSpeech: {
        type: 'PlainText',
        text: err ? `Error: ${err.message}` : Name + ' is ' + message
      },
      card: {
        type: "Simple",
        title: "Get Events",
        content: "Successfully got your events for " + Name + "\n" + Name + " is " +  message
      },
      shouldEndSession: true
    }
  } 
  // If Name is 'my friends' call events for all friends
  else if (Name === 'my friends'){
    var message = 'Nicole is ' + getEvents('Nicole', eventsLists);
    message += ', and Tracy is ' + getEvents('Tracy', eventsLists);
    message += ', and Matt is ' + getEvents('Matt', eventsLists);
    // Return output speech and card to __main__.js and end session upon Alexa speaking the message
    return {
      outputSpeech: {
        type: 'PlainText',
        text: err ? `Error: ${err.message}` : message
      },
      card: {
        type: "Simple",
        title: "Get Events",
        content: "Successfully got your events for your friends \n " + message
      },
      shouldEndSession: true
    }
  }
};
