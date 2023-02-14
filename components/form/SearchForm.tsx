"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const SearchForm = () => {
  return(
    <>
      <div className="px-3">
        <div className="flex border-b border-gray-300 dark:border-dark-800 p-3">
          <input type="text" className="flex-1 text-base text-dark-300 py-2 bg-transparent px-3 outline-none focus:text-white placeholder-dark-400" placeholder="Search Text..."></input>
          <button className="text-gray-400 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        <motion.div className="pt-3 pb-4 px-3" initial={{opacity:0, y:"20%"}} animate={{opacity:1, y:"0%", transition:{duration:0.8, delay:0.5}}}>
          <div className="flex items-center gap-4">
            <div className="text-gray-700 dark:text-dark-100 text-xs pr-4">인기</div>
            <div className="flex bg-gray-300/50 dark:bg-dark-600 py-1 px-1 text-xs rounded-sm hover:bg-primary-400 dark:hover:bg-primary-400 hover:text-black cursor-pointer">
              <div className="px-2">
                React
              </div>
              <div className="pl-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div className="flex bg-gray-300/50 dark:bg-dark-600 py-1 px-3 text-xs rounded-sm hover:bg-primary-400 dark:hover:bg-primary-400 hover:text-black cursor-pointer">
              <div className="px-2">
                Framer Motion
              </div>
              <div className="pl-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="pt-2 pb-5 px-3" initial={{opacity:0, y:"20%"}} animate={{opacity:1, y:"0%", transition:{duration:0.9, delay:0.5}}}>
          <div className="text-sm font-semibold mb-3 text-dark-200">검색기록</div>
          <div className="flex text-sm border-b border-gray-300 dark:border-dark-800 text-dark-300 py-3 hover:bg-gray-300 dark:hover:bg-primary-400 hover:text-gray-900 dark:hover:text-black px-3 rounded-sm cursor-pointer">
            <div className="flex-1">
              tailwind 설정하는 방법
            </div>
            <div>22.05.23</div>
          </div>
          <div className="flex text-sm border-b border-gray-300 dark:border-dark-800 text-dark-300 py-3 hover:bg-gray-300 dark:hover:bg-primary-400 hover:text-gray-900 dark:hover:text-black px-3 rounded-sm cursor-pointer">
            <div className="flex-1">
              Prisma Create Schemas
            </div>
            <div>22.05.23</div>
          </div>
          <div className="flex text-sm text-dark-300 py-3 hover:bg-gray-300 dark:hover:bg-primary-400 hover:text-gray-900 dark:hover:text-black px-3 rounded-sm cursor-pointer">
            <div className="flex-1">
              postfix 메일 설정
            </div>
            <div>22.05.23</div>
          </div>
        </motion.div>
      </div>
      <div className="px-3 pt-2 bg-gray-200 dark:bg-dark-900/25 border-t border-dark-800 backdrop-blur-lg">
        <motion.div className="pt-2 pb-5 px-3" initial={{opacity:0, y:"20%"}} animate={{opacity:1, y:"0%", transition:{duration:1.1, delay:0.5}}}>
          <div className="flex">
            <div className="text-gray-500 dark:text-dark-300 hover:text-gray-800 dark:hover:text-dark-50">
              <Link href="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </Link>
            </div>
            <div className="flex-1"></div>
            <div className="text-gray-400 dark:text-dark-200 text-xs">
              Cookie 정책보기
            </div>
          </div>
        </motion.div>
      </div>

    </>
  )
}

export default SearchForm;