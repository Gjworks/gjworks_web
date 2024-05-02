'use server';
import { cookies, headers } from "next/headers";

import { decodeJwt } from 'jose';
import { PrismaClient } from "@prisma/client";
import { hashedPassword, verifyPassword } from "@plextype/utils/auth/password";
import { getUser, getUserByNickname, getUserByEmail } from "src/modules/user/models/user";

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

export const createUser = async (formData: FormData) => {
  const prisma = new PrismaClient();
  let userInfo
  let response

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const nickname = formData.get('nickname') as string;

  if (!email) {
    return response = {
      success: true,
      type: "error",
      element: 'email',
      message : '이메일 값은 필수입니다.',
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
  if (!nickname) {
    return response = {
      success: true,
      type: "error",
      element: 'nickname',
      message : '닉네임 값은 필수입니다.',
      data: {}
    };
  }

  const getUserEmail = await getUserByEmail(email)
  if(getUserEmail) {
    return response = 
      {
        success: true,
        type: "error",
        message : '이미 가입된 이메일입니다.',
        data: {}
      }
  }

  const getUserNickname = await getUserByNickname(nickname)
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
        email: email,
        password: await hashedPassword(password),
        nickname: nickname,
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
    email : '',
    isAdmin : false 
  }
  let userInfo
  let response

  if(accessToken) {
    const decodeToken:{ id:number, userid:string, isAdmin:boolean } = await decodeJwt(accessToken);
    loggedInfo.id = decodeToken.id
    loggedInfo.email = decodeToken.userid
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
  params.nickname && (obj.nickname = params.nickname).trim()
  params.email && (obj.email = params.email).trim()

  if(!obj.id && !obj.uuid && !obj.nickname && !obj.email) {
    obj.email = loggedInfo.email
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
    if(userInfo?.email !== loggedInfo.email) {
      return response = 
        {
          success: true,
          type: "error",
          message : '권한이 없습니다.',
          data: {}
        }
    }
  }
  
  if(userInfo.email !== obj.email && obj.email) {
    const getUserEmail = await getUserByEmail(obj.email)
    if(getUserEmail) {
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
        nickname: obj.nickname,
        // password: obj.password,
      }
    })

    userInfo.nickname = updateUserInfo.nickname;

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
    email : '',
    isAdmin : false 
  }
  let userInfo
  let response
  if(accessToken) {
    const decodeToken:{ id:number, userid:string, isAdmin:boolean } = await decodeJwt(accessToken);
    loggedInfo.email = decodeToken.userid
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
  params.nickname && (obj.nickname = params.nickname).trim()
  params.email && (obj.email = params.email).trim()

  if(!obj.id && !obj.uuid && !obj.nickname && !obj.email) {
    obj.email = loggedInfo.email
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
    if(userInfo?.data?.email !== loggedInfo.email) {
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

  const decodeToken:{ id:number, userid:string, isAdmin:boolean } = await decodeJwt(accessToken);
  if(decodeToken && decodeToken.id){
    userInfo = await prisma.user.findUnique({
      where: { email: decodeToken.userid },
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
      },
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
            email: decodeToken.userid, 
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