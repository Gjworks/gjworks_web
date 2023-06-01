import NextAuth, {NextAuthOptions} from 'next-auth'
import { PrismaClient, User as UserModel} from '@prisma/client'
import CredentialsProvider from 'next-auth/providers/credentials'
// import credentials from 'next-auth/providers/credentials'
import { verifyPassword } from 'src/lib/auth/password'
import { sign } from 'jsonwebtoken'

const prisma = new PrismaClient()

const option:NextAuthOptions = {

  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" },
      },
      async authorize(credentials ,request) {
        console.log(credentials);
        // const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
          select: {
            id: true,
            nickname: true,
            email: true,
            password: true,
            isAdmin: true,
            isManagers: true,
            createdAt:true,
            updateAt:true
          },
        })

        if (!user) {
          throw new Error('No user found for credentials')
        }
        const isValid = await verifyPassword(
          credentials?.password,
          user.password
        )
        if (!isValid) {
          throw new Error('Could not log you in!')
        }
        return user as any;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
    updateAge: 2 * 24 * 60 * 60
  },
  secret: process.env.NEXT_SECRET,
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        const userData = {
          id: user.id,
          email :user.email,
        }
        // JWT 토큰 발급
        const accessToken = sign( userData , process.env.NEXTAUTH_SECRET, { expiresIn: "1h" });
        token.accessToken = accessToken;
      }
      return Promise.resolve(token);
    },
    async session({ session,token }) {
      return session;
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
