const { authServices } = require("../services")


exports.SignUpUser=(async(req,res)=>{
    try{
        const response = await authServices.createUser(req);
        return res.status(201).json(response); 
    }
    catch(e){
        return res.status(e?.code).json({message:e?.message})
    }
});
exports.SignInUser=(async(req,res)=>{
    try{
        const response = await authServices.loginUser(req);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code).json({message:e?.message})
    }
});