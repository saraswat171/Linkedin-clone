const { reactionServices } = require("../services");



exports.uploadingReaction=async(req,res)=>{
    try{
        const response = await reactionServices.uploadReaction(req);
        console.log("first",response)
        return res.status(200).json(response);
    }
    catch(e){
        console.log("abc",err)
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};


exports.fetchReaction = async(req,res)=>{
    try{
        const response = await reactionServices.getReaction(req);
        return res.status(200).json(response)
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};

exports.deletingReaction = async(req,res)=>{
    try{
        const response = await reactionServices.deleteReaction(req);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};
exports.updatingReaction = async(req,res)=>{
    try{
        const response = await reactionServices.updateReaction(req);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }

};