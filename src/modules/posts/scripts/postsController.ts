"use server";

import prisma from "@plextype/utils/db/prisma";

interface CreatePost {
  title: string;
  content: JSON;
  // moduleId: number;
  // mid: string;
}

export const createPost = async (args: CreatePost, mid: string) => {
  console.log(typeof args.content);
  const moduleInfo = await getModulePostsInfo(mid);
  // const userInfo = await
  console.log(moduleInfo);
  if (args.title && args.content) {
    await prisma.document.create({
      data: {
        title: args.title,
        moduleId: moduleInfo.id,
        content: args.content,
      },
    });
  } else {
  }
  return args;
};

export const getModulePostsInfo = async (mid: string) => {
  return prisma.module.findUnique({
    where: {
      mid: mid,
    },
  });
};

// 'use server';
// import { cookies, headers } from "next/headers";
//
// import { decodeJwt } from 'jose';
// import { PrismaClient } from "@prisma/client";
// import { hashedPassword, verifyPassword } from "@plextype/utils/auth/password";
// import { getUser, getUserByNickname, getUserByAccountId } from "@/modules/user/scripts/userModel";
// import { parse } from "path";
//
// interface UserParams {
//   id? : number | null
//   uuid? : string | null
//   email? : string | null
//   accessToken? : string | null
//   nickname? : string | null
// }
//
// interface LoggedParams {
//   id : number
//   email : string
//   isAdmin? : boolean | null
// }
//
// const prisma = new PrismaClient();
//
// export const createPost = async (formData: FormData) => {
//
//   let userInfo
//   let response
//
//   const title = formData.get('title') as string;
//   const content = formData.get('content') as string;
//   const moduleId = parseInt(formData.get('moduleId') as string);
//
//   if (!title) {
//     return response = {
//       success: true,
//       type: "error",
//       element: 'title',
//       message : '제목 값은 필수입니다.',
//       data: {}
//     };
//   }
//   if (!content) {
//     return response ={
//       success: true,
//       type: "error",
//       element: 'content',
//       message : '내용 값은 필수입니다.',
//       data: {}
//     };
//   }
//   if (!moduleId) {
//     return response = {
//       success: true,
//       type: "error",
//       element: 'moduleId',
//       message : 'moduleId 값은 필수입니다.',
//       data: {}
//     };
//   }
//
//
//
//   // try {
//   //   userInfo = await prisma.document.create({
//   //     data: {
//   //       moduleId: moduleId,
//   //       title: title,
//   //       content : content,
//   //       authorId: authorId,
//   //       authorName : authorName,
//   //       authorPassword : authorPassword,
//   //       createdAt : new Date(),
//   //       updatedAt : new Date(),
//   //       isNotice : false,
//   //       isSecrets : false,
//   //       published : false,
//   //     }
//   //   })
//   // } catch (e) {
//   //   console.log('register error' + e)
//   //     throw {
//   //       success: false,
//   //       type: "error",
//   //       message : '회원가입 과정에서 문제가 발생하였습니다.',
//   //       data: {}
//   //     };
//   // }
//
// }
