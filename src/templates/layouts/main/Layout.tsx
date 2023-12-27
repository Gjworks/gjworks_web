/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/
'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Header from '@gjworks/templates/layouts/fullLayout/Header'
import Footer from '@gjworks/templates/layouts/fullLayout/Footer'

const MainLayout = ({children}) => {
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
    <div className="selection:text-black selection:bg-yellow-400 dark:selection:bg-blue-500 dark:selection:text-white break-keep">
      <div className="relative z-20">
        <Header />
        {/* <div className="sticky block top-[57px] w-full shadow-lg shadow-slate-100"></div> */}
        <main>{children}</main>
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
        )}

        <footer>
          <div className="max-w-screen-xl mx-auto pt-5 pb-10">
            <Footer />
          </div>
        </footer>
      </div>
      <div className="fixed lg:hidden bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200/75 z-999 pb-2">
        <div className="grid grid-cols-4">
          <div className="col-span-1 p-1">
            <Link
              href="{process.env.NEXT_PUBLIC_DEFAULT_URL}"
              className="flex justify-center items-center text-gray-500 hover:text-gray-950 py-3"
            >
              <div className="">
                <div className="flex justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <div className="text-xs">Home</div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 p-1">
            <Link
              href="{process.env.NEXT_PUBLIC_DEFAULT_URL}"
              className="flex justify-center items-center text-gray-500 hover:text-gray-950 py-3"
            >
              <div className="">
                <div className="flex justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                    />
                  </svg>
                </div>
                <div className="text-xs">Store</div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 p-1">
            <Link
              href="{process.env.NEXT_PUBLIC_DEFAULT_URL}"
              className="flex justify-center items-center text-gray-500 hover:text-gray-950 py-3"
            >
              <div className="">
                <div className="flex justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <div className="text-xs">Cart</div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 p-1">
            <Link
              href="{process.env.NEXT_PUBLIC_DEFAULT_URL}"
              className="flex justify-center items-center text-gray-500 hover:text-gray-950 py-3"
            >
              <div className="">
                <div className="flex justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <div className="text-xs">Settings</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
