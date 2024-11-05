const jwt = require('jsonwebtoken')
const secretKey = process.env.JWTKey


async function createToken(info) {
    return await jwt.sign(info, secretKey)
}


async function verifyToken(token) {
    if (!token) {
        throw new Error('Token not provided');
    }
    return await jwt.verify(token, secretKey)
}


module.exports = { createToken, verifyToken }