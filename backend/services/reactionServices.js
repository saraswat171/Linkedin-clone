const ReactionModel = require('../models/ReactionSchema')
exports.uploadReaction= async(req)=>{

    const {postId} = req.params; 

    const userId= req.query.userId;
    const {type} =req.body;
    console.log(userId , postId)
    // userId exists in mongodb && postId exists
    try {
  
        const newReaction = await ReactionModel.create({userId:userId , postId:postId , type:type})
        console.log(newReaction)
        return newReaction;
    }
    catch(err){
        console.log(err)
        throw err;
    }

};

exports.getReaction = async(req)=>{
    const {postId}=req.params; 
    try {
        const ReactionData = await ReactionModel.find({postId : postId});
        console.log("first" , ReactionData)
      return ReactionData;
     
    }
    catch(err){
     return err;
    }
};

exports.updateReaction=async(req)=>{
    console.log("we are at comment")
    const {reactionId} = req.params; 
    const userId= req.query.userId;
    const { type} = req.body;
    const user= await ReactionModel.findById(reactionId)
    console.log("first",userId==user.userId)
    try{
        if(userId == user.userId){
            const updateReaction= await ReactionModel.findByIdAndUpdate(reactionId,{type:type}, {new:true});
            return updateReaction;
        }
       
    }
    catch(err){
        return err;
    }
};

exports.deleteReaction=async(req)=>{
    const {reactionId} = req.params; 
    const userId= req.query.userId;
  
    try{
        if(userId == await ReactionModel.findById(reactionId).userId){
            const delReaction = await ReactionModel.findByIdAndDelete(reactionId);
            return delReaction;
        }
       
    }
    catch(err){
        return err;
    }
};