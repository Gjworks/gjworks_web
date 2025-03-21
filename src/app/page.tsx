"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SafariBrower from "@plextype/components/viewer/SafariBrower";
import { motion } from "framer-motion";
import MainLayout from "src/layouts/fullLayout/Layout";
import Codehighlighte from "@plextype/components/codehighlight/Codehighlighter";
import Popup from "@plextype/components/modal/Popup";
import {
  PaperAirplaneIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = (close) => {
    setShowPopup(close);
  };

  const [showPopup2, setShowPopup2] = useState(false);
  const closePopup2 = (close) => {
    setShowPopup2(close);
  };

  const parentVariants = {
    onscreen: {
      transition: { staggerChildren: 0.05 },
    },
    offscreen: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variants = {
    onscreen: {
      y: 0,
      opacity: [0, 1],
      transition: {
        duration: 0.5,
      },
    },
    offscreen: {
      y: 25,
      opacity: 0,
    },
  };
  const variants2 = {
    onscreen: {
      opacity: [0, 1],
      transition: {
        duration: 0.5,
      },
    },
    offscreen: {
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
      <div className="relative pt-8">
        {/* <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: '3%' }}
        animate={{ opacity: 1, y: '0%', transition: { duration: 1 } }}
      >
      </motion.div>
      <div className="absolute inset-0 overflow-hidden bg-dark-900/90 backdrop-blur-2xl"></div> */}

        <div className="relative">
          <div className="block-line">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6 border-r border-gray-950/5  py-0 md:py-40">
                <motion.div
                  variants={parentVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.3 }}
                  className="grid w-full grid-cols-12 gap-8 py-3"
                >
                  <div className="md:order-0 z-10 order-1 col-span-12 md:col-span-12">
                    <div className=" border-b border-gray-950/5">
                      <div className="relative px-4 ">
                        <motion.div
                          variants={variants}
                          className="px-1 lg:mb-2"
                        >
                          <div className="flex flex-wrap text-4xl font-normal md:font-medium !leading-tight tracking-tight text-black lg:text-5xl lg:gap-0 dark:text-white w-full">
                            Building digital experience ✨
                          </div>
                        </motion.div>
                        <motion.div
                          variants={variants}
                          className="mb-6 pl-0 text-4xl font-normal md:font-medium tracking-tight text-black lg:text-5xl dark:text-white"
                        >
                          Creative platform service
                        </motion.div>
                        <motion.div
                          variants={variants}
                          className="px-1 lg:mb-2 text-base pb-4 lg:pb-0"
                        >
                          지제이웍스는 웹과 앱을 개발하기 위한 소규모
                          개발팀입니다. 우리는 혁신적이고 미래 지향적 인 기업,
                          신생 기업 및 비즈니스와 협력하여 매력적인 제품을
                          연구하고 개발합니다.
                        </motion.div>
                      </div>
                    </div>
                    <div className="w-full border-b border-gray-950/5 my-8 border-t">
                      <div className="flex gap-[1px] bg-gray-200/75 text-sm">
                        <div className="flex items-center gap-2 flex-1 py-3 px-4 bg-gray-50 cursor-pointer hover:bg-gray-100">
                          <motion.div variants={variants}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.25}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                              />
                            </svg>
                          </motion.div>
                          <motion.div variants={variants}>
                            포트폴리오
                          </motion.div>
                        </div>
                        <div className="flex items-center gap-2 flex-1 py-3 px-4 bg-gray-50 cursor-pointer hover:bg-gray-100">
                          <motion.div variants={variants}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.25}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                              />
                            </svg>
                          </motion.div>
                          <motion.div variants={variants}>
                            Documentation
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4 border-t border-b border-gray-950/5 py-3">
                      <motion.div
                        variants={variants}
                        className="relative mx-auto flex items-center gap-4 px-3"
                      >
                        <div className="dark:bg-dark-700/75 rounded-lg bg-gray-100 p-3 backdrop-blur-2xl">
                          <Square3Stack3DIcon className="size-5 text-gray-900 dark:text-white stroke-1" />
                        </div>
                        <div className="flex-1">
                          <div className="dark:text-dark-100 mb-2 text-left text-sm text-gray-950">
                            Various Projects
                          </div>
                          <div className="dark:text-dark-300 text-left text-xs text-gray-400">
                            다양한 프로젝트를 만나보시고 좋은 의견과 아이디어를
                            주시면 반영하겠습니다.
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-span-12 md:col-span-6 border-l border-gray-950/5">
                <div className="p-2 bg-gray-100 h-[440px] md:h-full border-l border-gray-950/5">
                  <div className="relative bg-[url('/assets/images/bg46.jpg')] bg-no-repeat bg-cover bg-center rounded-2xl overflow-hidden h-full">
                    <div className="absolute inset-0 overflow-hidden bg-[url('/assets/images/scene_bg_dot.png')]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <motion.div className="">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-5 relative px-3 py-8">
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={parentVariants}
                  className="flex items-center h-full"
                >
                  <div className="">
                    <div className="flex">
                      <div className="w-full">
                        <motion.div variants={variants} className="mb-4">
                          <span className="text-sm text-primary-600">
                            Premium Quality
                          </span>
                        </motion.div>
                        <motion.div
                          variants={variants}
                          className="mb-4 text-xl font-semibold text-black lg:text-2xl dark:text-white !leading-tight tracking-tight"
                        >
                          BEST UI TEMPLATES
                        </motion.div>
                        <motion.div
                          variants={variants}
                          className="dark:text-dark-500 text-sm text-gray-500"
                        >
                          컴포넌트는 React와 Next.js에서 사용할 수 있습니다.
                          모든 Component는 tailwindcss와 Framer motion을
                          활용하여 애니메이션과 스타일을 정의했습니다.
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-span-7"></div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.1 }}
                variants={parentVariants}
                className="col-span-12 relative"
              >
                <div className="max-w-screen-xl mx-auto px-3 md:py-20 block-line-t">
                  <div className="flex justify-center flex-wrap w-full pt-20">
                    <div className="w-full md:w-64 flex items-center mb-20 md:mb-0">
                      <div>
                        <motion.div
                          variants={variants}
                          className="text-base font-semibold mb-3 dark:text-dark-100"
                        >
                          다양한 템플릿을 제공합니다.
                        </motion.div>
                        <motion.div
                          variants={variants}
                          className="text-xs text-gray-400"
                        >
                          디자인이 힘든 엔지니어들을 위해 다양한 템플릿이
                          준비되어 있습니다.
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="relative flex items-center bg-gray-50/50 dark:bg-dark-950/50 justify-center border border-gray-200/75 dark:border-dark-800/75 rounded-full h-64 md:w-96 w-64 md:h-96 shadow-2xl shadow-gray-100 dark:shadow-dark-900">
                        <div className="flex items-center justify-center border border-gray-200/75 dark:border-dark-800/75 rounded-full w-40 md:w-64 h-40 md:h-64 bg-white/50 dark:bg-black/50">
                          <motion.div
                            animate={{
                              rotate: -360,
                            }}
                            transition={{
                              duration: 9,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute w-40 h-40 rounded-full before:w-4 before:h-4 before:bg-gray-200 before:rounded-full before:absolute before:-left-[2.002rem]"
                          ></motion.div>
                          <motion.div
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 13,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute w-64 h-64 rounded-full before:w-4 before:h-4 before:bg-gray-200 before:rounded-full before:absolute before:-left-[1.812rem]"
                          ></motion.div>

                          <motion.div
                            animate={{
                              x: [0, 0, 0, 0, 0], // x축에서 좌우로 미세한 움직임
                              y: [0, 8, 0, -8, 0], // y축에서 상하로 미세한 움직임
                            }}
                            variants={variants2}
                            transition={{
                              duration: 6, // 2초 동안 애니메이션 실행
                              ease: "linear",
                              repeat: Infinity, // 무한 반복
                              repeatType: "loop", // 애니메이션이 끝나면 다시 처음부터 반복
                            }}
                            className="absolute text-center shadow-lg shadow-gray-950/20 dark:shadow-black top-10 md:top-16 left-0 rounded-full py-2 px-5 bg-gray-950 text-sm text-white"
                          >
                            Components
                          </motion.div>
                          <motion.div
                            animate={{
                              x: [0, 4, 0, -4, 0], // x축에서 좌우로 미세한 움직임
                              y: [0, 0, 0, 0, 0], // y축에서 상하로 미세한 움직임
                            }}
                            variants={variants2}
                            transition={{
                              duration: 2, // 2초 동안 애니메이션 실행
                              ease: "linear",
                              repeat: Infinity, // 무한 반복
                              repeatType: "loop", // 애니메이션이 끝나면 다시 처음부터 반복
                            }}
                            className="absolute text-center shadow-lg shadow-gray-950/20 dark:shadow-black top-10 -right-10 rounded-full py-2 px-5 bg-primary-600 text-sm text-white"
                          >
                            Databases
                          </motion.div>
                          <motion.div
                            variants={variants2}
                            className="absolute text-center shadow-lg shadow-gray-950/20 dark:shadow-black -top-10 left-1/2 -translate-x-1/2 rounded-full py-2 px-5 bg-white text-sm text-gray-950"
                          >
                            Mobile
                          </motion.div>
                          <motion.div
                            variants={variants2}
                            className="text-2xl font-semibold dark:text-white text-gray-950"
                          >
                            Platform
                          </motion.div>
                          <motion.div
                            animate={{
                              x: [0, 8, 0, -4, 0], // x축에서 좌우로 미세한 움직임
                              y: [0, 2, 0, -2, 0], // y축에서 상하로 미세한 움직임
                            }}
                            transition={{
                              duration: 5, // 2초 동안 애니메이션 실행
                              ease: "linear",
                              repeat: Infinity, // 무한 반복
                              repeatType: "loop", // 애니메이션이 끝나면 다시 처음부터 반복
                            }}
                            variants={variants2}
                            className="absolute text-center shadow-lg shadow-gray-950/20 dark:shadow-black bottom-28 -left-10 rounded-full py-2 px-5 bg-white text-sm text-primary-600"
                          >
                            Service
                          </motion.div>
                          <motion.div
                            variants={variants2}
                            className="absolute text-center shadow-lg shadow-gray-950/20 dark:shadow-black bottom-20 -right-10 rounded-full py-2 px-5 bg-gray-600 text-sm text-white"
                          >
                            Dashboard
                          </motion.div>
                          <motion.div
                            animate={{
                              x: [0, 0, 0, 0, 0], // x축에서 좌우로 미세한 움직임
                              y: [0, 4, 0, -6, 0], // y축에서 상하로 미세한 움직임
                            }}
                            variants={variants2}
                            transition={{
                              duration: 4, // 2초 동안 애니메이션 실행
                              ease: "linear",
                              repeat: Infinity, // 무한 반복
                              repeatType: "loop", // 애니메이션이 끝나면 다시 처음부터 반복
                            }}
                            className="absolute text-center shadow-lg shadow-gray-950/20 dark:shadow-black bottom-6 right-1/2 -translate-x-1/2 rounded-full py-2 px-5 bg-gray-950 text-sm text-primary-300"
                          >
                            Animation
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-64 flex justify-end items-center mt-12 md:mt-0 pb-4 md:pb-0">
                      <div>
                        <motion.div
                          variants={variants}
                          className="text-base font-semibold mb-3 dark:text-dark-100"
                        >
                          풀스택을 위한 플랫폼입니다.
                        </motion.div>
                        <motion.div
                          variants={variants}
                          className="text-xs text-gray-400"
                        >
                          프론트엔드와 백엔드 모두 개발 가능한 개발자라면 손쉽게
                          웹서비스를 구현할 수 있습니다.
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
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
  );
}
