/**
 * @file Footer.js
 * @author 지제이웍스 (gjworks@kakao.com)
 * @brief 레이아웃 Footer 파일
 **/

import React from "react";
import Link from 'next/link';
import Image from "next/image";

class Footer extends React.Component {
  render() {
    return(
      <div className="max-w-screen-2xl mx-auto pt-10 pb-20">
        <div className="px-3">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex items-center justify-center lg:justify-start col-span-3 lg:col-span-1 order-2 lg:order-1">
              <div className="text-xs text-dark-200 text-center lg:text-left">
                ⓒ 지제이웍스 All rights reserved.
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 flex justify-center order-1 lg:order-1">
              <Link href="/">
                <a className="flex items-center">
                  <Image src="/assets/images/brand/gjworks_white.svg" alt="gjworks logo" width="32" height="32" className="block w-8 h-8" />
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-center lg:justify-end col-span-3 lg:col-span-1 order-0 lg:order-2">
              <div className="flex">
                <Link href="/">
                  <a className="text-dark-200 hover:text-white text-xs px-3">Terms of service</a>
                </Link>
                <Link href="/">
                  <a className="text-dark-200 hover:text-white text-xs px-3">Privacy policy</a>
                </Link>
                  <Link href="/">
                <a className="text-dark-200 hover:text-white text-xs px-3">License</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;