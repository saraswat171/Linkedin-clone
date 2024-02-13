const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')
const PostsModel=require('./PostSchema')
const CommentModel = require('./CommentsSchema')
const ReactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: [true]
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
     
        require: [true]
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports = mongoose.model("reactions", ReactionSchema)