const mongoose =  require('mongoose')

const ResultSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'No name']
    },
    email: {
        unique: true,
        type:String,
        required: [true, 'No email']
    },
    score:{
        type: Number,
        required:[true, 'No score']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Result', ResultSchema)