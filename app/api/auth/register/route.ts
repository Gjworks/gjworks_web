import { NextResponse } from 'next/server';

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {

  try {
    let formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const nickname = formData.get('nickname')

    if(!email) {
      const data = {"code":"error", "element": "email","msg": "Invalid email address provided in POST request"}
      return NextResponse.json(data,{ status:402})
    }
    if(!password) {
      const data = {"code":"error", "element": "password","msg": "Invalid password provided in POST request"}
      return NextResponse.json(data,{ status:402})
    }
    if(!nickname) {
      const data = {"code":"error", "element": "nickname","msg": "Invalid nickname provided in POST request"}
      return NextResponse.json(data,{ status:402})
    }

    return NextResponse.json({})
  } catch (error) {
    console.error(error)
    return new Response("fail")
  }

}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}