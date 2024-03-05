const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')

const RoomSchema = new mongoose.Schema({
    ParticipantsId: {
        type: Array,
        ref: UsersModel,
        required : true
    },

  
  


},{timestamps:true })
module.exports = mongoose.model('room', RoomSchema)