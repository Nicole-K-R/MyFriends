const lib = require('lib');
var jsonfile = require('jsonfile')
var file = 'db.json'

// Log: lib logs Nicole.MyFriends[@dev].*
/**
* GetEvents intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @param {string} Name Name value
* @returns {object}
*/
module.exports = (Event = null, Date = null, Time = null, Name = null, callback) => {
  // Call DB to get events
  var err = null, eventsLists = {'Tracy': [], 'Nicole': [], 'Matt': []};
  var events = jsonfile.readFileSync(file);
  if (events.length === 0){ // All parameters are null
    return callback(null, {
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
    });
  }
  // Add each event to a person's list
  for (var i = 0; i < events.length; i ++){
    eventsLists[events[i].eventPerson].push([events[i].eventName, events[i].eventDate, events[i].eventTime]);
  }
  console.log(eventsLists);

  if (Name === 'Nicole'){
    // Create message for Nicole
    var message = '';
    for (var i = 0; i < eventsLists['Nicole'].length; i ++){
      console.log(eventsLists['Nicole'][i][0]);
      message += 'going to ' + eventsLists['Nicole'][i][0];
      if (eventsLists['Nicole'][i][1] !== null){
        console.log(eventsLists['Nicole'][i][1]);
        message += ' on ' + eventsLists['Nicole'][i][1];
      }
      if (eventsLists['Nicole'][i][2] !== null){
        console.log(eventsLists['Nicole'][i][2]);
        message += ' at ' + eventsLists['Nicole'][i][2];
      }
      if (i !== eventsLists['Nicole'].length - 1) { message += ' and '; } 
    }
    console.log(message);
    return callback(null, {
      outputSpeech: {
        type: 'PlainText',
        text: err ? `Error: ${err.message}` : 'Nicole is ' + message
      },
      card: {
        type: "Simple",
        title: "Get Events",
        content: "Successfully got your events Nicole \n " + message
      },
      shouldEndSession: true
    });
  } else if (Name === 'Tracy'){
    // Create message for Tracy
    var message;
    for (var i = 0; i < eventsLists['Tracy'].length; i ++){
      if (Date === null && Time === null){
        message += eventsLists['Tracy'][i][0];
      }
      if (Date !== null){
        message += ' on ' + eventsLists['Tracy'][i][1];
      }
      if (Time !== null){
        message += ' at ' + eventsLists['Tracy'][i][2];
      }
      if (i !== eventsLists['Tracy'].length - 1) { message += ' and '; } 
    }
    return callback(null, {
      outputSpeech: {
        type: 'PlainText',
        text: err ? `Error: ${err.message}` : message
      },
      card: {
        type: "Simple",
        title: "Get Events",
        content: "Successfully got your events for Tracy\n " + message
      },
      shouldEndSession: true
    });
  } else if (Name === 'Matt'){
    // Create message for Matt
    var message;
    for (var i = 0; i < eventsLists['Matt'].length; i ++){
      if (Date === null && Time === null){
        message += eventsLists['Matt'][i][0];
      }
      if (Date !== null){
        message += ' on ' + eventsLists['Matt'][i][1];
      }
      if (Time !== null){
        message += ' at ' + eventsLists['Matt'][i][2];
      }
      if (i !== eventsLists['Matt'].length - 1) { message += ' and '; } 
    }
    return callback(null, {
      outputSpeech: {
        type: 'PlainText',
        text: err ? `Error: ${err.message}` : message
      },
      card: {
        type: "Simple",
        title: "Get Events",
        content: "Successfully got your events for Matt \n " + message
      },
      shouldEndSession: true
    });
  } else if (Name === 'my friends'){
    // Create message for my friends
    var message;
    // for (var i = 0; i < eventsLists['my friends'].length; i ++){
    //   if (Date === null && Time === null){
    //     message += eventsLists['my friends'][i].eventName;
    //   }
    //   if (Date !== null){
    //     message += ' on ' + eventsLists['my friends'][i].eventDate;
    //   }
    //   if (Time !== null){
    //     message += ' at ' + eventsLists['my friends'][i].eventTime;
    //   }
    //   if (i !== eventsLists['my friends'].length - 1) { message += ' and '; } 
    // }
    return callback(null, {
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
    });
  }
};
