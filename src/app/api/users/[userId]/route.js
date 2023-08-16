import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  const user = await User.findById(userId);
  return NextResponse.json(user);
}

export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, profileURL } = await request.json();
  try {
    const user = await User.findById(userId).select("-password");
    user.name = name;
    user.about = about;
    user.password = password;
    user.profileURL = profileURL;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to update user!!",
      success: false,
    });
  }
}

export async function DELETE(request, { params }) {
  const { userId } = params;

  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "User Deleted!",
      success: true,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Error in deleting user !!",
      success: false,
    });
  }
}
