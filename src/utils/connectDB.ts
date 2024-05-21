import mongoose from "mongoose";
const DB_NAME = "rajeshmurmu";
const MONGODB_URI = "mongodb://127.0.0.1:27017";

let isConnected = false;

async function connectDB(): Promise<void> {
  if (isConnected) {
    console.log(`MongoDB Already Connected`);
    return;
  }
  try {
    const connectionIntance = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `MongoDB Connected Successfully`,
      connectionIntance.connection.host
    );
    isConnected = true;
    return;
  } catch (error) {
    console.log(`Error While Connecting to MongoDB Database`, error);
  }
}

export default connectDB;
