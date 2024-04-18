'use server';

import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { decodeJwt } from 'jose';
import { PrismaClient } from "@prisma/client";

interface PostsParams {
  id? : number | null
  accessToken? : string | null
}

interface LoggedParams {
  email : string
  isAdmin? : boolean
}

export const getPost = async (params:PostsParams) => {
  const prisma = new PrismaClient();
  let response

  return response
}

export const getPostList = async (params) => {
  const prisma = new PrismaClient();
  let response
  let postList
  let loggedInfo:LoggedParams = {
    email : ''
  }

  if(!params.accessToken) {
    return response = {
      success: true,
      data: {
        code: "error",
        message : 'accessToken is required.'
      }
    }
  }

  const decodeToken:{ id:string, isAdmin:boolean } = await decodeJwt(params.accessToken);
  loggedInfo.email = decodeToken.id
  loggedInfo.isAdmin = decodeToken.isAdmin
  
  try {
    postList = await prisma.module.findMany({
      where: {
        moduleType: 'post'
      }
    });

    console.log('postList', postList)
  } catch (e) {
    console.log('getUser error' + e)
    response = {
      success: true,
      data: {
        code: "error",
        message : '회원정보가 없습니다.'
      }
    };
  }

  return response
}

export const getDocument = async (params) => {
  const prisma = new PrismaClient();
  let response

  return response
}