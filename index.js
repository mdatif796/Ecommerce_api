const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// setting up the connection with the database
const db = require('./config/databaseConnection');

// for parsing the data which comes from browser
app.use(bodyParser.urlencoded({extended: true}));

// any request from browser for '/' sent to routes folder
app.use('/', require('./routes'));


app.listen(process.env.PORT || port, function(err){
    if(err){
        console.log("Error in listening on port ", port);
        return;
    }
    console.log("Express server is running on the port ", port);
    return;
});