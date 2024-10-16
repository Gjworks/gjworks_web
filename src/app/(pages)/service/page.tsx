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
        <div className="relative mx-auto max-w-screen-xl px-3">
          <div className="grid grid-cols-12 gap-0 lg:gap-8 py-10">
            <div className="col-span-12">
              <div className="flex justify-center">
                <div className="w-full lg:w-3/5">
                  <motion.div
                    variants={variants}
                    className="flex justify-center mb-6"
                  >
                    <span className="border border-gray-200 py-0.5 px-4 rounded-full text-sm text-gray-400">
                      Premium Quality
                    </span>
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="mb-4 text-xl font-semibold text-black lg:text-4xl dark:text-white text-center !leading-tight tracking-tight"
                  >
                    UI COMPONENTS
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="dark:text-dark-500 text-sm lg:text-base text-gray-500 text-center"
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
        <div className="max-w-[460px] mx-auto bg-gray-100 rounded-3xl p-12">
          <img src="/assets/images/Iphone14.png" alt="Iphone14" />
        </div>
      </div>
    </>
  )
}

export default Page
