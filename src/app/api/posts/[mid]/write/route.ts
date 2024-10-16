import { NextResponse } from 'next/server';
import { cookies, headers } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { decodeJwt } from 'jose';

const prisma = new PrismaClient();

export async function GET(request: Request) {


  // const authorizationHeader = request.headers.get('Authorization');

  // if (!authorizationHeader) {
  //   return new Response('Authorization header missing', { status: 401 });
  // }
  // const accessToken = authorizationHeader.split(' ')[1];
  // if (!accessToken) {
  //   return new Response('Invalid authorization format', { status: 401 });
  // }

  // console.log(accessToken)

  // try {
  //   const decodeToken:{ id:number, accountId:string, isAdmin:boolean } = await decodeJwt(accessToken);

  //   console.log('decodeToken  : ', decodeToken);
  //   // const userInfo = await prisma.user.findUnique({
  //   //   where: { accountId: decodeToken.accountId },
  //   // });

  //   // console.log(userInfo);

  // } catch (error) {
  //   return new Response('Invalid token', { status: 401 });
  // }


}
export async function POST(request: Request) {
  const accessToken = cookies().get('accessToken')?.value

  if (!accessToken) {
    const response = {
      success: true,
      message: "권한이 없습니다."
    }
    return NextResponse.json(response);
  }

  const decodeToken:{ id:number, accountId:string, isAdmin:boolean } = await decodeJwt(accessToken);

  const userInfo = await prisma.user.findUnique({
    where: { accountId: decodeToken.accountId },
  });

  console.log(userInfo);
}