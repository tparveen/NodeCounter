'use strict';

const express = require('express');
const app = express();
var theCount = 0;

// this sets up a static file server that can serve assets 
//from a public folder
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// this endpoint sends back the current value of `theCount`
// function increments the count by 1 and then returns a JSON //object of the form
// `{ "count": 12}`. Note that because `theCount` is a volatile,
// in-memory variable, each time the server restarts, its value
// will be reset to 0 
app.get("/the-count", (req, res) => {
  console.log('incrementing the count');
  theCount += 1;
  console.log(`the count is ${theCount}`);
  res.json({count: theCount});
});

// listen for requests and log when you've started doing it
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));

