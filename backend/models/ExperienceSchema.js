const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const ExperienceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: true
    },
    companyname:{
        type:String,
        require: true
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
        require: true
    },
    endDate: {
        type: Date,
    },
})
module.exports = mongoose.model('experience', ExperienceSchema)