const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')

const ConnectionsSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required : true
    
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required : true
    
    },
    Status:{
        type:String,
        enum:['Pending' , 'Accepted' ,'Rejected', 'Deleted' ,'Withdraw']
    }

   


 
},{timestamps:true })
module.exports = mongoose.model('connection', ConnectionsSchema)