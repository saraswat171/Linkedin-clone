const ReactionModel = require('../models/ReactionSchema')
const CustomError = require('../libs/error')
const axios = require('axios')
exports.uploadReaction= async(params , userId ,body)=>{

   
    // userId exists in mongodb && postId exists
    try { 
        const {postId} =params; 

       
        const databody =  Object.keys(body)[0];
    
        const newReaction = await ReactionModel
        .findOneAndUpdate({ userId:userId , postId:postId}, { type:databody}, { upsert: true, new: true })
        
        console.log('newReaction: ', newReaction);
        try{ 
            console.log('newPost: ');
            const notif = await axios.post('http://localhost:8001/notifications' ,
             newReaction)

        }
        catch(e){
            console.log('ggg',e.message)
            throw e;
        }
       
        return newReaction;
    }
    catch(err){
        //console.log(err.message)
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


exports.getReaction = async(params)=>{
  
    try {
        const {postId}=params; 
        const ReactionData = await ReactionModel.find({postId : postId});
       // console.log("first" , ReactionData)
        if(ReactionData.length === 0){
            throw new CustomError("No reaction found" , 404)
        }
      return ReactionData;
     
    }
    catch(err){
        throw err;
    }
};

exports.getCommentReaction = async(params)=>{
  
    try {
        const {commentId}=params; 
        const ReactionData = await ReactionModel.find({commentId : commentId});
      //  console.log("first" , ReactionData)
        if(ReactionData.length === 0){
            throw new CustomError("No reaction found" , 404)
        }
      return ReactionData;
     
    }
    catch(err){
        throw err;
    }
};

exports.updateReaction=async(params , query ,body)=>{
  
    try{
        console.log("we are at comment")
        const {reactionId} = params; 
        const userId= query.userId;
        const { type} = req.body;
        const user= await ReactionModel.findById(reactionId)
      //  console.log("first",userId==user.userId)
        if(userId === user.userId){
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

exports.deleteReaction=async(params , userId )=>{
   
  
    try{
    
        const {reactionId} = params; 
        const UserReaction = await ReactionModel.findById(reactionId);

        if(UserReaction.userId == userId){
            
            const delReaction = await ReactionModel.findByIdAndDelete(reactionId);
            console.log('delete krenge')
            return delReaction;
        }
       
    }
    catch(err){
        throw err;
    }
};