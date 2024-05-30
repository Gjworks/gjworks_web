'use server'

import { cookies, headers } from "next/headers";
import { PrismaClient } from '@prisma/client';
import { decodeJwt } from 'jose';

interface LoggedParams {
  email : string
  isAdmin? : boolean | null
}

export const createPosts = async (formData:FormData) => {
  const accessToken = cookies().get('accessToken')?.value
  const prisma = new PrismaClient();
  let loggedInfo:LoggedParams = {
    email : '',
    isAdmin : false 
  }
  let response

  if(accessToken) {
    const decodeToken:{ id:string, isAdmin:boolean } = await decodeJwt(accessToken);
    loggedInfo.email = decodeToken.id
    loggedInfo.isAdmin = decodeToken.isAdmin
  }else{
    return response = 
      {
        success: true,
        type: "fail",
        message : '토큰 정보가 잘못되었습니다.',
        data: {}
      }
  }
  if(!loggedInfo.isAdmin) {
    return response = 
      {
        success: true,
        type: "fail",
        message : '관리자 권한이 없습니다.',
        data: {}
      }
  }
  const postId = formData.get('postId') as string;
  const moduleId = formData.get('moduleId') as string;
  const moduleName = formData.get('moduleName') as string;
  const moduleType = formData.get('moduleType') as string;
  const moduleConfig: {
    listCount: string;
    pageCount: string;
    documentLike: string;
    consultingState: string;
    commentState: string;
    commentLike: string;
  } = {
    listCount: (formData.get('listCount') as string | null) ?? '0',
    pageCount: (formData.get('pageCount') as string | null) ?? '0',
    documentLike: formData.get('documentLike') as string ?? '',
    consultingState: formData.get('consultingState') as string ?? '',
    commentState: formData.get('commentState') as string ?? '',
    commentLike: formData.get('commentLike') as string ?? '',
  };
  console.log(postId)
  if(postId && postId !== 'null' && postId !== 'undefined') {
    await prisma.module.update({
      where: {
        id: Number(postId)
      },
      data: {
        mid : moduleId, 
        moduleName : moduleName,
        moduleType : moduleType,
        config : moduleConfig
      }
    })
  }else{
    await prisma.module.create({
      data: {
        mid : moduleId, 
        moduleName : moduleName,
        moduleType : moduleType,
        config : moduleConfig
      }
    })
  }
  
  return response
}