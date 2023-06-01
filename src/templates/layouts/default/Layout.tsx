/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/
'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from 'src/templates/layouts/default/Header'
import Footer from 'src/templates/layouts/default/Footer'
import SubNav from 'src/templates/layouts/default/SubNav'

const Layout = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])
  const variants = {
    hidden: { opacity: 0, x: 0, y: 25 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: 25,
      transition: {
        duration: 0.4,
      },
    },
  }

  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <motion.div className="selection:text-primary-400 selection:bg-dark-300 break-keep">
      {/* <div className="absolute block top-0 left-0 right-0 h-[399px] bg-gradient-to-br from-dark-600 via-dark-800 to-dark-800"></div> */}
      <div className="relative z-20">
        <Header />
        <SubNav />
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
        {scrollPosition > 100 && (
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 1 }}
            onClick={goToTop}
            className="fixed right-10 bottom-10 rounded-lg bg-dark-600/50 hover:bg-dark-500/50 backdrop-blur-lg dark:backdrop-blur-lg text-white p-3 z-101 cursor-pointer"
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
        )}

        <footer>
          <Footer />
        </footer>
      </div>
    </motion.div>
  )
}

export default Layout
