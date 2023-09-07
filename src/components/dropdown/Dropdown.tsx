'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Dropdown = props => {
  const [dropdownState, setDropdownState] = useState(false)

  const handleClickOutside = () => {
    setDropdownState(false)
  }
  // const { mid } = router?.query;
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  useEffect(() => {
    setDropdownState(props.state)
  }, [props.state])
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
        className={
          'absolute top-8 right-0 mt-2 mr-2 rounded-md backdrop-blur-lg dark:backdrop-blur-lg shadow-lg bg-white/90 dark:bg-dark-950/60 dark:shadow-black/50 border border-gray-200 dark:border-dark-700 overflow-hidden shadow-xs shadow-slate-200/50 p-2 z-[101]'
        }
      >
        <div className="relative z-[100]">{props.children}</div>
      </motion.div>
    </>
  )
}

export default Dropdown
