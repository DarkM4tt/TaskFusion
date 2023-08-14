import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDB();

export function GET(request) {
  const users = [
    {
      name: "Prabhat Mani Srivastava",
      phone: "4637",
      course: "Next JS",
    },
    {
      name: "Aryan Sharma",
      phone: "7439",
      course: "React JS",
    },
    {
      name: "Piyush Kumar",
      phone: "3290",
      course: "Java",
    },
  ];

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

export function PUT() {}

export function DELETE(request) {
  console.log("delete api called!");
  return NextResponse.json(
    {
      message: "Deleted !!",
      status: true,
    },
    {
      status: 201,
      statusText: "hii changed text!",
    }
  );
}
