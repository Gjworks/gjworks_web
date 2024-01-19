'use client'

import React, {useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import RightPortal from 'src/components/panel/RightPortal'

const Right = ({state, close, children}) => {
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

  useEffect(() => {
    if (panelState === true) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [panelState])

  const variants = {
    openPanel: {
      right: '0px',
      transition: {duration: 0.3},
    },
    closePanel: {
      right: '-480px',
      transition: {duration: 0.5},
    },
  }
  const exit = {
    right: '-480px',
    transition: {duration: 0.5},
  }
  const variants2 = {
    openPanel: {
      opacity: 1,
      transition: {duration: 0.5},
    },
    closePanel: {
      opacity: 0,
      transition: {duration: 0.5},
    },
  }
  const exit2 = {
    opacity: 0,
    transition: {duration: 0.5},
  }
  const handleClosePanel = () => {
    close(false)
  }
  return (
    <>
      <AnimatePresence>
        {state && (
          <RightPortal>
            <motion.div
              initial={{right: '-480px'}}
              animate={panelState === true ? 'openPanel' : 'closePanel'}
              variants={variants}
              exit={exit}
              className="fixed w-[480px] bottom-0 top-0 transform z-101"
            >
              <button
                onClick={handleClosePanel}
                className="absolute right-2 top-2 rounded-full p-2 z-101"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-black dark:text-white "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative z-100 overflow-hidden">{children}</div>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              animate={panelState === true ? 'openPanel' : 'closePanel'}
              variants={variants2}
              exit={exit2}
              onClick={handleClosePanel}
              className="fixed inset-0 bg-gray-950/70 dark:bg-dark-800/70 z-90 backdrop-blur-sm"
            ></motion.div>
          </RightPortal>
        )}
      </AnimatePresence>
    </>
  )
}
export default Right
