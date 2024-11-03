const User = require('../modules/userModule')


function signupPage(req, res) {
    res.render('signup')
}
async function handleSignup(req,res){
 const {fullName,email,password}=req.body
 const userData = await User.create({
    fullName,
    email,
    password
 })
console.log(userData)
res.render('login')

}


module.exports = { signupPage, handleSignup }