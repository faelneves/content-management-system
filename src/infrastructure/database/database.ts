import mongoose from "mongoose";
import env from "../../config/env";

const connectDB = async () => {
  try {
    const { MONGO_HOST, MONGO_USER, MONGO_PASSWORD, MONGO_DB_NAME, MONGO_AUTH_SOURCE } = env;

    const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB_NAME}?authSource=${MONGO_AUTH_SOURCE}`;

    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;