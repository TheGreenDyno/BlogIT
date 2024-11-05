const express = require('express')
const router = express.Router()
const {displayIndexPage}= require('../controllers/indexControllers')

router.get('/',displayIndexPage)


module.exports = router