'use server'
import { PrismaClient } from "@prisma/client";
import { hashedPassword } from "src/lib/auth/password";

const prisma = new PrismaClient();

type UserInfo = {
  email: string;
  password: string;
  nickname: string;

};

const registerUser = async (data: UserInfo) => {
  const { email, password , nickname} = data;
  console.log(email)

  // try {
  //   if(!email){
  //     throw new Error('Data Null Email');
  //   }
  //   if(!password){
  //     throw new Error('Data Null Password');
  //   }
  //   // Faking code producing errors
  //   if(!nickname){
  //     throw new Error('Data Null Nickname');
  //   }

  // } catch (err) {
  //   throw new Error('An error occurred' + err.message);
  // }
  
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