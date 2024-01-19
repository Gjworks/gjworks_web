/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/
'use client'
import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import Header from '@gjworks/templates/layouts/fullLayout/Header'
import Footer from '@gjworks/templates/layouts/fullLayout/Footer'
import SubNav from '@gjworks/templates/layouts/containerLayout/SubNav'
import Right from '@gjworks/components/panel/Right'

const ContainerLayout = ({children}) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showRight, setShowRight] = useState(false)
  const closeRight = close => {
    setShowRight(close)
  }

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
        <div
          onClick={() => {
            setShowRight(true)
          }}
          className="fixed -right-10 z-90 translate-y-1/2 bottom-1/2 cursor-pointer"
        >
          <motion.div className="rounded-b-2xl p-[0.5px] bg-gradient-to-tl from-gray-500/30 via-gray-700/40 to-gray-400/70 overflow-hidden shadow-lg shadow-gray-400/60 rotate-90">
            <div className="flex items-center justify-center rounded-b-2xl w-full h-full bg-gradient-to-b from-gray-800/90 via-gray-950/75 to-gray-950/90 shadow-inner shadow-gray-500/40">
              <div className="text-white text-sm py-3 px-5">My Menu</div>
            </div>
          </motion.div>
        </div>
        <main className="max-w-screen-xl mx-auto min-h-[calc(100vh-236px)] md:min-h-[calc(100vh-162px)]">
          <div className="flex flex-wrap gap-10">
            <div className="w-64">
              <SubNav />
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </main>
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
        <Right state={showRight} close={closeRight}>
          <div className="relative z-[999] max-w-screen-xl mx-auto px-3 bg-white"></div>
        </Right>
      </div>
    </div>
  )
}

export default ContainerLayout
