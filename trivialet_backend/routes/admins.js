const express = require('express')
const { checkCredentials, createAdmin} =require('../controllers/admins')

const router = express.Router()

router.route('/login')
    .post(checkCredentials)

router.route('/admin')
    .post(createAdmin);

module.exports = router