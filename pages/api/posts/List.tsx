import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const { mid } = JSON.parse(req.body)
  // let module
  let document

  // if (mid) {
  //   module = await prisma.module.findMany({})
  // }
  // if (module) {
  //   document = await prisma.document.findMany({})
  // }

  // document = await prisma.document.findMany({})

  res.status(200).json({ data: document })
}
