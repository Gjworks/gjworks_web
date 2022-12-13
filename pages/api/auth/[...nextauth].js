import NextAuth from 'next-auth';
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from '../../../lib/auth/auth';

const prisma = new PrismaClient();

const option = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers : [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        const user = await prisma.users.findUnique({
          where: {
            email: credentials.email
          },
          select: {
            id:true,
            nickname : true,
            email: true,
            password: true,
          }
        })
        
        if(!user) {
          throw new new Error('No user found for credentials');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        )

        if(!isValid) {
          throw new Error('Could not log you in!');
        }
        if(user) {
          return user;
        }
        return null;
        // return {
        //   id : user.id,
        //   nickname : user.nickname,
        //   email: user.email
        // }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      account.access_token = user.access_token
      console.log('signIn', account)
      return true
    },
    async session({ session, token, user }) {
      session.user = token.user;
      return Promise.resolve(session)
    },
    async jwt({ token, user, account }) {
      console.log('jwt account')
      console.log(account)
      console.log(account.access_token)
      if (user) {
        // token = user;
        token.accessToken = account.access_token
        token.user=user
      }
      return Promise.resolve(token);
    },
  },
  database : process.env.DATABASE_URL,
  pages: {
    signIn: "/auth/Account",
    signOut: "/auth/Signout",
    error: "/auth/Error",
  }
}
export default (req,res) => NextAuth(req,res, option);

  
