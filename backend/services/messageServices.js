const CustomError = require('../libs/error');
const MessageModel = require('../models/MessagesSchema')
const mongoose = require('mongoose')


exports.fetchMessages = async(params)=> {
    const {roomId} = params;
    if(!roomId) throw new CustomError("Id is required", 403);


    const messages = await MessageModel.find({roomId});

    if(!messages) throw new CustomError("No messages exist for this room", 204);
    return messages;
}