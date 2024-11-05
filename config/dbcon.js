const mongoose = require('mongoose')

async function DBconn() {
    return  await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('db conn success')
    })
}


module.exports = DBconn