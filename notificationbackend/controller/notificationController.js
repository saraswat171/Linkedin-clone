const { notificationServices } = require("../services");

exports.uploadingNotification=async(req,res)=>{
    try{
        ;
        const response = await notificationServices.uploadnotificationn(req.body);
       
        return res.status(201).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};
