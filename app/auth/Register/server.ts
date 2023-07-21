'use server'
import { PrismaClient } from "@prisma/client";
import { hashedPassword } from "src/lib/auth/password";

const prisma = new PrismaClient();

type UserInfo = {
  nickname: string;
  email: string;
  password: string;
};

const registerUser = async (data: UserInfo) => {
  const { nickname, email, password } = data;
  if (!nickname) {
    throw new Error('Invalid input.')
  }
  // if(!nickname)
  // {
  //   throw new Error(`This is error is in the Server Action`);
  // }
  // const createUser = await prisma.user.create({
  //   data: {
  //     nickname: nickname,
  //     email: email,
  //     password: await hashedPassword(password).toString(),
  //   },
  // });
  // return createUser;
};

export default registerUser;