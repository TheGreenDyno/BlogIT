const mongoose = require('mongoose')
const { hashPassword } = require('../services/auth')


const schema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }
}, { timestamps: true })

schema.pre('save', async function (next) {
    if (!this.isModified('password')) return

    //genertaing hash..........    
    this.password = await hashPassword(this.password)
    next()
})

const User = mongoose.model('user', schema)

module.exports = User