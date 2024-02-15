const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,

    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        properties: {
            street: {
                type: String,

            },
            state: {
                type: String,

            },
            city: {
                type: String,

            },
            pincode: {
                type: Number,

            },
            country: {
                type: String,

            },

        }
    },
    phone: {
        type: Number,

    },
    website: {
        type: String,

    },
    image: {
        type: String,
    },
    title: {
        type: String,
    },
    summary: {
        type:String,
    },
    industry:{
        type:String,
    },



},{timestamps:true })

module.exports = mongoose.model('users', UserSchema)
