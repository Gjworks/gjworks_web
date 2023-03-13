import NextAuth, {NextAuthOptions} from 'next-auth'
import { PrismaClient, User as UserModel} from '@prisma/client'
import CredentialsProvider from 'next-auth/providers/credentials'
// import credentials from 'next-auth/providers/credentials'
import { verifyPassword } from 'src/lib/auth/auth'
import { log } from 'console'

const prisma = new PrismaClient()

// declare module 'next-auth' {
//   interface User extends UserModel {
//     // id: number; // <- here it is
//   }
// }

const option:NextAuthOptions = {
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        id: { label: "ID", type: "number", placeholder: "Enter your ID" },
        nickname: { label: "Nickname", type: "string", placeholder: "Enter your nickname" },
        email: { label: "Email", type: "string", placeholder: "Enter your email" },
        isAdmin: { label: "Admin", type: "checkbox", placeholder: "Are you an admin?" },
        isManagers: { label: "Manager", type: "checkbox", placeholder: "Are you a manager?" },
        password: { label: "Password", type: "string", placeholder: "Enter your password" },
      },
      async authorize(credentials ,request) {
        console.log(credentials)
        const { email, password } = credentials;

        console.log('credentials authorize', credentials)
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
          id: 1,
          nickname: 'John',
          password: '',
          email: 'john@example.com',
          isAdmin: false,
          isManagers: true
        }as any;
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
        token.user = user;
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
      // session.user = token.user;
      return Promise.resolve(session)
    },
  },
  // database: process.env.DATABASE_URL,
  pages: {
    signIn: '/auth/Signin',
    signOut: '/auth/Signout',
    error: '/auth/Error',
  },
}
export default (req, res) => NextAuth(req, res, option)
