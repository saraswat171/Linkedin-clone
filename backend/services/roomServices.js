const RoomModel = require('../models/RoomSchema')
const UsersModel = require('../models/UserSchema')
const CustomError = require('../libs/error')
var mongoose = require('mongoose');
exports.userRoom = async ({ body, userId }) => {
    try {
        const receiverId = body.receiverId;
        const receiver = await UsersModel.findById({ _id: receiverId },
            { name: 1, _id: 1, image: 1 });
        if (!receiver)
            throw new CustomError("User doesn't exist", 404);
        const output = {};
        output.receiver = receiver;
        const ParticipantsId = [(new mongoose.Types.ObjectId(userId)),
        (new mongoose.Types.ObjectId(receiverId))];
        const roomExist = await RoomModel.findOne({
            ParticipantsId:
                { $all: ParticipantsId }
        });
        output.room = (roomExist && roomExist.length !== 0) ?
            roomExist : await RoomModel.create({ ParticipantsId })
        if (!output.room) throw new CustomError("Room not created", 500);
        console.log('output: ', output);
        return output
    }
    catch (err) { throw err; }
};



exports.fetchedRoom = async ({ userId }) => {
    const response = await RoomModel.find({ ParticipantsId: userId })
                                    .populate({
                                            path: 'ParticipantsId',
                                            select: ['_id', 'email', 'name', 'image'],
                                            match: { _id: { $ne: userId } }
                                             });
    console.log('response: ', response);
    if (!response) throw new CustomError("No rooms found", 204);
    return response;
}
