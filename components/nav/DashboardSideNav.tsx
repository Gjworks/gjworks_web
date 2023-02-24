'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { motion } from 'framer-motion'

declare module 'next-auth' {
  interface Session {
    user: {
      id: Number
      name: string
      email: string
      image: string
      nickname: string
      isManagers: boolean
      isAdmin: boolean
    }
  }
}

const DashboardSideNav = props => {
  const pathname = usePathname()
  console.log(props)
  const session = useSession()

  return (
    <>
      <div className="py-6 px-5">
        <div className=" mb-10">
          <div className="flex items-center mb-1">
            <div className="flex flex-1 text-white text-xl font-semibold">
              Dashboard UI
            </div>
            <div className="px-3">
              <div className="rounded-full w-2 h-2 bg-lime-400"></div>
            </div>
            <div className="text-white cursor-pointer border border-dark-800 rounded-md py-1 px-2 hover:bg-dark-800/25">
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
          <div className="flex items-center bg-dark-800/50 rounded-md h-10 w-full text-white px-5">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="mb-10">
          <div className="mb-5">
            <div className="text-xs uppercase font-bold text-dark-400">
              MEMBERS
            </div>
          </div>
          <div className="">
            <Link
              href="/dashboard/member/list"
              className={
                'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-sky-500 dark:hover:text-white py-2 px-4 rounded ' +
                (pathname === '/dashboard/member/list'
                  ? 'bg-sky-500 text-black dark:text-white'
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <div className="px-3">회원 목록</div>
            </Link>
            <Link
              href="/dashboard/member/group"
              className={
                'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-sky-500 dark:hover:text-white py-2 px-4 rounded ' +
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
                'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-sky-500 dark:hover:text-white py-2 px-4 rounded ' +
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
            <div className="text-xs uppercase font-bold text-dark-400">
              Board
            </div>
          </div>
          <div className="">
            <Link
              href="/dashboard/posts/list"
              className={
                'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-sky-500 dark:hover:text-white py-2 px-4 rounded ' +
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
                'flex text-sm text-dark-300 hover:text-white mb-1 hover:bg-sky-500 dark:hover:text-white py-2 px-4 rounded ' +
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
      <motion.div
        className="fixed bottom-0 bg-gray-300/25 dark:bg-dark-700/25 bg-opacity-75 backdrop-blur-sm py-5 w-[300px] px-3"
        initial={{ opacity: 0, y: '20%' }}
        animate={{ opacity: 1, y: '0%', transition: { duration: 1 } }}
      >
        <div className="flex">
          <div className="flex items-center pr-3">
            <div className="block w-8 h-8 rounded-full bg-gray-300 dark:bg-dark-600"></div>
          </div>
          <div className="flex-1">
            {session.status === 'authenticated' ? (
              <>
                <div className="text-sm font-semibold mb-1 text-gray-500 dark:text-dark-200">
                  {session.data?.user.nickname}
                </div>
                <div className="text-xs text-gray-400 dark:text-dark-500">
                  {session.data?.user.email}
                </div>
              </>
            ) : (
              <>
                <div className="text-sm font-semibold mb-1 text-gray-500 dark:text-dark-200">
                  Account
                </div>
                <div className="text-xs text-gray-400 dark:text-dark-500">
                  Sign in or Sign up
                </div>
              </>
            )}
          </div>
          {session.status === 'authenticated' ? (
            <Link
              href="/user/Account"
              className="flex items-center px-3 rounded-lg dark:text-white bg-gray-300 hover:bg-gray-200 dark:bg-dark-600 dark:hover:bg-sky-500  cursor-pointer"
            >
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          ) : (
            <Link
              href="/auth/Signin"
              className="flex items-center px-3 rounded-lg dark:text-white bg-gray-300 hover:bg-gray-200 dark:bg-dark-600 dark:hover:bg-sky-500 cursor-pointer"
            >
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          )}
        </div>
      </motion.div>
    </>
  )
}
export default DashboardSideNav
