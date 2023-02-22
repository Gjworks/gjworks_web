import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default async function handler(req, res) {
  
  const { documentId } = JSON.parse(req.body);
  console.log(documentId);
  const document = await prisma.document.findUnique({
    where: {
      id: documentId
    }
  })
  

  // if(!document) return res.status(404).json( { error:true, message: 'Document not found'})

  // Then save the post data to a database
  res.status(200).json({ data: document });
}