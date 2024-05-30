'use server';

import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { decodeJwt } from 'jose';
import { PrismaClient } from "@prisma/client";

interface UserListParams {
  page: number | null
  keyword: string | null
  target: string | null
}

interface UserParams {
  id? : number | null
  uuid? : string | null
}

interface LoggedParams {
  id: number
  userId : string
  isAdmin? : boolean
}

export const getUserSession = async () => {

}

export const getUser = async (params:UserParams) => {
  const prisma = new PrismaClient();
  const accessToken = cookies().get('accessToken')?.value
  let obj: any = {};
  let loggedInfo:LoggedParams = {
    id: 0,
    userId : ''
  }
  let userInfo = {} || null
  let response = {}
  if(accessToken) {
    const decodeToken:{ id:number, userid:string, isAdmin:boolean } = await decodeJwt(accessToken);
    loggedInfo.userId = decodeToken.userid
  }
  params.id && (obj.id = params.id)
  params.uuid && (obj.uuid = params.uuid).trim()

  if(!obj.id && !obj.uuid && !obj.nickname && !obj.userId) {
    obj.userId = loggedInfo.userId
  }
  if(!obj) {
    return response = {
      success: true,
      type: "error",
      message : '데이터가 없습니다.',
      data: {}
    };
  }
  try {
    if(obj.id || obj.uuid) {
      userInfo = await prisma.user.findUnique({
        where: obj
      });
    }
  } catch (e) {
    console.log('getUser error' + e)
    response = {
      success: true,
      type: "error",
      message : '회원정보가 없습니다.',
      data: {}
    };
  }
  response = userInfo || {}
  return response
}

export const getUserList = async (params:UserListParams) => {
  const prisma = new PrismaClient();
  const { page, target, keyword } = params;

  const currentPage = page; // 현재 페이지
  const listCount = 20; // 페이지당 항목 수
  const skipAmount = currentPage && (currentPage - 1) * listCount;

  const totalItems = await prisma.user.count();
  const totalPages = Math.ceil(totalItems / listCount);

  const where: any = {};
  if (target && keyword) {
    where[target as string] = { contains: keyword };
  }

  const userList = await prisma.user.findMany({
    skip: skipAmount && skipAmount >= 0 ? skipAmount : 0,
    take: listCount,
    where,
    orderBy: {
      id: 'desc',
    },
  });
  const returnData = {
    userList : userList,
    navigation : {
      totalCount : totalItems,
      totalPages : totalPages,
      page : currentPage,
      listCount : listCount
    }
  }
  // const result = await userList?.json()
  return returnData
}

export const getUserByUserId = async (userId:string) => {
  const prisma = new PrismaClient();
  let userInfo
  let response
  try {
    console.log(userId)
    userInfo = await prisma.user.findUnique({
      where: { userId: userId }
    });
  } catch (e) {
    console.log('getUser error' + e)
    response = {
      success: true,
      type: "error",
      message : '회원정보가 없습니다.',
      data: {}
    };
  }
  response = userInfo
  return response
}

export const getUserByNickname = async (nickName:string) => {
  const prisma = new PrismaClient();
  let userInfo
  let response
  try {
    userInfo = await prisma.user.findUnique({
      where: { nickName: nickName },
    });
  } catch (e) {
    console.log('getUser error' + e)
    response ={
      success: true,
      code: "error",
      message : '회원정보가 없습니다.',
      data: {}
    };
  }
  response = userInfo
  return response
}
export const getUserByToken = async (token) => {
  const prisma = new PrismaClient();
  let userInfo
  let response
  const accessToken = cookies().get('accessToken')?.value
  
  if (!accessToken) {
    response =  NextResponse.json({
      success: true,
      type: "error",
        message : 'accessToken Error',
      data: {}
    },
    {
      status: 200,
    },);
  } else {
    const decodeToken:{ id:string, userId:string, isAdmin:boolean } = await decodeJwt(accessToken);
    if (!decodeToken || !decodeToken.id) {
      response = NextResponse.json({
        success: true,
        type: "error",
        message: 'Invalid accessToken',
        data: {}
      }, {
          status: 200,
      });
    } else {
      userInfo = await prisma.user.findUnique({
        where: { userId: decodeToken.userId },
      });

      if(!userInfo) {
        response = NextResponse.json(
          {
            success: true,
            type: "error",
            message : '회원정보가 없습니다.',
            data: {}
          }
        );
      }else{

        response = NextResponse.json(
          {
            success: true,
            data: userInfo
          },
          {
            status: 200,
          },
        );
      }
    }
  }
  response = NextResponse.json(
    {
      success: true,
      data: userInfo
    },
    {
      status: 200,
    },
  );
  // const nowPasswordValue = request.get('nowPasswordValue') as string;
  // console.log(nowPasswordValue)
  return response
}


export const getUserTest = async (params:UserParams) => {
  return 'state'
}

