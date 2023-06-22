'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const SearchForm = () => {
  return (
    <>
      <div className="px-3">
        <div className="flex border-b border-slate-200 dark:border-dark-700 p-3">
          <input
            type="text"
            className="group flex-1 text-base text-dark-300 py-2 bg-transparent px-3 outline-none focus:text-black placeholder-dark-400 dark:text-dark-200 placeholder:text-slate-300"
            placeholder="Search Text..."
          ></input>
          <button className="text-slate-400 hover:text-slate-900 dark:text-dark-300 dark:hover:text-white group-focus:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <motion.div
          className="pt-3 pb-4 px-3"
          initial={{ opacity: 0, y: '20%' }}
          animate={{
            opacity: 1,
            y: '0%',
            transition: { duration: 0.8, delay: 0.5 },
          }}
        >
          <div className="flex items-center gap-4">
            <div className="text-slate-500 dark:text-dark-100 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex bg-slate-200 dark:bg-dark-600 py-1 px-1 text-xs rounded-full hover:bg-primary-600 dark:hover:bg-primary-400 dark:hover:text-primary-100 hover:text-white cursor-pointer shadow-lg dark:hover:shadow-primary-400/20">
              <div className="px-2">React</div>
              <div className="pl-1">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div className="flex bg-primary-600 dark:text-white dark:bg-primary-600 py-1 px-3 text-xs rounded-full hover:bg-primary-500 dark:hover:bg-primary-500 dark:hover:text-primary-100 hover:text-white text-white cursor-pointer shadow-lg shadow-primary-400/20">
              <div className="px-2">Framer Motion</div>
              <div className="pl-1">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="pt-2 pb-5 px-3"
          initial={{ opacity: 0, y: '20%' }}
          animate={{
            opacity: 1,
            y: '0%',
            transition: { duration: 0.9, delay: 0.3 },
          }}
        >
          <div className="text-sm font-semibold mb-3 text-primary-600 dark:text-primary-400">
            검색기록
          </div>
          <div className="flex text-sm border-b border-slate-300/50 dark:border-dark-700 text-gray-600 py-3 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white dark:hover:text-white px-3 rounded-sm cursor-pointer">
            <div className="flex-1">tailwind 설정하는 방법</div>
            <div>22.05.23</div>
          </div>
          <div className="flex text-sm border-b border-slate-300/50 dark:border-dark-700 text-gray-600 py-3 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white dark:hover:text-white px-3 rounded-sm cursor-pointer">
            <div className="flex-1">Prisma Create Schemas</div>
            <div>22.05.23</div>
          </div>
          <div className="flex text-sm text-gray-600 py-3 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white dark:hover:text-white px-3 rounded-sm cursor-pointer">
            <div className="flex-1">postfix 메일 설정</div>
            <div>22.05.23</div>
          </div>
        </motion.div>
      </div>
      <div className="px-3 pt-2 bg-gray-200/90 dark:bg-dark-700/40 backdrop-blur-lg">
        <motion.div
          className="pt-2 pb-5 px-3"
          initial={{ opacity: 0, y: '20%' }}
          animate={{
            opacity: 1,
            y: '0%',
            transition: { duration: 1.1, delay: 0.5 },
          }}
        >
          <div className="flex">
            <div className="text-slate-500 dark:text-dark-400 hover:text-slate-800 dark:hover:text-dark-50">
              <Link href="">
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex-1"></div>
            <div className="text-slate-400 dark:text-dark-500 text-xs">
              Cookie 정책보기
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default SearchForm
