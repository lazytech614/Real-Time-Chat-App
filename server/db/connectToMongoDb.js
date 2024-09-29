import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to the database succesfully");
  } catch (err) {
    console.log("Error connecting to database", err.message);
  }
};

export default connectToMongoDb;
