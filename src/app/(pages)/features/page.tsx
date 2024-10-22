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
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
        variants={parentVariants}
        className="pt-20 pb-10"
      >
        <div className="relative mx-auto max-w-screen-xl pt-20 px-3">
          <div className="grid grid-cols-12 gap-0 lg:gap-8 py-10">
            <div className="col-span-12">
              <div className="flex ">
                <div className="w-full md:w-2/5">
                  <motion.div
                    variants={variants}
                    className="mb-4 text-xl font-semibold text-black lg:text-4xl dark:text-white !leading-tight tracking-tight"
                  >
                    <span className="font-extrabold">지제이웍스</span>는 상호
                    인터렉션을 통해 사용자 경험을 높이는 솔루션을 제공합니다.
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="dark:text-dark-500 text-sm lg:text-base text-gray-500"
                  >
                    컴포넌트는 React와 Next.js에서 사용할 수 있습니다. 모든
                    Component는 tailwindcss와 Framer motion을 활용하여
                    애니메이션과 스타일을 정의했습니다.
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="pb-20">
        <div className="flex gap-4 justify-center items-start overflow-hidden">
          <div className="bg-gray-100 rounded-3xl p-5 aspect-[460/120] min-h-[234px] w-[25%] bg-[url('/assets/images/bg38.jpg')] bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-gray-100 rounded-3xl p-5 aspect-[460/220] min-h-[434px] w-[25%]"></div>
          <div className="bg-gray-100 rounded-3xl p-5 aspect-[460/320] min-h-[534px] w-[25%]"></div>
          <div className="bg-gray-100 rounded-3xl p-5 aspect-[460/120] min-h-[334px] w-[25%]"></div>
        </div>
      </div>
    </>
  )
}

export default Page
