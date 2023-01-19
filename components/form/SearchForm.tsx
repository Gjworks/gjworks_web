"use client"
import { motion } from "framer-motion";

const SearchForm = () => {
  return(
    <>
      <div className="">
        <div className="flex border-b border-dark-500 p-3">
          <input type="text" className="flex-1 text-base text-dark-300 py-2 bg-transparent px-3 outline-none" placeholder="Search Text..."></input>
          <button className="text-dark-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        <motion.div className="pt-3 pb-4 px-3" initial={{opacity:0, y:"20%"}} animate={{opacity:1, y:"0%", transition:{duration:0.8, delay:0.5}}}>
          <div className="flex items-center gap-4">
            <div className="text-dark-100 text-sm pr-4">인기</div>
            <div className="flex bg-dark-400 py-1 px-1 text-xs rounded-sm hover:bg-primary-700 hover:text-white">
              <div className="px-2">
                React
              </div>
              <div className="pl-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div className="flex bg-dark-400 py-1 px-3 text-xs rounded-sm hover:bg-primary-700 hover:text-white">
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
          <div className="flex text-sm border-b border-dark-500 text-dark-300 py-3 hover:bg-dark-500 hover:text-dark-100 px-3 rounded-sm cursor-pointer">
            <div className="flex-1">
              tailwind 설정하는 방법
            </div>
            <div>22.05.23</div>
          </div>
          <div className="flex text-sm border-b border-dark-500 text-dark-300 py-3 hover:bg-dark-500 hover:text-dark-100 px-3 rounded-sm cursor-pointer">
            <div className="flex-1">
              Prisma Create Schemas
            </div>
            <div>22.05.23</div>
          </div>
          <div className="flex text-sm border-b border-dark-500 text-dark-300 py-3 hover:bg-dark-500 hover:text-dark-100 px-3 rounded-sm cursor-pointer">
            <div className="flex-1">
              postfix 메일 설정
            </div>
            <div>22.05.23</div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default SearchForm;