const mongoose = require('mongoose')
 
const GreetingsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    greeting: {
        type: String,
        required: true
    }
})
module.exports = GreetingsSchema