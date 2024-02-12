const mongoose = require('mongoose');
const UsersModel = require('./UserSchema')
const SkillsSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: [true]
    },
    name: {
        type: String,
    }
})
module.exports = mongoose.model('skills', SkillsSchema)