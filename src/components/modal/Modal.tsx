'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModalPortal from 'src/components/modal/ModalPortal'

const Modal = ({ state, close, children }) => {
  const [modalState, setModalState] = useState(false)
  useEffect(() => {
    setModalState(state)
  }, [state])

  useEffect(() => {
    if (modalState === true) {
      const $body = document.querySelector('body')
      const overflow = $body.style.overflow
      $body.style.overflow = 'hidden'
      return () => {
        $body.style.overflow = overflow
      }
    }
  }, [modalState])

  const variants = {
    openModal: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closeModal: {
      opacity: 0,
      transition: { duration: 0.3, delay: 0.1 },
    },
  }
  const exit = {
    opacity: 0,
    transition: { duration: 0.3, delay: 0.1 },
  }
  const handleCloseModal = () => {
    close(false)
  }
  return (
    <>
      <AnimatePresence>
        {state && (
          <>
            <ModalPortal>
              <motion.div
                initial={{ opacity: 0 }}
                animate={modalState === true ? 'openModal' : 'closeModal'}
                variants={variants}
                exit={exit}
                className="fixed inset-0 transform overflow-auto bg-slate-600/25 dark:bg-dark-700/30 z-90 backdrop-blur-sm px-3"
              >
                <div
                  className="absolute inset-0 z-99"
                  onClick={handleCloseModal}
                ></div>
                <motion.div
                  initial={{ opacity: 0, y: '-10%' }}
                  animate={{
                    opacity: 1,
                    y: '0%',
                    transition: { duration: 0.5 },
                  }}
                  exit={{
                    opacity: 1,
                    y: '-10%',
                    transition: { duration: 0.5 },
                  }}
                  className="relative mt-20 mb-10 z-100 bg-white/90 dark:bg-dark-900/75 rounded-md max-w-screen-md shadow-md mx-auto overflow-hidden text-black dark:text-white dark:backdrop-blur-md"
                >
                  {children}
                </motion.div>
              </motion.div>
            </ModalPortal>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal
