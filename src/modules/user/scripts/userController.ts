'use server';
import { cookies, headers } from "next/headers";

import { decodeJwt } from 'jose';
import { PrismaClient } from "@prisma/client";
import { hashedPassword, verifyPassword } from "@plextype/utils/auth/password";
import { getUser, getUserByNickname, getUserByUserId } from "@/modules/user/scripts/userModel";

interface UserParams {
  id? : number | null
  uuid? : string | null
  userId? : string | null
  accessToken? : string | null
  nickName? : string | null
}

interface LoggedParams {
  id : number
  userId : string
  isAdmin? : boolean | null
}

export const createUser = async (formData: FormData) => {
  const prisma = new PrismaClient();
  let userInfo
  let response

  const userId = formData.get('userId') as string;
  const password = formData.get('password') as string;
  const nickName = formData.get('nickName') as string;

  if (!userId) {
    return response = {
      success: true,
      type: "error",
      element: 'userId',
      message : '계정 아이디 값은 필수입니다.',
      data: {}
    };
  }

  if (!password) {
    return response ={
      success: true,
      type: "error",
      element: 'password',
      message : '패스워드 값은 필수입니다.',
      data: {}
    };
  }
  if (!nickName) {
    return response = {
      success: true,
      type: "error",
      element: 'nickname',
      message : '닉네임 값은 필수입니다.',
      data: {}
    };
  }

  const getUseruserId = await getUserByUserId(userId)
  if(getUseruserId) {
    return response = 
      {
        success: true,
        type: "error",
        message : '이미 가입된 아이디(혹은 이메일)입니다.',
        data: {}
      }
  }

  const getUserNickname = await getUserByNickname(nickName)
  if(getUserNickname) {
    return response = 
      {
        success: true,
        type: "error",
        message : '이미 사용중인 닉네임입니다.',
        data: {}
      }
  }

  try {
    userInfo = await prisma.user.create({
      data: {
        userId: userId,
        password: await hashedPassword(password),
        email_address: userId,
        nickName: nickName,
      }
    })
  } catch (e) {
    console.log('register error' + e)
      throw {
        success: false,
        type: "error",
        message : '회원가입 과정에서 문제가 발생하였습니다.',
        data: {}
      };
  }
  
}
export const updateUser = async (params:UserParams) => {
  const prisma = new PrismaClient();
  const accessToken = cookies().get('accessToken')?.value
  let obj: any = {};
  let loggedInfo:LoggedParams = {
    id : 0,
    userId : '',
    isAdmin : false 
  }
  let userInfo
  let response

  if(accessToken) {
    const decodeToken:{ id:number, userId:string, isAdmin:boolean } = await decodeJwt(accessToken);
    loggedInfo.id = decodeToken.id
    loggedInfo.userId = decodeToken.userId
    loggedInfo.isAdmin = decodeToken.isAdmin
  }else{
    return response = 
      {
        success: true,
        type: "error",
        message : '토큰 정보가 잘못되었습니다.',
        data: {}
      }
  }
  params.id && (obj.id = params.id)
  params.uuid && (obj.uuid = params.uuid).trim()
  params.nickName && (obj.nickName = params.nickName).trim()
  params.userId && (obj.userId = params.userId).trim()

  if(!obj.id && !obj.uuid && !obj.nickname && !obj.userId) {
    obj.userId = loggedInfo.userId
    obj.id = loggedInfo.id
    obj.isAdmin = loggedInfo.isAdmin
  }
  
  userInfo = await getUser(loggedInfo)

  if(!userInfo) {
    response = 
      {
        success: true,
        type: "error",
        message : '회원정보가 없습니다.',
        data: {}
      }
    }

  //관리자가 아닐경우 본인 계정만 삭제 가능
  if(!loggedInfo.isAdmin) {
    if(userInfo?.email !== loggedInfo.userId) {
      return response = 
        {
          success: true,
          type: "error",
          message : '권한이 없습니다.',
          data: {}
        }
    }
  }
  
  if(userInfo.userId !== obj.userId && obj.userId) {
    const getUseruserId = await getUserByUserId(obj.userId)
    if(getUseruserId) {
      return response = 
        {
          success: true,
          type: "error",
          message : '이미 사용중인 이메일입니다.',
          data: {}
        }
    }
  }
  if(userInfo.nickname !== obj.nickname && obj.nickname) {
    const getUserNickname = await getUserByNickname(obj.nickname)
    if(getUserNickname) {
      return response = 
        {
          success: true,
          type: "error",
          message : '이미 사용중인 닉네임입니다.',
          data: {}
        }
    }
  }
  try {
    const updateUserInfo = await prisma.user.update({
      where: {
        id: userInfo.id
      },
      data: {
        nickName: obj.nickName,
        // password: obj.password,
      }
    })

    userInfo.nickName = updateUserInfo.nickName;

    return response = 
      {
        success: true,
        type: "success",
        message : '회원정보가 성공적으로 변경되었습니다.',
        data: {
          userInfo : userInfo,
        }
      }
  } catch (error) {
    console.error('userInfo update error' + error);
  }
}

