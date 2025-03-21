import { NextResponse, NextRequest } from "next/server";

import { PrismaClient } from "@prisma/client";
import { verify } from "@plextype/utils/auth/jwtAuth";

import { getUserById } from "@/extentions/user/scripts/userModel";

const prisma = new PrismaClient();

export async function PUT(request: NextRequest) {
  try {
    const accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const verifyToken = await verify(accessToken!);
    if (verifyToken) {
      const user = await getUserById(verifyToken.id);

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      const formData = await request.formData();
      const nowPasswordValue = formData.get("nowPasswordValue") as string;
      const newPasswordValue = formData.get("newPasswordValue") as string;
      const renewPasswordValue = formData.get("renewPasswordValue") as string;
    } else {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 },
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
