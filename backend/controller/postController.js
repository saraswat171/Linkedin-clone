const { postServices } = require("../services")

exports.uploadPosts = async(req,res)=>{
    try{
        const response = await postServices.userPosts(req);
        return res.status(200).json(response)
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};

exports.fetchPosts = async(req,res)=>{
    try{
        const response = await postServices.getPosts(req);
        return res.status(200).json(response)
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};

exports.deletingPosts = async(req,res)=>{
    try{
        const response = await postServices.deletPosts(req);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};
exports.updatingPost = async(req,res)=>{
    try{
        const response = await postServices.updatePost(req);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }

};
