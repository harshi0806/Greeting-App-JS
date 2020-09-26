const Greetings = require('../models/greetings.model.js');

// Create and Save a new Greeting message
exports.create = (req, res) => {
    // Validate request
    if(!req.body.greeting) {
        return res.status(400).send({
            message: "Greeting content cannot be empty"
        });
    }

    // Create a Greeting
    const greetings = new Greetings({
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        greeting: req.body.greeting || "Untitled Greetings"
    });

    // Save Greetings in the database
    greetings.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Greetings."
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
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single greeting with a greetingId
exports.findOne = (req, res) => {
    Greetings.findById(req.params.greetingsId)
    .then(greetings => {
        if(!greetings) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.greetingsId
            });            
        }
        res.send(greetings);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.greetingsId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.greetingsId
        });
    });
};

// Update a greeting identified by the greetingsId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.greeting) {
        return res.status(400).send({
            message: "Greeting content can not be empty"
        });
    }

    // Find greeting and update it with the request body
    Greetings.findByIdAndUpdate(req.params.greetingsId, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        message: req.body.message || "Untitled Greetings"
    }, {new: true})
    .then(greetings => {
        if(!greetings) {
            return res.status(404).send({
                message: "Greeting not found with id " + req.params.greetingsId
            });
        }
        res.send(greetings);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Greetings not found with id " + req.params.greetingsId
            });                
        }
        return res.status(500).send({
            message: "Error updating greeting with id " + req.params.greetingsId
        });
    });
};

// Delete a greeting with the specified greetingId in the request
exports.delete = (req, res) => {
    Greetings.findByIdAndRemove(req.params.greetingsId)
    .then(greetings => {
        if(!greetings) {
            return res.status(404).send({
                message: "Greetings not found with id " + req.params.greetingsId
            });
        }
        res.send({message: "Greetings deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Greeting not found with id " + req.params.greetingsId
            });                
        }
        return res.status(500).send({
            message: "Could not delete greetings with id " + req.params.greetingsId
        });
    });
};