const blog = require('../modules/blogModule')

const homepage = async (req, res) => {
    const blogs = await blog.find({})
    res.render('home', { user: req.user, blogs: blogs })
}


function handleLogout(req, res) {
    res.clearCookie('uid').redirect('/login')
}


module.exports = { homepage, handleLogout }