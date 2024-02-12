const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')

const EducationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: [true]
    },

    name: {
        type: String,
    },
    degree: {
        type: String,
    },
    fieldOfStudy: {
        type: String,
    },

    Grade: {
        type: Number,
    },
    description: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },


})
module.exports = mongoose.model('education', EducationSchema)