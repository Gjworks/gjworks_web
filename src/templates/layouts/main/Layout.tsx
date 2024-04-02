/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/
'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@plextype/templates/layouts/fullLayout/Header'
import Footer from '@plextype/templates/layouts/fullLayout/Footer'

const MainLayout = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
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
    <div className="">
      <div className="relative z-20">
        <Header />
        {/* <div className="sticky block top-[57px] w-full shadow-lg shadow-slate-100"></div> */}
        <main className="">
          <div className="relative mx-auto min-h-[calc(100vh-236px)] max-w-screen-2xl overflow-hidden md:min-h-[calc(100vh-126px)] px-3 md:px-6">
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

        <footer className="pb-8 border-t border-gray-100 pt-6">
          <div className="mx-auto max-w-screen-lg">
            <Footer />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MainLayout
