"use client";

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import RightPortal from "components/panel/RightPortal";

const Right = ({ state, close, children, title }) => {
  const [panelState, setPanelState] = useState(false);
  useEffect( ()=> {
    setPanelState(state)
  }, [state])
  useEffect(() => {
    if(panelState === true) {
      const $body = document.querySelector("body");
      const overflow = $body.style.overflow;
      $body.style.overflow = "hidden";
      return () => {
        $body.style.overflow = overflow
      };
    }
    
  }, [panelState]);

  const variants = {
    openPanel: { 
      marginLeft: "0vw",
      transition:{duration:0.3},
    },
    closePanel: { 
      marginLeft: "100vw",transition:{duration:0.5},
    }
  }
  const exit = {
    marginLeft: "100vw",transition:{duration:0.5},
  }
  const handleClosePanel = () =>{
    close(false)
  }
  return (
    <>
    <AnimatePresence>
    {state &&
      <RightPortal>
        <motion.div initial={{marginLeft: "100vw",}} animate={panelState===true ? "openPanel" : "closePanel"} variants={variants} exit={exit} className="fixed inset-0 transform overflow-auto bg-dark-900 z-90">
          <div className="flex gap-4 border-b border-dark-600 py-3">
            <button onClick={handleClosePanel} className="flex text-white px-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button onClick={handleClosePanel} className="text-dark-50">{title}</button>
          </div>
          <motion.div initial={{opacity:0, x:"-10%"}} animate={{opacity:1, x:"0%", transition:{duration:0.3}}} exit={{opacity:0, x:"-10%", transition:{duration:0.3}}} className="relative mt-20 mb-10 px-3 z-100 bg-dark-600 rounded-md max-w-screen-md shadow-md mx-auto overflow-hidden text-white backdrop-blur bg-opacity-90">
            {children}
          </motion.div>
        </motion.div>
      </RightPortal>
    }
    </AnimatePresence>
    
    </>
  )
}
export default Right;