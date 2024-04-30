/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
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
    <motion.div className="min-h-full dark:bg-transparent ">
      {/* <div className="absolute block top-0 left-0 right-0 h-[399px] bg-gradient-to-br from-dark-600 via-dark-800 to-dark-800"></div> */}
      <div className="relative z-20">
        <motion.main
          className="h-screen"
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
        >
          <div className="h-full">
            <div className="grid grid-cols-5 gap-8 h-full">
              <div className="col-span-5 lg:col-span-3 h-full">
                <div className="relative w-full h-[320px] lg:h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/80 to-gray-950/95 z-10"></div>
                  <div className="absolute bottom-0 left-0 py-12 px-8 z-20">
                    <div className="text-white text-2xl lg:text-4xl font-medium mb-5">
                      Sign in & Sign up
                    </div>
                    <div className="text-gray-400 text-sm lg:text-base font-light">
                      회원가입을 하면 더욱 많은 서비스를 이용할 수 있습니다.
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/assets/images/yellow/yellow_bg3.jpg"
                      fill
                      alt="bg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-2 flex justify-center items-center">
                <div className="w-full lg:w-[32rem] px-3">
                  <motion.header
                    transition={{ duration: 0.3 }}
                    className="z-101 relative top-0 w-full "
                  >
                    <div className="max-w-screen-3xl mx-auto">
                      <div className="flex items-center justify-between py-2">
                        <a
                          onClick={() => router.back()}
                          className="dark:text-dark-400 cursor-pointer rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 dark:hover:text-white bg-gray-100 hover:bg-gray-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
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
                          className="dark:text-dark-400 cursor-pointer rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 dark:hover:text-white bg-gray-100 hover:bg-gray-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
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
                  <div className="w-full">{children}</div>
                  <footer>
                    <div className="mx-auto max-w-screen-sm pb-10 pt-5">
                      <div className="dark:via-dark-600 h-px w-full bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
                      <div className="pb-8 pt-8 lg:pt-5">
                        <motion.div
                          variants={variants}
                          initial="offscreen"
                          whileInView="onscreen"
                          viewport={{ once: false, amount: 0.3 }}
                          className="flex flex-wrap justify-between gap-8"
                        >
                          <motion.div
                            className="flex items-center justify-center"
                            variants={parentVariants}
                          >
                            <div className="dark:text-dark-200 text-center text-xs text-gray-700 lg:text-left">
                              ⓒ 지제이웍스
                            </div>
                          </motion.div>
                          <motion.div className="flex items-center justify-center lg:justify-end">
                            <div className="flex flex-wrap gap-4">
                              <motion.div variants={parentVariants}>
                                <Link
                                  href="/"
                                  className="dark:text-dark-400 text-xs text-gray-400 hover:text-black dark:hover:text-white"
                                >
                                  Terms of service
                                </Link>
                              </motion.div>
                              <motion.div variants={parentVariants}>
                                <Link
                                  href="/"
                                  className="dark:text-dark-400 text-xs text-gray-400 hover:text-black dark:hover:text-white"
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
              </div>
            </div>
          </div>
        </motion.main>
      </div>
    </motion.div>
  )
}

export default Layout
