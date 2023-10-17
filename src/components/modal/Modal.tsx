'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModalPortal from 'src/components/modal/ModalPortal'

const Modal = ({ state, close, children }) => {
  const [modalState, setModalState] = useState(false)
  useEffect(() => {
    setModalState(state)
  }, [state])

  // useEffect(() => {
  //   if (modalState === true) {
  //     let $body = document.querySelector('body')
  //     const overflow = $body?.style.overflow
  //     if ($body instanceof Element) $body?.style.overflow = 'hidden'
  //     return () => {
  //       $body.style.overflow = overflow
  //     }
  //   }
  // }, [modalState])
  useEffect(() => {
    if (modalState === true) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
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
      transition: { duration: 0.3 },
    },
  }
  const exit = {
    opacity: 0,
    transition: { duration: 0.3 },
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
                className="fixed bootom-1 mb-2 top-20 left-1/2 -translate-x-1/2 lg:mb-10 z-101 bg-white/90 dark:bg-dark-800/90 rounded-xl max-w-screen-md w-full mx-auto overflow-hidden text-white backdrop-blur-lg dark:border dark:border-dark-900/75 dark:border-t-dark-800"
              >
                <div className="" onClick={handleCloseModal}></div>
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
                  className="z-101"
                >
                  {children}
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={modalState === true ? 'openModal' : 'closeModal'}
                variants={variants}
                exit={exit}
                onClick={handleCloseModal}
                className="fixed inset-0 bg-slate-950/50 dark:bg-dark-950/50 z-90 backdrop-blur-sm"
              ></motion.div>
            </ModalPortal>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal
