import React from "react"
import { createPortal } from "react-dom";

const ModalPortal = ({ children }) => {
  if (typeof window === 'undefined') return <></>;
  const el = document.getElementById("modal")
  return createPortal(children, el)
}

export default ModalPortal