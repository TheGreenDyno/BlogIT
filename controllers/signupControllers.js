const User = require('../modules/userModule')


function signupPage(req, res) {
    res.render('signup')
}
async function handleSignup(req, res) {
    const { fullName, email, password } = req.body
    try {
        const userData = await User.create({
            fullName,
            email,
            password
        })
        return res.render('login')
    } catch (error) {
        if (error.code === 11000) {
            return res.render('signup', { error: 'Email already Exists. Try new one' })
        }
        else {
            return res.render('signup', { error: 'Error occured while Registering....' })
        }
    }
}



module.exports = { signupPage, handleSignup }