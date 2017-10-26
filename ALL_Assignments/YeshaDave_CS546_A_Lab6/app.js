var express = require('express');

var index = require('./routes/index');
var app = express();

//  Connect all our routes to our application

app.use('/', index);


// Turn on that server!
app.listen(3000,() => {
    console.log("We've now got a server!");
console.log("Your routes will be running on http://localhost:3000");
});