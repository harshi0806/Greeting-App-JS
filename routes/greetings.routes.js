const express = require('express')
const router = express.Router()

//import controller
const greetingController = require('../controllers/greetings.controller.js')

//Create a new Greeting
router.post('/greetings', greetingController.create)
 
//Retrieve all Greetings
router.get('/greetings', greetingController.findAll)
 
// Retrieve a single Greeting with greetingId
router.get('/greetings/:greetingId', greetingController.findOne);

// Update a Greeting with greetingId
router.put('/greetings/:greetingId', greetingController.update);

// Delete a Greeting with greetingId
router.delete('/greetings/:greetingId', greetingController.delete);

module.exports = router