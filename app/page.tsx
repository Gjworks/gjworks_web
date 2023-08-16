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

  const phpCodeString = `$group_srl = array();
foreach($output->data as $key => $val){
    if($val->tm_group_srl){
            array_push($group_srl, $val->tm_group_srl);
    }
}

$placeholder = str_repeat('?,', count($group_srl) - 1) . '?';

$stmt = $oDB->prepare("SELECT count(tm_group_srl) as count FROM teacher_manage_member WHERE tm_group_srl IN ($placeholder) GROUP BY tm_group_srl");

$stmt->execute($group_srl);`

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
        <div className=" relative ">
          <motion.div className="relative flex items-center py-8 lg:py-20">
            <motion.div className="relative w-full z-10">
              <div className="relative grid grid-cols-2 gap-8 max-w-screen-xl mx-auto px-3 pt-10 pb-10">
                <div className="relative col-span-2 lg:col-span-1 flex items-center">
                  <motion.div
                    variants={parentVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full"
                  >
                    <motion.div
                      variants={variants}
                      className="text-sm lg:text-base font-bold text-gray-950 dark:text-dark-200 mb-3 pt-0 lg:pt-10 lg:text-left text-center"
                    >
                      TEAM THAT MAKES THE SERVICE
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="text-4xl sm:text-5xl md:text-6xl mb-10 text-black dark:text-white font-semibold lg:text-left text-center"
                    >
                      <div>Build web and app</div>
                      <div>
                        <span className="text-gray-400 dark:text-dark-400">
                          Quickly
                        </span>{' '}
                        and{' '}
                        <span className="text-gray-400 dark:text-dark-400">
                          simply
                        </span>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="text-gray-600 dark:text-dark-400 text-sm lg:text-lg mb-6 lg:text-left text-center"
                    >
                      서비스에 도움이 되는 제품을 만들어 드리겠습니다.
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className=" relative  p-3 mb-12"
                    >
                      <div className="flex gap-8 p-2 lg:p-3 bg-gray-200/50 dark:bg-dark-800/50 backdrop-blur-lg rounded-full">
                        <div className="flex-1 flex items-center px-3">
                          <div className="text-sm text-dark-400 line-clamp-1">
                            Launch Your Service.
                          </div>
                        </div>
                        <button
                          onClick={() => setShowBottom(!showBottom)}
                          className="flex gap-2 bg-gray-900 dark:bg-dark-100 dark:hover:bg-dark-200 text-white dark:text-dark-950 text-sm py-2 px-3 lg:py-3 lg:px-5 rounded-full hover:bg-gray-600 hover:text-white"
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
                  </motion.div>
                </div>
                <motion.div
                  variants={parentVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.3 }}
                  className="col-span-2 lg:col-span-1"
                >
                  <div className="relative px-0">
                    <motion.div
                      variants={variants}
                      className="flex justify-center"
                    >
                      <Image
                        src="/assets/images/mac_studio.png"
                        width={500}
                        height="100"
                        alt="Mac"
                        style={{ objectFit: 'contain' }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.1 }}
                variants={parentVariants}
                className=" pt-10 lg:py-20"
              >
                <div className="max-w-screen-xl mx-auto px-3">
                  <div className="grid grid-cols-12 gap-0 lg:gap-8 mb-16">
                    <div className="col-span-12">
                      <div className="flex justify-center">
                        <div className="w-full lg:w-1/2 mx-auto">
                          <motion.div
                            variants={variants}
                            className="text-black text-3xl lg:text-4xl font-bold mb-4 text-center"
                          >
                            제품을 구매 하면 컴포넌트와 템플릿을 사용할 수
                            있습니다.
                          </motion.div>
                          <motion.div
                            variants={variants}
                            className="text-gray-400 text-sm text-center"
                          >
                            컴포넌트는 React와 Next.js에서 사용할 수 있습니다.
                            모든 Component는 tailwindcss와 Framer motion을
                            활용하여 애니메이션과 스타일을 정의했습니다.
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-screen-xl mx-auto">
                    <div className="bg-gray-100 rounded-xl p-4 lg:p-16 h-full">
                      <div className="grid grid-cols-12 gap-0 lg:gap-20">
                        <div className="col-span-12 lg:col-span-5 py-5">
                          <motion.div
                            variants={variants}
                            className="text-xl lg:text-2xl font-semibold text-black mb-4"
                          >
                            UI/UX를 쉽게 처리할 수 있도록 Component를 제공해
                            드립니다.
                          </motion.div>
                          <motion.div
                            variants={variants}
                            className="text-sm text-gray-500"
                          >
                            완벽한 애니메이션 동작과 심플한 코드로 바로 적용할
                            수 있습니다.
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
                            <button className="relative group bg-dark-800 px-8 py-2 backdrop-blur-lg rounded-md hover:after:w-24 hover:after:backdrop-blur-lg hover:after:h-24 overflow-hidden hover:after:absolute hover:after:-bottom-16 hover:after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hover:after:from-primary-400 hover:after:via-dark-900/25 hover:after:to-dark-900 hover:after:z-[-1] hover:after:rounded-full hover:after:left-1/2 hover:after:transform hover:after:-translate-x-1/2 ">
                              컴포넌트 가기
                            </button>
                          </motion.div>
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                          <motion.div variants={variants} className="">
                            <div className="Code bg-dark-950 rounded-md overflow-hidden">
                              <div className="py-2.5 grid items-center px-4 gap-6  dark:border-dark-800  bg-gray-950 ">
                                <div className="flex items-center">
                                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                  <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                                  <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                </div>
                              </div>
                              <Codehighlighte value={codeString} lang="jsx" />
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="overflow-hidden ">
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
                        className="text-black text-4xl lg:text-5xl font-bold"
                      >
                        Flexible
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="text-black text-4xl lg:text-5xl font-bold"
                      >
                        Creative and better
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="text-black text-4xl lg:text-5xl font-bold"
                      >
                        Platform.
                      </motion.div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex items-center">
                      <div className=" pt-5 lg:pt-0">
                        <motion.div
                          variants={variants}
                          className="text-base text-black mb-2 font-semibold"
                        >
                          WE WORK IT
                        </motion.div>
                        <motion.div
                          variants={variants}
                          className="text-sm font-light text-gray-500"
                        >
                          지제이웍스만의 방법으로 디지털 플랫폼을 구축하고
                          최상의 디지털 경험을 느낄 수 있도록 최선을 다 하고
                          있습니다.
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="overflow-x-scroll overflow-y-hidden overflow-scroll-hide">
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
              <div className="hidden pt-20">
                <div className="relative max-w-screen-xl mx-auto px-3">
                  <motion.div
                    variants={parentVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.3 }}
                    className="grid grid-cols-12 gap-8"
                  >
                    <div className="col-span-12 lg:col-span-5">
                      <motion.div
                        variants={variants}
                        className="relative overflow-hidden bg-gray-100 dark:bg-dark-800/60 backdrop-blur-xl shadow-sm hover:shadow-lg shadow-gray-100 hover:shadow-gray-200 dark:shadow-dark-950 p-5 lg:p-10 rounded-xl w-full hover:shadow-xs h-full"
                      >
                        <motion.div
                          variants={parentVariants}
                          initial="offscreen"
                          whileInView="onscreen"
                        >
                          <motion.div
                            variants={variants}
                            className="relative px-8 mb-10"
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
                            className="text-sm text-dark-500 mb-10"
                          >
                            Desktop의 경험과 Mobile에섣의 경험을 어느것 하나도
                            불편함이 없게 UI/UX를 설계 합니다.
                          </motion.div>
                          <button className="relative group bg-dark-800/80 px-8 py-2 backdrop-blur-lg rounded-md hover:after:w-24 hover:after:backdrop-blur-lg hover:after:h-24 overflow-hidden hover:after:absolute hover:after:-bottom-16 hover:after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hover:after:from-primary-400 hover:after:via-dark-900/25 hover:after:to-dark-900 hover:after:z-[-1] hover:after:rounded-full hover:after:left-1/2 hover:after:transform hover:after:-translate-x-1/2 hover:before:absolute  hover:before:inset-0 hover:before:backdrop-blur-md ">
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
                        className="relative overflow-hidden bg-gray-100 dark:bg-dark-800/60 backdrop-blur-xl shadow-sm hover:shadow-lg shadow-gray-100 hover:shadow-gray-200 dark:shadow-dark-950 p-5 lg:p-10 rounded-xl w-full hover:shadow-xs"
                      >
                        <div className="relative items-center overflow-hidden h-full">
                          <div className="absolute inset-0"></div>
                          <div className="mx-auto w-36 h-36">
                            <div className="mx-auto rounded-full bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-800"></div>
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
                        className="relative overflow-hidden bg-gray-100 dark:bg-dark-800/60 backdrop-blur-xl shadow-sm hover:shadow-lg shadow-gray-100 hover:shadow-gray-200 dark:shadow-dark-950 p-5 lg:p-10 rounded-xl w-full hover:shadow-xs"
                      >
                        <motion.div
                          variants={parentVariants}
                          initial="offscreen"
                          whileInView="onscreen"
                        >
                          <motion.div variants={variants} className="mb-6">
                            <div className="flex justify-center items-center bg-primary-500 text-white w-10 h-10 rounded-full">
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
                            className="text-sm text-gray-400 dark:text-dark-500 mb-10"
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
            </motion.div>
          </motion.div>
        </div>
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
