const MongoClient = require('mongodb').MongoClient;
MongoClient.Promise = global.Promise;
require('dotenv/config');

// Connection URL and database
const url = 'mongodb://localhost:27017/test';
const dbName = 'greetings-app';
var db, collection;

//Use connect method to connect to the server
MongoClient.connect(process.env.url, { useNewUrlParser: true}, function(err, client) {
    if (err) return console.log(err);

    // Storing a reference to the database so it can be use later
    db = client.db(dbName);
    collection = database.collection("greetings");
    console.log(`Connected MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);
    client.close();
});

module.exports = {
    MongoClient,
    MONGO_URL: url,
    MONGO_DB: MongoClient.db
}