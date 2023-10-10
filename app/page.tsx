'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SafariBrower from 'src/components/viewer/SafariBrower'
import { motion } from 'framer-motion'
import DefaultLayout from 'src/templates/layouts/default/Layout'
import Bottom from 'src/components/panel/Bottom'
import Codehighlighte from 'src/components/codehighlight/Codehighlighter'

export default function Page() {
  const [showBottom, setShowBottom] = useState(false)

  const closeBottom = close => {
    setShowBottom(close)
  }
  const parentVariants = {
    onscreen: {
      transition: { staggerChildren: 0.2 },
    },
    offscreen: {
      transition: { staggerChildren: 0.2, staggerDirection: -1 },
    },
  }
  const variants = {
    onscreen: {
      y: 0,
      opacity: [0, 1],
      transition: {
        duration: 0.4,
      },
    },
    offscreen: {
      y: 25,
      opacity: 0,
    },
  }
  const codeString = `import Dropdown from 'src/components/dropdown/Dropdown'

<button onClick={() => setShowDropdown(!showDropdown)}>
  Dropdown
</button>
<Dropdown state={showDropdown}>
  <AccountDropwdown />
</Dropdown>`

  return (
    <DefaultLayout>
      {/* <div className="-mt-[111px] h-[111px] bg-black/80 w-full"></div> */}
      <div className="relative">
        {/* <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: '3%' }}
        animate={{ opacity: 1, y: '0%', transition: { duration: 1 } }}
      >
      </motion.div>
      <div className="absolute inset-0 overflow-hidden bg-dark-900/90 backdrop-blur-2xl"></div> */}

        <motion.div className="relative w-full">
          <div className="max-w-[2560px] mx-auto relative pt-20 pb-20  overflow-hidden z-10">
            {/* bg-[url('/assets/images/bg21_1.jpg')] bg-cover lg:bg-contain bg-center bg-repeat-x  */}
            {/* <div className="absolute inset-0 bg-dark-950/75"></div> */}
            {/* <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden bg-dark-950/40 dark:bg-gradient-to-b  dark:from-dark-950/0 dark:via-dark-950/0 dark:to-dark-950/0"></div> */}
            <div className="relative grid grid-cols-2 gap-8 max-w-screen-xl mx-auto px-3">
              <div className="relative col-span-2 lg:col-span-2 flex justify-center items-center">
                <motion.div
                  variants={parentVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-full"
                >
                  <motion.div
                    variants={variants}
                    className="hidden text-4xl sm:text-4xl md:text-6xl mb-10 text-black dark:text-white text-center font-semibold tracking-tighter"
                  >
                    <div>Build web and app</div>
                    <div>
                      <span className="text-gray-400 dark:text-dark-300">
                        Quickly and simply
                      </span>
                    </div>
                  </motion.div>
                  <div className="max-w-lg mx-auto pt-10 lg:pt-20">
                    <div className="flex justify-center md:justify-between flex-wrap">
                      <motion.div
                        variants={variants}
                        className="w-full md:w-auto text-5xl md:text-6xl text-black dark:text-dark-200 font-semibold tracking-tighter order-1 md:order-0 text-center md:text-left"
                      >
                        Full Stack
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="w-full md:w-auto relative text-sm md:text-base font-light text-black dark:text-white mb-3 pt-0 md:pt-3 text-center order-0 md:order-1 "
                      >
                        Creative Platform Service
                      </motion.div>
                    </div>

                    <motion.div
                      variants={variants}
                      className="text-5xl md:text-6xl mb-10 text-black dark:text-white font-semibold tracking-tighter pl-0 md:pl-20 text-center md:text-left"
                    >
                      Developer
                    </motion.div>
                  </div>

                  <motion.div
                    variants={variants}
                    className="relative text-gray-800 dark:text-dark-400 text-sm lg:text-base mb-6 text-center"
                  >
                    서비스에 도움이 되는 제품을 만들어 드리겠습니다.
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="relative py-3 mb-20 max-w-lg mx-auto"
                  >
                    <div className="flex gap-8 p-2 lg:p-3 bg-gray-200/50 dark:bg-dark-900/80 border border-gray-200/25 dark:border-dark-900/90 dark:border-t-dark-800 backdrop-blur-lg rounded-full">
                      <div className="flex-1 flex items-center px-3">
                        <div className="text-sm text-gray-700 dark:text-dark-400 line-clamp-1">
                          Launch Your Service.
                        </div>
                      </div>
                      <button
                        onClick={() => setShowBottom(!showBottom)}
                        className="flex gap-2 bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500 text-white dark:text-white dark:hover:text-white text-sm py-2 px-3 lg:py-3 lg:px-5 rounded-full hover:bg-primary-600 hover:text-white"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                            />
                          </svg>
                        </span>
                        <span className="hidden lg:flex">Get Started</span>
                      </button>
                    </div>
                  </motion.div>
                  <div className="hidden dark:block relative h-[250px] pt-20">
                    <div className="absolute left-0 right-0 h-[450px]">
                      <motion.div
                        variants={parentVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.3 }}
                        className="relative overflow-hidden w-full"
                      >
                        <motion.div
                          variants={variants}
                          className="max-w-screen-lg mx-auto relative h-[330px]"
                        >
                          <div className="relative">
                            <SafariBrower image="/assets/images/main.png" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="hidden dark:block absolute left-0 bottom-0 right-0 overflow-hidden dark:bg-gradient-to-b from-white/0 h-[400px] via-white/50 to-white dark:from-transparent dark:via-dark-950/40 dark:to-dark-950"></div>
          </div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            variants={parentVariants}
            className=" pt-10"
          >
            <div className="relative max-w-screen-xl mx-auto px-3 pt-20">
              <div className="grid grid-cols-12 gap-0 lg:gap-8">
                <div className="col-span-12">
                  <div className="flex">
                    <div className="w-full lg:w-3/5">
                      <motion.div
                        variants={variants}
                        className="text-black dark:text-white text-2xl lg:text-3xl font-bold mb-4"
                      >
                        제품을 구매 하면 컴포넌트와 템플릿을 사용할 수 있습니다.
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="text-gray-400 dark:text-dark-500 text-base"
                      >
                        컴포넌트는 React와 Next.js에서 사용할 수 있습니다. 모든
                        Component는 tailwindcss와 Framer motion을 활용하여
                        애니메이션과 스타일을 정의했습니다.
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-20 mb-20">
                <div className="relative max-w-screen-xl mx-auto px-3">
                  <motion.div className="grid grid-cols-12 gap-y-8 lg:gap-8">
                    <div className="col-span-12 lg:col-span-5">
                      <motion.div
                        variants={variants}
                        className="relative overflow-hidden bg-gray-50 dark:bg-dark-900/75 backdrop-blur-xl shadow-lg shadow-gray-100/75 dark:shadow-dark-950 p-5 lg:p-10 rounded-xl w-full border border-gray-100 dark:border-dark-700/90 dark:border-t-dark-600/60"
                      >
                        <motion.div
                          variants={parentVariants}
                          initial="offscreen"
                          whileInView="onscreen"
                        >
                          <motion.div
                            variants={variants}
                            className="relative px-3 lg:px-8 mb-10"
                          >
                            <div className="bg-[url('/assets/images/Iphone14.png')] bg-no-repeat bg-top bg-cover h-[350px]"></div>
                          </motion.div>

                          <motion.div
                            variants={variants}
                            className="text-lg lg:text-xl text-black dark:text-white mb-3"
                          >
                            Coming soon mobile
                          </motion.div>
                          <motion.div
                            variants={variants}
                            className="text-sm text-gray-600 dark:text-dark-500 mb-10"
                          >
                            Desktop의 경험과 Mobile에섣의 경험을 어느것 하나도
                            불편함이 없게 UI/UX를 설계 합니다.
                          </motion.div>
                          <button className="relative group bg-gray-800 hover:bg-gray-950 dark:hover:bg-dark-950 dark:bg-dark-950 px-8 py-2 backdrop-blur-lg rounded-md hover:after:w-24 hover:after:backdrop-blur-lg hover:after:h-24 overflow-hidden hover:after:absolute hover:after:-bottom-16 hover:after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hover:after:from-secondary-500 hover:after:via-dark-900/25 hover:after:to-dark-900 hover:after:z-[-1] hover:after:rounded-full hover:after:left-1/2 hover:after:transform hover:after:-trangray-x-1/2 hover:before:absolute hover:before:inset-0 hover:before:backdrop-blur-md ">
                            <div className="relative group-hover:text-white text-sm text-dark-300">
                              Link more
                            </div>
                          </button>
                        </motion.div>
                      </motion.div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex flex-wrap gap-8">
                      <motion.div
                        variants={variants}
                        className="relative overflow-hidden bg-gray-50 dark:bg-dark-900/75 backdrop-blur-xl shadow-md shadow-gray-100/75 dark:shadow-dark-950/75 p-5 lg:p-10 rounded-xl w-full hover:shadow-xs border border-gray-100 dark:border-dark-700/90 dark:border-t-dark-600/60"
                      >
                        <div className="relative items-center overflow-hidden h-full">
                          <div className="absolute inset-0"></div>
                          <div className="mx-auto w-36 h-36">
                            <div className="mx-auto rounded-full bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-800"></div>
                          </div>
                        </div>
                        {/* <div className="text-lg lg:text-xl text-black dark:text-white mb-5">
                      Web UI Components
                    </div>
                    <div className="text-base text-gray-400 dark:text-dark-500 mb-10">
                      Next.js + Prisma + Tailwindcss + Framer Motion등을 활용하여
                      프론트엔드에서 뛰어난 퍼포먼스와 일관성 있는 UI/UX를
                      제작합니다.
                    </div> */}
                        {/* <div className="flex flex-wrap gap-8 justify-between"></div> */}
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="relative overflow-hidden bg-gray-50 dark:bg-dark-900/75 backdrop-blur-xl shadow-md shadow-gray-100/75 dark:shadow-dark-950/75 p-5 lg:p-10 rounded-xl w-full hover:shadow-xs border border-gray-100 dark:border-dark-700/90 dark:border-t-dark-600/60"
                      >
                        <motion.div
                          variants={parentVariants}
                          initial="offscreen"
                          whileInView="onscreen"
                        >
                          <motion.div variants={variants} className="mb-6">
                            <div className="flex justify-center items-center bg-primary-600 text-white w-10 h-10 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                />
                              </svg>
                            </div>
                          </motion.div>
                          <motion.div
                            variants={variants}
                            className="text-lg lg:text-xl text-black dark:text-white mb-5"
                          >
                            Rhymix 제작 및 유지보수를 해드립니다.
                          </motion.div>
                          <motion.div
                            variants={variants}
                            className="text-sm text-gray-600 dark:text-dark-500 mb-10"
                          >
                            라이믹스 모듈제작과 데이터 이전 그리고 유지보수까지
                            모든 부분의 제작을 의뢰를 통해 하고 있습니다. 결제
                            모듈과 카카오톡 메세지 전송까지 다양한 서드파티
                            모듈을 가지고 있으며 라이믹스의 모든 부분에 해당
                            기능을 추가하여 코어 수정 없이 지원합니다.
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={parentVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            className=" py-20"
          >
            <div className=" max-w-screen-xl mx-auto py-5 lg:py-10">
              <div className="px-3">
                <div className="grid grid-cols-12 gap-0 lg:gap-20">
                  <div className="col-span-12 lg:col-span-7">
                    <motion.div variants={variants} className="">
                      <Codehighlighte
                        title="Component Example"
                        value={codeString}
                        lang="jsx"
                      />
                    </motion.div>
                  </div>
                  <div className="col-span-12 lg:col-span-5">
                    <motion.div
                      variants={variants}
                      className="text-xl lg:text-2xl font-semibold text-black dark:text-white mb-4"
                    >
                      UI/UX를 쉽게 처리할 수 있도록 Component를 제공해 드립니다.
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="text-sm text-gray-500"
                    >
                      완벽한 애니메이션 동작과 심플한 코드로 바로 적용할 수
                      있습니다.
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="text-sm text-gray-500 mb-5"
                    >
                      (React와 Next.js 에서만 지원됩니다.)
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="text-sm text-white"
                    >
                      <button className="relative group bg-gray-800 hover:bg-gray-950 dark:hover:bg-dark-950 dark:bg-dark-900 px-8 py-2 backdrop-blur-lg rounded-md hover:after:w-24 hover:after:backdrop-blur-lg hover:after:h-24 overflow-hidden hover:after:absolute hover:after:-bottom-16 hover:after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hover:after:from-secondary-500 hover:after:via-dark-900/25 hover:after:to-dark-900 hover:after:z-[-1] hover:after:rounded-full hover:after:left-1/2 hover:after:transform hover:after:-trangray-x-1/2 hover:before:absolute hover:before:inset-0 hover:before:backdrop-blur-md ">
                        <div className="relative group-hover:text-white text-sm text-dark-300">
                          Link more
                        </div>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="overflow-hidden mb-10">
            <div className="max-w-screen-xl mx-auto px-3 pt-20">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.1 }}
                variants={parentVariants}
                className="grid grid-cols-12 gap-4"
              >
                <div className="col-span-12 lg:col-span-6">
                  <motion.div
                    variants={variants}
                    className="text-black dark:text-white text-4xl lg:text-5xl font-bold"
                  >
                    Flexible
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="text-black dark:text-white text-4xl lg:text-5xl font-bold"
                  >
                    Creative and better
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="text-black dark:text-white text-4xl lg:text-5xl font-bold"
                  >
                    Platform.
                  </motion.div>
                </div>
                <div className="col-span-12 lg:col-span-6 flex items-center">
                  <div className=" pt-5 lg:pt-0">
                    <motion.div
                      variants={variants}
                      className="text-base text-black dark:text-white mb-2 font-semibold"
                    >
                      WE WORK IT
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="text-sm font-light text-gray-500"
                    >
                      지제이웍스만의 방법으로 디지털 플랫폼을 구축하고 최상의
                      디지털 경험을 느낄 수 있도록 최선을 다 하고 있습니다.
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="overflow-x-scroll overflow-y-hidden overflow-scroll-hide pb-20">
            <div className="max-w-screen-xl mx-auto px-3">
              <div className="">
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={parentVariants}
                  className="grid grid-cols-12 gap-4"
                >
                  <div className="col-span-12 lg:col-span-3"></div>
                  <div className="col-span-12 lg:col-span-9">
                    <motion.div className="flex gap-4 lg:gap-8 w-full pb-10">
                      <motion.div
                        variants={variants}
                        className="relative w-[304px] flex-none rounded-md cursor-pointer hover:shadow-xs overflow-hidden hover:scale-105 bg-[url('/assets/images/Iphone14.png')] bg-no-repeat bg-top bg-cover h-[610px]"
                      >
                        {/* <Image
                              src="/assets/images/bg_phone.jpg"
                              alt="screenshot_1"
                              width={500}
                              style={{ width: '100%', height: 'auto' }}
                              height={280}
                            ></Image> */}
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="relative w-[304px] flex-none rounded-md cursor-pointer hover:shadow-xs overflow-hidden hover:scale-105 bg-[url('/assets/images/Iphone14.png')] bg-no-repeat bg-top bg-cover h-[610px]"
                      ></motion.div>
                      <motion.div
                        variants={variants}
                        className="relative w-[304px] flex-none rounded-md cursor-pointer hover:shadow-xs overflow-hidden hover:scale-105 bg-[url('/assets/images/Iphone14.png')] bg-no-repeat bg-top bg-cover h-[610px]"
                      ></motion.div>
                      <motion.div
                        variants={variants}
                        className="relative w-[304px] flex-none rounded-md cursor-pointer hover:shadow-xs overflow-hidden hover:scale-105 bg-[url('/assets/images/Iphone14.png')] bg-no-repeat bg-top bg-cover h-[610px]"
                      ></motion.div>
                      <motion.div
                        variants={variants}
                        className="relative w-[304px] flex-none rounded-md cursor-pointer hover:shadow-xs overflow-hidden hover:scale-105 bg-[url('/assets/images/Iphone14.png')] bg-no-repeat bg-top bg-cover h-[610px]"
                      ></motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Bottom
        state={showBottom}
        close={closeBottom}
        title="현재 미출시 제품입니다."
      >
        <div className="text-dark-300 text-base text-center">
          빠른시일내에 출시 할 수 있도록 하겠습니다.
        </div>
      </Bottom>
    </DefaultLayout>
  )
}
