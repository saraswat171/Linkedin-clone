const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const ExperienceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: [true]
    },
    companyname:{
        type:String,
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
    },
    endDate: {
        type: Date,
    },
})
module.exports = mongoose.model('experience', ExperienceSchema)