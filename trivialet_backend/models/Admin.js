const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name']
    },
    email: {
        type: String,
        required: [true, 'Add a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Add a password'],
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Admin', AdminSchema)