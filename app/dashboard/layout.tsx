"use client";

import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

import "styles/globals.css"
import "styles/tailwindcss.css"

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
  return (
    <>
    <div className="sticky flex items-center top-0 w-full bg-dark-900/25 backdrop-blur-lg">
      <div className="flex">
        <div className="bg-white p-2">
          <Link href={process.env.NEXT_PUBLIC_DEFAULT_URL} className="flex items-center">
            <Image src="/assets/images/brand/gjworks.svg" alt="gjworks logo" width="32" height="32" className="block w-8 h-8" />
          </Link>
        </div>
      </div>
      
    </div>
    <div className="">
      <div className="fixed w-[320px] bg-dark-600 h-screen overflow-hidden overflow-y-auto">
        <div className="flex text-center text-xl font-semibold items-center justify-center bg-lime-400 py-8">
          DASHBOARD
        </div>
        <div className="py-10 px-5">
          <div className="mb-10">
            <div className="mb-5">
              <div className="text-xs uppercase font-bold text-dark-400">MEMBERS</div>
            </div>
            <div className="pl-5">
              <Link href="/dashboard/member/list" className="block text-base text-dark-300 hover:text-white mb-3">회원목록</Link>
              <Link href="/dashboard/member/list" className="block text-base text-dark-300 hover:text-white mb-3">그룹설정</Link>
              <Link href="/dashboard/member/list" className="block text-base text-dark-300 hover:text-white mb-3">회원가입 설정</Link>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <div className="text-xs uppercase font-bold text-dark-400">Board</div>
            </div>
            <div className="pl-5">
              <Link href="/dashboard/member/list" className="block text-base text-dark-300 hover:text-white mb-3">게시판 목록</Link>
              <Link href="/dashboard/member/list" className="block text-base text-dark-300 hover:text-white mb-3">게시판 설정</Link>
            </div>
          </div>
        </div>
        <motion.div className="fixed bottom-0 bg-gray-300/25 dark:bg-dark-800 bg-opacity-75 backdrop-blur-sm py-5 w-[320px] px-3" initial={{opacity:0, y:"20%"}} animate={{opacity:1, y:"0%", transition:{duration:1}}}>
        <div className="flex">
          <div className="flex items-center pr-3">
            <div className="block w-8 h-8 rounded-full bg-gray-300 dark:bg-dark-400"></div>
          </div>
          <div className="flex-1">
          {session.status === "authenticated" ?
          <>
            <div className="text-sm font-semibold mb-1 text-gray-500 dark:text-dark-100">{session.data?.user.nickname}</div>
            <div className="text-xs text-gray-400 dark:text-dark-300">{session.data?.user.email}</div>
          </>
            :
            <>
            <div className="text-sm font-semibold mb-1 text-gray-500 dark:text-dark-100">Account</div>
            <div className="text-xs text-gray-400 dark:text-dark-300">Sign in or Sign up</div>
            </>
            }
          </div>
          {session.status === "authenticated" ?
          <Link href="/user/Account" className="flex items-center px-3 rounded-lg dark:text-white bg-gray-300 hover:bg-gray-200 dark:bg-dark-600 dark:hover:bg-lime-500  cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
          :
          <Link href="/auth/Signin" className="flex items-center px-3 rounded-lg dark:text-white bg-gray-300 hover:bg-gray-200 dark:bg-dark-600 dark:hover:bg-lime-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
          }
        </div>
      </motion.div>
      </div>
      <div className="fixed w-full left-[320px] bg-dark-700 h-screen overflow-hidden overflow-y-auto">
        {children}
      </div>
    </div>
      
    </>
  );
}