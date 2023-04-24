'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SafariBrower from 'src/components/viewer/SafariBrower'
import { motion } from 'framer-motion'
import DefaultLayout from 'src/templates/layouts/default/Layout'

export default function Page() {
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
    <DefaultLayout>
      {/* <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: '3%' }}
        animate={{ opacity: 1, y: '0%', transition: { duration: 1 } }}
      >
      </motion.div>
      <div className="absolute inset-0 overflow-hidden bg-dark-900/90 backdrop-blur-2xl"></div> */}
      <div className="relative">
        <motion.div className="relative pt-20 xl:py-20 overflow-hidden">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            className="relative max-w-screen-xl mx-auto px-3 py-20"
          >
            <div>
              <motion.div
                variants={variants}
                className="text-sm lg:text-base font-bold text-black dark:text-white mb-2"
              >
                TEAM THAT MAKES THE SERVICE
              </motion.div>
              <motion.div
                variants={variants}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-10 text-gray-900 dark:text-white"
              >
                <span className="text-white bg-gray-900">Build</span> web and
                app <br></br>quickly and simply
              </motion.div>
              <motion.div
                variants={variants}
                className="text-dark-400 dark:text-dark-200 text-sm lg:text-lg"
              >
                서비스에 도움이 되는 제품을 만들어 드리겠습니다.
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <div className="py-20">
          <div className="relative max-w-screen-xl mx-auto px-3">
            <div className="absolute hidden items-center justify-center -top-28 right-3 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-indigo-700 to-indigo-800 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>

            <motion.div className="relative max-w-screen-lg mx-auto">
              <div className="relative">
                <SafariBrower />
              </div>
              <div className="absolute inset-0 overflow-hidden bg-gradient-to-b dark:from-dark-900/25 dark:via-dark-900/50 dark:to-dark-900"></div>
            </motion.div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={parentVariants}
            className="max-w-screen-md mx-auto text-center"
          >
            <motion.div
              variants={variants}
              className="text-3xl font-medium text-black dark:text-white mb-8"
            >
              심플하면서도 강력한 기능을 제공합니다.
            </motion.div>
            <motion.div
              variants={variants}
              className="text-base text-gray-500 dark:text-dark-300 text-center"
            >
              회원관리와 게시판관리 문의하기 그리고 채팅과 앱과의 연동등 다양한
              기능을 제공을 기본적으로 제공하고 있습니다. 최신 트렌드에 맞는
              관리자 디자인과 편리함을 한번에 느껴보시기 바랍니다.
            </motion.div>
          </motion.div>
        </div>
        <div className="py-20">
          <div className="max-w-screen-xl mx-auto px-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-8"
            >
              <motion.div
                variants={variants}
                className="bg-slate-100 dark:bg-dark-700 p-5 rounded-xl w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0 "
              >
                <div className="text-2xl font-bold text-black dark:text-white mb-5">
                  Web UI Components
                </div>
                <div className="text-sm text-dark-300 mb-10">
                  Next.js + Prisma + Tailwindcss + Framer Motion등을 활용하여
                  SSR 홈페이지를 구축 하기 쉽도록 제작하였습니다.
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className="bg-white border border-slate-200 dark:border-dark-700 dark:bg-dark-800 p-5 rounded-xl w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0 "
              >
                <div className="text-2xl font-bold text-black dark:text-white mb-5">
                  Metaverse Platform
                </div>
                <div className="text-sm text-dark-300 mb-10">
                  Playcanvas를 활용하여 가상의 공간에 나만의 캐릭터가 움직이며
                  온라인으로 다양한 사람들과 커뮤니케이션을 하며 상호작용을
                  통해서 데이터를 주고 받을 수 있습니다.
                </div>
                <div className="">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-xs text-black dark:text-white w-12">
                      DB
                    </div>
                    <div className="relative flex-1 bg-slate-200 dark:bg-dark-500 rounded-full h-[6px] overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-primary-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white"> 60%</div>
                  </div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-xs text-black dark:text-white w-12">
                      Front
                    </div>
                    <div className="relative flex-1 bg-slate-200 dark:bg-dark-500 rounded-full h-[6px] overflow-hidden">
                      <motion.div className="absolute left-0 top-0 bottom-0 w-[20%] bg-primary-500 rounded-full"></motion.div>
                    </div>
                    <div className="text-xs text-white"> 20%</div>
                  </div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-xs text-black dark:text-white w-12">
                      Server
                    </div>
                    <div className="relative flex-1 bg-slate-200 dark:bg-dark-500 rounded-full h-[6px] overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-primary-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white"> 30%</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className="flex flex-wrap items-center gap-8 bg-gradient-to-br from-indigo-500 to-sky-500 p-5 rounded-xl w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0 "
              >
                <div>
                  <div className="text-2xl font-bold text-white mb-5 text-center">
                    Next<br></br>Project??
                  </div>
                  <div className="w-full text-sm text-white mb-10 text-center">
                    저희는 현재 개발에서 멈추지 않고 미래를 위한 개발과 투자를
                    하고 있습니다. 다음 프로젝트에 대해 의견을 주시면
                    감사하겠습니다.
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="hidden py-20 w-full overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.1 }}
              variants={parentVariants}
              className="flex gap-8 w-full"
            >
              <motion.div
                variants={variants}
                className="relative w-[80%] flex-none aspect-[1216/640] rounded-xl cursor-pointer shadow-xl shadow-dark-900 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900/25 via-dark-900/50 to-dark-900/90 z-10"></div>
                <Image
                  src="/assets/images/playcanvas.png"
                  quality={100}
                  fill
                  alt=""
                ></Image>
              </motion.div>
              <motion.div
                variants={variants}
                className="relative w-[80%] flex-none aspect-[1216/640] rounded-xl cursor-pointer shadow-xl shadow-dark-900 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900/25 via-dark-900/50 to-dark-900/90 z-10"></div>
                <Image
                  src="/assets/images/photo.jpg"
                  quality={100}
                  fill
                  alt=""
                ></Image>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="py-20 hidden">
          <div className="max-w-screen-xl mx-auto px-3">
            <div className="grid grid-cols-5 gap-10 lg:gap-8 w-full">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.3 }}
                variants={parentVariants}
                className=" col-span-5 lg:col-span-3"
              >
                <motion.div className="text-dark-300 mb-5" variants={variants}>
                  Front End Platform
                </motion.div>
                <motion.div
                  variants={variants}
                  className="text-2xl font-bold text-black dark:text-white mb-7"
                >
                  Simple 하면서도 Creative한 생각
                </motion.div>
                <motion.div
                  variants={variants}
                  className="text-base text-dark-400 dark:text-dark-300 mb-6"
                >
                  지제이웍스는 2018 년 처음시작한 웹과 앱을 개발하기 위한 소규모
                  개발팀입니다. 우리는 혁신적이고 미래 지향적 인 기업, 신생 기업
                  및 비즈니스와 협력하여 매력적인 제품을 연구하고 개발합니다.
                  {/* Front-end 기술을 기반으로 서비스를 제작하고 배포 합니다. React
                  + Next.js를 기반으로 웹 개발을 진행하고 그 노하우를 활용하여
                  다양한 자원들과 Components등 더 나은 제품을 개발하고 있습니다. */}
                </motion.div>
                <motion.div
                  variants={variants}
                  className="inline rounded-full bg-slate-500 dark:bg-dark-600 py-2 px-5 text-sm text-slate-100 dark:white dark:hover:text-black hover:bg-primary-500 dark:hover:bg-white cursor-pointer"
                >
                  Read more
                </motion.div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.3 }}
                variants={parentVariants}
                className=" flex gap-10 justify-center items-center col-span-5 lg:col-span-2"
              >
                <div className="flex justify-center w-12 md:w-20 h-12 md:h-20 stroke-dark-500 fill-dark-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                  </svg>
                </div>
                <div className="flex justify-center w-12 md:w-20 h-12 md:h-20 stroke-dark-500 fill-dark-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                  </svg>
                </div>
                <div className="flex justify-center w-12 md:w-20 h-12 md:h-20 stroke-dark-500 fill-dark-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={parentVariants}
            className="max-w-screen-xl mx-auto  px-3 xl:px-8"
          >
            <div className="flex justify-center mb-6">
              <div>
                <motion.div
                  variants={variants}
                  className="block font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-sky-400 text-center pt-20 mb-3"
                >
                  WE ARE CRATEIVE
                </motion.div>
                <motion.div
                  variants={variants}
                  className="block font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-sky-400 text-center mb-10"
                >
                  Responsive everything.
                </motion.div>
              </div>
            </div>
            <motion.div
              variants={variants}
              className="flex justify-center mb-10"
            >
              <Link
                href="/contact"
                className="border border-gray-900 dark:border-white rounded-full py-1 px-10 text-black dark:text-white text-base hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Contact us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="py-20 hidden">
          <div className="max-w-screen-xl mx-auto  px-3 xl:px-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 xl:col-span-1">
                <div className="flex justify-center">
                  <div className="inline font-black text-7xl text-dark-500 text-center">
                    Full Stack
                  </div>
                </div>
                <div className="font-thin text-3xl text-dark-100 text-center -mt-6">
                  Responsive everything.
                </div>
              </div>
              <div className="col-span-2 xl:col-span-1">
                <div className="text-sm text-dark-300 mb-3">
                  Wrestling with a bunch of complex media queries in your CSS
                  sucks, so Tailwind lets you build responsive designs right in
                  your HTML instead.
                </div>
                <div className="text-sm text-dark-300">
                  Throw a screen size in front of literally any utility class
                  and watch it magically apply at a specific breakpoint.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden py-20 bg-dark-900">
          <div className="max-w-screen-xl mx-auto px-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              variants={parentVariants}
              className="grid grid-cols-2 gap-10 py-20"
            >
              <div className="col-span-2 xl:col-span-2 flex justify-center">
                <div className="w-2/3 mx-auto">
                  <motion.div
                    variants={variants}
                    className="text-3xl text-center font-thin mb-8 text-primary-400 "
                  >
                    웹서비스 개발
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="text-dark-300 text-center text-base mb-10"
                  >
                    회원가입부터 게시판과 관리자 페이지등 웹 서비스를 위한
                    기본적인 부분을 구현하였습니다. 그 이외에도 문자메세지나
                    카카오톡 메세지 상품 결제 시스템등 다양한 기능들이 준비되어
                    있습니다.
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              variants={parentVariants}
              className="grid grid-cols-2 gap-10 py-20"
            >
              <motion.div
                variants={variants}
                className="col-span-2 xl:col-span-1"
              >
                <SafariBrower />
              </motion.div>
              <div className="col-span-2 xl:col-span-1">
                <motion.div
                  variants={variants}
                  className="text-3xl font-semibold mb-8 text-white"
                >
                  UI Components Animation
                </motion.div>
                <motion.div
                  variants={variants}
                  className="text-dark-300 text-base mb-10"
                >
                  Framer를 활용하여 Components각각의 애니메이션을 감성까지
                  고려하여 개발하였습니다. 컴포넌트 별로 구현하여 UI를
                  변경하거나 import만 하면 쓸 수 있으므로 굉장히 편리합니다.
                  React 환경이면 됩니다. <br></br> Modal, Accodian, Dropdown등
                  기본적인 UI 뿐만아니라 Form과 Button등 기본적인 element 까지
                  고려하여 작업하였습니다.
                </motion.div>
                <motion.div
                  variants={variants}
                  className="inline-block px-5 text-sm py-2 rounded-sm border border-dark-300 text-dark-300 hover:bg-white hover:text-dark-900"
                >
                  Component 구매하기
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              variants={parentVariants}
              className="grid grid-cols-2 gap-10 py-20"
            >
              <div className="col-span-2 xl:col-span-1">
                <motion.div
                  variants={variants}
                  className="text-3xl font-semibold mb-8 text-white"
                >
                  Metaverse Platform
                </motion.div>
                <motion.div
                  variants={variants}
                  className="text-dark-300 text-base mb-10"
                >
                  Playcanvas를 활용하여 메타버스를 직접 구현하고 서비스와
                  연계하여 활용 할 수 있도록 개발 합니다.
                </motion.div>
                <motion.div
                  variants={variants}
                  className="flex justify-center w-20 h-20 stroke-dark-500 fill-dark-500"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>PlayCanvas</title>
                    <path d="M6.115 0l-.002 3.414 5.823 3.41-5.82 3.414-.003 3.412 11.774-6.826zm11.77 10.35L6.113 17.174 17.887 24l-.002-3.414-5.82-3.412 5.822-3.412z" />
                  </svg>
                </motion.div>
              </div>
              <motion.div
                variants={variants}
                className="col-span-2 xl:col-span-1"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-dark-800/50 hover:bg-dark-800/25 z-10 translate duration-300"></div>
                  <Image
                    src="/assets/images/playcanvas.png"
                    quality={100}
                    width={724}
                    height={342}
                    alt="Playcanvas Demo Image"
                    className="relative w-full h-auto rounded-lg shadow-dark-900 shadow-xl"
                  ></Image>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="py-20 hidden">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={parentVariants}
            className="max-w-screen-xl mx-auto px-3 xl:px-8 overflow-hidden pt-0 lg:py-20"
          >
            <div className="flex justify-center">
              <motion.div
                variants={variants}
                className="inline font-black text-5xl md:text-7xl text-slate-700 dark:text-dark-600/75 text-center"
              >
                WE ARE CRATEIVE
              </motion.div>
            </div>
            <motion.div
              variants={variants}
              className="font-thin text-xl xl:text-3xl text-slate-400 dark:text-dark-100 text-center -mt-6"
            >
              Responsive everything.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </DefaultLayout>
  )
}
