/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/

import React from "react";
import { motion } from "framer-motion";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) =>{
  const variants = {
    hidden: { opacity: 0, x: 0, y: 25},
    enter: { 
      opacity: 1, x: 0, y: 0,
      transition : {
        duration: 0.4,
      }
    },
    exit: { opacity: 0, x: 0, y: 25,
      transition : {
        duration: 0.4,
    }},
}
  return(
    <>
      <motion.div className="selection:text-white selection:bg-primary-500">
        <div className="relative z-20">
          <Header />
          <motion.main variants={variants} initial="hidden" animate="enter" exit="exit">{children}</motion.main>
          <motion.footer initial={{opacity:0, y: 25}} animate={{opacity:1, y:0, transition: {duration:0.7, delay:0.3}}} exit={{ opacity: 0, x: 0, y: 25,
      transition : {
        duration: 0.4
    }}}>
            <Footer />
          </motion.footer>
          
        </div>
      </motion.div>
    </>
  )
}
  



export default Layout;