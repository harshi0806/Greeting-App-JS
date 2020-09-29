const mongoose = require('mongoose')
 
const GreetingsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    greeting: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Greetings', GreetingsSchema);