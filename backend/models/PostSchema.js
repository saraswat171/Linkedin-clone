const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: [true]
    
    },

    title: {
        type: String,
    },
    body: {
        type: String,
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