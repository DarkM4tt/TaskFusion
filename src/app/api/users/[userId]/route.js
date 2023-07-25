import { NextResponse } from "next/server";

export function DELETE(request, { params }) {
  const { userId } = params;
  console.log("Deleting user with id: " + userId);
  return NextResponse.json({
    message: "testing delete",
  });
}
