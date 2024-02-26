const ConnectionModel = require('../models/ConnectionsSchema')
const CustomError = require('../libs/error')
const UsersModel = require('../models/UserSchema')
exports.uploadconnection = async(params,senderId)=>{

  console.log("first")
    try {
     const {receiverId}=params;


        const newConnection = await ConnectionModel.create({senderId:senderId , receiverId:receiverId , Status:'Pending'})
        console.log(newConnection)
        return newConnection;
    }
    catch(err){
        console.log(err)
        throw err;
    }

};

exports.fetchconnection = async(userId)=>{     //userId from authentication

 
   try{
   
    const response = await ConnectionModel.find({ $or: [ { senderId: userId }, { recieverId: userId } ] }); 
   
    const output={};
    let request , connection , reject;
    if(response.length > 0){
        
        request= response.filter((rqst)=>  {  return rqst.Status=== 'Pending' && (rqst.senderId).toString() === userId});
        console.log('request: ', request);
        connection= response.filter((rqst)=> { return rqst.Status=== 'Accepted' && ((rqst.receiverId).toString() === userId  || (rqst.senderId).toString() === userId)});
        reject = response.filter((rqst)=> { return rqst.Status=== 'Deleted' && ((rqst.receiverId).toString() === userId  || (rqst.senderId).toString() === userId)});

    }
    output.pendingrequest=request;
    output.connected=connection;
    output.cancel=reject;
    return output;
 
   }
   catch(err){
    console.log(err)
    throw err;
}

};
exports.fetchsuggestion = async(userId)=>{     //userId from authentication

 
    try{
        const result = await ConnectionModel.find({$and : [{ $or: [ { senderId: userId }, { receiverId: userId } ] } , { $or: [ { Status: 'Rejected' }, { Status: 'Deleted' } ] }]}); 
        let ids = [];
        console.log('userId: ', typeof(userId));
        result?.map((connection)=> {
            
            if((connection.senderId).toString() === userId) ids.push(connection.receiverId);
          
            else ids.push(connection.senderId);
        })
        ids.push(userId)
        console.log('result: ', ids);
     const response = await UsersModel.find({_id : {$nin : ids} }); 
    
 
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
    if (status === 'Withdraw' && response.Status === 'Pending') {
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
        console.log('res: ', res);
        return res;
    }

    }
    catch(err){
        console.log(err)
        throw err;
    }


 }

 