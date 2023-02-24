'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
const PageLayout = ({ children }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  console.log(searchParams)
  console.log(pathname)
  return (
    <>
      <div className="flex flex-wrap xl:flex-nowrap gap-12 max-w-screen-2xl mx-auto pt-8 pb-20 px-3">
        <div className="w-64 flex-none">
          <div className="">
            <div className="flex items-center flex-wrap gap-4 mb-3 group">
              <div className="flex justify-center items-center w-6 h-6 rounded-md bg-primary-400 group-hover:bg-primary-400 group-hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </div>
              <Link href="/docs" className="flex items-center justify-between">
                <div
                  className={
                    'text-base font-normal cursor-pointer group-hover:text-white ' +
                    (pathname === '/docs'
                      ? 'text-white'
                      : 'text-dark-300 hover:text-white')
                  }
                >
                  Installation
                </div>
                <div className="ml-2 text-black py-[1px] px-[3px] rounded bg-primary-200 text-[10px]">
                  New
                </div>
              </Link>
              <div className="w-full pb-2 pl-12">
                <div className="flex items-center text-sm font-normal text-dark-300 cursor-pointer hover:text-white mb-3">
                  Git
                </div>
                <div className="flex items-center text-sm font-normal text-dark-300 cursor-pointer hover:text-white mb-3">
                  Docker
                </div>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-4 mb-3 group">
              <div className="flex justify-center items-center w-6 h-6 rounded-md bg-dark-600 text-white group-hover:bg-primary-400 group-hover:text-black">
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
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <div className="flex items-center text-base font-normal text-dark-300 cursor-pointer group-hover:text-white">
                배포하기
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-4 mb-3 group">
              <div className="flex justify-center items-center w-6 h-6 rounded-md bg-dark-600 text-white group-hover:bg-primary-400 group-hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <div className="flex items-center text-base font-normal text-dark-300 cursor-pointer group-hover:text-white">
                Components
              </div>
              <div className="w-full pb-2 pl-12">
                <div className="flex items-center text-sm font-normal text-dark-300 cursor-pointer hover:text-white mb-3">
                  Alert
                </div>
                <div className="flex items-center text-sm font-normal text-dark-300 cursor-pointer hover:text-white mb-3">
                  Accodion
                </div>
                <Link
                  href="/docs/components/dropdown"
                  className="flex items-center mb-3"
                >
                  <div
                    className={
                      ' text-sm font-normal cursor-pointer ' +
                      (pathname === '/docs/components/dropdown'
                        ? 'text-white'
                        : 'text-dark-300 hover:text-white')
                    }
                  >
                    Dropdown
                  </div>
                  <div className="ml-2 text-black py-[1px] px-[3px] rounded bg-primary-200 text-[10px]">
                    New
                  </div>
                </Link>
                <div className="flex items-center text-sm font-normal text-dark-300 cursor-pointer hover:text-white mb-3">
                  Modal
                </div>
                <div className="flex items-center text-sm font-normal text-dark-300 cursor-pointer hover:text-white mb-3">
                  Panel
                </div>
                <div className="flex items-center text-sm font-normal text-dark-300 cursor-pointer hover:text-white mb-3">
                  Tab
                </div>
                <div className="flex items-center text-sm font-normal text-dark-300 cursor-pointer hover:text-white mb-3">
                  Toast
                </div>
                <div className="flex items-center text-sm font-normal text-dark-300 cursor-pointer hover:text-white mb-3">
                  Forms
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow text-dark-100">
          <div className="flex gap-12 flex-wrap xl:flex-nowrap">
            <div className="grow">{children}</div>
            <div className="w-full xl:w-80 flex-none">
              <div className="sticky top-24">
                <Link
                  href="#"
                  className="flex text-dark-300 hover:text-white mb-2 text-sm"
                >
                  Top
                </Link>
                <Link
                  href="#"
                  className="flex text-dark-300 hover:text-white mb-2 text-sm"
                >
                  Installation
                </Link>
                <Link
                  href="#"
                  className="flex text-dark-300 hover:text-white mb-2 text-sm"
                >
                  시스템 요구사항
                </Link>
                <Link
                  href="#"
                  className="flex text-dark-300 hover:text-white mb-2 text-sm"
                >
                  Git 설정
                </Link>
                <Link
                  href="#"
                  className="flex text-dark-300 hover:text-white mb-2 text-sm"
                >
                  Package
                </Link>
                <Link
                  href="#"
                  className="flex text-dark-300 hover:text-white mb-2 text-sm"
                >
                  env 설정
                </Link>
                <Link
                  href="#"
                  className="flex text-dark-300 hover:text-white mb-2 text-sm"
                >
                  bottom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageLayout
