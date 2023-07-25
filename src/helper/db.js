import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });

    console.log("db connected....");
    console.log("Connected with: " + connection.host);
  } catch (error) {
    console.log("Failed to connect with database");
    console.log(error);
  }
};
