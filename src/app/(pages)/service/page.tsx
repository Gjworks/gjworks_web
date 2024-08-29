'use client'

import Image from 'next/image'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const Page = () => {
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
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-3 pt-20 pb-20">
          <div className="text-3xl font-bold text-gray-700 dark:text-dark-400">
            나만의 서비스 만들기
          </div>
          <div className="text-3xl font-bold text-gray-700 dark:text-dark-400">
            필요한 모든 것이 한 곳에
          </div>
          <div className=" w-full flex justify-center gap-8 pt-20 pb-10">
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl dark:bg-gray-900 rotate-3 bg-[url('/assets/images/bg14.jpg')] bg-cover bg-center bg-no-repeat hover:rotate-0 transition-all duration-500 hover:scale-110 shadow-lg shadow-gray-400/75 dark:shadow-black"></div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl dark:bg-gray-900 -rotate-3 bg-[url('/assets/images/bg_phone.jpg')] bg-cover bg-center bg-no-repeat hover:rotate-0 transition-all duration-500 hover:scale-110 shadow-lg shadow-gray-400/75 dark:shadow-black"></div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl dark:bg-gray-900 rotate-3 bg-[url('/assets/images/bg17.jpg')] bg-cover bg-center bg-no-repeat hover:rotate-0 transition-all duration-500 hover:scale-110 shadow-lg shadow-gray-400/75 dark:shadow-black"></div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl dark:bg-gray-900 -rotate-3 bg-[url('/assets/images/bg18.jpg')] bg-cover bg-center bg-no-repeat hover:rotate-0 transition-all duration-500 hover:scale-110 shadow-lg shadow-gray-400/75 dark:shadow-black"></div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl dark:bg-gray-900 rotate-3 bg-[url('/assets/images/bg12.jpg')] bg-cover bg-center bg-no-repeat hover:rotate-0 transition-all duration-500 hover:scale-110 shadow-lg shadow-gray-400/75 dark:shadow-black"></div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl dark:bg-gray-900 -rotate-3 bg-[url('/assets/images/bg19.jpg')] bg-cover bg-center bg-no-repeat hover:rotate-0 transition-all duration-500 hover:scale-110 shadow-lg shadow-gray-400/75 dark:shadow-black"></div>
          </div>
        </div>
      </div>

      <div className=" py-10">
        <div className="mb-10 overflow-hidden ">
          <div className="mx-auto max-w-screen-xl px-3">
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
              <div className="hidden col-span-12 justify-center pt-12">
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
        <div className="overflow-scroll-hide overflow-y-hidden overflow-x-scroll py-20">
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
    </>
  )
}

export default Page
