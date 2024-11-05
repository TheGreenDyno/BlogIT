const bcrypt = require('bcrypt')

async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 10)
    return hash
}
async function verifyPassword(password, hashedPassword) {
    const result = await bcrypt.compare(password, hashedPassword)
    return result
}

module.exports = { hashPassword, verifyPassword }


