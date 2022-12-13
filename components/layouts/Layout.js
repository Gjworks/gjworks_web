/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/

import React, { useState } from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) =>{
  return(
    <>
    <div className="selection:text-black selection:bg-primary-400">
      <div className="relative z-20">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <div className="fixed inset-0 hidden justify-between px-3">
        <div className="border-r border-gray-800 opacity-50 h-full"></div>
        <div className="border-r border-gray-800 opacity-50 h-full"></div>
        <div className="border-r border-gray-800 opacity-50 h-full"></div>
        <div className="border-r border-gray-800 opacity-50 h-full"></div>
        <div className="border-r border-gray-800 opacity-50 h-full"></div>
        <div className="border-r border-gray-800 opacity-50 h-full"></div>
        <div className="border-r border-gray-800 opacity-50 h-full"></div>
      </div>
    </div>
    </>
  )
}
  



export default Layout;