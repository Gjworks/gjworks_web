'use server';

import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { decodeJwt } from 'jose';
import { PrismaClient } from "@prisma/client";

export const getUser = async (token) => {
  const prisma = new PrismaClient();
  let userInfo
  let response
  const authorization = headers().get('authorization')
  const accessToken = authorization && authorization.split(' ')[1];
  
  if (!accessToken) {
    response =  NextResponse.json({
      success: true,
      data: {
        code: "fail",
        message : 'accessToken Error'
      }
    },
    {
      status: 200,
    },);
  } else {
    const decodeToken:{ id:string, isAdmin:boolean } = await decodeJwt(accessToken);
    if (!decodeToken || !decodeToken.id) {
      response = NextResponse.json({
        success: true,
        data: {
          code: "fail",
          message: 'Invalid accessToken'
        }
      }, {
          status: 200,
      });
    } else {
      userInfo = await prisma.user.findUnique({
        where: { email: decodeToken.id },
        select: {
          id: true,
          uuid: true,
          email: true,
          password: true,
          nickname: true,
          createdAt: true,
          updateAt:true,
          isAdmin:true,
          isManagers:true
        }
      });

      if(!userInfo) {
        response = NextResponse.json(
          {
            success: true,
            data: {
              code: "fail",
              message : '회원정보가 없습니다.'
            }
          },
          {
            status: 200,
          },
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

export const updateGroup = async () => {
  
}

export const deleteGroup = async () => {
  
}