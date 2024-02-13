const { commentServices } = require("../services")


exports.uploadingComment=async(req,res)=>{
    try{
        const response = await commentServices.uploadcomment(req);
        console.log("first",response)
        return res.status(200).json(response);
    }
    catch(err){
        console.log("abc",err)
return res.status(500 ).json(err)
    }
};


exports.fetchComments = async(req,res)=>{
    try{
        const response = await commentServices.getComments(req);
        return res.status(200).json(response)
    }
    catch(err){
        return  res.status(500).json(err);
    }
};

exports.deletingComments = async(req,res)=>{
    try{
        const response = await commentServices.deleteComments(req);
        return res.status(200).json(response);
    }
    catch(err){
        return res.status(500).json(err);
    }
};
exports.updatingComments = async(req,res)=>{
    try{
        const response = await commentServices.updateComment(req);
        return res.status(200).json(response);
    }
    catch(err){
        return res.status(500).json(err);
    }

};