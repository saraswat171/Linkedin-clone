const ConnectionModel = require('../models/ConnectionsSchema')
const CustomError = require('../libs/error')
const UsersModel = require('../models/UserSchema')
var ObjectId = require('mongodb').ObjectId;
exports.uploadconnection = async(params,senderId)=>{

    try {
        const {receiverId}=params;
       
    
 const user = UsersModel.findById(receiverId);
 if (!user)
     throw new CustomError("User does not exist", 404);
     const connection = await ConnectionModel.findOne({ $or: [{senderId:senderId , receiverId:receiverId }, { senderId:receiverId , receiverId:senderId }] })
     if(!connection){
        const newConnection = await ConnectionModel.create({senderId:senderId , receiverId:receiverId , Status:'Pending'})
        console.log(newConnection)
        return newConnection;
     }
     if (connection.Status !== 'Withdraw')
    throw new CustomError("Already connection exist", 401);
    if ((new Date()).getTime() - connection.updatedAt.getTime() > 1855058823) //greater than new date by 3 weeks
    {
        const response = await ConnectionModel.findByIdAndUpdate(connection._id, { Status: 'Pending' }, { new: true })
        return response;
    }
    throw new CustomError("Required 3 weeks waiting time to request again ", 409);
       
    }
    catch(err){
        console.log(err)
        throw err;
    }

};




exports.fetchconnection = async(userId)=>{     //userId from authentication

 
//    try{
   
//     const response = await ConnectionModel.find({ $or: [ { senderId: userId }, { recieverId: userId } ] }); 
   
//     const output={};
//     let request , connection , reject;
//     if(response.length > 0){
        
//         request= response.filter((rqst)=>  {  return rqst.Status=== 'Pending' && (rqst.senderId).toString() === userId});
//         console.log('request: ', request);
//         connection= response.filter((rqst)=> { return rqst.Status=== 'Accepted' && ((rqst.receiverId).toString() === userId  || (rqst.senderId).toString() === userId)});
//         reject = response.filter((rqst)=> { return rqst.Status=== 'Deleted' && ((rqst.receiverId).toString() === userId  || (rqst.senderId).toString() === userId)});

//     }
//     output.pendingrequest=request;
//     output.connected=connection;
//     output.cancel=reject;
//     return output;
 
//    }
try{
    console.log('response ', {Status :'Pending' , senderId:`${userId}`})
    // const response = await ConnectionModel.find({ $or: [ { senderId: userId }, { recieverId: userId } ] }); 
   const myId = new ObjectId(userId);
    const response = await ConnectionModel.aggregate([{
        
        $match:{
            $or:[
                {Status :'Pending',receiverId:myId },
                {Status:'Accepted',  $or:[{senderId:myId},{receiverId:myId}]}
            ]
        }
        },
        {
            $lookup:{
                from:'users',
                localField: 'senderId',
                foreignField: '_id',
                pipeline:[{$project:{'name':1}}],
                as: 'sendername'

            }
        },
        {
            $group:{
                _id:'$Status',
                data: { $push: '$$ROOT' }
            }
        }
    ]);
   

    const transformedResponse = response.reduce((acc, curr) => {
        acc[curr._id] = curr.data;
        return acc;
    }, {});
    console.log('transformedResponse: ', response);

  
    return transformedResponse;
   }
   catch(err){
    console.log(err)
    throw err;
}

};
exports.fetchsuggestion = async(userId)=>{     //userId from authentication

 
    try{
        const result = await ConnectionModel.find({$and : [{ $or: [ { senderId: userId }, { receiverId: userId } ] } , { $nor: [ { Status: 'Rejected' }, { Status: 'Deleted' } ] }]}); 
   
        const ids= result?.map(connection => (connection.senderId).toString()=== userId ?  connection.receiverId : connection.senderId )
       
       
     const response = await UsersModel.find({_id : {$nin : [...ids,userId]} }); 
    
 
     return response;
  
    }
    catch(err){
     console.log(err)
     throw err;
 }
 
 };


 exports.updateConnection=  async(params , userId , body)=>{
    try{
        const {connectionId}=params;
   
        const status = body;
        if (!connectionId)
        throw new CustomError("Connection id is required", 401);
        const response = await ConnectionModel.findById(connectionId);
        if(!response){
            throw new CustomError("No connection found", 400);   
        }
        if (!status)
        throw new CustomError("Status is required", 401);
    if (status === 'Pending')
        throw new CustomError(" Bad request", 400);
    if (status === 'Withdraw' && response.Status === 'Pending' && (response.senderId).toString() === userId) {
        const res = ConnectionModel.findOneAndUpdate({ senderId: userId, _id: connectionId }, { Status: status }, { new: true, upsert: true })
        console.log('res: ', res);
        return res;
    }
    else if (status === 'Accepted' || status === 'Rejected') {
        const res = ConnectionModel.findOneAndUpdate({ receiverId: userId, _id: connectionId }, { Status: status }, { new: true, upsert: true })
        console.log('res: ', res);
        return res;
    }
    else if (status === 'Deleted' && response.Status === 'Accepted') {
       
        const res = ConnectionModel.findOneAndUpdate({ $or: [{ _id: connectionId, receiverId: userId }, { senderId: userId, _id: connectionId }] }, { Status: status }, { new: true, upsert: true })
        // console.log('res: ', res);
        return res;
    }

    }
    catch(err){
        console.log(err)
        throw err;
    }


 }

 