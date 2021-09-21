const ErrorResponce = require('../utils/errorResponce')
const Question = require('../models/Question') 
const asyncHandler = require('../middleware/async')
const random = require('../utils/random')
// @desc Get all questions
// @route GET /api/questions
// @access Private
exports.getQuestions = asyncHandler( async (req, res, next) => {
    const questions = await Question.find()
    res.status(200).json({
        success: true, 
        count: questions.length,
        data: questions})
})

// @desc Get random questions
// @route GET /api/test
// @access Public
exports.getTest = asyncHandler( async (req, res, next) => {
        const questions = await Question.find()
        const test = random(questions)

        res.status(200).json({
            success: true, 
            data: test})
})

// @desc Create new question
// @route POST /api/questions
// @access Private
exports.createQuestion = asyncHandler( async(req, res, next) => {
        const question = await Question.create(req.body)
        
        res.status(201).json({
            success: true,
            data: question}) 
})

// @desc Update question
// @route PUT /api/question/:id
// @access Private
exports.updateQuestion =asyncHandler( async (req, res, next) => {

        const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators: true
        })

        if(!question){
            return next(new ErrorResponce(`Question not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: question
        })

})

// @desc Delete question
// @route DELETE /api/question/:id
// @access  Private
exports.deleteQuestion = asyncHandler( async (req, res, next) => {

        const question = await Question.findByIdAndDelete(req.params.id)

        if(!bootcamp){
           return next(new ErrorResponce(`Question not found with id of ${req.params.id}`, 404))
        }
        
        res.status(200).json({
            success: true,
            data: question
        })

})