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
        <motion.div className="relative mx-auto pt-20 xl:py-20 overflow-hidden bg-[url('/assets/images/bg4.jpg')] bg-no-repeat bg-cover bg-center h-[660px]">
          <div className="absolute inset-0 overflow-hidden bg-dark-950/50"></div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            className="relative max-w-screen-xl mx-auto px-3 py-20 z-10"
          >
            <div className="">
              <motion.div
                variants={variants}
                className="text-sm lg:text-base font-bold text-black dark:text-primary-400 mb-3"
              >
                TEAM THAT MAKES THE SERVICE
              </motion.div>
              <motion.div
                variants={variants}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-10 text-gray-500 dark:text-white"
              >
                <span className="text-black bg-primary-400 px-1">
                  Build web and app
                </span>{' '}
                <br></br>quickly and simply
              </motion.div>
              <motion.div
                variants={variants}
                className="text-dark-400 dark:text-dark-200 text-sm lg:text-lg"
              >
                서비스에 도움이 되는 제품을 만들어 드리겠습니다.
              </motion.div>
            </div>
          </motion.div>
          <div className="w-full absolute left-0 right-0 bottom-0 h-[440px] bg-gradient-to-b from-transparent via-dark-900/50 to-dark-950"></div>
        </motion.div>

        <div className="py-20">
          <div className="relative max-w-screen-xl mx-auto px-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                variants={variants}
                className="bg-slate-100 dark:bg-dark-900 p-10 rounded-xl w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0 "
              >
                <div className="text-2xl font-medium text-black dark:text-white mb-5">
                  Rhymix 제작 및 유지보수를 해드립니다.
                </div>
                <div className="text-sm text-dark-300 mb-10">
                  라이믹스 모듈제작과 데이터 이전 그리고 유지보수까지 모든
                  부분의 제작을 의뢰를 통해 하고 있습니다. 결제 모듈과 카카오톡
                  메세지 전송까지 다양한 서드파티 모듈을 가지고 있으며
                  라이믹스의 모든 부분에 해당 기능을 추가하여 코어 수정 없이
                  지원합니다.
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className="relative overflow-hidden bg-gradient-to-br bg-gray-300 dark:bg-dark-900 p-10 rounded-xl w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0 "
              >
                <div className="text-2xl font-bold text-black dark:text-white mb-5">
                  Web UI Components
                </div>
                <div className="text-sm text-slate-400 dark:text-dark-100 mb-10">
                  Next.js + Prisma + Tailwindcss + Framer Motion등을 활용하여
                  프론트엔드에서 뛰어난 퍼포먼스와 일관성 있는 UI/UX를
                  제작합니다.
                </div>
                <div className="flex flex-wrap gap-8 justify-between">
                  <div>
                    <div className="w-[240px] rounded-md backdrop-blur-lg shadow-lg bg-white/90 dark:bg-dark-800 dark:shadow-black border border-gray-200 dark:border-dark-700 overflow-hidden shadow-xs p-2 z-[101]">
                      <div className="relative z-[100]">
                        <div className="w-56">
                          <a
                            className="block rounded px-4 py-2 text-xs text-gray-500 dark:text-dark-900 hover:bg-dark-600 hover:text-white dark:bg-primary-400 focus:outline-none focus:bg-dark-800 focus:text-dark-300"
                            href="/auth/Signin"
                          >
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1"
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                                  ></path>
                                </svg>
                                <div className="pl-2">Sign In</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div>
                          <a
                            className="block rounded px-4 py-2 text-xs text-gray-500 dark:text-dark-200 focus:outline-none focus:bg-dark-800 focus:text-dark-300"
                            href="/auth/Register"
                          >
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1"
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                  ></path>
                                </svg>
                                <div className="pl-2">Register</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="block border-b border-gray-300 dark:border-dark-700 my-2 mx-3"></div>
                        <div>
                          <a
                            className="block rounded px-4 py-2 text-xs text-gray-500 dark:text-dark-200 focus:outline-none focus:bg-dark-800 focus:text-dark-300"
                            href="#"
                          >
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1"
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                  ></path>
                                </svg>
                                <div className="pl-2">Infomation</div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-[240px]">
                      <div className="relative bg-dark-700 rounded-lg p-2 text-dark-200 text-sm font-normal mb-1 shadow-md shadow-dark-900 overflow-hidden">
                        <div className="absolute bg-dark-600 -left-6 bottom-0 rounded-full w-20 h-20"></div>
                        <div className="ml-16">Example</div>
                      </div>
                      <div className="relative bg-dark-500 rounded-lg p-2 text-white text-sm font-normal mb-1 shadow-md shadow-dark-900 overflow-hidden">
                        <div className="absolute bg-primary-400 -left-6 bottom-0 rounded-full w-20 h-20"></div>
                        <div className="ml-16 text-primary-400">
                          Data Fetching
                        </div>
                      </div>
                      <div className="relative bg-dark-700 rounded-lg p-2 text-dark-200 text-sm font-normal mb-1 shadow-md shadow-dark-900 overflow-hidden">
                        <div className="absolute bg-dark-600 -left-6 bottom-0 rounded-full w-20 h-20"></div>
                        <div className="ml-16">Network</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
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
              <div className="absolute inset-0 overflow-hidden bg-gradient-to-b dark:from-dark-950/25 dark:via-dark-950/50 dark:to-dark-950"></div>
            </motion.div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={parentVariants}
            className="max-w-screen-md mx-auto text-center px-3"
          >
            <motion.div
              variants={variants}
              className="text-3xl font-medium text-black dark:text-white mb-8"
            >
              라이믹스 전용 레이아웃 출시 예정
            </motion.div>
            <motion.div
              variants={variants}
              className="text-base text-gray-500 dark:text-dark-300 text-center mb-5"
            >
              최근 데스크탑 환경에서 모바일 UI를 적극 활용한 디자인들을 많이
              선보이고 있습니다. 그에 맞춰 그전에는 없는 느낌의 레이아웃을 출시
              하려고 합니다. 현재 작업중에 있으며 6월중에 출시 예정입니다.
            </motion.div>
            <motion.a
              href="#"
              variants={variants}
              className="text-base text-primary-500 dark:text-primary-400 text-center hover:underline"
            >
              자세히 보기
            </motion.a>
          </motion.div>
        </div>
        <div className="py-20">
          <div className="relative max-w-screen-xl mx-auto px-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                variants={variants}
                className="bg-slate-100 dark:bg-dark-900 p-10 rounded-xl w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0 "
              >
                <div className="text-3xl text-black dark:text-white font-bold mb-8">
                  Store
                </div>
                <div className="text-base text-dark-300 mb-10">
                  React 뿐만아니라 라이믹스 CMS기능까지 모두 만나보실 수
                  있습니다.
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className="bg-slate-100 dark:bg-dark-800 p-10 rounded-xl w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0 "
              >
                <div className="text-3xl text-black dark:text-white font-bold mb-8">
                  Partners
                </div>
                <div className="text-base text-dark-300 mb-10">
                  저희 파트너사가 된다면 20% 할인된 금액으로 모든 상품을
                  다운로드 받을 수 있습니다.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="hidden py-20">
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
                      <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-primary-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white"> 60%</div>
                  </div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-xs text-black dark:text-white w-12">
                      Front
                    </div>
                    <div className="relative flex-1 bg-slate-200 dark:bg-dark-500 rounded-full h-[6px] overflow-hidden">
                      <motion.div className="absolute left-0 top-0 bottom-0 w-[20%] bg-primary-400 rounded-full"></motion.div>
                    </div>
                    <div className="text-xs text-white"> 20%</div>
                  </div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-xs text-black dark:text-white w-12">
                      Server
                    </div>
                    <div className="relative flex-1 bg-slate-200 dark:bg-dark-500 rounded-full h-[6px] overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-primary-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white"> 30%</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className="flex flex-wrap items-center gap-8 bg-gradient-to-br from-primary-400 to-secondary-600 p-5 rounded-xl w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0 "
              >
                <div>
                  <div className="text-2xl font-bold text-white mb-5 text-center">
                    Projects
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
        <div className="hidden py-20">
          <div className="max-w-screen-xl mx-auto px-3">
            <div className="grid grid-cols-5 gap-10 lg:gap-8 w-full">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.3 }}
                variants={parentVariants}
                className="flex items-center col-span-5 lg:col-span-3"
              >
                <motion.div className="flex-1">
                  <motion.div
                    className="text-primary-400 mb-5"
                    variants={variants}
                  >
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
                    지제이웍스는 2018 년 처음시작한 웹과 앱을 개발하기 위한
                    소규모 개발팀입니다. 우리는 혁신적이고 미래 지향적 인 기업,
                    신생 기업 및 비즈니스와 협력하여 매력적인 제품을 연구하고
                    개발합니다.
                    {/* Front-end 기술을 기반으로 서비스를 제작하고 배포 합니다. React
                  + Next.js를 기반으로 웹 개발을 진행하고 그 노하우를 활용하여
                  다양한 자원들과 Components등 더 나은 제품을 개발하고 있습니다. */}
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="inline rounded-full bg-slate-500 dark:bg-dark-600 py-2 px-5 text-sm text-slate-100 dark:white dark:hover:text-black hover:bg-primary-500 dark:hover:bg-primary-500 cursor-pointer"
                  >
                    Read more
                  </motion.div>
                </motion.div>
              </motion.div>
              <div className="col-span-5 lg:col-span-2 flex items-center py-10 justify-center">
                <div className="flex justify-center items-center dark:bg-transparent border border-dark-50/10 w-[440px] h-[440px] rounded-full">
                  <div className="flex justify-center items-center dark:bg-transparent border border-dark-700/70 w-[290px] h-[290px] rounded-full">
                    <div className="dark:bg-dark-50/10 backdrop-blur-lg w-[160px] h-[160px] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-20 bg-slate-50 dark:bg-dark-700 bg-no-repeat bg-cover bg-center">
          <div className="w-full absolute left-0 right-0 top-0 h-[440px] bg-gradient-to-t from-transparent via-dark-950/40 to-dark-950"></div>
          <div className="w-full absolute left-0 right-0 bottom-0 h-[440px] bg-gradient-to-b from-transparent via-dark-950/40 to-dark-950"></div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={parentVariants}
            className="relative max-w-screen-xl mx-auto  px-3 xl:px-8"
          >
            <div className="flex justify-center mb-6">
              <div>
                <motion.div
                  variants={variants}
                  className="block font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-center pt-20 mb-3"
                >
                  WE ARE CRATEIVE
                </motion.div>
                <motion.div
                  variants={variants}
                  className="block font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-center mb-10"
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
