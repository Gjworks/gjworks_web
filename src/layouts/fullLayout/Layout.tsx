'use client'

import { useEffect } from 'react'
import Header from 'src/layouts/fullLayout/Header'
import Footer from 'src/layouts/fullLayout/Footer'
import SubNav from 'src/layouts/fullLayout/SubNav'
import FootAlert from 'src/layouts/fullLayout/FootAlert'

const FullLayout = ({ children }) => {
  useEffect(() => {
    // const htmlElement = document.documentElement
    // // 조건에 따라 클래스를 추가 또는 제거
    // if (!htmlElement.classList.contains('dark')) {
    //   htmlElement.classList.add('dark')
    // }
  }, []) // 빈 배열을 두 번째 인수로 전달하면 컴포넌트가 처음 마운트될 때만 실행됩니다.
  return (
    <div className="">
      <div className="relative z-20">
        <Header />
        <main className="h-full px-0 ">
          <div className="relative h-full">
            {/* <div className="sticky block top-[57px] w-full shadow-lg shadow-slate-100"></div> */}
            {children}
          </div>
        </main>

        {/* {scrollPosition > 100 && (
          <motion.button
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1, transition: {duration: 0.6}}}
            exit={{y: 100, opacity: 0, transition: {duration: 0.6}}}
            whileHover={{
              scale: 1.2,
              transition: {duration: 0.2},
            }}
            whileTap={{scale: 1}}
            onClick={goToTop}
            className="fixed right-3 lg:right-10 bottom-5 lg:bottom-10 rounded-lg bg-gray-500/50 hover:bg-gray-950 dark:bg-dark-600/50 dark:hover:bg-dark-500/50 backdrop-blur-lg dark:backdrop-blur-lg text-white p-3 z-101 cursor-pointer"
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
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </motion.button>
        )} */}
        <footer className="pb-8 pt-6">
          <div className="mx-auto max-w-screen-xl">
            <Footer />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default FullLayout
