const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

// load env vars
dotenv.config({path: './config/config.env'})

//connect to database
connectDB()

// Route files
const questions = require('./routes/questions')
const results = require('./routes/results')
const admins = require('./routes/admins')

const app = express()
app.use(express.json())

// Using morgan as a logger
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*")
res.header( 
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
)
res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS')
next()
})

// Mouting routers
app.use('/api', questions)
app.use('/api', results)
app.use('/api', admins)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handling Unhandled rejection
process.on('unhandledRejection', (err,promise) =>{
    console.log(`Error: ${err}`.red)
    // Close server and exit
    server.close(()=> process.exit(1))
})