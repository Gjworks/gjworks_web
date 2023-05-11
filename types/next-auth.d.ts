import NextAuth from "next-auth";
import { User as UserModel } from '@prisma/client';

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
  interface User extends UserModel {
    id: number;
    password: string;
    email: string
  }
}

// declare module 'next-auth' {
//   interface Credentials {
//     authorize<T extends object = Record<string, unknown>>(credentials: Credentials, req: Pick<RequestInternal, "body" | "method" | "query" | "headers">): Promise<{ id: string | number; email: string; password: string; nickname: string; isAdmin: boolean; isManagers: boolean }>;
//   }
// }