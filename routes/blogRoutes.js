const express = require('express')
const { createBlogPage,
    handleBlogPost,
    upload,
    displayBlogPage,
    handleComments } = require('../controllers/blogControllers')
const router = express.Router()



router.get('/', createBlogPage)
router.post('/', upload.single('coverImage'), handleBlogPost)
router.get('/:id', displayBlogPage)
router.post('/comment/:blogId', handleComments)


module.exports = router