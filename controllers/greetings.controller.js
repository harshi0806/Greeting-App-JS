//Import Greetings Model
const Greetings = require('../models/greetings.model.js')
const service = require('../serviceLayer/greetings.service.js')
 
exports.get_user = (req, res) => {
    Greetings.find({}, (err, ) => {
        res.status(200).json({
            message: 'Hello World',
            data: greetings
        })
    })
}
 
exports.create_user = (req, res) => {
    const greetings = new Greetings({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        greeting: req.body.greeting
 
    })
 
    greetings.save(err => {
        if (!err) {
            res.status(201).json({
                message: 'Greetings Created Successfully.',
                data: greetings
            })
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}
 
exports.update_user = (req, res) => {
    //get params id 
    const id = req.params.id
    //what you want to update
    const options = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        greeting: req.body.greeting
    }
 
    Greetings.findByIdAndUpdate({ _id: id }, options, err => {
        if (!err) {
            res.status(200).json({ message: "Update successfully" })
        } else {
            res.status(500).json({ message: 'Failed' })
        }
    })
}
 
exports.delete_user = (req, res) => {
    const id = req.params.id
 
    Greetings.deleteOne({ _id: id }, err => {
        if (!err) {
            res.status(200).json({ message: "Deleted successfully" })
        } else {
            res.status(500).json({ message: 'Failed' })
        }
    })
}