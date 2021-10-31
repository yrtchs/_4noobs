const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config/config");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(`MongoDB error: ${err}`);
    console.log(`MongoDB error: ${MONGODB_URI}`);
  }
};

module.exports = connectDB;
