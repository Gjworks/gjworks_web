'use server';
import { cookies, headers } from "next/headers";

import { decodeJwt } from 'jose';
import { PrismaClient } from "@prisma/client";
import { hashedPassword, verifyPassword } from "@plextype/utils/auth/password";
import { getUser, getUserByNickname, getUserByUserId } from "@/modules/user/scripts/userModel";
import { parse } from "path";

interface UserParams {
  id? : number | null
  uuid? : string | null
  email? : string | null
  accessToken? : string | null
  nickname? : string | null
}

interface LoggedParams {
  id : number
  email : string
  isAdmin? : boolean | null
}

export const createPost = async (formData: FormData) => {
  const prisma = new PrismaClient();
  let userInfo
  let response

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const moduleId = parseInt(formData.get('moduleId') as string);

  if (!title) {
    return response = {
      success: true,
      type: "error",
      element: 'title',
      message : '제목 값은 필수입니다.',
      data: {}
    };
  }
  if (!content) {
    return response ={
      success: true,
      type: "error",
      element: 'content',
      message : '내용 값은 필수입니다.',
      data: {}
    };
  }
  if (!moduleId) {
    return response = {
      success: true,
      type: "error",
      element: 'moduleId',
      message : 'moduleId 값은 필수입니다.',
      data: {}
    };
  }

  

  // try {
  //   userInfo = await prisma.document.create({
  //     data: {
  //       moduleId: moduleId,
  //       title: title,
  //       content : content,
  //       authorId: authorId,
  //       authorName : authorName,
  //       authorPassword : authorPassword,
  //       createdAt : new Date(),
  //       updatedAt : new Date(),
  //       isNotice : false,
  //       isSecrets : false,
  //       published : false,
  //     }
  //   })
  // } catch (e) {
  //   console.log('register error' + e)
  //     throw {
  //       success: false,
  //       type: "error",
  //       message : '회원가입 과정에서 문제가 발생하였습니다.',
  //       data: {}
  //     };
  // }
  
}