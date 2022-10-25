/**
 * @file Layout.js
 * @author 지제이웍스 (gjworks2@gmail.com)
 * @brief 레이아웃 최상위 파일
 **/

import React from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) =>{
  return(
    <>
    <div className=" selection:text-black selection:bg-lime-400 pt-0 lg:pt-4">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
    </>
  )
}
  



export default Layout;