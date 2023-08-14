import mongoose from "mongoose";
import { User } from "@/models/user";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });

    console.log("db connected....");
    // console.log("Connected with: " + connection.host);

    //Creating new User
    // const user = new User({
    //   name: "Test test",
    //   email: "test@gmail.com",
    //   password: "testpassword",
    //   about: "this is testing",
    // });

    // await user.save();
    console.log("User is created");
  } catch (error) {
    console.log("Failed to connect with database");
    console.log(error);
  }
};
