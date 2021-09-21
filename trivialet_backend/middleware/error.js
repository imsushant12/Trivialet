const ErrorResponce = require('../utils/errorResponce')

const errorHandler = (err, req, res, next) => {
    let error = { ...err }

    error.message = err.message
    // log to console
    console.log(err.stack.red)
    
    // Mongoose bad objectId
    if(err.name === 'CastError'){
        const message = `Question not found with id of ${err.value}`
        error = new ErrorResponce(message, 404)
    }

    // Moongoose duplicate key
    if(err.code === 11000){
        const message = `Duplicate field value entered`
        error = new ErrorResponce(message, 400)
    }

    // Mongoose validation error
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message)
        error = new ErrorResponce(message, 400)
    }


    res.status(err.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })
}

module.exports = errorHandler 