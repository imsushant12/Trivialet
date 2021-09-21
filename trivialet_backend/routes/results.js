const express = require('express')
const { getResults, createResult} =require('../controllers/results')

const router = express.Router()

router.route('/results')
    .get(getResults)
    .post(createResult);

module.exports = router