// Require the StdLib node_module
const lib = require('lib');

// // Set a value to storage
// lib.utils.storage.set("Nic1", {name: "Nicole"}, (err) => {
//     // Do something with result
// });

// // Get a value from storage
// lib.utils.storage.get("Nic1", (err, value) => {
//     console.log(value);
//     // Do something with result
// });


// ***** Below is what I used to clear and reset our values during the demo ***** //

// Get and console.log() the values in storage under key 'key'
var getEvents = function(){
    // Result is the function in which GET is called
    var result = async () => { // Get list of events from storage
        let value = await lib.utils.storage.get('key');
        console.log(value);
        return await value;
    }
    // Call the result function
    console.log(result());
}

// Set the value in storage under key 'key' then call getEvents
var reset = function(){
    // Set default value for storage
    lib.utils.storage.set("key", [{
            "eventName": "Study",
            "eventTime": "Three a.m.",
            "eventDate": "Saturday",
            "eventPerson": "Tracy"
        },
        {
            "eventName": "Get bubble tea",
            "eventTime": null,
            "eventDate": "Tuesday",
            "eventPerson": "Tracy"
        },
        {
            "eventName": "Play soccer",
            "eventTime": "Eight a.m.",
            "eventDate": "Monday",
            "eventPerson": "Matt"
        },
        {
            "eventName": "Get lunch",
            "eventTime": "noon",
            "eventDate": null,
            "eventPerson": "Matt"
        }], function(err) {
        if (err) { console.log(err); }
    });
    // Call getEvents function
    getEvents();
}

/* 
Call reset() to reset the values
Call getEvents() to see what is currently in storage under key 'key'
*/


// reset();
// getEvents();