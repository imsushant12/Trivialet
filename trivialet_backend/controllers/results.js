const Result = require('../models/Result') 
const asyncHandler = require('../middleware/async')

// @desc Get all result
// @route GET /api/results
// @access Private
exports.getResults = asyncHandler( async (req, res, next) => {
    const results = await Result.find()
    res.status(200).json({
        success: true,
        data: results})
})

// @desc Create new result
// @route POST /api/results
// @access Private
exports.createResult = asyncHandler( async(req, res, next) => {
    const result = await Result.create(req.body)
    
    res.status(201).json({
        success: true,
        data: result}) 
})