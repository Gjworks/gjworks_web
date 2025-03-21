'use server'

import { cookies, headers } from "next/headers";
import { PrismaClient } from '@prisma/client';
import { decodeJwt } from 'jose';

interface LoggedParams {
  email : string
  isAdmin? : boolean | null
}

const prisma = new PrismaClient();

export const createPosts = async (params) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value

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
  const postId = params.postId;
  const moduleId = params.moduleId;
  const moduleName = params.moduleName;
  const moduleType = params.moduleType;
  const moduleConfig: {
    listCount: string;
    pageCount: string;
    documentLike: string;
    consultingState: string;
    commentState: string;
    commentLike: string;
    grant : {}
  } = {
    listCount: params.listCount,
    pageCount: params.pageCount,
    documentLike: params.documentLike,
    consultingState: params.consultingState,
    commentState: params.commentState,
    commentLike: params.commentLike,
    grant : params.grant
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