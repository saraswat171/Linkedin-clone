const { reactionServices } = require("../services");



exports.uploadingReaction=async(req,res)=>{
    try{
        const response = await reactionServices.uploadReaction(req.params , req.query , req.body);
        console.log("first",response)
        return res.status(201).json(response);
    }
    catch(e){
        console.log("abc",err)
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};
exports.uploadingCommentReaction=async(req,res)=>{
    try{
        const response = await reactionServices.uploadCommentReaction(req.params , req.query , req.body);
        console.log("first",response)
        return res.status(201).json(response);
    }
    catch(e){
        console.log("abc",e)
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};


exports.fetchCommentReaction = async(req,res)=>{
    try{
        const response = await reactionServices.getCommentReaction(req);
        return res.status(200).json(response)
    }
    catch(e){
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