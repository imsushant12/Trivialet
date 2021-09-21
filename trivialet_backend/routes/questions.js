const express = require('express')
const {getQuestions, createQuestion, updateQuestion, deleteQuestion, getTest} =require('../controllers/questions')

const router = express.Router()

router.route('/questions')
    .get(getQuestions)
    .post(createQuestion);

router.route('/question/:id')
    .put(updateQuestion)
    .delete(deleteQuestion)

router.route('/test')
    .get(getTest)

module.exports = router