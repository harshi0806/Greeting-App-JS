const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGO_URL } = require('./config/greetings.config.js');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

//import routes
const greetingRoutes = require('./routes/greetings.routes.js');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json())

//Use routes
app.use(greetingRoutes)

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the Greetings App application!"});
});

const PORT = require('./config/greetings.config.js').MONGO_URL;
const db = require('./config/greetings.config.js').MONGO_DB;
const port = process.env.PORT || 3000;

// listen for requests
mongoose.connect(PORT, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('DB Connected')
        app.listen(port, () => {
            console.log(`Server is listening on port {$port}...`);
    })
})
.catch(err => console.log(err));