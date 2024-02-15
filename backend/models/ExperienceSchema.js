const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const ExperienceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required : true
    },
    companyname:{
        type:String,
        required : true
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    Status:{
         type:Boolean,
    },
    startDate: {
        type: Date,
        required : true
    },
    endDate: {
        type: Date,
    },
})
module.exports = mongoose.model('experience', ExperienceSchema)