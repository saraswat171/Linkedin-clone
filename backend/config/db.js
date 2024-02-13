const mongoose = require('mongoose');

// const url = process.env.URL_DB;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL_DB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;