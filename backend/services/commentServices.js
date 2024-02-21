const CommentModel = require('../models/CommentsSchema')
const CustomError = require('../libs/error')
const UsersModel = require('../models/UserSchema')
const PostModel = require('../models/PostSchema')
exports.uploadcomment = async(params,userId, body)=>{

  
    try {
        console.log("data back" , params )
        const {postId} = params; 
        
        const databody =  Object.keys(body)[0];
        console.log('databody: ', databody);
        
        // userId exists in mongodb && postId exists
        
        if( ! await PostModel.findById(postId)){
            throw new CustomError('No such post exists' , 404)
        }

        const newComment = await CommentModel.create({userId:userId , postId:postId , body:databody})
        console.log(newComment)
        return newComment;
    }
    catch(err){
        console.log(err)
        throw err;
    }

};

exports.getComments = async(req)=>{
    try {
        const {postId}=req.params; 
        let query={postId:postId};
         const createAt=req.query.time;
        if(createAt){ 
        query= { postId: postId, createAt: { $gte: (new Date(createAt)) } }
       }
        // console.log(postId); console.log(postId);   console.log("first",createAt)
       const commentData = await CommentModel.find(query).sort({createdAt :-1}).limit(2);
        console.log(commentData)
      return commentData;
     
    }
    catch(err){
     throw err;
    }
};

exports.deleteComments=async(params , query)=>{
    try{
        const {commentId} = params; 
        const userId= query.userId;
        if(userId == await CommentModel.findById(commentId).userId){
            const delComment = await CommentModel.findByIdAndDelete(commentId);
            return delComment;
        }
        throw new CustomError("Unauthorised", 401)
    }
    catch(err){
        throw err;
    }
};
exports.updateComment=async(params,query, body)=>{
    try{
        // console.log("we are at comment")
        const {commentId} = params; 
        const userId= query.userId;
        const databody = body.body;
        const user= await CommentModel.findById(commentId)
        // console.log("first",userId==user.userId)
        if(userId == user.userId){
            const updateComment= await CommentModel.findByIdAndUpdate(commentId,{body:databody}, {new:true});
            return updateComment;
        }
        throw new CustomError("Unauthorised", 401)
    }
    catch(err){
        throw err;
    }
};