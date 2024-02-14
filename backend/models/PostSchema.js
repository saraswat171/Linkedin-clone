const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: true
    
    },

    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },

    createAt: {
        type: Date,
        default: Date.now,
    },
    images: {
        type: Array,
    }
})
module.exports = mongoose.model('post', PostSchema)