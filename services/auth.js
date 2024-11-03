const bcrypt = require('bcrypt')

async function hashPassword(password) {
    const test= await bcrypt.hash(password, 10)
    console.log(test)
    return test
}
async function verifyPassword(password,hashedPassword){
   const result= await bcrypt.compare(password,hashedPassword)
   return result
    
}

module.exports = {hashPassword, verifyPassword}


