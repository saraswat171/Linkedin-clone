const mongoose = require('mongoose');

const connectDB = async () => {
  try {
   
    await mongoose.connect( "mongodb+srv://chetan1150:chetan@cluster0.crf5mnv.mongodb.net/?retryWrites=true&w=majority/Notifications");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;