export const deleteUser= async (params:UserParams) => {
  const prisma = new PrismaClient();
  const accessToken = cookies().get('accessToken')?.value
  let obj: any = {};
  let loggedInfo:LoggedParams = {
    id : 0,
    userId : '',
    isAdmin : false 
  }
  let userInfo
  let response
  if(accessToken) {
    const decodeToken:{ id:number, userId:string, isAdmin:boolean } = await decodeJwt(accessToken);
    loggedInfo.userId = decodeToken.userId
    loggedInfo.isAdmin = decodeToken.isAdmin
  }else{
    return response = 
      {
        success: true,
        type: "error",
        message : '토큰 정보가 잘못되었습니다.',
        data: {}
      }
  }
  params.id && (obj.id = params.id)
  params.uuid && (obj.uuid = params.uuid).trim()
  params.nickName && (obj.nickName = params.nickName).trim()
  params.userId && (obj.userId = params.userId).trim()

  if(!obj.id && !obj.uuid && !obj.nickname && !obj.userId) {
    obj.userId = loggedInfo.userId
  }

  userInfo = await getUser(params)

  if(!userInfo) {
    response = 
      {
        success: true,
        type: "error",
        message : '회원정보가 없습니다.',
        data: {}
      }
    }
  //관리자가 아닐경우 본인 계정만 삭제 가능
  if(!loggedInfo.isAdmin) {
    if(userInfo?.data?.userId !== loggedInfo.userId) {
      return response = 
        {
          success: true,
          type: "error",
          message : '권한이 없습니다.',
          data: {}
        }
    }
  }


  const deleteUser = await prisma.user.delete({
    where: obj,
  })

  if(deleteUser){
    if(loggedInfo.isAdmin === false) {
      cookies().delete('refreshToken');
      cookies().delete('accessToken');
    }
    response = 
      {
        success: true,
        type: "success",
        message : '회원 계정정보가 모두 삭제되었습니다.',
        data: {}
      }
  }else{
    response = 
      {
        success: true,
        type: "error",
        message : '회원정보가 없습니다.',
        data: {}
      }
  }
  
  // await getUser({nickname:nickname})
  
  // const nowPasswordValue = request.get('nowPasswordValue') as string;
  // console.log(nowPasswordValue)
  return response
}

export const PasswordChange = async (formData: FormData) => {
  const prisma = new PrismaClient();
  let userInfo
  let response
  const accessToken = cookies().get('accessToken')?.value
  
  if (!accessToken) {
    return {
      success: true,
      type: "error",
      message: "아이디 혹은 비밀번호가 맞지 않거나 존재 하지 않은 계정입니다.",
      data: {},
      accessToken:null
    };
  }

  const nowPasswordValue = formData.get('nowPasswordValue') as string;
  const newPasswordValue = formData.get('newPasswordValue') as string;
  const renewPasswordValue = formData.get('renewPasswordValue') as string;

  const decodeToken:{ id:number, userId:string, isAdmin:boolean } = await decodeJwt(accessToken);
  if(decodeToken && decodeToken.id){
    userInfo = await prisma.user.findUnique({
      where: { userId: decodeToken.userId },
    });
  }
  
  if(!userInfo) {
    response = 
      {
        success: true,
        type: "error",
        message : '회원정보가 없습니다.',
        data: {}
      }
    }
  if (userInfo! && (await verifyPassword(nowPasswordValue, userInfo!.password))) {
    response = 
      {
        success: true,
        type: "success",
        message : '현재 비밀번호와 일치 합니다.',
        data: {}
      }
    if(newPasswordValue && renewPasswordValue && newPasswordValue === renewPasswordValue) {
    
      try {
        await prisma.user.update({
          where: {
            userId: decodeToken.userId, 
          },
          data: {
            password: await hashedPassword(newPasswordValue),
          }
        })
        response = 
          {
            success: true,
            type: "success",
            message : '비밀번호가 변경되었습니다.',
            data: {}
          }
      } catch (error) {
        console.error(error);
      }
    }else{
      if( newPasswordValue !== renewPasswordValue ) {
        response = 
          {
            success: true,
            type: "warning",
            message : '변경할 비밀번호가 서로 맞지 않습니다.',
            data: {}
          }
        }
      if( !newPasswordValue || !renewPasswordValue ) {
        response =
          {
            success: true,
            type: "info",
            message : '변경할 비밀번호를 입력해주세요.',
            data: {}
          }
      
    }
  }
    
  } else {
    if(!nowPasswordValue) {
      response = 
        {
          success: true,
          type: "warning",
          message : '현재 비밀번호를 입력해주세요.',
          data: {}
        }
    } else {
      response = 
        {
          success: true,
          type: "error",
          message : '현재 비밀번호와 맞지 않습니다.',
          data: {}
        }
    }
    
  }
  return response
  
}