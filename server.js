const express = require('express');
const bodyParser = require('body-parser');
let dotenv = require('dotenv').config();
require('./config/greetings.config.js');
// require('./routes/greetings.routes.js')(greetingApp);

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

const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:127.0.0.1:27017';
const dbName = 'greetings-app';
let db
//Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true}, function(err, client) {
    if (err) return console.log(err);

    // Storing a reference to the database so it can be use later
    db = client.db(dbName);
    console.log(`Connected MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);
    client.close();
});

// listen for requests
greetingApp.listen(3000, () => {
    console.log(`Server is listening on port {$port}...`);
});