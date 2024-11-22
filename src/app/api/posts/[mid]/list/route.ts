import { NextResponse } from 'next/server';
import { cookies, headers } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { decodeJwt } from 'jose';

const prisma = new PrismaClient();
type Params = Promise<{ mid: string }>
export async function GET(request: Request, segmentData: { params: Params }) {
  let response = {};
  let userInfo
  let accessToken;
  const { mid } = await segmentData.params;

  // params.mid를 사용하기 전에 비동기적으로 처리
  // const { mid } = params;

  if (!mid) {
    return NextResponse.json({ error: 'Missing Post ID' }, { status: 400 });
  }
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
  const authHeader = request.headers.get('Authorization');

  if (authHeader && authHeader.startsWith('Bearer ')) {
    accessToken = authHeader.split(' ')[1]; // Bearer 토큰에서 실제 토큰만 추출
  } else {
    // Authorization 헤더가 없을 때 쿠키에서 가져오는 대안 처리 (선택 사항)
    const cookieStore = await cookies(); // 쿠키 객체 가져오기
    if (cookieStore) {
      const tokenCookie = cookieStore.get('accessToken'); // 쿠키 읽기
      accessToken = tokenCookie?.value; // 값 할당
    }
  }

  if(accessToken && accessToken !== 'undefined') {
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
  if (grantInfo.listGrant && grantInfo.listGrant.length > 0) {
    if(grantInfo.listGrant.includes('member')) {
      if (!accessToken || accessToken === 'undefined') {
        response = {
          success: false,
          errorCode: "INSUFFICIENT_PERMISSIONS",
          message: "권한이 없습니다."
        }
      }
    } else if(grantInfo.listGrant.includes('admin')) {
      if (!userInfo?.isAdmin) {
        response = {
          success: false,
          errorCode: "INSUFFICIENT_PERMISSIONS",
          message: "관리자만 접근 가능합니다."
        }
      }
    //비회원일 경우
    } else if(grantInfo.listGrant.includes('guest')) {
    }else{
      
      if(userInfo && userInfo !== 'undefined') {
        const listGrantIds = grantInfo.listGrant.map((id) => parseInt(id, 10));
        const hasGrantPermission = userInfo.userGroups.some((group) => listGrantIds.includes(group.groupId));
    
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

  }


  return NextResponse.json(response);
  
}