import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

export default async (req, res) => {
  
  if (req.method === "POST")
  {
    const {id} = JSON.parse(req.body);

    try
    {
      const memberInfo = await prisma.user.findUnique({
        where: {
          id: id
        }
      })
      console.log(memberInfo)
      res.status(200).json({ data: memberInfo });
    }catch(error){
      console.log(error)
      return res.status(503).json({message: error.toString(), error: true});
    }
  }
  
}