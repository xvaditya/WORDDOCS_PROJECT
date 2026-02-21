import dotenv from "dotenv";
import app from "../app.js"; // Goes UP one level to src/app.js
import connectDB from "../config/database.js"; // Goes UP one level to src/config

dotenv.config();

let isConnected = false;

const connectDatabase = async () => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      console.log("✅ MongoDB Connected");
    } catch (error) {
      console.error("❌ DB Connection Error", error);
    }
  }
};

export default async function handler(req, res) {
  await connectDatabase();
  return app(req, res);
}