import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Sign in",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "Enter your email" },
//         password: { label: "Password", type: "password", placeholder: "Enter your password" },
//       },
//       async authorize(credentials) {
//         const user = { id: "1", name: "Admin", email: credentials?.email };
//         if (!user) {
//           return null;
//         }
//         if (user) {
//           return { ...user, email: user.email };
//         }
//         return user;
//       },
//     }),
//   ],
// };