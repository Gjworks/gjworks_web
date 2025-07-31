"use client";

import { motion } from "framer-motion";
import MainLayout from "src/layouts/fullLayout/Layout";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { createMetadata } from "@plextype/utils/metadata/createMetadata";
import type { Metadata } from "next";

// export const metadata: Metadata = createMetadata({
//   title: "지제이웍스(Gjworks)",
//   description: "지제이웍스 홈페이지에 오신걸 환영합니다.",
//   url: "https://gjworks.dev",
// });

export default function Page() {
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

  return (
    <MainLayout>
      {/* <div className="-mt-[111px] h-[111px] bg-dark-950/80 w-full"></div> */}
      <div className="relative">
        {/* <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: '3%' }}
        animate={{ opacity: 1, y: '0%', transition: { duration: 1 } }}
      >
      </motion.div>
      <div className="absolute inset-0 overflow-hidden bg-dark-900/90 backdrop-blur-2xl"></div> */}

        <div className="relative">
          {/*<div className="absolute left-1/2 -translate-x-1/2 w-full mx-auto h-[660px] ">*/}
          {/*  /!*<div className="relative h-[660px]  bg-[url(/assets/svg/world_map.svg)] bg-center bg-no-repeat"></div>*!/*/}
          {/*</div>*/}
          {/*<div className="absolute invisible md:visible left-1/2 -translate-x-1/2 top-0 w-[380px] h-[120px] bg-[url(/assets/svg/dotted.svg)] bg-cover bg-center bg-no-repeat"></div>*/}

          <div className="py-20">
            <div className="max-w-screen-xl mx-auto px-3 rounded-2xl">
              <div className="relative flex justify-center items-center rounded-2xl overflow-hidden">
                <motion.div
                  variants={parentVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-full"
                >
                  <div className="relative mb-12">
                    <motion.div variants={variants} className="px-1 lg:mb-2">
                      <div className="flex gap-0 sm:gap-2 flex-wrap justify-start text-4xl font-normal md:font-semibold  lg:text-6xl  w-full">
                        <div className="!leading-tight tracking-tight text-black">
                          Flexible Type
                        </div>
                        <div className="!leading-tight tracking-tight text-black">
                          {" "}
                          System
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="flex gap-0 sm:gap-2 flex-wrap justify-start pl-0 text-4xl font-normal md:font-semibold  lg:text-6xl  mb-12"
                    >
                      <div className="!leading-tight tracking-tight text-black">
                        Creative Platform
                      </div>
                      <div className="!leading-tight tracking-tight text-black">
                        Service
                      </div>
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="w-full px-1 lg:mb-2 text-sm md:text-base pb-4 lg:pb-0 text-gray-500 dark:text-dark-100"
                    >
                      지제이웍스는 웹과 앱을 개발하기 위한 소규모 개발팀입니다.
                    </motion.div>
                    <motion.div
                      variants={variants}
                      className="w-full px-1 lg:mb-2 text-sm md:text-base pb-4 lg:pb-0 text-gray-500 dark:text-dark-100"
                    >
                      우리는 혁신적이고 미래 지향적 인 기업, 신생 기업 및
                      비즈니스와 협력하여 매력적인 제품을 연구하고 개발합니다.
                    </motion.div>
                  </div>

                  <div className="flex items-center w-full md:w-2/5 h-[80px]">
                    <motion.div
                      variants={variants}
                      className="relative mx-auto flex items-center gap-4"
                    >
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[380px] h-[80px] bg-[url(/assets/svg/dotted.svg)] bg-cover bg-center bg-no-repeat"></div>
                      <div className="dark:bg-dark-800 rounded-lg bg-gray-100 p-3 backdrop-blur-2xl">
                        <Square3Stack3DIcon className="size-5 text-gray-700 dark:text-white stroke-1" />
                      </div>
                      <div className="flex-1">
                        <div className="dark:text-white mb-2 text-left text-sm text-gray-900 bg-white">
                          Platform Extensible
                        </div>
                        <div className="dark:text-dark-400 text-left text-xs text-gray-400 bg-white">
                          다양한 프로젝트를 만나보시고 좋은 의견과 아이디어를
                          주시면 반영하겠습니다.
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="max-w-screen-xl mx-auto px-3">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div
                  className={`bg-gray-200/75 hover:bg-gray-300/75 rounded-2xl p-10 h-[478px]`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto pt-20">
          <motion.div className="">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="w-full md:w-2/5 relative px-3 py-8">
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
                            <span className="text-sm text-gray-500">
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
                            className="dark:text-dark-500 text-sm text-gray-400"
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
              </div>
              <div className="col-span-7"></div>
            </div>
          </motion.div>
        </div>

        <div className="pb-20 overflow-hidden">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            variants={parentVariants}
            className="max-w-screen-xl mx-auto "
          >
            <div className="flex justify-start gap-4 md:gap-8 px-3">
              <div className="relative aspect-9/10 w-64 flex-none overflow-hidden sm:w-[480px]">
                <div className="rounded-2xl p-5 bg-gray-200/75 hover:bg-gray-300/75 transition-all duration-700 h-64"></div>
              </div>
              <div className="relative aspect-9/10 w-64 flex-none overflow-hidden sm:w-[480px]">
                <div className="rounded-2xl p-5 bg-gray-200/75 hover:bg-gray-300/75 transition-all duration-700 h-64"></div>
              </div>
              <div className="relative aspect-9/10 w-64 flex-none overflow-hidden sm:w-[480px]">
                <div className="rounded-2xl p-5 bg-gray-200/75 hover:bg-gray-300/75 transition-all duration-700 h-64"></div>
              </div>
              <div className="relative aspect-9/10 w-64 flex-none overflow-hidden sm:w-[480px]">
                <div className="rounded-2xl p-5 bg-gray-200/75 hover:bg-gray-300/75 transition-all duration-700 h-64"></div>
              </div>
              <div className="relative aspect-9/10 w-64 flex-none overflow-hidden sm:w-[480px]">
                <div className="rounded-2xl p-5 bg-gray-200/75 hover:bg-gray-300/75 transition-all duration-700 h-64"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
