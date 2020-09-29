//Import Greetings Model
const Greetings = require('../models/greetings.model.js')
 
// Create and Save a new Greeting
exports.create = (req, res) => {
    // Validate request
    if(!req.body.greeting) {
        return res.status(400).send({
            message: "Greeting message can not be empty"
        });
    }

    // Create a Greeting
    const greetings = new Greetings({
        firstName: req.body.firstName || "Untitled Greeting", 
        lastName: req.body.lastName,
        greeting: req.body.greeting
    });

    // Save Greeting in the database
    greetings.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Greeting."
        });
    });
};

// Retrieve and return all greetings from the database.
exports.findAll = (req, res) => {
    Greetings.find()
    .then(greetings => {
        res.send(greetings);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving greetings."
        });
    });
};

// Find a single greeting with a greetingId
exports.findOne = (req, res) => {
    Greetings.findById(req.params.greetingId)
    .then(greetings => {
        if(!greetings) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.greetingId
            });            
        }
        res.send(greetings);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Greeting not found with id " + req.params.greetingId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving greeting with id " + req.params.greetingId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.greeting) {
        return res.status(400).send({
            message: "Greeting content can not be empty"
        });
    }

    // Find note and update it with the request body
    Greetings.findByIdAndUpdate(req.params.greetingId, {
        firstName: req.body.firstName || "Untitled Greetings",
        lastName: req.body.lastName,
        greeting: req.body.greeting
    }, {new: true})
    .then(greetings => {
        if(!greetings) {
            return res.status(404).send({
                message: "Greeting not found with id " + req.params.greetingId
            });
        }
        res.send(greetings);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Greeting not found with id " + req.params.greetingId
            });                
        }
        return res.status(500).send({
            message: "Error updating greeting with id " + req.params.greetingId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Greetings.findByIdAndRemove(req.params.greetingId)
    .then(greetings => {
        if(!greetings) {
            return res.status(404).send({
                message: "Greeting not found with id " + req.params.greetingId
            });
        }
        res.send({message: "Greeting deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Greeting not found with id " + req.params.greetingId
            });                
        }
        return res.status(500).send({
            message: "Could not delete greeting with id " + req.params.greetingId
        });
    });
};