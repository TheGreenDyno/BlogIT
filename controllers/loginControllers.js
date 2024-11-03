const User = require('../modules/userModule')
const { verifyPassword } = require('../services/auth')
function loginPage(req, res) {
    res.render('login')
}

async function handleLogin(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    console.log(user)
    if (!user) return res.send('User is not registered')
    const result = await verifyPassword(password, user.password)
    console.log(`password is ${result}`)
    if(result== false) return res.send('wrong password')
    return res.render('index')


}

module.exports = { loginPage, handleLogin }