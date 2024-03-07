const CustomError = require("../libs/error");

const { postServices } = require("../services")

exports.uploadPosts = async(req,res)=>{
    try{
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
            const userId = req.user.ID;
        const response = await postServices.userPosts({title:req.body.title , body:req.body.body , files:req.files , id:userId});
 
        return res.status(201).json(response)
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};

exports.fetchPosts = async(req,res)=>{
    try{
        console.log('req.query: ', req.query);
        const response = await postServices.getPosts(req.query);
        return res.status(200).json(response)
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};

exports.deletingPosts = async(req,res)=>{
    try{
        const response = await postServices.deletPosts(req.params , req.query);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};
exports.updatingPost = async(req,res)=>{
    try{
        const response = await postServices.updatePost(req.params , req.query);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }

};
