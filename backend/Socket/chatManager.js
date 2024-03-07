const {Server} = require("socket.io")
const MessageModel = require('../models/MessagesSchema')

module.exports = async(server) => {
    const io = new Server (server, {
        cors : {
            origin: "http://localhost:3000",
        },
    })
    io.on("connection", (socket)=> {
        console.log("connection on: ", socket.id);

        socket.on("joinRoom", (roomId)=> {
            socket.join(roomId);
            console.log("Room ....", roomId)
        })

        socket.on("sendMessage", async({message, roomId, senderId})=> {
          //  console.log('sendMessage: ', message);
            // save the message in the db, then ....
           //  io.sockets.adapter.rooms.get('Room Name');
        
            const messageData = await MessageModel.create({roomId, content:message, senderId});
            console.log(message, roomId, senderId, messageData, "-------response");
            io.in(roomId).emit('message',messageData);
        })

        socket.on('disconnect', () => {
            console.log('Client disconnected');
          });
    })
};