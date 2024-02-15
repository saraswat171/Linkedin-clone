const ReactionModel = require('../models/ReactionSchema')
const CustomError = require('../libs/error')
exports.uploadReaction= async(params , query ,body)=>{

   
    // userId exists in mongodb && postId exists
    try { 
        const {postId} =params; 

        const userId= query.userId;
        const {type} =body;
        console.log(userId , postId)
        const newReaction = await ReactionModel.create({userId:userId , postId:postId , type:type})
        console.log(newReaction)
        return newReaction;
    }
    catch(err){
        console.log(err)
        throw err;
    }

};
exports.uploadCommentReaction= async(params , query ,body)=>{

   
    // userId exists in mongodb && postId exists
    try {console.log("hjjhk")
        const {commentId} = params; 

        const userId= query.userId;
        const {type} =body;
        console.log(userId , commentId)
        const newReaction = await ReactionModel.create({userId:userId , commentId:commentId , type:type})
        console.log(newReaction)
        return newReaction;
    }
    catch(err){
        console.log(err)
        throw err;
    }

};


exports.getReaction = async(req)=>{
  
    try {
        const {postId}=req.params; 
        const ReactionData = await ReactionModel.find({postId : postId});
        console.log("first" , ReactionData)
        if(ReactionData.length == 0){
            throw new CustomError("No reaction found" , 404)
        }
      return ReactionData;
     
    }
    catch(err){
        throw err;
    }
};

exports.getCommentReaction = async(req)=>{
  
    try {
        const {commentId}=req.params; 
        const ReactionData = await ReactionModel.find({commentId : commentId});
        console.log("first" , ReactionData)
        if(ReactionData.length == 0){
            throw new CustomError("No reaction found" , 404)
        }
      return ReactionData;
     
    }
    catch(err){
        throw err;
    }
};

exports.updateReaction=async(req)=>{
  
    try{
        console.log("we are at comment")
        const {reactionId} = req.params; 
        const userId= req.query.userId;
        const { type} = req.body;
        const user= await ReactionModel.findById(reactionId)
        console.log("first",userId==user.userId)
        if(userId == user.userId){
            const updateReaction= await ReactionModel.findByIdAndUpdate(reactionId,{type:type}, {new:true});
            return updateReaction;
        }
        else {
            throw new CustomError("Not authorised" , 404)
        }
       
    }
    catch(err){
        throw err;
    }
};

exports.deleteReaction=async(req)=>{
   
  
    try{
        const {reactionId} = req.params; 
        const userId= req.query.userId;
        if(userId == await ReactionModel.findById(reactionId).userId){
            const delReaction = await ReactionModel.findByIdAndDelete(reactionId);
            return delReaction;
        }
       
    }
    catch(err){
        throw err;
    }
};