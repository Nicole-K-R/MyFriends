const lib = require('lib');


// Log: lib logs Nicole.MyFriends[@dev].*
/**
* GetEvents intent, can receive a 'event', 'Date', and 'Time' parameter
* @param {string} Event Event name
* @param {string} Date Date value
* @param {string} Time Time value
* @returns {object}
*/
module.exports = (Event = null, Date = null, Time = null, callback) => {
  // Call DB to get events
  var err = null;
  if (Event === null) { Event = 'get dinner'; }
  if (Date === null) {Date = "Tomorrow" ; }
  if (Time === null) {Time = "noon"; }
  
  console.log("Hello_Nicole: ", Event, ' ', Date, ' ', Time);
  return callback(null, {
    outputSpeech: {
      type: 'PlainText',
      text: err ? `Error: ${err.message}` : "Successfully got your events"
    },
    card: {
      type: "Simple",
      title: "Get Events",
      content: "Successfully got your events"
    },
    shouldEndSession: true
  });
};
