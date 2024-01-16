'use client'
import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import ModalPortal from 'src/components/modal/ModalPortal'

const Popup = ({state, close, children}) => {
  const [popupState, setPopupState] = useState(false)
  useEffect(() => {
    console.log(state)
    setPopupState(state)
  }, [state])

  const variants = {
    openPanel: {
      bottom: '0%',
      transition: {duration: 0.3},
    },
    closePanel: {
      bottom: '-100%',
      transition: {duration: 0.3},
    },
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
  const exit = {
    bottom: '-100%',
    transition: {duration: 0.5},
  }
  const exit2 = {
    opacity: 0,
    transition: {duration: 0.5},
  }

  const handleClosePanel = () => {
    // close(false)

    setTimeout(() => {
      setPopupState(false)
      close(false)
    }, 100)
  }

  return (
    <>
      <AnimatePresence>
        {popupState && (
          <ModalPortal>
            {/* <motion.div
              onClick={handleClosePanel}
              className="fixed w-screen h-screen transform overflow-auto z-100 flex justify-center items-end px-1"
            > */}
            <motion.div
              initial={{bottom: '-100%'}}
              animate={popupState === true ? 'openPanel' : 'closePanel'}
              variants={variants}
              exit={exit}
              className="fixed left-1/2 -translate-x-1/2 z-50 max-w-lg w-full px-3"
            >
              <div className="relative bg-white mb-4 lg:mb-8 dark:bg-dark-950 rounded-xl w-full shadow-2xl shadow-gray-300/75 mx-auto dark:border dark:border-dark-800/75 dark:border-t-dark-600/50 h-full backdrop-blur-lg overflow-x-hidden overflow-y-auto border border-gray-200">
                <button
                  onClick={handleClosePanel}
                  className="absolute right-3 top-3 rounded-full bg-gray-950 p-1 z-10"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-100 dark:text-white "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
                {children}
              </div>
            </motion.div>
            {/* </motion.div> */}
            {/* <motion.div
              initial={{opacity: 0}}
              animate={panelState === true ? 'openPanel' : 'closePanel'}
              variants={variants2}
              exit={exit2}
              onClick={handleClosePanel}
              className="fixed inset-0 z-90"
            ></motion.div> */}
          </ModalPortal>
        )}
      </AnimatePresence>
    </>
  )
}
export default Popup
