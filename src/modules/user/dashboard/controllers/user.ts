'use server';

import { getUser } from "src/modules/user/models/user"
import { deleteUser } from "src/modules/user/controllers/user"

import { PrismaClient } from "@prisma/client";

export const insertUser = async () => {
  
}

export const updateUser = async () => {
  
}

export const deleteDashboardUser = async (id:number) => {
  if(!id) {
    return {
      success: false,
      code: "error",
      element: 'id',
      message : '사용자 ID 값은 필수입니다.',
      data: {}
    };
  }
  const output = await deleteUser({id: id})
  console.log(output)
  return output

}