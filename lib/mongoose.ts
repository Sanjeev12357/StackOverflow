import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", false);

  if (!process.env.MONGODB_URL) return console.log("missing mongo url");

  if (isConnected) {
    console.log("mongodb is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });
    isConnected = true;
    console.log("mongodb is connected");
  } catch (error) {
    console.log(error);
  }
};
