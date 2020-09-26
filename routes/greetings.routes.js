module.exports = (greetingApp) => {
    const greetings = require('../controllers/greetings.controller.js');

    // Create a new Note
    greetingApp.post('/greetings', greetings.create);

    // Retrieve all Notes
    greetingApp.get('/greetings', greetings.findAll);

    // Retrieve a single Note with noteId
    greetingApp.get('/greetings/:greetingsId', greetings.findOne);

    // Update a Note with noteId
    greetingApp.put('/greetings/:greetingsId', greetings.update);

    // Delete a Note with noteId
    greetingApp.delete('/greetings/:greetingsId', greetings.delete);
}