import NextAuth from 'next-auth'
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from 'next-auth/providers/credentials'
import { verifyPassword } from 'src/lib/auth/auth'

const prisma = new PrismaClient()

const option = {
  // session: {
  //   strategy: 'jwt',
  //   maxAge: 60 * 60 * 24 * 30,
  // },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
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
          throw new new Error('No user found for credentials')()
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        )

        if (!isValid) {
          throw new Error('Could not log you in!')
        }
        if (user) {
          return user
        }
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
  // secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   account.access_token = user.access_token
    //   return true
    // },
    async session({ session }) {
      console.log(session)
    },
    async jwt({ token }) {
      return token
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
