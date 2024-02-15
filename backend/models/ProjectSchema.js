const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const ProjectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required : true
    },
    name: {
        type: String,
        required : true
    },
    title: {
        type: String,
        
    },
    description: {
        type: String,
    },
    technology: {
        type: String,
        required : true
    },
    link: {
        type: String,
    },
    startDate: {
        type: Date,
        required : true
    },
    endDate: {
        type: Date,
        
    },
})
module.exports = mongoose.model('project', ProjectSchema)