import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

export default async (req, res) => {
  
  if (req.method === "POST")
  {
    const {id,type, email, nickname, isAdmin, password} = JSON.parse(req.body);
    try
    {
      if(type === "email") {
        const existEmail = await prisma.user.findMany({
          where: {
            AND : {
              email: email,
            },
            NOT : {
              id:id,
            }
          }
        })
        if (existEmail.length === 1) {
          return res.status(200).json({ message: 'User Email already exists!', error: true });
        }else{

          console.log(existEmail)
          return res.status(200).json({ message: 'User Email already exists!', error: false });
        }
      }else{
        
      }
      
    }catch(error){
      console.log(error)
      return res.status(503).json({message: error.toString(), error: true});
    }
  }
}