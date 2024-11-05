const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    coverImageURL: {
        type: String,
        required: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
}, { timestamps: true })



const Blog = mongoose.model('blog', schema)

module.exports = Blog