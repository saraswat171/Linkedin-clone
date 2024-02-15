const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')
const PostsModel=require('./PostSchema')
const CommentModel = require('./CommentsSchema')
const ReactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required : true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: PostsModel,
     
    },
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CommentModel,
        
    },
    type: { type: String ,
     
        required : true
    },
  
},{timestamps:true })
module.exports = mongoose.model("reactions", ReactionSchema)