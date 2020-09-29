module.exports = (app) => {
    //import controller
    const greetingController = require('../controllers/greetings.controller.js')

    //Create a new Greeting
    app.post('/greetings', greetingController.create)
    
    //Retrieve all Greetings
    app.get('/greetings', greetingController.findAll)
    
    // Retrieve a single Greeting with greetingId
    app.get('/greetings/:greetingId', greetingController.findOne);

    // Update a Greeting with greetingId
    app.put('/greetings/:greetingId', greetingController.update);

    // Delete a Greeting with greetingId
    app.delete('/greetings/:greetingId', greetingController.delete);
}