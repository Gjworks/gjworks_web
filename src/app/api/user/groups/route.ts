import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const groups = await prisma.userGroup.findMany();
  console.log("groups:", groups); // 이거로 확인해보세요
  return NextResponse.json(
    {
      success: true,
      type: "success",
      data: groups,
    },
    { status: 200 },
  );
}
