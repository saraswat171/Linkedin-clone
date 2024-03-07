const mongoose = require('mongoose');

const NotificationsSchema = new mongoose.Schema({
    receivers: [{
        type: mongoose.Schema.Types.ObjectId,
 
     
    
    }],

    type: {
        type: String,
        required : true
    },
    content: {
        type: String,
        required : true
    },

  
    sender: {
        type: String,
    }
},{timestamps:true })
module.exports = mongoose.model('notifications', NotificationsSchema)