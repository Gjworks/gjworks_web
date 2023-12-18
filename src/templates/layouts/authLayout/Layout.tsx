/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/
'use client'

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {motion} from 'framer-motion'
import Footer from 'src/templates/layouts/authLayout/Footer'

const Layout = ({children}) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])
  const variants = {
    hidden: {opacity: 0, x: 0, y: 25},
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

  const parentVariants = {
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    offscreen: {
      y: 15,
      opacity: 0,
      transition: {
        duration: 0.3,
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
    <motion.div className="selection:text-black selection:bg-yellow-400 break-keep dark:bg-transparent min-h-full">
      {/* <div className="absolute block top-0 left-0 right-0 h-[399px] bg-gradient-to-br from-dark-600 via-dark-800 to-dark-800"></div> */}
      <div className="relative z-20">
        <motion.header
          transition={{duration: 0.3}}
          className="sticky top-0 backdrop-blur-xl before:backdrop-blur-lg z-101 "
        >
          <div className="max-w-screen-sm mx-auto">
            <div className="flex justify-between items-center py-2 pr-3">
              <a
                onClick={() => router.back()}
                className="text-gray-500 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white py-2 px-3 rounded-lg cursor-pointer"
              >
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </a>
              <a
                href={process.env.NEXT_PUBLIC_DEFAULT_URL}
                className="text-lg font-semibold text-black dark:text-white"
              >
                지제이웍스
              </a>
              <a
                href={process.env.NEXT_PUBLIC_DEFAULT_URL}
                className="text-gray-500 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white py-2 px-3 rounded-lg cursor-pointer"
              >
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
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.header>
        <div className="sticky block top-[57px] w-full shadow-lg shadow-gray-100"></div>
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
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1, transition: {duration: 0.6}}}
            exit={{y: 100, opacity: 0, transition: {duration: 0.6}}}
            whileHover={{
              scale: 1.2,
              transition: {duration: 0.2},
            }}
            whileTap={{scale: 1}}
            onClick={goToTop}
            className="fixed right-10 bottom-10 rounded-lg bg-gray-800 hover:bg-gray-950 dark:bg-dark-600/50 dark:hover:bg-dark-500/50 backdrop-blur-lg dark:backdrop-blur-lg text-white p-3 z-101 cursor-pointer"
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
          <div className="max-w-screen-sm mx-auto pt-5 pb-10 px-3 lg:px-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200/50 dark:via-dark-600 to-transparent"></div>
            <div className="pt-8 lg:pt-5 pb-8">
              <motion.div
                variants={variants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: false, amount: 0.3}}
                className="flex flex-wrap justify-between gap-8"
              >
                <motion.div
                  className="flex items-center justify-center w-full lg:w-auto"
                  variants={parentVariants}
                >
                  <div className="text-xs text-gray-700 dark:text-dark-200 text-center lg:text-left">
                    ⓒ 지제이웍스
                  </div>
                </motion.div>
                <motion.div className="flex items-center justify-center lg:justify-end w-full lg:w-auto">
                  <div className="flex flex-wrap gap-4">
                    <motion.div variants={parentVariants}>
                      <Link
                        href="/"
                        className="text-gray-400 dark:text-dark-400 hover:text-black dark:hover:text-white text-xs"
                      >
                        Terms of service
                      </Link>
                    </motion.div>
                    <motion.div variants={parentVariants}>
                      <Link
                        href="/"
                        className="text-gray-400 dark:text-dark-400 hover:text-black dark:hover:text-white text-xs"
                      >
                        Privacy policy
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  )
}

export default Layout
