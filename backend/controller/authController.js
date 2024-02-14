const { authServices } = require("../services")


exports.SignUpUser=(async(req,res)=>{
    try{
        const response = await authServices.createUser(req);
        return res.status(201).json(response); 
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
});
exports.SignInUser=(async(req,res)=>{
    try{
        const response = await authServices.loginUser(req);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
});