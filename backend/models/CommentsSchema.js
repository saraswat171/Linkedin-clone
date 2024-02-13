const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const PostModel = require('./ExperienceSchema')
const CommentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: true
    
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: PostModel,
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
    
})
module.exports = mongoose.model('comment', CommentSchema)