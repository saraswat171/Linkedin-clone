const CustomError = require("../libs/error");
const { connectionServices } = require("../services");



exports.uploadingConnection=async(req,res)=>{
    try{
       console.log("first")
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
            const senderId = req.user.ID;
        const response = await connectionServices.uploadconnection(req.params, senderId);
        console.log("first",response)
        return res.status(201).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};


exports.fetchConnection = async(req,res)=>{
    try{
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
            const userId = req.user.ID;
        const response = await connectionServices.fetchconnection(userId);
        return res.status(200).json(response)
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};

exports.fetchSuggestion = async(req,res)=>{
    try{
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
            const userId = req.user.ID;
        const response = await connectionServices.fetchsuggestion(userId);
        return res.status(200).json(response)
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};

exports.updatingConnection = async(req,res)=>{

    try{
          if (!res.locals.isAuthenticated) {
            console.log('locals: ');
        throw new CustomError("User not authorised", 401)
    }
        const userId = req.user.ID;
        const response = await connectionServices.updateConnection(req.params, userId, req.body);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }

};




//  try{
   
//     // const response = await ConnectionModel.find({ $or: [ { senderId: userId }, { recieverId: userId } ] }); 
//     const response = await ConnectionModel.aggregate([{
        
//         $match:{
//             $or:[
//                 {Status :'Pending' , senderId:userId},
//                 {Status:'Accepted' , $or:[{senderId:userId},{receiverId:userId}] }
//             ]
//         }
//         },
//         {
//             $group:{
//                 _id:'$Status',
//                 data:{$push:'$$ROOT'}
//             }
//         }
//     ]);
   

//     return response;
 
//    }
//    catch(err){
//     console.log(err)
//     throw err;
// }