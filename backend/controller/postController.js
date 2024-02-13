const { postServices } = require("../services")

exports.uploadPosts = async(req,res)=>{
    try{
        const response = await postServices.userPosts(req);
        return res.status(200).json(response)
    }
    catch(err){
        return res.status(500).json(err);
    }
};

exports.fetchPosts = async(req,res)=>{
    try{
        const response = await postServices.getPosts(req);
        return res.status(200).json(response)
    }
    catch(err){
        return  res.status(500).json(err);
    }
};

exports.deletingPosts = async(req,res)=>{
    try{
        const response = await postServices.deletPosts(req);
        return res.status(200).json(response);
    }
    catch(err){
        return res.status(500).json(err);
    }
};
exports.updatingPost = async(req,res)=>{
    try{
        const response = await postServices.updatePost(req);
        return res.status(200).json(response);
    }
    catch(err){
        return res.status(500).json(err);
    }

};
