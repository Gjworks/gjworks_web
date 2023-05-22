'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSession, signOut } from 'next-auth/react'

import 'styles/globals.css'
import 'styles/tailwindcss.css'

import PageWrap from 'src/components/sections/PageWrap'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  // const pathname = '/dashboard/member/group'
  return (
    <div className="selection:text-white selection:bg-orange-500 bg-white min-h-screen">
      <div className="h-full">
        <div className="fixed w-full top-0 bg-dark-950/90 backdrop-blur-lg h-[60px] z-101">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <div className="flex items-center p-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </div>
              <div className="flex items-center p-3 text-white mr-3">
                임시사이트 홈
              </div>
              <div className="hidden lg:flex text-dark-200 text-xs hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                  />
                </svg>
                <span>Project 0.1.10.beta</span>
              </div>
            </Link>
            <div className="flex-1"></div>
            <div className="flex items-center px-3">
              <div className="max-w-xl flex items-center rounded-full bg-dark-700/75 backdrop-blur-lg px-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  className="bg-transparent text-white py-2 outline-none px-3 text-sm w-full"
                />
              </div>
            </div>
            <div className="flex gap-4 px-3">
              <div className="flex items-center text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center py-3 bg-gray-600/25 backdrop-blur-lg px-5">
              <div className="rounded-full w-8 h-8 bg-gray-500"></div>
              <div className="px-2">
                <div className="text-white text-sm">Jhon Kury</div>
                <div className="text-xs text-gray-300">CEO Business</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-b border-dark-200 mt-[60px]"></div>
        <div className="fixed w-[300px] bg-white backdrop-blur-lg h-screen overflow-hidden overflow-y-auto border-r border-slate-200">
          <div className="py-6 px-5">
            <div className=" mb-10">
              <div className="flex items-center mb-1">
                <div className="flex flex-1 text-black text-xl font-semibold">
                  Dashboard UI
                </div>
                <div className="px-3">
                  <div className="rounded-full w-2 h-2 bg-lime-400"></div>
                </div>
                <div className="text-black cursor-pointer border border-slate-200 rounded-md py-1 px-2 hover:bg-slate-200/25 dark:hover:bg-dark-800/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-dark-500 text-xs">Dashboard Ma</div>
            </div>
            <div className="mb-10">
              <div className="mb-5">
                <div className="text-xs uppercase font-bold text-slate-400 dark:text-dark-400">
                  MEMBERS
                </div>
              </div>
              <div className="">
                <Link
                  href="/dashboard/member/list"
                  className={
                    'flex text-sm hover:text-white mb-1 hover:bg-cyan-500 dark:hover:text-white py-2 px-4 rounded ' +
                    ''
                    // (pathname === '/dashboard/member/list'
                    //   ? 'bg-cyan-500 text-white dark:text-white'
                    //   : 'text-gray-500 dark:text-dark-400 hover:text-white dark:hover:text-white')
                  }
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>
                  <div className="px-3">회원 목록</div>
                </Link>
                <Link
                  href="/dashboard/member/group"
                  className={
                    'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-cyan-500 dark:hover:text-white py-2 px-4 rounded ' +
                    ''
                    // (pathname === '/dashboard/member/group'
                    //   ? 'text-black dark:text-white'
                    //   : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
                  }
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                  </div>
                  <div className="px-3">회원 그룹관리</div>
                </Link>
                <Link
                  href="/dashboard/member/signup"
                  className={
                    'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-cyan-500 dark:hover:text-white py-2 px-4 rounded ' +
                    ''
                    // (pathname === '/dashboard/member/signup'
                    //   ? 'text-black dark:text-white'
                    //   : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
                  }
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </div>
                  <div className="px-3">회원 가입설정</div>
                </Link>
              </div>
            </div>
            <div>
              <div className="mb-5">
                <div className="text-xs uppercase font-bold text-slate-400 dark:text-dark-400">
                  Board
                </div>
              </div>
              <div className="">
                <Link
                  href="/dashboard/posts/list"
                  className={
                    'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-cyan-500 dark:hover:text-white py-2 px-4 rounded ' +
                    ''
                    // (pathname === '/dashboard/posts/lis'
                    //   ? 'text-black dark:text-white'
                    //   : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
                  }
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </div>
                  <div className="px-3">게시판 목록</div>
                </Link>
                <Link
                  href="/dashboard/posts/settings"
                  className={
                    'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-cyan-500 dark:hover:text-white py-2 px-4 rounded ' +
                    ''
                    // (pathname === '/dashboard/posts/settings'
                    //   ? 'text-black dark:text-white'
                    //   : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
                  }
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                  </div>
                  <div className="px-3">게시판 설정</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-0 ml-[300px] bg-white">
          <PageWrap>{children}</PageWrap>
        </div>
      </div>
    </div>
  )
}
