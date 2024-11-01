import { NextResponse } from 'next/server';
import { cookies, headers } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { decodeJwt } from 'jose';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { mid: string } }) {
  let response = {};
  let userInfo
  const { mid } = params;
  const postInfo = await prisma.module.findUnique({where: { mid: mid }});

  if (!postInfo) {
    response = {
      success: false,
      errorCode: "MODULE_NOT_FOUND",
      message: "게시판 정보가 없습니다."
    }
    return NextResponse.json(response);
  }

  const grantInfo = (postInfo?.config as { grant: any })?.grant;
  // if(grantInfo.readGrant.length === 0) {
  //   response = {
  //     success: true,
  //     message: ""
  //   }
  //   return NextResponse.json(response);
  // }

  const authHeader = request.headers.get('Authorization');
  let accessToken;


  if (authHeader && authHeader.startsWith('Bearer ')) {
    accessToken = authHeader.split(' ')[1]; // Bearer 토큰에서 실제 토큰만 추출
  } else {
    // Authorization 헤더가 없을 때 쿠키에서 가져오는 대안 처리 (선택 사항)
    accessToken = cookies().get('accessToken')?.value;
  }


  if(accessToken) {
    const decodeToken:{ id:number, accountId:string, isAdmin:boolean } = await decodeJwt(accessToken);

    userInfo = await prisma.user.findUnique({
      where: { accountId: decodeToken.accountId },
      include: {
        userGroups: { // User와 UserGroupUser의 관계
          include: {
            group: {
              select: {
                id: true,
                groupName: true,
                groupTitle: true,
                groupDesc: true,
                createdAt: true,
                updatedAt: true,
              },
            }, // UserGroupUser와 UserGroup의 관계
          },
        },
      },
    });
  }



  if (grantInfo.readGrant && grantInfo.readGrant.length > 0) {
    if(grantInfo.readGrant.includes('member')) {
      if (!accessToken) {
        response = {
          success: false,
          errorCode: "INSUFFICIENT_PERMISSIONS",
          message: "권한이 없습니다."
        }
      }
    } else if(grantInfo.readGrant.includes('admin')) {
      if (!userInfo?.isAdmin) {
        response = {
          success: false,
          errorCode: "INSUFFICIENT_PERMISSIONS",
          message: "관리자만 접근 가능합니다."
        }
      }
    }else{
      const readGrantIds = grantInfo.readGrant.map((id) => parseInt(id, 10));
      console.log('readGrantIds',readGrantIds);
      const hasGrantPermission = userInfo.userGroups.some((group) => readGrantIds.includes(group.groupId));
      console.log('hasGrantPermission',hasGrantPermission);
  
      if(!hasGrantPermission) {
        response = {
          success: false,
          errorCode: "INSUFFICIENT_PERMISSIONS",
          message: "접근 권한이 없습니다."
        }
      }else {
        response = {
          success: true,
          message: ""
        }
      }
    }

  }


  return NextResponse.json(response);
  
}