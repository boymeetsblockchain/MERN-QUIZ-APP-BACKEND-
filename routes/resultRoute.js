const express = require('express')
const { getResult,storeResult,dropResult } = require('../controllers/controller')
const router = express.Router()
 
router.get('/result', getResult)
router.post('/result', storeResult)
router.delete('/result', dropResult)

module.exports= router