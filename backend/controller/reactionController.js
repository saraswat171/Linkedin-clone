const { reactionServices } = require("../services");



exports.uploadingReaction=async(req,res)=>{
    try{
        const response = await reactionServices.uploadReaction(req);
        console.log("first",response)
        return res.status(200).json(response);
    }
    catch(err){
        console.log("abc",err)
return res.status(500 ).json(err)
    }
};


exports.fetchReaction = async(req,res)=>{
    try{
        const response = await reactionServices.getReaction(req);
        return res.status(200).json(response)
    }
    catch(err){
        return  res.status(500).json(err);
    }
};

exports.deletingReaction = async(req,res)=>{
    try{
        const response = await reactionServices.deleteReaction(req);
        return res.status(200).json(response);
    }
    catch(err){
        return res.status(500).json(err);
    }
};
exports.updatingReaction = async(req,res)=>{
    try{
        const response = await reactionServices.updateReaction(req);
        return res.status(200).json(response);
    }
    catch(err){
        return res.status(500).json(err);
    }

};