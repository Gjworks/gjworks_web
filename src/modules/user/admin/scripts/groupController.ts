'use server'

import { PrismaClient } from "@prisma/client";
import { getUserSession } from "../../scripts/userModel";

export const upsertGroup = async (params) => {
  const prisma = new PrismaClient();
  const sessionInfo = await getUserSession()

  if(!sessionInfo?.data?.isAdmin) {
    return {
      success: false,
      code: "error",
      message : '권한이 없습니다.',
      data: {}
    }
  }

  const userGroup = await prisma.userGroup.upsert({
    where: {
      id: params.id
    },
    update: {
      groupName: params.groupName,
      groupTitle: params.groupTitle,
      groupDesc: params.groupDesc
    },
    create: {
      groupName: params.groupName,
      groupTitle: params.groupTitle,
      groupDesc: params.groupDesc
    }
  })




  // const userId = formData.get('userId') as string;
  // const password = formData.get('password') as string;
  // const nickName = formData.get('nickName') as string;
}

export const deleteGroup = async () => {
  
}