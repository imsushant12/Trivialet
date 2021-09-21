const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: [true, 'Add a question'],
        unique: true,
        maxlength: [300]
    },
    option1:{
        type: String,
        required: [true, 'Add option 1'],
        maxlength: [300]
    },
    option2:{
        type: String,
        required: [true, 'Add option 2'],
        maxlength: [300]
    },
    option3:{
        type: String,
        required: [true, 'Add option 3'],
        maxlength: [300]
    },
    option4:{
        type: String,
        required: [true, 'Add option 4'],
        maxlength: [300]
    },
    correct:{
        type: String,
        required: [true, 'Add the correct answer'],
        maxlength: [300]
    }
})

module.exports = mongoose.model('Question', QuestionSchema)