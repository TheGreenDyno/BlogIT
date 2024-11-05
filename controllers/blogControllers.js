const Blog = require('../modules/blogModule')
const Comment = require('../modules/commentModules')
const multer = require('multer')
const path = require('path')
//create blog page...............................
function createBlogPage(req, res) {
    res.render('blog', { user: req.user })
}

async function handleBlogPost(req, res) {
    const { title, content } = req.body
    const coverImage = req.file.filename
    const blog = await Blog.create({
        title: title,
        content: content,
        coverImageURL: `/uploads/${coverImage}`,
        createdBy: req.user._id
    })
    res.redirect(`/blog/${blog._id}`)
}

//display blog page.....................
async function displayBlogPage(req, res) {
    const { id } = req.params
    const blog = await Blog.findOne({ _id: id }).populate('createdBy')
    const comments = await Comment.find({ blogId: id }).populate('createdBy')
    res.render('blogPage', { blog, comments })
}

async function handleComments(req, res) {
    const comment = req.body.comment
    const result = await Comment.create({
        comment: comment,
        blogId: req.params.blogId,
        createdBy: req.user._id
    })
    return res.redirect(`/blog/${req.params.blogId}`)
}

//multer uploading config.............
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

module.exports = {
    createBlogPage,
    handleBlogPost,
    upload,
    displayBlogPage,
    handleComments
}