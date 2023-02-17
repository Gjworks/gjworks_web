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
          <div className="relative">
            <div className="relative mx-auto max-w-screen-md w-full p-10 bg-dark-900">
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
            <div className="pt-5">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            </div>
            
            <div className="flex justify-center gap-4 pt-5">
              <Link href="/" className="flex gap-4 px-5 py-3 bg-dark-700 hover:bg-dark-500 rounded-md text-sm text-dark-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </span>
                <span>HOME</span>
              </Link>
              <Link href="/auth/Signin" className="flex gap-4 px-10 py-3 bg-rose-500 hover:bg-rose-600 rounded-md text-sm text-dark-100 hover">
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
        </div>
      </PageWrap>
    )
  }
  return (
    <div className="selection:text-white selection:bg-sky-400">
      <div className="">
        <div className="fixed w-[300px] bg-dark-900 backdrop-blur-lg bg-opacity-50 h-screen overflow-hidden overflow-y-auto border-r border-dark-800">
          <DashboardSideNav />
        </div>
        <div className="relative top-0 bottom-0 ml-[300px] bg-dark-900 h-screen overflow-hidden overflow-y-auto">
          {children}
        </div>
        <div className="hidden absolute w-[450px] border-l border-dark-800 bg-dark-900 top-0 right-0 bottom-0">
          <div className="border-b border-dark-800">
            <div className="p-5">
              <div className="flex items-center gap-4 text-white text-lg mb-5 font-semibold">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                </div>
                알림
              </div>
              <div className="rounded-lg bg-dark-800 overflow-hidden mb-2">
                <div className="flex items-center px-3 py-2">
                  <div className="flex items-center text-white text-sm font-light border-b border-dark-700">
                    <div className="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="pl-2">Mail</div>
                  </div>
                  <div className="flex-1"></div>
                  <div className="text-xs text-dark-400">4시간 전</div>
                </div>
                <div className="py-3 px-3">
                  <div className="text-sm text-dark-300 font-bold mb-1">이것은 알림을 보내기 위함</div>
                  <div className="text-sm text-dark-400 font-normal">Hi, Can't wait to see you tonight!</div>
                </div>
              </div>
              <div className="rounded-lg bg-dark-800 overflow-hidden mb-2">
                <div className="flex items-center px-3 py-2">
                  <div className="flex items-center text-white text-sm font-light border-b border-dark-700">
                    <div className="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="pl-2">Mail</div>
                  </div>
                  <div className="flex-1"></div>
                  <div className="text-xs text-dark-400">4시간 전</div>
                </div>
                <div className="py-3 px-3">
                  <div className="text-sm text-dark-300 font-bold mb-1">이것은 알림을 보내기 위함</div>
                  <div className="text-sm text-dark-400 font-normal">Hi, Can't wait to see you tonight!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
  
}