const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')

const EducationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required : true
    },

    name: {
        type: String,
        required : true
    },
    degree: {
        type: String,
        required : true
    },
    fieldOfStudy: {
        type: String,
        required : true
    },

    Grade: {
        type: Number,
        required : true
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
        required : true
    },


})
module.exports = mongoose.model('education', EducationSchema)