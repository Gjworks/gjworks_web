'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Dropdown = ({ state, close, children }) => {
  const [dropdownState, setDropdownState] = useState(false)
  useEffect(() => {
    setDropdownState(state)
  }, [state])
  const initial = {
    opacity: 0,
  }

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      display: 'block',
      transition: {
        duration: 0.3,
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
    close: {
      opacity: 0,
      y: '15%',
      transitionEnd: {
        display: 'none',
      },
    },
  }

  return (
    <>
      <motion.div
        initial={initial}
        animate={dropdownState === true ? 'open' : 'close'}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="absolute top-8 right-0 mt-2 mr-2 w-56 rounded-md backdrop-blur-lg shadow-lg bg-white/90 dark:bg-dark-800/50 dark:shadow-black/50 border border-gray-200 dark:border-dark-700 overflow-hidden shadow-xs p-2 z-[101]"
      >
        <div className="relative z-[100]">{children}</div>
      </motion.div>
    </>
  )
}

export default Dropdown
