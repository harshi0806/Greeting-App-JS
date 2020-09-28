const express = require('express')
const router = express.Router()
 
//import controller
const greetingController = require('../controllers/greetings.controller.js')
 
//get all the list of greetings
router.get('/', greetingController.get_user)
 
//create a greeting
router.post('/user', greetingController.create_user)
 
//update greeting
router.put('/update/:id', greetingController.update_user)
 
//delete greeting
router.delete('/delete/:id', greetingController.delete_user)
 
module.exports = router