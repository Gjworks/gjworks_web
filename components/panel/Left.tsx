"use client";

import React , { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";
import LeftPortal from "components/panel/LeftPortal";

const Left = ({ state, close, children, width }) => {
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
      marginRight: 0,
      transition:{duration:0.3},
    },
    closePanel: { 
      marginRight: "100%",transition:{duration:0.3},
    }
  }
  const exit = {
    marginRight: "100%",transition:{duration:0.3},
  }
  const handleClosePanel = () =>{
    close(false)
  }
  return (
    <>
    <AnimatePresence>
    {state &&
      <LeftPortal>
        <motion.div initial={{marginRight: "100%"}} animate={panelState===true ? "openPanel" : "closePanel"} variants={variants} exit={exit} className="fixed inset-0 transform overflow-auto bg-transition z-90">
          <div className="absolute inset-0 z-99" onClick={handleClosePanel}></div>
          <motion.div initial={{width:"320px",marginLeft:"-320px"}} animate={{width:"320px", marginLeft:0, transition:{duration:0.3}}} exit={{width:"320px",marginLeft:"-320px", transition:{duration:0.3}}} className="fixed h-screen z-100 bg-gray-50 dark:bg-dark-600/25 shadow-md overflow-hidden overflow-y-auto text-gray-900 dark:text-white backdrop-blur dark:backdrop-blur">
            {children}
          </motion.div>
        </motion.div>
      </LeftPortal>  
    }
    </AnimatePresence>
    </>
  )
}
export default Left;