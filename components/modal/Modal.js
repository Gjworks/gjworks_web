import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";
import ModalPortal from "../modal/ModalPortal";

const Modal = ({ state, close, children }) => {
  const [modalState, setModalState] = useState(false);
  useEffect( ()=> {
    console.log(state)
    setModalState(state)
    
  }, [state])


  useEffect(() => {
    if(modalState === true) {
      const $body = document.querySelector("body");
      const overflow = $body.style.overflow;
      $body.style.overflow = "hidden";
      return () => {
        $body.style.overflow = overflow
      };
    }
    
  }, [modalState]);

  const variants = {
    openModal: { 
      display: "block",
      opacity:1, transition:{duration:0.7, delay:0.1},
    },
    closeModal: { 
      opacity:0,transition:{duration:0.3, delay:0.1},
      transitionEnd: {
        display: "none",
      },
    }
  }
  const APExit = {
    opacity:0,y:"-10%",transition:{duration:0.3, delay:0.1},
    transitionEnd: {
      display: "none",
    }, 
  }
  const handleCloseModal = () =>{
    console.log('action')
    // setModalState(false)
    close(false)
  }
  return (
    <>
    <AnimatePresence>
    {state &&
      <>
        <ModalPortal>
          <motion.div animate={modalState===true ? "openModal" : "closeModal"} variants={variants} exit={APExit} className="fixed inset-0 transform overflow-auto bg-dark-900 bg-opacity-25 z-90 backdrop-blur">
            <div className="absolute inset-0 z-99" onClick={handleCloseModal}></div>
            <motion.div initial={{opacity:0, y:"-10%"}} animate={{opacity:1, y:"0%", transition:{duration:0.5}}} className="relative top-20 bottom-10 px-3 z-100 bg-dark-700 rounded-md max-w-screen-md shadow-md mx-auto overflow-hidden text-white backdrop-blur bg-opacity-90">
              {children}
            </motion.div>
          </motion.div>
        </ModalPortal>
      </>
    }
    </AnimatePresence>
    </>
  )
}

export default Modal;
