"use client";

import Link from "next/link";
import Image from "next/image";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Page = () => {
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
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
        variants={parentVariants}
        className="pt-20"
      >
        <div className="relative mx-auto max-w-screen-xl px-3">
          <div className="grid grid-cols-12 gap-0 lg:gap-8 py-10 block-line-t">
            <div className="col-span-12">
              <div className="flex justify-center">
                <div className="w-full lg:w-3/5 pt-4">
                  <motion.div
                    variants={variants}
                    className="mb-4 text-xl font-semibold text-black lg:text-4xl dark:text-white text-center !leading-tight tracking-tight"
                  >
                    BEST UI TEMPLATES
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="dark:text-dark-500 text-sm lg:text-base text-gray-500 text-center"
                  >
                    컴포넌트는 React와 Next.js에서 사용할 수 있습니다. 모든
                    Component는 tailwindcss와 Framer motion을 활용하여
                    애니메이션과 스타일을 정의했습니다.
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="flex justify-center pt-8"
                  >
                    <Link
                      href="#"
                      className="inline-block bg-primary-500 hover:bg-primary-600 text-white py-2 px-8 rounded-full text-sm font-semibold"
                    >
                      자세히보기
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="relative">
        <div className="block-line-t">
          <div className="mx-auto max-w-screen-xl py-8">
            <div className="rounded-2xl bg-gray-100 p-5"></div>
          </div>
        </div>
      </div>

      <div className="hidden pb-20">
        <div className="flex gap-4 justify-center items-start overflow-hidden">
          <div className="bg-gray-100 dark:bg-dark-900 rounded-3xl p-5 aspect-[460/120] min-h-[234px] w-[306px]"></div>
          <div className="bg-gray-100 dark:bg-dark-900 rounded-3xl p-5 aspect-[460/220] min-h-[434px] w-[306px]"></div>
          <div className="bg-gray-100 dark:bg-dark-900 rounded-3xl p-5 aspect-[460/320] min-h-[534px] w-[306px]"></div>
          <div className="bg-gray-100 dark:bg-dark-900 rounded-3xl p-5 aspect-[460/120] min-h-[334px] w-[306px]"></div>
          <div className="bg-gray-100 dark:bg-dark-900 rounded-3xl p-5 aspect-[460/120] min-h-[384px] w-[306px]"></div>
        </div>
      </div>
    </>
  );
};

export default Page;
