'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
// import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { motion } from 'framer-motion'

interface PageProps {
  // Page 컴포넌트의 다른 속성들을 정의합니다.
}
const DashboardSideNav: React.FC<PageProps> = ({ ...props }: PageProps) => {
  const pathname = usePathname()
  const router = useRouter()
  console.log(pathname)

  const session = useSession()

  return (
    <>
      <div className="py-6 px-5">
        <div className=" mb-10">
          <div className="flex items-center mb-1">
            <div className="flex flex-1 text-black dark:text-white text-xl font-semibold">
              Dashboard UI
            </div>
            <div className="px-3">
              <div className="rounded-full w-2 h-2 bg-lime-400"></div>
            </div>
            <div className="text-black dark:text-white cursor-pointer border border-slate-200 dark:border-dark-800 rounded-md py-1 px-2 hover:bg-slate-200/25 dark:hover:bg-dark-800/25">
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
                'flex text-sm hover:text-white mb-1 hover:bg-orange-600 dark:hover:text-white py-2 px-4 rounded ' +
                (pathname === '/dashboard/member/list'
                  ? 'bg-orange-500 dark:bg-orange-600 text-white dark:text-white'
                  : 'text-gray-500 dark:text-dark-400 hover:text-white dark:hover:text-white')
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
                'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-orange-600 dark:hover:text-white py-2 px-4 rounded ' +
                (pathname === '/dashboard/member/group'
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
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
                'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-orange-600 dark:hover:text-white py-2 px-4 rounded ' +
                (pathname === '/dashboard/member/signup'
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
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
                'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-orange-600 dark:hover:text-white py-2 px-4 rounded ' +
                (pathname === '/dashboard/posts/lis'
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
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
                'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-orange-600 dark:hover:text-white py-2 px-4 rounded ' +
                (pathname === '/dashboard/posts/settings'
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
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
    </>
  )
}
export default DashboardSideNav
