const mongoose = require('mongoose');

const connectDB = async () => {
  try {
   
    await mongoose.connect(process.env.URL_DB || "mongodb+srv://chetan1150:chetan@cluster0.crf5mnv.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;