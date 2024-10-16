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
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
        variants={parentVariants}
        className="relative max-w-screen-3xl mx-auto rounded-b-3xl py-20 bg-[url('/assets/images/bg41.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden bg-[url('/assets/images/scene_bg_dot.png')]"></div>
        <div className="relative mx-auto max-w-screen-xl px-3">
          <div className="grid grid-cols-12 gap-0 lg:gap-8 py-10">
            <div className="col-span-12">
              <div className="flex justify-center">
                <div className="w-full lg:w-3/5">
                  <motion.div
                    variants={variants}
                    className="flex justify-center mb-6"
                  >
                    <span className="border border-gray-200 py-0.5 px-4 rounded-full text-sm text-gray-50">
                      Premium Quality
                    </span>
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="mb-4 text-xl font-semibold text-white lg:text-4xl dark:text-white text-center !leading-tight tracking-tight"
                  >
                    BEST UI COMPONENTS
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="dark:text-dark-500 text-sm lg:text-base text-gray-300 text-center"
                  >
                    컴포넌트는 React와 Next.js에서 사용할 수 있습니다. 모든
                    Component는 tailwindcss와 Framer motion을 활용하여
                    애니메이션과 스타일을 정의했습니다.
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
        variants={parentVariants}
        className="flex  dark:bg-dark-800 overflow-hidden py-16 lg:py-20"
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
                  나만의 서비스를 구성해보세요.
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
