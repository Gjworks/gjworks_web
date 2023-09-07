'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BottomPortal from 'src/components/panel/BottomPortal'

const Bottom = ({ state, close, children, title }) => {
  const [panelState, setPanelState] = useState(false)
  useEffect(() => {
    setPanelState(state)
  }, [state])
  // useEffect(() => {
  //   if (panelState === true) {
  //     const $body = document.querySelector('body')
  //     const overflow = $body.style.overflow
  //     $body.style.overflow = 'hidden'
  //     return () => {
  //       $body.style.overflow = overflow
  //     }
  //   }
  // }, [panelState])
  // useEffect(() => {
  //   if (panelState === true) {
  //     document.body.style.overflow = 'hidden'
  //     return () => {
  //       document.body.style.overflow = 'unset'
  //     }
  //   }
  // }, [panelState])

  const variants = {
    openPanel: {
      bottom: '0%',
      transition: { duration: 0.3 },
    },
    closePanel: {
      bottom: '-100%',
      transition: { duration: 0.3 },
    },
  }
  const variants2 = {
    openPanel: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closePanel: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  }
  const exit = {
    bottom: '-100%',
    transition: { duration: 0.5 },
  }
  const exit2 = {
    opacity: 0,
    transition: { duration: 0.5 },
  }
  const handleClosePanel = () => {
    close(false)
  }

  return (
    <>
      <AnimatePresence>
        {state && (
          <BottomPortal>
            {/* <motion.div
              onClick={handleClosePanel}
              className="fixed w-screen h-screen transform overflow-auto z-100 flex justify-center items-end px-1"
            > */}
            <motion.div
              initial={{ bottom: '-100%' }}
              animate={panelState === true ? 'openPanel' : 'closePanel'}
              variants={variants}
              exit={exit}
              className="fixed bootom-1 mb-2 left-1/2 -translate-x-1/2 lg:mb-10 p-8 lg:p-10 z-101 bg-white/90 dark:bg-dark-900/90 rounded-xl max-w-[560px] w-full shadow-md mx-auto overflow-hidden text-white backdrop-blur-lg"
            >
              <div className=" w-full flex">
                <div className="text-black dark:text-white text-xl lg:text-3xl font-semibold">
                  {title}
                </div>
                <button
                  onClick={handleClosePanel}
                  className="absolute right-3 top-3 rounded-full bg-dark-950 hover:bg-dark-700 p-2"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="flex justify-center items-center pt-8 min-h-[200px]">
                {children}
              </div>
            </motion.div>
            {/* </motion.div> */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={panelState === true ? 'openPanel' : 'closePanel'}
              variants={variants2}
              exit={exit2}
              onClick={handleClosePanel}
              className="fixed inset-0 bg-slate-950/50 dark:bg-dark-950/50 z-90"
            ></motion.div>
          </BottomPortal>
        )}
      </AnimatePresence>
    </>
  )
}
export default Bottom
