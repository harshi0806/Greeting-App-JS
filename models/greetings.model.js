const mongoose = require('mongoose');

const GreetingSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    message: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Greetings', GreetingSchema);