import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO connected!");
  } catch (error) {
    console.log("DB connection error: " + error);
  }
};
