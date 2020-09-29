const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGO_URL } = require('./config/greetings.config.js');
require('dotenv/config');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//Enable Cors for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// parse requests of content-type - application/json
app.use(bodyParser.json())

const PORT = require('./config/greetings.config.js').MONGO_URL;
const db = require('./config/greetings.config.js').MONGO_DB;
const port = process.env.PORT || 3000;

// listen for requests
mongoose.connect(PORT, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('DB Connected')
        app.listen(config.port, () => {
            console.log(`Server is listening on port {$port}...`);
    })
})
.catch(err => console.log(err));

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the Greetings App application!"});
});

//import routes
const config = require('./config/greetings.config.js');
const greetingRoutes = require('./routes/greetings.routes.js');

//Use routes
app.use('/greetings', greetingRoutes)
app.use(app.router)
greetingRoutes.initialize(app);