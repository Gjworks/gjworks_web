"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SafariBrower from "@gjworks/components/viewer/SafariBrower";
import { motion } from "framer-motion";
import MainLayout from "@gjworks/templates/layouts/main/Layout";
import Codehighlighte from "@gjworks/components/codehighlight/Codehighlighter";
import Popup from "@gjworks/components/modal/Popup";

export default function Page() {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = (close) => {
    setShowPopup(close);
  };

  const [showPopup2, setShowPopup2] = useState(false);
  const closePopup2 = (close) => {
    console.log(close);
    setShowPopup2(close);
  };

  const parentVariants = {
    onscreen: {
      transition: { staggerChildren: 0.2 },
    },
    offscreen: {
      transition: { staggerChildren: 0.2, staggerDirection: -1 },
    },
  };
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
  };
  const codeString = `import Dropdown from 'src/components/dropdown/Dropdown'

<button onClick={() => setShowDropdown(!showDropdown)}>
  Dropdown
</button>
<Dropdown state={showDropdown}>
  <AccountDropwdown />
</Dropdown>`;

  return (
    <MainLayout>
      {/* <div className="-mt-[111px] h-[111px] bg-black/80 w-full"></div> */}
      <div className="relative -mt-[86px]">
        {/* <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: '3%' }}
        animate={{ opacity: 1, y: '0%', transition: { duration: 1 } }}
      >
      </motion.div>
      <div className="absolute inset-0 overflow-hidden bg-dark-900/90 backdrop-blur-2xl"></div> */}

        <motion.div className="relative w-full">
          <div className="bg-dots relative mx-auto max-w-[2560px] overflow-hidden pt-[116px]">
            {/*  */}
            {/* <div className="absolute inset-0 bg-dark-950/75"></div> */}
            {/* <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden bg-gradient-to-b from-gray-950/30 via-transparent to-gray-950/5 dark:from-dark-950 dark:via-dark-950/60 dark:to-dark-950"></div> */}
            <div className="relative mx-auto flex max-w-screen-xl items-center gap-8 pb-20 pt-10">
              <div className="relative col-span-8 flex items-center justify-center py-20 lg:col-span-8">
                <motion.div
                  variants={parentVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.3 }}
                  className="grid w-full grid-cols-12 gap-8"
                >
                  <div className="md:order-0 z-10 order-1 col-span-12 md:col-span-7">
                    <div className="pt-0 lg:pt-12">
                      <div className="relative flex flex-wrap justify-center px-4 md:justify-between">
                        <motion.div
                          variants={variants}
                          className="mb-5 px-1  lg:mb-2"
                        >
                          <div className="flex flex-wrap gap-2 text-5xl font-semibold !leading-tight tracking-tighter text-black md:text-6xl lg:gap-0 dark:text-white">
                            Building digital experience88
                          </div>
                        </motion.div>

                        <motion.div
                          variants={variants}
                          className="mb-10 pl-0 text-5xl font-semibold tracking-tighter text-black md:text-6xl dark:text-white"
                        >
                          Creative platform service
                        </motion.div>
                      </div>
                    </div>
                    <div className="w-full px-4 pt-10">
                      <motion.div
                        variants={variants}
                        className="relative mb-6 max-w-lg py-3"
                      >
                        <div className="dark:bg-dark-700/50 dark:border-dark-900/90 dark:border-t-dark-800 flex gap-8 rounded-full border border-gray-300/25 bg-gray-300/40 p-2 backdrop-blur-lg lg:p-3">
                          <div className="flex flex-1 items-center px-3">
                            <div className="dark:text-dark-400 line-clamp-1 text-sm text-gray-500">
                              Launch Your Service.
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setShowPopup(true);
                            }}
                            className="dark:hover:bg-primary-500 hover:bg-primary-600 flex gap-2 rounded-full bg-gray-950 px-3 py-2 text-sm text-gray-300 hover:text-white lg:px-5 lg:py-3 dark:bg-gray-300 dark:text-black dark:hover:text-black"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="h-5 w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                />
                              </svg>
                            </span>
                            <span className="hidden lg:flex">
                              Get Started!!!!
                            </span>
                          </button>
                        </div>
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="relative flex items-center justify-center gap-4 px-3 lg:w-4/5"
                      >
                        <div className="dark:bg-dark-700/75 rounded-lg bg-gray-200/40 p-3 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50.44096 49.52621"
                            className="fill-dark-300 stroke-dark-300 h-5 w-5"
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
                          <div className="dark:text-dark-300 mb-2 text-left text-sm text-gray-900">
                            OpenSource Projects
                          </div>
                          <div className="dark:text-dark-500 text-left text-xs text-gray-700">
                            다양한 프로젝트를 만나보시고 좋은 의견과 아이디어를
                            주시면 반영하겠습니다.
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="order-0 relative col-span-12 md:order-1 md:col-span-5">
                    <div className="absolute -right-[30%] w-[260px] transform md:left-1/2 md:-translate-x-1/2">
                      <motion.div variants={variants} className="">
                        <Image
                          src="/assets/images/Iphone14.png"
                          alt="Iphone14 Pro"
                          width={600}
                          style={{ width: "100%", height: "auto" }}
                          height={280}
                        ></Image>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            variants={parentVariants}
            className="dark:bg-dark-900/90 overflow-hidden bg-gray-100 py-16 lg:py-20"
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
            className="hidden pt-10"
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
                          <button className="dark:hover:bg-dark-950 dark:bg-dark-950 hover:after:from-secondary-500 hover:after:via-dark-900/25 hover:after:to-dark-900 hover:after:-trangray-x-1/2 group relative overflow-hidden rounded-md bg-gray-800 px-8 py-2 backdrop-blur-lg hover:bg-gray-950 hover:before:absolute hover:before:inset-0 hover:before:backdrop-blur-md hover:after:absolute hover:after:-bottom-16 hover:after:left-1/2 hover:after:z-[-1] hover:after:h-24 hover:after:w-24 hover:after:transform hover:after:rounded-full hover:after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hover:after:backdrop-blur-lg ">
                            <div className="text-dark-300 relative text-sm group-hover:text-white">
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
                      <button className="dark:hover:bg-dark-950 dark:bg-dark-900 hover:after:from-secondary-500 hover:after:via-dark-900/25 hover:after:to-dark-900 hover:after:-trangray-x-1/2 group relative overflow-hidden rounded-md bg-gray-800 px-8 py-2 backdrop-blur-lg hover:bg-gray-950 hover:before:absolute hover:before:inset-0 hover:before:backdrop-blur-md hover:after:absolute hover:after:-bottom-16 hover:after:left-1/2 hover:after:z-[-1] hover:after:h-24 hover:after:w-24 hover:after:transform hover:after:rounded-full hover:after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hover:after:backdrop-blur-lg ">
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
          <div className="bg-[url('/assets/images/tile_pattern.png')] py-10 dark:bg-none">
            <div className="mb-10 overflow-hidden ">
              <div className="mx-auto max-w-screen-lg px-3 pt-20">
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
                        <span className="text-base font-semibold text-black  dark:text-white">
                          WE WORK IT
                        </span>
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="text-sm font-light text-gray-400"
                      >
                        지제이웍스만의 방법으로 디지털 플랫폼을 구축하고 최상의
                        디지털 경험을 느낄 수 있도록 최선을 다 하고 있습니다.
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="overflow-scroll-hide overflow-y-hidden overflow-x-scroll pb-20">
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
                        style={{ width: "100%", height: "auto" }}
                        height={280}
                      ></Image>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-[2560px] overflow-hidden px-3 pb-5 pt-5 md:px-16">
            <div className="relative flex h-[640px] items-center justify-center overflow-hidden rounded-3xl bg-[url('/assets/images/bg10.jpg')] bg-cover bg-center bg-no-repeat">
              <div className="absolute inset-0 bg-gray-950/75"></div>
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
                    className="dark:text-dark-200/40 inline text-center text-5xl font-black text-gray-200/20 md:text-[5.5rem]"
                  >
                    WE ARE CRATEIVE
                  </motion.div>
                </div>
                <motion.div
                  variants={variants}
                  className="-mt-8 text-center text-2xl font-light text-gray-50 xl:text-4xl"
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
            <button
              onClick={() => {
                setShowPopup2(true);
              }}
              className="text-primary-500 mb-5"
            >
              클릭
            </button>
          </div>
          <Popup state={showPopup2} close={closePopup2}>
            <div className="p-8">
              <div className="mb-5 text-2xl font-bold text-gray-950">
                안녕하세요^^
              </div>
              <div className="text-sm font-normal text-gray-700">
                팝업의 역할을 할 것입니다. 팝업의 기능은 언제든 이런 형태로
                호출이 가능하게 할것이며 모달과는 다르게 아래에서 팝업이되며
                바탕을 누른다고 없어지지 않습니다. 그리고 기간의 값을 입력하면
                해당 기간 동안 팝업이 뜨지 않을 것입니다.
              </div>
            </div>
          </Popup>
        </div>
      </Popup>
    </MainLayout>
  );
}
