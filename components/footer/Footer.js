/**
 * @file Footer.js
 * @author 지제이웍스 (gjworks@kakao.com)
 * @brief 레이아웃 Footer 파일
 **/

import React from "react";
import Link from 'next/link';

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <div className="pt-10 pb-20">
          <div className="max-w-screen-xl mx-auto px-3">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 lg:col-span-1 order-1 lg:order-0">
                <div className="text-xs text-dark-200 text-center lg:text-left">
                  ⓒ 지제이웍스 All rights reserved.
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 order-0 lg:order-1">
                <div className="flex justify-center lg:justify-end">
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
      </footer>
    )
  }
}

export default Footer;