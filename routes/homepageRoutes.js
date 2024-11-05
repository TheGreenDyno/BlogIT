const express = require('express')
const router = express.Router()
const {homepage, handleLogout} = require('../controllers/homepageController')

router.get('/',homepage)
router.get('/logout',handleLogout)


module.exports = router