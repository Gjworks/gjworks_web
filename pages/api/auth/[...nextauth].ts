import NextAuth from 'next-auth'
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from 'next-auth/providers/credentials'
import { verifyPassword } from 'src/lib/auth/auth'
import { log } from 'console'

const prisma = new PrismaClient()

interface Credentials {
  email: string,
  password: string
}

const option = {
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        id: {
          label: "아이디",
          type: "text",
          placeholder: "아이디를 입력하세요.",
        },
        password: {
          label: "비밀번호",
          type: "password",
          placeholder: "비밀번호를 입력하세요.",
        },
      },
      async authorize(credentials:Credentials) {
        console.log(credentials)
        const { email, password } = credentials;

        console.log('credentials authorize', credentials)
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
          select: {
            id: true,
            nickname: true,
            email: true,
            password: true,
            isAdmin: true,
            isManagers: true,
          },
        })

        if (!user) {
          throw new Error('No user found for credentials')
        }

        const isValid = await verifyPassword(
          password,
          user.password
        )

        if (!isValid) {
          throw new Error('Could not log you in!')
        }
        // if (user) {
        //   return user
        // }
        // return null;
        return {
          id: user.id,
          nickname: user.nickname,
          email: user.email,
          isAdmin: user.isAdmin,
          isManagers: user.isManagers,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
    updateAge: 2 * 24 * 60 * 60
  },
  // secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   account.access_token = user.access_token
    //   return true
    // },
    async jwt({ token, user }) {
      
      if (user) {
        // token = user;
        // token = user;
        token.user=user
      }
      console.log('callback jwt account', user)
      console.log('callback jwt token', token)
      return Promise.resolve(token);
    },
    async session({ session,token }) {
      // const exUser = await prisma.user.findUnique({
      //   where: { email: session.user?.email },
      //   select: {
      //     id: true,
      //     nickname: true,
      //     email: true,
      //     password: true,
      //     isAdmin: true,
      //     isManagers: true,
      //   },
      // })
      // session.user = exUser
      session.user = token.user;
      return Promise.resolve(session)
    },
  },
  database: process.env.DATABASE_URL,
  pages: {
    signIn: '/auth/Signin',
    signOut: '/auth/Signout',
    error: '/auth/Error',
  },
}
export default (req, res) => NextAuth(req, res, option)
