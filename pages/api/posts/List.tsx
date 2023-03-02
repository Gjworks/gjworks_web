import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { mid } = JSON.parse(req.body)

  if (mid) {
    const module = await prisma.module.findMany({})
  }
  if (module) {
    const document = await prisma.document.findMany({})
  }

  res.status(200).json({ data: document })
}
