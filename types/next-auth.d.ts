import NextAuth from "next-auth";
declare module 'next-auth' {
  interface Session {
    user: {
      id: Number
      email: string
      nickname: string
      isManagers: boolean
      isAdmin: boolean
    }
  }
}