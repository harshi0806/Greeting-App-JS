const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/greetings.config.js');
require('./routes/greetings.routes.js')(greetingApp);

// create express app
const greetingApp = express();

// parse requests of content-type - application/x-www-form-urlencoded
greetingApp.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
greetingApp.use(bodyParser.json())

// define a simple route
greetingApp.get('/', (req, res) => {
    res.json({"message": "Welcome to the Greetings App application!"});
});

// listen for requests
greetingApp.listen(3000, () => {
    console.log(`Server is listening on port {$port}...`);
});