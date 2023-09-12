'use server'
import { z } from "zod"
import { PrismaClient } from "@prisma/client";
import { hashedPassword } from "src/lib/auth/password";
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

const prisma = new PrismaClient();

// type UserInfo = {
//   email: string;
//   password: string;
//   nickname: string;

// };

const UserSchema = z.object({
  email: z.string({
    required_error: "Please enter your name",
  }).email(),
  password: z.string().min(1),
  nickname: z.string().min(1),
});
type UserInfo = z.infer<typeof UserSchema>;

const registerUser = async (data : UserInfo) => {
  console.log(data)
  const { email, password , nickname} = data;
  let msg = '';
  
  try {
    if(!email){
      return { code: "error", message: data.email};
    }
  } catch (err) {
    console.log(err)
  }

  revalidateTag('/')

  // try {
  //   if(!email){
  //     // throw new Error('Data Null Email');

  //   }
  //   // if(!password){
  //   //   throw new Error('Data Null Password');
  //   // }
  //   // // Faking code producing errors
  //   // if(!nickname){
  //   //   throw new Error('Data Null Nickname');
  //   // }

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