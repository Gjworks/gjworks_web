/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Header from 'src/templates/layouts/default/Header'
import Footer from 'src/templates/layouts/default/Footer'
import SubNav from 'src/templates/layouts/default/SubNav'

const Layout = ({ children }) => {
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
  return (
    <motion.div className="selection:text-white selection:bg-primary-600">
      {/* <div className="absolute block top-0 left-0 right-0 h-[399px] bg-gradient-to-br from-dark-600 via-dark-800 to-dark-800"></div> */}
      <div className="relative z-20">
        <Header />
        <SubNav />
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
        <footer>
          <Footer />
        </footer>
      </div>
    </motion.div>
  )
}

export default Layout
