module.exports = (greetingApp) => {
    const greetings = require('../controllers/greetings.controller.js');

    // Create a new Greeting
    greetingApp.post('/greetings', greetings.create);

    // Retrieve all Greetings
    greetingApp.get('/greetings', greetings.findAll);

    // Retrieve a single Greeting with GreetingId
    greetingApp.get('/greetings/:greetingsId', greetings.findOne);

    // Update a Greeting with GreetingId
    greetingApp.put('/greetings/:greetingsId', greetings.update);

    // Delete a Greeting with GreetingId
    greetingApp.delete('/greetings/:greetingsId', greetings.delete);
}