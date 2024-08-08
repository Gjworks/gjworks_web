'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SafariBrower from '@plextype/components/viewer/SafariBrower'
import { motion } from 'framer-motion'
import MainLayout from 'src/layouts/main/Layout'
import Codehighlighte from '@plextype/components/codehighlight/Codehighlighter'
import Popup from '@plextype/components/modal/Popup'
import {
  PaperAirplaneIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline'

export default function Page() {
  const [showPopup, setShowPopup] = useState(false)
  const closePopup = close => {
    setShowPopup(close)
  }

  const [showPopup2, setShowPopup2] = useState(false)
  const closePopup2 = close => {
    setShowPopup2(close)
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
    <MainLayout>
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
          <div className="relative px-3 pt-3">
            <div className="relative max-w-screen-3xl mx-auto bg-gray-200 rounded-2xl overflow-hidden">
              <div className="relative bg-[url('/assets/images/bg16.jpg')] bg-no-repeat bg-cover bg-center py-0 lg:py-12">
                <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden from-dark-950/30 via-gray-950/40 to-gray-950/50 bg-gradient-to-b dark:from-dark-950/25 dark:via-dark-950/20 dark:to-dark-950"></div>
                <div className="relative mx-auto flex max-w-screen-lg justify-center items-center gap-8 pt-0 lg:py-20">
                  <div className="relative flex items-center justify-center py-20 lg:col-span-8">
                    <motion.div
                      variants={parentVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: false, amount: 0.3 }}
                      className="grid w-full grid-cols-12 gap-8"
                    >
                      <div className="md:order-0 z-10 order-1 col-span-12 md:col-span-12">
                        <div className="pt-16">
                          <div className="relative grid grid-cols-1 gap-4 px-4">
                            <motion.div
                              variants={variants}
                              className="col-span-1 px-1 lg:mb-2"
                            >
                              <div className="flex flex-wrap gap-2 text-4xl font-semibold !leading-tight tracking-tighter text-white lg:text-6xl lg:gap-0 dark:text-white w-full justify-center text-center">
                                Building digital experience
                              </div>
                            </motion.div>

                            <motion.div
                              variants={variants}
                              className="mb-10 pl-0 text-4xl font-semibold tracking-tighter text-white lg:text-6xl dark:text-white text-center"
                            >
                              Creative platform service
                            </motion.div>
                          </div>
                        </div>
                        <div className="w-full px-4">
                          <motion.div
                            variants={variants}
                            className="relative mx-auto mb-6 max-w-lg py-3"
                          >
                            <div className="flex gap-8 rounded-full bg-gray-950/15 dark:bg-dark-900/30 p-2 backdrop-blur-lg lg:p-2">
                              <div className="flex flex-1 items-center px-3">
                                <div className="dark:text-dark-400 line-clamp-1 text-sm text-gray-300">
                                  Launch Your Service.
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  setShowPopup(true)
                                }}
                                className="flex gap-2 rounded-full bg-gray-950 dark:bg-white dark:hover:bg-dark-300 dark:text-black px-3 py-1.5 text-sm text-white hover:bg-gray-700 hover:text-white lg:px-5 lg:py-3"
                              >
                                <span>
                                  <PaperAirplaneIcon className="size-5 stroke-1" />
                                </span>
                                <span className="hidden lg:flex">
                                  Get Started
                                </span>
                              </button>
                            </div>
                          </motion.div>
                          <motion.div
                            variants={variants}
                            className="relative mx-auto flex items-center justify-center gap-4 px-3 lg:w-3/5"
                          >
                            <div className="dark:bg-dark-700/75 rounded-lg bg-gray-950/20 p-3 backdrop-blur-2xl">
                              <Square3Stack3DIcon className="size-5 text-gray-300 stroke-1" />
                            </div>
                            <div className="flex-1">
                              <div className="dark:text-dark-100 mb-2 text-left text-sm text-gray-100">
                                OpenSource Projects
                              </div>
                              <div className="dark:text-dark-300 text-left text-xs text-gray-300">
                                다양한 프로젝트를 만나보시고 좋은 의견과
                                아이디어를 주시면 반영하겠습니다.
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* <div className="absolute left-0 top-0 rounded-br-3xl bg-white dark:bg-dark-950 before:w-10 before:h-10 before:absolute before:-top-[2px] before:-right-[38px] before:bg-[url('/assets/svg/roundBox.svg')] before:bg-no-repeat before:rotate-90 after:w-10 after:h-10 after:absolute after:left-[-2px] after:-bottom-[38px] after:bg-[url('/assets/svg/roundBox.svg')] after:bg-no-repeat after:rotate-90"></div> */}
            </div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            variants={parentVariants}
            className="hidden overflow-hidden py-16 lg:py-20"
          >
            <div className="relative mx-auto flex max-w-screen-xl gap-4 px-3 lg:gap-8">
              <motion.div className="dark:bg-dark-950/75 dark:shadow-dark-950 dark:border-dark-950 relative aspect-[960/520] min-h-[434px] w-[85%] flex-none cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg shadow-gray-200 lg:w-[65%]">
                <div className="flex h-full flex-wrap justify-between gap-4">
                  <div className="w-full">
                    <motion.div
                      variants={variants}
                      className="mb-2 text-3xl font-semibold text-black lg:text-4xl dark:text-white"
                    >
                      Pristo
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

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            variants={parentVariants}
            className="hidden pt-20"
          >
            <div className="relative mx-auto max-w-screen-lg px-3">
              <div className="grid grid-cols-12 gap-0 lg:gap-8">
                <div className="col-span-12">
                  <div className="flex">
                    <div className="w-full lg:w-3/5">
                      <motion.div
                        variants={variants}
                        className="mb-4 text-2xl font-bold text-black lg:text-3xl dark:text-white"
                      >
                        제품을 구매 하면 컴포넌트와 템플릿을 사용할 수 있습니다.
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="dark:text-dark-500 text-base text-gray-400"
                      >
                        컴포넌트는 React와 Next.js에서 사용할 수 있습니다. 모든
                        Component는 tailwindcss와 Framer motion을 활용하여
                        애니메이션과 스타일을 정의했습니다.
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-20 pt-20">
                <div className="relative mx-auto max-w-screen-lg px-3">
                  <motion.div className="grid grid-cols-12 gap-y-8 lg:gap-8">
                    <div className="col-span-12 lg:col-span-5">
                      <motion.div
                        variants={variants}
                        className="dark:bg-dark-900 dark:shadow-dark-950 dark:border-dark-700/90 dark:border-t-dark-600/60 relative w-full overflow-hidden rounded-xl border border-gray-200/75 bg-gray-100 p-5 shadow-lg shadow-gray-100/90 backdrop-blur-xl lg:p-10"
                      >
                        <motion.div
                          variants={parentVariants}
                          initial="offscreen"
                          whileInView="onscreen"
                        >
                          <motion.div
                            variants={variants}
                            className="relative mb-10 px-3"
                          >
                            <div className="h-[350px] bg-[url('/assets/images/Iphone14.png')] bg-cover bg-top bg-no-repeat"></div>
                          </motion.div>

                          <motion.div
                            variants={variants}
                            className="mb-3 text-lg text-black lg:text-xl dark:text-white"
                          >
                            Coming soon mobile
                          </motion.div>
                          <motion.div
                            variants={variants}
                            className="dark:text-dark-500 mb-10 text-sm text-gray-600"
                          >
                            Desktop의 경험과 Mobile에섣의 경험을 어느것 하나도
                            불편함이 없게 UI/UX를 설계 합니다.
                          </motion.div>
                          <button className="">
                            <div className="text-dark-300 relative text-sm group-hover:text-primary-400">
                              Link more
                            </div>
                          </button>
                        </motion.div>
                      </motion.div>
                    </div>
                    <div className="col-span-12 flex flex-wrap gap-8 lg:col-span-7">
                      <motion.div
                        variants={variants}
                        className="dark:bg-dark-900 dark:shadow-dark-950/75 hover:shadow-xs dark:border-dark-700/90 dark:border-t-dark-600/60 relative w-full overflow-hidden rounded-xl border border-gray-200/75 bg-gray-100 p-5 shadow-md shadow-gray-100/90 backdrop-blur-xl lg:p-10"
                      >
                        <div className="relative h-full items-center overflow-hidden">
                          <div className="absolute inset-0"></div>
                          <div className="mx-auto h-36 w-36">
                            <div className="dark:bg-dark-900 dark:border-dark-800 mx-auto rounded-full border border-gray-100 bg-white"></div>
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
                        className="dark:bg-dark-900 dark:shadow-dark-950/75 hover:shadow-xs dark:border-dark-700/90 dark:border-t-dark-600/60 relative w-full overflow-hidden rounded-xl border border-gray-200/75 bg-gray-100 p-5 shadow-md shadow-gray-100/90 backdrop-blur-xl lg:p-10"
                      >
                        <motion.div
                          variants={parentVariants}
                          initial="offscreen"
                          whileInView="onscreen"
                        >
                          <motion.div variants={variants} className="mb-6">
                            <div className="bg-primary-600 flex h-10 w-10 items-center justify-center rounded-full text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
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
                            className="mb-5 text-lg text-black lg:text-xl dark:text-white"
                          >
                            Rhymix 제작 및 유지보수를 해드립니다.
                          </motion.div>
                          <motion.div
                            variants={variants}
                            className="dark:text-dark-500 mb-10 text-sm text-gray-600"
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
            className="hidden py-20"
          >
            <div className=" mx-auto max-w-screen-lg py-5 lg:py-10">
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
                      className="mb-4 text-xl font-semibold text-black lg:text-2xl dark:text-white"
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
                      className="mb-5 text-sm text-gray-500"
                    >
                      (React와 Next.js 에서만 지원됩니다.)
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="text-sm text-white"
                    >
                      <button className="dark:hover:bg-dark-950 dark:bg-dark-900 hover:after:from-secondary-500 hover:after:via-dark-900/25 hover:after:to-dark-900 hover:after:-trangray-x-1/2 group relative overflow-hidden rounded-md bg-gray-800 px-8 py-2 backdrop-blur-lg hover:bg-white hover:before:absolute hover:before:inset-0 hover:before:backdrop-blur-md hover:after:absolute hover:after:-bottom-16 hover:after:left-1/2 hover:after:z-[-1] hover:after:h-24 hover:after:w-24 hover:after:transform hover:after:rounded-full hover:after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hover:after:backdrop-blur-lg ">
                        <div className="text-dark-300 relative text-sm group-hover:text-white">
                          Link more
                        </div>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="py-10">
            <div className="mb-10 overflow-hidden ">
              <div className="mx-auto max-w-screen-xl px-3 pt-20">
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
                      className="text-4xl font-bold text-black lg:text-5xl dark:text-white"
                    >
                      Flexible
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="text-4xl font-bold text-black lg:text-5xl dark:text-white"
                    >
                      Creative and better
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="text-4xl font-bold text-black lg:text-5xl dark:text-white"
                    >
                      Platform
                    </motion.div>
                  </div>
                  <div className="col-span-12 flex items-center lg:col-span-6">
                    <div className=" pt-5 lg:pt-0">
                      <motion.div variants={variants} className=" mb-2">
                        <span className="text-2xl font-semibold text-black  dark:text-white">
                          WE WORK IT
                        </span>
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
                  <div className="col-span-12 flex justify-center pt-12">
                    <div className="flex justify-center items-center gap-8 py-6">
                      <div className="relative group flex w-[360px] h-[512px] rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-dark-900 dark:hover:bg-dark-700 p-5 transition-all hover:-translate-y-4 duration-300 border border-gray-200 dark:border-dark-700 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 group-hover:scale-110 group-hover:duration-500 duration-500"></div>
                      </div>
                      <div className="relative group flex w-[360px] h-[512px] rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-dark-900 dark:hover:bg-dark-700 p-5 transition-all hover:-translate-y-4 duration-300 border border-gray-200 dark:border-dark-700 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 group-hover:scale-110 group-hover:duration-500 duration-500"></div>
                      </div>
                      <div className="relative group flex w-[360px] h-[512px] rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-dark-900 dark:hover:bg-dark-700 p-5 transition-all hover:-translate-y-4 duration-300 border border-gray-200 dark:border-dark-700 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 group-hover:scale-110 group-hover:duration-500 duration-500"></div>
                      </div>
                      <div className="relative group flex w-[360px] h-[512px] rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-dark-900 dark:hover:bg-dark-700 p-5 transition-all hover:-translate-y-4 duration-300 border border-gray-200 dark:border-dark-700 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 group-hover:scale-110 group-hover:duration-500 duration-500"></div>
                      </div>
                      <div className="relative group flex w-[360px] h-[512px] rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-dark-900 dark:hover:bg-dark-700 p-5 transition-all hover:-translate-y-4 duration-300 border border-gray-200 dark:border-dark-700 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 group-hover:scale-110 group-hover:duration-500 duration-500"></div>
                      </div>
                      <div className="relative group flex w-[360px] h-[512px] rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-dark-900 dark:hover:bg-dark-700 p-5 transition-all hover:-translate-y-4 duration-300 border border-gray-200 dark:border-dark-700 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 group-hover:scale-110 group-hover:duration-500 duration-500"></div>
                      </div>
                      <div className="relative group flex w-[360px] h-[512px] rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-dark-900 dark:hover:bg-dark-700 p-5 transition-all hover:-translate-y-4 duration-300 border border-gray-200 dark:border-dark-700 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 group-hover:scale-110 group-hover:duration-500 duration-500"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="hidden overflow-scroll-hide overflow-y-hidden overflow-x-scroll pb-20">
              <div className="mx-auto max-w-screen-lg px-3">
                <div className="">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={parentVariants}
                    className="mx-auto max-w-xl"
                  >
                    <motion.div variants={variants} className="">
                      <Image
                        src="/assets/images/mac_studio.png"
                        alt="Macbook Pro"
                        width={600}
                        style={{ width: '100%', height: 'auto' }}
                        height={280}
                      ></Image>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            variants={variants}
            className="hidden pt-10"
          >
            <div className="relative mx-auto max-w-screen-2xl px-3">
              <motion.div className="grid grid-cols-3 gap-8">
                <div className="col-span-3 md:col-span-1">
                  <motion.div
                    variants={variants}
                    className="dark:bg-dark-900 dark:shadow-dark-950 dark:border-dark-700/90 dark:border-t-dark-600/60 relative w-full overflow-hidden rounded-xl border border-gray-200/75 bg-gray-100 p-5 shadow-lg shadow-gray-100/90 backdrop-blur-xl lg:p-10 h-full"
                  >
                    <motion.div
                      variants={parentVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                    >
                      <motion.div
                        variants={variants}
                        className="relative mb-10 px-3 md:px-12"
                      >
                        <div className="h-[350px] bg-[url('/assets/images/Iphone14.png')] bg-cover bg-top bg-no-repeat"></div>
                      </motion.div>

                      <motion.div
                        variants={variants}
                        className="mb-3 text-lg text-black lg:text-xl dark:text-white"
                      >
                        Coming soon mobile
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="dark:text-dark-500 mb-10 text-sm text-gray-600"
                      >
                        Desktop의 경험과 Mobile에섣의 경험을 어느것 하나도
                        불편함이 없게 UI/UX를 설계 합니다.
                      </motion.div>
                      <button className="group bg-primary-500 px-5 py-2 text-white rounded-md hover:bg-white">
                        <div className="relative text-sm group-hover:text-primary-500">
                          Link more
                        </div>
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <motion.div
                    variants={variants}
                    className="relative dark:bg-dark-900 dark:shadow-dark-950 dark:border-dark-700/90 dark:border-t-dark-600/60 w-full overflow-hidden rounded-xl border border-gray-200/75 bg-gray-100 p-5 shadow-lg shadow-gray-100/90 backdrop-blur-xl lg:p-10 h-full"
                  >
                    <motion.div
                      variants={parentVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                    >
                      <div className="absolute inset-0 dark:bg-[url('/assets/images/bg23.jpg')] bg-no-repeat bg-cover"></div>
                      <div className="absolute inset-0 bg-gradient-to-b dark:from-dark-950/25 dark:via-dark-950/90 dark:to-dark-950 z-10"></div>

                      <motion.div
                        variants={variants}
                        className="mb-3 text-xl font-medium text-black lg:text-xl dark:text-white"
                      >
                        Coming soon mobile
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="dark:text-dark-500 mb-10 text-base text-gray-600"
                      >
                        Desktop의 경험과 Mobile에섣의 경험을 어느것 하나도
                        불편함이 없게 UI/UX를 설계 합니다.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <motion.div
                    variants={variants}
                    className="dark:bg-primary-600 dark:shadow-dark-950 dark:border-dark-700/90 dark:border-t-dark-600/60 relative w-full overflow-hidden rounded-xl border border-gray-200/75 bg-primary-600 p-5 shadow-lg shadow-gray-100/90 backdrop-blur-xl lg:p-10 h-full"
                  >
                    <motion.div
                      variants={parentVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                    >
                      <motion.div
                        variants={variants}
                        className="mb-3 text-xl font-medium text-black lg:text-xl dark:text-white"
                      >
                        Coming soon mobile
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="dark:text-primary-300 mb-10 text-base text-gray-600"
                      >
                        Desktop의 경험과 Mobile에섣의 경험을 어느것 하나도
                        불편함이 없게 UI/UX를 설계 합니다.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="hidden relative overflow-hidden pb-5 pt-5">
            <div className="relative flex h-[640px] items-center justify-center overflow-hidden rounded-2xl">
              {/* <div className="absolute inset-0 bg-gray-950/75"></div> */}
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.3 }}
                variants={parentVariants}
                className="px-3 py-20 xl:px-8"
              >
                <div className="flex justify-center">
                  <motion.div
                    variants={variants}
                    className="inline text-center text-5xl font-black text-gray-400/20 dark:text-dark-600/75 md:text-[5.5rem]"
                  >
                    WE ARE CRATEIVE
                  </motion.div>
                </div>
                <motion.div
                  variants={variants}
                  className="-mt-8 text-center text-2xl font-light text-gray-900 dark:text-dark-100 xl:text-4xl"
                >
                  Responsive everything
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="relative mb-12 hidden px-3">
            <div className="relative block h-[300px]">
              <motion.div
                variants={parentVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.3 }}
                className="w-full"
              >
                <motion.div
                  variants={variants}
                  className="mx-auto h-[300px] max-w-screen-lg py-10"
                >
                  <div className="">
                    <SafariBrower image="" />
                  </div>
                </motion.div>
              </motion.div>
              {/* <div className="block absolute top-0 left-0 bottom-0 right-0 overflow-hidden bg-gradient-to-b from-white/0 via-white/40 to-white dark:from-transparent dark:via-dark-950/20 dark:to-dark-950 z-90"></div> */}
            </div>
          </div>
        </motion.div>
      </div>
      <Popup state={showPopup} close={closePopup}>
        <div className="p-8">
          <div className="mb-5 text-2xl font-bold text-gray-950">
            안녕하세요^^
          </div>
          <div className="text-sm font-normal text-gray-700">
            팝업의 역할을 할 것입니다. 팝업의 기능은 언제든 이런 형태로 호출이
            가능하게 할것이며 모달과는 다르게 아래에서 팝업이되며 바탕을
            누른다고 없어지지 않습니다. 그리고 기간의 값을 입력하면 해당 기간
            동안 팝업이 뜨지 않을 것입니다.
          </div>
        </div>
      </Popup>
      <Popup state={showPopup2} title="서비스 제안하기" close={closePopup2}>
        <div className="p-8">
          <div className="text-sm font-normal text-gray-700">
            <div className="flex justify-center items-center rounded-2xl bg-gray-100 p-8 text-sm text-gray-400">
              서비스 제안서 작성
            </div>
          </div>
        </div>
      </Popup>
    </MainLayout>
  )
}
