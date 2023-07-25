import { connectDB } from "@/helper/db";
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
  const body = request.body;
  const jsonData = await request.json();
  console.log(jsonData);
  return NextResponse.json({
    message: "posting user data",
  });
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
