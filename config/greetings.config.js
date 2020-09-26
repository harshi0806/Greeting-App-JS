const MongoClient = require('mongodb').MongoClient;
MongoClient.Promise = global.Promise;
require('dotenv').config();

// Connection URL and database
const url = 'mongodb://localhost:127.0.0.1:27017';
const dbName = 'greetings-app';
let db

//Use connect method to connect to the server
MongoClient.connect(process.env.url, { useNewUrlParser: true}, function(err, client) {
    if (err) return console.log(err);

    // Storing a reference to the database so it can be use later
    db = client.db(dbName);
    console.log(`Connected MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);
    client.close();
});

module.exports = MongoClient;