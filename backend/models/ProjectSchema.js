const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const ProjectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    title: {
        type: String,
        
    },
    description: {
        type: String,
    },
    technology: {
        type: String,
        require: true
    },
    link: {
        type: String,
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        
    },
})
module.exports = mongoose.model('project', ProjectSchema)