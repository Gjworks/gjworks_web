'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SafariBrower from 'src/components/viewer/SafariBrower'
import { motion } from 'framer-motion'
import DefaultLayout from 'src/templates/layouts/default/Layout'
import Bottom from 'src/components/panel/Bottom'

export default function Page() {
  const [showBottom, setShowBottom] = useState(false)

  const closeBottom = close => {
    setShowBottom(close)
  }
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
      {/* <div className="-mt-[111px] h-[111px] bg-black/80 w-full"></div> */}
      <div className="relative bg-white dark:bg-transparent">
        {/* <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: '3%' }}
        animate={{ opacity: 1, y: '0%', transition: { duration: 1 } }}
      >
      </motion.div>
      <div className="absolute inset-0 overflow-hidden bg-dark-900/90 backdrop-blur-2xl"></div> */}
        <div className=" relative ">
          <div className="hidden absolute inset-0 overflow-hidden bg-dark-950/90 backdrop-blur-sm"></div>
          <motion.div className="relative flex items-center py-20">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              className="relative w-full z-10"
            >
              <div className="flex justify-center max-w-screen-xl mx-auto px-3 pt-10">
                <div className="relative text-center">
                  <motion.div
                    variants={variants}
                    className="text-sm text-center lg:text-base font-bold text-primary-500 dark:text-primary-400 mb-3"
                  >
                    TEAM THAT MAKES THE SERVICE
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="text-3xl sm:text-5xl md:text-6xl mb-10 text-center text-black dark:text-white font-semibold"
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
                    className="text-gray-400 text-center dark:text-dark-400 text-sm lg:text-lg mb-6"
                  >
                    서비스에 도움이 되는 제품을 만들어 드리겠습니다.
                  </motion.div>
                  <div className="relative flex gap-8 bg-slate-100 dark:bg-dark-500/10 backdrop-blur-lg rounded-full p-3 mb-12">
                    <div className="flex-1 flex items-center px-3">
                      <div className="text-sm text-dark-400 line-clamp-1">
                        Launch Your Service.
                      </div>
                    </div>
                    <Link
                      href="/auth/Signin"
                      className="flex gap-2 bg-primary-400 text-white text-sm p-3 px-5 rounded-full hover:bg-primary-500 hover:text-white"
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
                      <span className="hidden lg:flex">Get Started!</span>
                    </Link>
                  </div>
                  <div className="flex justify-center items-center gap-4 pb-20 lg:w-4/5 mx-auto">
                    <div className="rounded-lg p-3 bg-slate-100 dark:bg-dark-800/40 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50.44096 49.52621"
                        className="w-5 h-5 fill-dark-300 stroke-dark-300"
                      >
                        <path
                          d="M1.84644,1.58409C.44163,16.71335-.16235,31.90823,.03716,47.10126c.00547,.41635,.33955,.73511,.75,.75,15.38984,.5582,30.77967,1.1164,46.16951,1.67461,.29945,.01086,.67105-.23858,.72321-.55062,2.52389-15.10011,3.32945-30.44594,2.36732-45.72607-.02773-.44042-.32393-.70122-.75-.75C33.83294,.72875,18.27256-.10258,2.70769,.01009c-.96483,.00698-.96703,1.507,0,1.5,15.56487-.11266,31.12525,.71866,46.58951,2.48908l-.75-.75c.95344,15.14205,.18761,30.36207-2.31374,45.32732l.72321-.55062c-15.38984-.5582-30.77967-1.1164-46.16951-1.67461l.75,.75c-.19951-15.19303,.40447-30.38791,1.80927-45.51717,.08921-.96076-1.41136-.95467-1.5,0h0Z"
                          fill="#01010C"
                          origin="undraw"
                        />
                        <path
                          d="M13.75626,15.87761l1.05436-2.82127-1.25354,.33095c1.96008,2.06592,4.14894,4.34382,7.03233,5.01008,2.26646,.52371,4.927,.0561,6.43336-1.84386,.35002-.44147,.64793-1.25113,1.12179-1.56631,.94282-.62708,1.61952,.66611,2.07061,1.29124,.68647,.95134,1.55037,1.67033,2.78171,1.67316,2.89583,.00665,4.11053-2.87401,4.81104-5.2116,.2777-.92667-1.16956-1.32264-1.44642-.39876-.3636,1.21333-.7371,2.63637-1.7531,3.48388-.53109,.44302-1.3535,.77979-2.05012,.56776-.68554-.20865-1.0382-.88001-1.42699-1.42376-1.11523-1.55976-2.95493-2.3964-4.36141-.67894-.73582,.89851-1.12889,1.85227-2.25172,2.37071-1.03787,.47921-2.25964,.54615-3.36988,.32308-2.69999-.54248-4.71689-2.74575-6.53055-4.65734-.41748-.44003-1.06526-.17285-1.25354,.33095l-1.05436,2.82127c-.33835,.90537,1.11098,1.29634,1.44642,.39876h0Z"
                          fill="#01010C"
                        />
                        <path
                          d="M16.8072,29.49315c-.1581-.2279,.3614-.25333,.51011-.18961,.39047,.16729,.68081,.58358,.93097,.90536,.504,.64829,1.04151,1.33647,1.8667,1.57929,1.28601,.37843,2.33879-.45718,3.20416-1.30009,.73433-.71528,1.72365-1.88623,2.62503-.70805,.47438,.62006,.70859,1.38706,1.17993,2.01313,.51994,.69063,1.18383,1.15147,2.06608,1.18869,.96522,.04072,.9633-1.45936,0-1.5-.90185-.03804-1.29492-1.35555-1.66382-2.0025-.43521-.76325-1.04463-1.4817-1.93938-1.68299-1.49116-.33546-2.56196,.91084-3.52923,1.82487-.34984,.33059-.83583,.82324-1.36967,.76445-.86151-.09486-1.39786-1.38863-1.98339-1.91887-.69091-.62567-1.67347-.98777-2.53558-.47891-.77038,.45471-1.20258,1.47607-.65711,2.26233,.54652,.78776,1.84729,.0387,1.29521-.75708h0Z"
                          fill="#01010C"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-left text-dark-400 text-sm mb-2">
                        OpenSource Projects
                      </div>
                      <div className="text-left text-dark-500 text-xs">
                        다양한 프로젝트를 만나보시고 좋은 의견과 아이디어를
                        주시면 반영하겠습니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="hidden relative">
            <div className="flex flex-wrap">
              <div className="flex items-center flex-wrap w-full md:flex-1 h-full order-0 md:order-1 backdrop-blur-lg bg-dark-900 dark:backdrop-blur-lg">
                <div className="flex items-stretch flex-wrap w-full h-full lg:max-w-screen-sm ml-auto px-5 py-5">
                  <div className="flex items-center flex-wrap gap-8 w-full">
                    <div className="flex items-center justify-center text-primary-500 w-12 h-12 rounded-lg shadow-sm shadow-dark-950 bg-dark-700/60 backdrop-blur-lg">
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
                          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-lg font-semibold">
                        버그 제보
                      </div>
                      <div className="text-dark-400 text-sm">
                        <span>0</span>개중에 <span>0</span>개 수정완료
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:flex-1 bg-gradient-to-r from-primary-600 via-primary-600 to-secondary-600 order-0 md:order-1">
                <div className="flex items-center flex-wrap w-full lg:max-w-screen-sm mr-auto px-5 py-5 h-full">
                  <div className="flex-1">
                    <div className="text-white text-lg font-semibold">
                      Store
                    </div>
                    <div className="text-primary-300 text-sm">
                      Store에서 제품 구매하기
                    </div>
                  </div>
                  <div className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="relative max-w-screen-xl mx-auto px-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-12 gap-8"
            >
              <div className="col-span-12 lg:col-span-5">
                <motion.div
                  variants={variants}
                  className="relative overflow-hidden bg-slate-100/80 border border-white dark:border-dark-900 dark:bg-dark-900/90 shadow-sm hover:shadow-lg shadow-gray-100 hover:shadow-slate-200 dark:shadow-dark-950 p-10 rounded-md w-full transition duration-300 hover:shadow-xs translate-y-1 hover:translate-y-0 h-full"
                >
                  <div className="relative px-8 mb-10">
                    <div className="bg-[url('/assets/images/Iphone14.png')] bg-no-repeat bg-top bg-cover h-[350px]"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-[350px] rounded-lg dark:bg-gradient-to-b dark:from-dark-900/20 dark:via-dark-900/60 dark:to-dark-900"></div>
                  </div>

                  <div className="text-xl text-black dark:text-white mb-3">
                    Coming soon mobile
                  </div>
                  <div className="text-sm text-dark-500 mb-10">
                    Desktop의 경험과 Mobile에섣의 경험을 어느것 하나도 불편함이
                    없게 UI/UX를 설계 합니다.
                  </div>
                  <button className="relative group bg-dark-800 px-8 py-2 backdrop-blur-lg rounded-md hover:after:w-24 hover:after:backdrop-blur-lg hover:after:h-24 overflow-hidden hover:after:absolute hover:after:-bottom-16 hover:after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hover:after:from-primary-400 hover:after:via-dark-900/25 hover:after:to-dark-900 hover:after:z-[-1] hover:after:rounded-full hover:after:left-1/2 hover:after:transform hover:after:-translate-x-1/2 hover:before:absolute  hover:before:inset-0 hover:before:backdrop-blur-md ">
                    <div className="relative group-hover:text-white text-sm text-dark-300">
                      Link more
                    </div>
                  </button>
                </motion.div>
              </div>
              <div className="col-span-12 lg:col-span-7 flex flex-wrap gap-8">
                <motion.div
                  variants={variants}
                  className="relative overflow-hidden bg-slate-100/80 border border-white dark:border-dark-900 dark:bg-dark-900/90 shadow-sm hover:shadow-lg shadow-gray-100 hover:shadow-slate-200 dark:shadow-dark-950 p-10 rounded-md w-full transition duration-300 hover:shadow-xs translate-y-1 hover:translate-y-0"
                >
                  <div className="relative items-center overflow-hidden h-full">
                    <div className="absolute inset-0"></div>
                    <div className="mx-auto w-36 h-36">
                      <div className="mx-auto rounded-full bg-white dark:bg-dark-900 border border-slate-200"></div>
                    </div>
                  </div>
                  {/* <div className="text-xl text-black dark:text-white mb-5">
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
                  className="relative overflow-hidden bg-slate-100/80 border border-white dark:border-dark-900 dark:bg-dark-900/90 shadow-sm hover:shadow-lg shadow-gray-100 hover:shadow-slate-200 dark:shadow-dark-950 p-10 rounded-md w-full transition duration-300 hover:shadow-xs translate-y-1 hover:translate-y-0"
                >
                  <div className="text-xl text-black dark:text-white mb-5">
                    Rhymix 제작 및 유지보수를 해드립니다.
                  </div>
                  <div className="text-sm text-gray-400 dark:text-dark-500 mb-10">
                    라이믹스 모듈제작과 데이터 이전 그리고 유지보수까지 모든
                    부분의 제작을 의뢰를 통해 하고 있습니다. 결제 모듈과
                    카카오톡 메세지 전송까지 다양한 서드파티 모듈을 가지고
                    있으며 라이믹스의 모든 부분에 해당 기능을 추가하여 코어 수정
                    없이 지원합니다.
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="py-20">
          <div className="relative max-w-screen-xl mx-auto px-3">
            <div className="absolute hidden items-center justify-center -top-28 right-3 w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
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
              {/* <div className="absolute inset-0 overflow-hidden bg-gradient-to-b dark:from-dark-950/25 dark:via-dark-950/50 dark:to-dark-950"></div> */}
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
              className="text-base text-slate-500 dark:text-dark-300 text-center mb-5"
            >
              최근 데스크탑 환경에서 모바일 UI를 적극 활용한 디자인들을 많이
              선보이고 있습니다. 그에 맞춰 그전에는 없는 느낌의 레이아웃을 출시
              하려고 합니다. 현재 작업중에 있으며 6월중에 출시 예정입니다.
            </motion.div>
            <button
              onClick={() => setShowBottom(!showBottom)}
              className="relative group bg-dark-800 px-16 py-3 backdrop-blur-lg rounded-md hover:after:w-32 hover:after:backdrop-blur-lg hover:after:h-32 overflow-hidden hover:after:absolute hover:after:-bottom-20 hover:after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hover:after:from-primary-400 hover:after:via-dark-900/25 hover:after:to-dark-900 hover:after:z-[-1] hover:after:rounded-full hover:after:left-1/2 hover:after:transform hover:after:-translate-x-1/2 hover:before:absolute  hover:before:inset-0 hover:before:backdrop-blur-lg shadow-lg hover:shadow-dark-950"
            >
              <div className="relative group-hover:text-white text-sm text-dark-300">
                자세히 보기
              </div>
            </button>
          </motion.div>
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
              <div className="relative mx-auto bg-gradient-to-b from-white to-[#FBFBFB] dark:from-dark-800 shadow-xl shadow-black dark:to-dark-900 flex justify-center items-center rounded-[2.5rem] h-[600px] w-[300px]">
                <div className="h-[32px] w-[3px] bg-dark-800 dark:bg-dark-800 absolute -left-[3px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-dark-800 dark:bg-dark-800 absolute -left-[3px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-dark-800 dark:bg-dark-800 absolute -left-[3px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-dark-800 dark:bg-dark-800 absolute -right-[3px] top-[142px] rounded-r-lg"></div>
                <div className="relative rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-dark-950">
                  <div className="bg-black h-8 absolute top-4 left-16 right-16 rounded-full"></div>
                  1
                </div>
              </div>
            </div>
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
                className="bg-gradient-to-br from-primary-400 via-primary-500 to-primary-500 p-10 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 shadow-lg shadow-slate-300 dark:shadow-dark-950"
              >
                <div className="text-2xl text-white dark:text-black font-light text-center mb-8">
                  Store
                </div>
                <div className="text-base text-primary-300 dark:text-dark-600 mb-10 text-center">
                  React 뿐만아니라 라이믹스 CMS기능까지 모두 만나보실 수
                  있습니다.
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className=" bg-slate-100 dark:bg-dark-900/80 p-10 border border-white dark:border-dark-800 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 shadow-lg shadow-slate-200 dark:shadow-dark-950"
              >
                <div className="text-2xl text-black dark:text-white font-light text-center mb-8">
                  Partners
                </div>
                <div className="text-base text-gray-400 dark:text-dark-400 mb-10 text-center">
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
                className="bg-slate-100 dark:bg-dark-700 p-5 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 "
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
                className="bg-white border border-slate-200 dark:border-dark-700 dark:bg-dark-800 p-5 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 "
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
                      <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-primary-600 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white"> 60%</div>
                  </div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-xs text-black dark:text-white w-12">
                      Front
                    </div>
                    <div className="relative flex-1 bg-slate-200 dark:bg-dark-500 rounded-full h-[6px] overflow-hidden">
                      <motion.div className="absolute left-0 top-0 bottom-0 w-[20%] bg-primary-600 rounded-full"></motion.div>
                    </div>
                    <div className="text-xs text-white"> 20%</div>
                  </div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-xs text-black dark:text-white w-12">
                      Server
                    </div>
                    <div className="relative flex-1 bg-slate-200 dark:bg-dark-500 rounded-full h-[6px] overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-primary-600 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white"> 30%</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className="flex flex-wrap items-center gap-8 bg-gradient-to-br from-primary-600 to-secondary-600 p-5 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 "
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
                className="relative w-[80%] flex-none aspect-[1216/640] rounded-md cursor-pointer shadow-xl shadow-dark-900 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 overflow-hidden"
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
                className="relative w-[80%] flex-none aspect-[1216/640] rounded-md cursor-pointer shadow-xl shadow-dark-900 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 overflow-hidden"
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
                    className="text-primary-600 mb-5"
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
        <div className="relative flex items-center justify-center">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={parentVariants}
            className="relative max-w-screen-xl mx-auto py-20 px-3 "
          >
            <div className="flex justify-center mb-6">
              <div>
                <motion.div
                  variants={variants}
                  className="block font-medium text-transparent text-5xl bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-center pt-20 mb-3"
                >
                  We Are Creative
                </motion.div>
                <motion.div
                  variants={variants}
                  className="block font-medium text-transparent text-5xl bg-clip-text bg-gradient-to-r from-primary-500 via-primary-500 to-primary-600 text-center mb-10 leading-normal"
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
                className="border bg-transparent backdrop-blur-lg border-slate-900 dark:border-dark-300 rounded-full py-1 px-10 text-black dark:text-dark-300 text-base hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black dark:shadow-lg dark:shadow-dark-600"
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
