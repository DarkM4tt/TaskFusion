import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
  let users = [];
  try {
    users = await User.find().select("-password");
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "Failed to get users",
      success: false,
    });
  }
  return NextResponse.json(users);
}

export async function POST(request) {
  const { name, email, password, about, profileURL } = await request.json();
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });

  try {
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create user!!",
      status: false,
    });
  }
}
