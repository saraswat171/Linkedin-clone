const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required : true
    
    },

    title: {
        type: String,
        required : true
    },
    body: {
        type: String,
        required : true
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