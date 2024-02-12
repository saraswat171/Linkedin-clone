const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const ProjectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: [true]
    },
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    technology: {
        type: String,
    },
    link: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
})
module.exports = mongoose.model('project', ProjectSchema)