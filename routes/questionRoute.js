const express = require('express')
const router = express.Router()

// import controllers
const {getQuestions,insertQuestions,deleteQuestions} = require('../controllers/controller')

// question API
router.get('/questions',getQuestions)
router.post('/questions',insertQuestions)
router.delete('/questions',deleteQuestions)






module.exports= router