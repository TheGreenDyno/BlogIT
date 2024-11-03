const mongoose = require('mongoose')

async function DBconn() {
    return  await mongoose.connect('mongodb://127.0.0.1:27017/BlogIT')
    .then(()=>{
        console.log('db conn success')
    })
}


module.exports = DBconn