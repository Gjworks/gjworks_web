'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Page = props => {
  const parentVariants = {
    onscreen: {
      transition: { staggerChildren: 0.3 },
    },
    offscreen: {
      transition: { staggerChildren: 0.3, staggerDirection: -1 },
    },
  }
  const variants = {
    onscreen: {
      opacity: [0, 1],
      transition: {
        duration: 0.6,
      },
    },
    offscreen: {
      opacity: 0,
    },
  }
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-8 xl:pt-20 px-3">
        <div>
          <motion.div className="bg-gradient-to-r from-primary-400 via-primary-600 to-black inline-block text-transparent bg-clip-text text-5xl font-semibold mb-4">
            Maintenance
          </motion.div>
        </div>
        <div>
          <motion.div className="bg-gradient-to-r from-primary-400 via-primary-600 to-black inline-block text-transparent bg-clip-text text-3xl font-semibold">
            새로운 세대의 애플리케이션을 위한 플랫폼
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
        variants={parentVariants}
        className="flex bg-gray-100 overflow-hidden py-16 lg:py-20"
      >
        <div className="relative mx-auto flex max-w-screen-xl gap-4 px-3 lg:gap-8">
          <motion.div className="dark:bg-dark-950/75 dark:shadow-dark-950 dark:border-dark-950 relative aspect-[960/520] min-h-[434px] w-[85%] flex-none cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg shadow-gray-200 lg:w-[65%]">
            <div className="flex h-full flex-wrap justify-between gap-4">
              <div className="w-full">
                <motion.div
                  variants={variants}
                  className="mb-2 text-3xl font-semibold text-black lg:text-4xl dark:text-white"
                >
                  Plextype
                </motion.div>
                <motion.div
                  variants={variants}
                  className="text-2xl font-semibold text-black lg:text-2xl dark:text-white"
                >
                  나만의 작은 서비스를 구성해보세요.
                </motion.div>
              </div>
              <div className="flex w-full items-end">
                <div className="flex w-full justify-end">
                  <div className="flex gap-4">
                    <motion.div
                      variants={variants}
                      className="flex h-full flex-1 items-center text-right text-base font-normal sm:text-lg"
                    >
                      Demo 확인하기
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-10 w-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={variants}
            className="dark:bg-dark-950/75 dark:shadow-dark-950 dark:border-dark-950 relative aspect-[960/520] min-h-[434px] w-[65%] flex-none cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white/50 p-8 shadow-lg shadow-gray-200"
          >
            <motion.div
              variants={variants}
              className="mb-2 text-3xl font-semibold text-black lg:text-4xl dark:text-white"
            >
              Next Product?
            </motion.div>
            <motion.div
              variants={variants}
              className="text-2xl font-semibold text-black lg:text-2xl dark:text-white"
            >
              Coming...
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Page
