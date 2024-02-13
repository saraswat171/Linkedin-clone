const CommentModel = require('../models/CommentsSchema')
exports.uploadcomment = async(req)=>{

    const {postId} = req.params; 

    const userId= req.query.userId;
    const {body} =req.body;
    console.log(userId , postId)
    // userId exists in mongodb && postId exists
    try {
  
        const newComment = await CommentModel.create({userId:userId , postId:postId , body:body})
        console.log(newComment)
        return newComment;
    }
    catch(err){
        console.log(err)
        throw err;
    }

};

exports.getComments = async(req)=>{

    const {postId}=req.params; 
    let query={postId:postId};
     const createAt=req.query.time;
    if(createAt){
     
    query= { postId: postId, createAt: { $gte: (new Date(createAt)) } }
   }
    
    
    console.log(postId)
    
    try {
        console.log(postId)
        console.log("first",createAt)
        const commentData = await CommentModel.find(query).sort({createdAt :-1}).limit(2);
        console.log(commentData)
      return commentData;
     
    }
    catch(err){
     throw err;
    }
};

exports.deleteComments=async(req)=>{
    const {commentId} = req.params; 
    const {userId}= req.query.userId;
  
    try{
        if(userId == await CommentModel.findById(commentId).userId){
            const delComment = await CommentModel.findByIdAndDelete(commentId);
            return delComment;
        }
       
    }
    catch(err){
        return err;
    }
};
exports.updateComment=async(req)=>{
    console.log("we are at comment")
    const {commentId} = req.params; 
    const userId= req.query.userId;
    const { body} = req.body;
    const user= await CommentModel.findById(commentId)
    console.log("first",userId==user.userId)
    try{
        if(userId == user.userId){
            const updateComment= await CommentModel.findByIdAndUpdate(commentId,{body:body}, {new:true});
            return updateComment;
        }
       
    }
    catch(err){
        return err;
    }
};