import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

interface ReqData {
  moduleId? : any,
  authorId? : any,
  published? : any,
  title? : any,
  description? : any
}

export default async function handler(req, res) {
  
  const { title, description, moduleId, authorId, published } = JSON.parse(req.body);

  const createData:ReqData = {
    moduleId : moduleId,
    authorId : authorId,
    published : published,
    title : title,
    description : description,
  }

  const document = await prisma.document.create({
    data: {
      moduleId : moduleId,
      authorId : authorId,
      published : published,
      title : title,
      description : description,
    }
  });

  console.log(document)

  // Then save the post data to a database
  res.status(200).json({ message: "Post created successfully" });
}