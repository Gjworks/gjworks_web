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

// declare module 'next-auth' {
//   interface Credentials {
//     authorize<T extends object = Record<string, unknown>>(credentials: Credentials, req: Pick<RequestInternal, "body" | "method" | "query" | "headers">): Promise<{ id: string | number; email: string; password: string; nickname: string; isAdmin: boolean; isManagers: boolean }>;
//   }
// }