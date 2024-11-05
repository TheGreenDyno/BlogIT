const User = require('../modules/userModule')
const blog = require('../modules/blogModule')
const { verifyPassword } = require('../services/auth')
const { createToken } = require('../services/restirctUser')

function loginPage(req, res) {
    res.render('login')
}

async function handleLogin(req, res) {
    const { email, password } = req.body
    const blogs = await blog.find({})
    const user = await User.findOne({ email: email })
    if (!user) return res.render('login', { error: 'User is not Registered! Please create an Account' })
    const result = await verifyPassword(password, user.password)
    if (result == false) return res.render('login', { error: 'wrong password! Try again...' })
    const payload = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email
    }

    const token = await createToken(payload)

    return res.cookie('uid', token).render('home', { user: payload, blogs: blogs })
}


module.exports = { loginPage, handleLogin }