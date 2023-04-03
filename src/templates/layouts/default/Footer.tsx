'use client'

/**
 * @file Footer.js
 * @author 지제이웍스 (gjworks@kakao.com)
 * @brief 레이아웃 Footer 파일
 **/

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import PageWrap from 'src/components/sections/PageWrap'

class Footer extends React.Component {
  render() {
    return (
      <PageWrap>
        <footer className="backdrop-blur-lg">
          <div className="max-w-screen-xl mx-auto pt-5 pb-10">
            <div className="px-3">
              <div className="grid grid-cols-3 gap-8">
                <motion.div
                  className="flex items-center justify-center lg:justify-start col-span-3 lg:col-span-1 order-2 lg:order-1"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    x: 0,
                    y: 25,
                    transition: { duration: 0.4 },
                  }}
                >
                  <div className="text-xs text-gray-400 dark:text-dark-200 text-center lg:text-left">
                    ⓒ 지제이웍스 All rights reserved.
                  </div>
                </motion.div>
                <motion.div
                  className="col-span-3 lg:col-span-1 flex justify-center order-1 lg:order-1"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.85, delay: 0.4 },
                  }}
                  exit={{
                    opacity: 0,
                    x: 0,
                    y: 25,
                    transition: { duration: 0.4 },
                  }}
                >
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/assets/images/brand/gjworks.svg"
                      alt="gjworks logo"
                      width="32"
                      height="32"
                      className="block w-8 h-8"
                    />
                  </Link>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center lg:justify-end col-span-3 lg:col-span-1 order-0 lg:order-2"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    x: 0,
                    y: 25,
                    transition: { duration: 0.4 },
                  }}
                >
                  <div className="flex">
                    <Link
                      href="/"
                      className="text-gray-400 dark:text-dark-400 hover:text-black dark:hover:text-white text-xs px-3"
                    >
                      Terms of service
                    </Link>
                    <Link
                      href="/"
                      className="text-gray-400 dark:text-dark-400 hover:text-black dark:hover:text-white text-xs px-3"
                    >
                      Privacy policy
                    </Link>
                    <Link
                      href="/"
                      className="text-gray-400 dark:text-dark-400 hover:text-black dark:hover:text-white text-xs px-3"
                    >
                      License
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </footer>
      </PageWrap>
    )
  }
}

export default Footer
