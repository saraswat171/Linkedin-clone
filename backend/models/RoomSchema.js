const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')

const RoomSchema = new mongoose.Schema({
    ParticipantsId: [{
        type: mongoose.Schema.Types.ObjectId,
       
        ref: UsersModel,
        required : true
    }]

    
  


},{timestamps:true })
module.exports = mongoose.model('room', RoomSchema)