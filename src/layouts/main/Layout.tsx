/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/
'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from 'src/layouts/main/Header'
import Footer from 'src/layouts/fullLayout/Footer'
import SubNav from 'src/layouts/fullLayout/SubNav'
import FootAlert from 'src/layouts/fullLayout/FootAlert'

const MainLayout = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    // const htmlElement = document.documentElement
    // // 조건에 따라 클래스를 추가 또는 제거
    // if (!htmlElement.classList.contains('dark')) {
    //   htmlElement.classList.add('dark')
    // }
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="relative bg-[url('/assets/images/bg10.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden from-gray-950/60 via-gray-950/40 to-black/60 bg-gradient-to-b dark:from-dark-950/70 dark:via-dark-950/70 dark:to-dark-950/70"></div>
      <div className="relative z-20">
        <Header />
        <SubNav />
        {/* <div className="sticky block top-[57px] w-full shadow-lg shadow-slate-100"></div> */}
        <main className="">
          <div className="relative">{children}</div>
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
          <div className="dark mx-auto max-w-screen-xl">
            <Footer />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MainLayout
