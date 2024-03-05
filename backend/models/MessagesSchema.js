const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const RoomModel = require('./RoomSchema')

const MessageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required : true
    },
    roomId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:RoomModel,
        required:true
    },
    content:{
        type:String,

    },
    timestamps: {
        createdAt: true,
        updatedAt: false
      }
    
})
module.exports = mongoose.model('message', MessageSchema)