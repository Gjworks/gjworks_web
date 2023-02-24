import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { moduleId } = JSON.parse(req.body)
  const document = await prisma.document.findMany({})

  // if(!document) return res.status(404).json( { error:true, message: 'Document not found'})

  console.log(document)
  // Then save the post data to a database
  res.status(200).json({ data: document })
}
