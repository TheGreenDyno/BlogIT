const express = require('express')
const router = express.Router()
const { signupPage, handleSignup } = require('../controllers/signupControllers')

router.get('/', signupPage)
router.post('/', handleSignup)


module.exports = router