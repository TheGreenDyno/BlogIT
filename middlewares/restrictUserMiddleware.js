const { verifyToken } = require('../services/restirctUser')

async function onlyLoggedInUsers(req, res, next) {
    const { uid } = req.cookies
    if (!uid) {
        res.locals.error = 'Please log in to access this page.';
        return res.render('login'); // Render login with error message
    }

    const token = await verifyToken(uid)

    req.user = token
    if (!token) return res.render('login')
    next()
}

module.exports = { onlyLoggedInUsers }