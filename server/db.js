const mongoose = require("mongoose");
const config = require('config');

const connectDB = async () => {
  try {
    await mongoose
      .connect(config.get('mongoUri').toString(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(`MongoDB error: ${err}`);
    console.log(`MongoDB error: ${config.get('mongoUri')}`);
  }
}

module.exports = connectDB;