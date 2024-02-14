const { commentServices } = require("../services")


exports.uploadingComment=async(req,res)=>{
    try{
        const response = await commentServices.uploadcomment(req);
        console.log("first",response)
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};


exports.fetchComments = async(req,res)=>{
    try{
        const response = await commentServices.getComments(req);
        return res.status(200).json(response)
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};

exports.deletingComments = async(req,res)=>{
    try{
        const response = await commentServices.deleteComments(req);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};
exports.updatingComments = async(req,res)=>{
    try{
        const response = await commentServices.updateComment(req);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }

};