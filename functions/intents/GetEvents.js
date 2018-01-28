const lib = require('lib');
var jsonfile = require('jsonfile')
var file = 'db.json'

var getEventLists = async () => { // Get list of events from storage
  let value = await lib.utils.storage.get('key');
  console.log('Value: ' + value);
  return await value;
}

var getEvents = function(name, eventsLists){
  // Create message for Nicole
  console.log('Events Lists: ' + eventsLists);
  var message = '';
  for (var i = 0; i < eventsLists[name].length; i ++){
    message += 'going to ' + eventsLists[name][i][0];
    if (eventsLists[name][i][1] !== null){
      message += ' on ' + eventsLists[name][i][1];
    }
    if (eventsLists[name][i][2] !== null){
      message += ' at ' + eventsLists[name][i][2];
    }
    if (i !== eventsLists[name].length - 1) { message += ' and '; } 
  }
  return message;
}

// Log: lib logs Nicole.MyFriends[@dev].*
/**
* GetEvents intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @param {string} Name Name value
* @returns {object}
*/
module.exports = async (Event = null, Date = null, Time = null, Name = null) => {
  // Call DB to get events
  var err = null, eventsLists = {'Tracy': [], 'Nicole': [], 'Matt': []};
  // var events = jsonfile.readFileSync(file);
  let events = await getEventLists();
  console.log('Events: ', events);

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

  // Add each event to a person's list
  for (var i = 0; i < events.length; i ++){
    eventsLists[events[i].eventPerson].push([events[i].eventName, events[i].eventDate, events[i].eventTime]);
  }
  console.log('Events Lists Seperated: ' + eventsLists);

  if (Name === 'Nicole'){ // Nicole
    var message = getEvents(Name, eventsLists);
    return {
      outputSpeech: {
        type: 'PlainText',
        text: err ? `Error: ${err.message}` : 'Nicole is ' + message
      },
      card: {
        type: "Simple",
        title: "Get Events",
        content: "Successfully got your events for Nicole \n Nicole is " +  message
      },
      shouldEndSession: true
    }
  } 
  else if (Name === 'Tracy'){ // Tracy
    var message = getEvents(Name, eventsLists);
    return {
      outputSpeech: {
        type: 'PlainText',
        text: err ? `Error: ${err.message}` : 'Tracy is ' + message
      },
      card: {
        type: "Simple",
        title: "Get Events",
        content: "Successfully got your events for Tracy \n Tracy is " +  message
      },
      shouldEndSession: true
    }
  } else if (Name === 'Matt'){
    var message = getEvents(Name, eventsLists);
    return {
      outputSpeech: {
        type: 'PlainText',
        text: err ? `Error: ${err.message}` : 'Matt is ' + message
      },
      card: {
        type: "Simple",
        title: "Get Events",
        content: "Successfully got your events for Matt \n Matt is " +  message
      },
      shouldEndSession: true
    }
  } else if (Name === 'my friends'){
    var message = 'Nicole is ' + getEvents('Nicole', eventsLists);
    message += ' and Tracy is ' + getEvents('Tracy', eventsLists);
    message += ' and Matt is ' + getEvents('Matt', eventsLists);
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
