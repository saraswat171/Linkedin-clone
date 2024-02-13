const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')

const EducationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: true
    },

    name: {
        type: String,
        require: true
    },
    degree: {
        type: String,
        require: true
    },
    fieldOfStudy: {
        type: String,
        require: true
    },

    Grade: {
        type: Number,
        require: true
    },
    description: {
        type: String,
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        require: true
    },


})
module.exports = mongoose.model('education', EducationSchema)