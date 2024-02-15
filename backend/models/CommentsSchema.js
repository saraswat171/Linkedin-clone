const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const PostModel = require('./ExperienceSchema')
const CommentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required : true
    
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: PostModel,
        required : true
    
    },

   
    body: {
        type: String,
        required : true
    },

 
},{timestamps:true })
module.exports = mongoose.model('comment', CommentSchema)