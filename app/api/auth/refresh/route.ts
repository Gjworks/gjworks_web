import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { verify, refreshVerify } from "src/lib/auth/jwtAuth";

export async function GET(request: NextRequest, res: NextResponse) {
  const accessToken = cookies().get("accessToken")?.value 
  const refreshToken = cookies().get('refreshToken')?.value
  console.log(accessToken)
  console.log(refreshToken)
  // const authorization = headers().get('authorization')
  // const accessToken = authorization && authorization.split(' ')[1];
  
  // if (accessToken === null) {
  //     return NextResponse.json({ data: 'accessToken Error' }, { status: 201 });
  // }
  // const verifyToken = verify(accessToken)
  // console.log(verifyToken);
  // const refreshVerifyToken = refreshVerify(refreshToken)
  return NextResponse.json({ data: 'success' }, { status: 200 });
  // 
  // console.log(verifyToken);
}

export async function HEAD(request: Request) {}

export async function POST(request: NextRequest) {
}
export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
