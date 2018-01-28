const lib = require('lib');

// // Or set an Object value
// lib.utils.storage.set("Nic1", {name: "Nicole"}, (err) => {
//     // Do something with result
// });

// // Or set an Object value
// lib.utils.storage.set("Nic1", {name: "Tracy"}, (err) => {
//     // Do something with result
// });

//   // Get a key's value
// lib.utils.storage.get("Nic1", (err, value) => {
//     console.log(value);
//     // Do something with result
// });

// lib.utils.storage.get('key', (err, value) => {
//     value = [{
//         eventName: "Hang out",
//         eventTime: null,
//         eventDate: null,
//         eventPerson: "Nicole"
//     }];
//     console.log(value);
//     lib.utils.storage.set('key', value, (err) => {
//         if (err) { console.log(err); }
//     });
// });

// lib.utils.storage.get('key', (err, value) => {
//     console.log(value);
// });

// var getEventLists = async () => { // Get list of events from storage
//     let value = await lib.utils.storage.get('key');
//     console.log(value);
//     return await value;
// }

// console.log(getEventLists());

// lib.utils.storage.set("key", [{
//         "eventName": "Study",
//         "eventTime": "Three am",
//         "eventDate": "Saturday",
//         "eventPerson": "Tracy"
//     },
//     {
//         "eventName": "Get bubble tea",
//         "eventTime": null,
//         "eventDate": "Tomorrow",
//         "eventPerson": "Tracy"
//     },
//     {
//         "eventName": "Play soccer",
//         "eventTime": "morning",
//         "eventDate": "Tomrrow",
//         "eventPerson": "Matt"
//     },
//     {
//         "eventName": "Get lunch",
//         "eventTime": "noon",
//         "eventDate": null,
//         "eventPerson": "Matt"
//     }], function(err) {
//     if (err) { console.log(err); }
//     // Do something with result
// });