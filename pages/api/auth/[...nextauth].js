import NextAuth, { getProviders, signIn, getSession } from 'next-auth';
// import { getProviders, signIn, getSession } from "next-auth/client";
import AppleProvider from 'next-auth/providers/apple';
import GithubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';

export default NextAuth({
  providers: [
    AppleProvider({
      clientId: process.env.NEXT_PUBLIC_APPLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_APPLE_SECRET
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
    }),
    TwitterProvider({
      clientId: process.env.NEXT_PUBLIC_TWITTER_ID,
      clientSecret: process.env.NEXT_PUBLIC_TWITTER_SECRET
    })
  ],
  pages: {
    signIn: "/Signin",
    signOut: "/signout",
    error: "/error",
}
});