import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

export default async (req, res) => {
  if (req.method === 'POST') {
    const { nickname, email, password } = req.body.body
    try {
      const existEmail = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })
      if (existEmail) {
        return res
          .status(422)
          .json({ message: 'User Email already exists!', error: true })
      }
      const existNickname = await prisma.user.findUnique({
        where: {
          nickname: nickname,
        },
      })
      if (existNickname) {
        return res
          .status(422)
          .json({ message: 'User Nick Name already exists!', error: true })
      }

      const hashPassword = await bcrypt.hash(password, 0)
      await prisma.user.create({
        data: {
          nickname: nickname,
          email: email,
          password: hashPassword,
        },
      })
      return res.status(200).end()
    } catch (error) {
      console.log(error)
      return res.status(503).json({ message: error.toString(), error: true })
    }
  } else {
    return res
      .status(405)
      .json({
        message: 'This request only supports POST requests',
        error: true,
      })
  }
}
