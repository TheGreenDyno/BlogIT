const express = require('express')
const router = express.Router()
const {loginPage, handleLogin}= require('../controllers/loginControllers')

router.get('/',loginPage)
router.post('/',handleLogin)


module.exports = router