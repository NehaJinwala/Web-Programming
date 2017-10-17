const express = require('express');
let app = express();
let configRoutes = require('./routes');

//app.use('/', configRoutes);
configRoutes(app);
app.listen(3000, () =>{
    console.log("We have now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});