const ErrorResponce = require('../utils/errorResponce')
const Admin = require('../models/Admin') 
const asyncHandler = require('../middleware/async')
const bcrypt = require('bcrypt')

// @desc Check for credentials
// @route POST /api/login
// @access Public
exports.checkCredentials = asyncHandler( async(req, res, next) => {
    const {email, password} = req.body
    const admin = await Admin.find({email})
    if(admin[0] == null){
        return next(new ErrorResponce(`User not found with email of ${email}}`, 404))
    }
    try {
        if(await bcrypt.compare(password,admin[0].password)){
            res.status(200).json({
                success: true
            }) 
        }else{
            res.status(404).json({
                success: false
            })
        }
    } catch  {
        res.status(500).json({
            success: false
        })
    }
})

// @desc Create a admin
// @route POST /api/admin
// @access Public
exports.createAdmin = asyncHandler( async(req, res, next) => {
    const { name, email, password} = req.body
    // console.log(req.body)
    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(password, salt)
        
    const admin = {name, email, password: hashedPass}
    await Admin.create(admin)

    res.status(201).json({
        success: true,
        data: admin}) 
})