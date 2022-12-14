import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default async (req, res) => {
  console.log('api Edit')
  console.log(req.body.body)
}