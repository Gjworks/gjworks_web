"use client";

import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

import "styles/globals.css"
import "styles/tailwindcss.css"

import DashboardSideNav from 'components/nav/DashboardSideNav';
import PageWrap from 'components/page/PageWrap';

declare module 'next-auth' {
  interface Session {
    user: {
      id: Number,
      name: string
      email: string
      image: string
      nickname: string,
      isManagers: boolean,
      isAdmin: boolean
    }
  }
}

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  const session = useSession();
  if (session?.data?.user?.isManagers !== true) {
    return (
      <PageWrap>
        <div className="flex items-center justify-center text-white h-full w-full">
          <div className="border border-dark-600 rounded-lg mx-auto max-w-screen-md w-full p-10 bg-dark-800/25 backdrop-blur-lg shadow-lg shadow-dark-900">
            <div className="flex justify-center mb-5 text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-center font-semibold text-xl text-red-500">
              Access denied for user
            </div>
            <div className="text-dark-50 text-center pt-5">
              접근 권한이 없습니다. 관리자에게 문의하시기 바랍니다.
            </div>
            <div className="flex justify-center gap-4 pt-5">
              <Link href="/" className="flex gap-4 px-5 py-3 bg-dark-900 hover:bg-black rounded-md text-sm text-dark-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </span>
                <span>HOME</span>
              </Link>
              <Link href="/auth/Signin" className="flex gap-4 px-10 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-sm text-dark-100 hover">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                </span>
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </PageWrap>
    )
  }
  return (
    <div className="selection:text-white selection:bg-primary-400">
      <div className="">
        <div className="fixed w-[300px] bg-dark-900 backdrop-blur-lg bg-opacity-50 h-screen overflow-hidden overflow-y-auto border-r border-dark-800">
          <DashboardSideNav />
        </div>
        <div className="fixed top-0 right-0 bottom-0 left-[300px] bg-dark-900 h-screen overflow-hidden overflow-y-auto">
          {children}
        </div>
      </div>
      
    </div>
  );
  
}