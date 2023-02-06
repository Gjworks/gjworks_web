"use client";

import React from 'react';
import Link from 'next/link'
import SafariBrower from 'components/viewer/SafariBrower';
import { motion } from "framer-motion";
import DefaultLayout from "components/layout/Layout";

export default function Page() {
  const parentVariants = {
    onscreen : {
      transition: { staggerChildren: 0.3 } 
    },
    offscreen : {
      transition: { staggerChildren: 0.3, staggerDirection: -1 } 
    }
  }
  const variants = {
    onscreen: { 
      opacity: [0,1], 
      transition : {
        duration: 0.6,
      }
    },
    offscreen: { 
      opacity: 0
    }
  }
  return (
    <DefaultLayout>
      <div className="-mt-20">
        <motion.div className="relative pt-20 lg:pt-10 overflow-hidden">
          <motion.div className="absolute inset-0 bg-[url('/assets/images/bg2.jpg')] bg-no-repeat bg-cover bg-top" initial={{opacity:0, y:"3%"}} animate={{opacity:1, y:"0%", transition:{duration:1}}}>
          </motion.div>
          <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-dark-800/25 via-dark-900/25 to-dark-900">
          </div>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.3 }} className="relative flex justify-center items-center max-w-screen-2xl mx-auto px-3 lg:px-8 py-20 h-auto lg:h-[80vh] ">
            <div>
              <motion.div className="text-base font-bold text-black dark:text-white mb-2 text-center">
                TEAM THAT MAKES THE SERVICE
              </motion.div>
              <motion.div className="text-6xl font-semibold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-600">
                Build web and app <br></br>quickly and simply
              </motion.div>
              <motion.div className="text-gray-600 dark:text-dark-50 text-base text-center">서비스에 도움이 되는 제품을 만들어 드리겠습니다.</motion.div>
              <motion.div className="text-center block pt-10">
                <span className="inline-block border border-gray-700 dark:border-dark-50 py-2 px-5 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded cursor-pointer">Contact us</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <div className="bg-gray-50 dark:bg-dark-900 bg-opacity-75 py-20">
          <div className="max-w-screen-2xl mx-auto px-3 lg:px-8">
            <div className="w-full">
              <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.3 }} variants={parentVariants}  className="w-full lg:w-2/3">
                <motion.div className="text-primary-400 mb-5" variants={variants}>
                  Constraint-based
                </motion.div>
                <motion.div variants={variants} className="text-2xl font-bold text-black dark:text-white mb-7">
                  An API for your design system.
                </motion.div>
                <motion.div variants={variants} className="text-base text-gray-400 dark:text-dark-300 mb-6">
                  지제이웍스는 2018 년 처음시작한 웹과 앱을 개발하기 위한 소규모 개발팀입니다. 
                  우리는 혁신적이고 미래 지향적 인 기업, 신생 기업 및 비즈니스와 협력하여 매력적인 제품을 연구하고 개발합니다.
                </motion.div>
                <motion.div variants={variants} className="inline rounded-full bg-dark-500 py-2 px-5 text-sm text-gray-300 dark:text-dark-200 hover:text-white hover:bg-dark-400 cursor-pointer">
                  Read more
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="hidden py-20">
          <div className="max-w-screen-2xl mx-auto  px-3 lg:px-8">
            <div className="flex justify-center mb-6">
              <div className="inline font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-200 to-orange-300 text-center pt-20">
                항상 최신 기술과 트랜드<br></br>
                모바일과 PC의 컨셉을 하나로
              </div>
            </div>
            <div className="flex justify-center mb-10">
              <Link href="/Contact" className="border border-white rounded-full py-1 px-10 text-white text-base hover:bg-white hover:text-black">
                  Contact us
              </Link>
            </div>
          </div>
        </div>

        <div className="py-20 hidden">
          <div className="max-w-screen-2xl mx-auto  px-3 lg:px-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 lg:col-span-1">
                <div className="flex justify-center">
                  <div className="inline font-black text-7xl text-dark-500 text-center" >
                    Full Stack
                  </div>
                </div>
                <div className="font-thin text-3xl text-dark-100 text-center -mt-6">Responsive everything.</div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="text-sm text-dark-300 mb-3">
                  Wrestling with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.
                </div>
                <div className="text-sm text-dark-300">Throw a screen size in front of literally any utility class and watch it magically apply at a specific breakpoint.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 bg-dark-800/50">
          <div className="max-w-screen-2xl mx-auto px-3">
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.3 }} variants={parentVariants}   className="grid grid-cols-2 gap-10 py-20">
              <div className="col-span-2 lg:col-span-1">
                <motion.div variants={variants} className="text-3xl font-semibold mb-8 text-white">
                  One based system
                </motion.div>
                <motion.div variants={variants} className="text-dark-300 text-base">
                  최신 Front-end 기술을 기반으로 하나의 통합된 웹과 앱서비스를 동시에 할 수 있도록 제작하였습니다.
                </motion.div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                
              </div>
            </motion.div>
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.3 }} variants={parentVariants} className="grid grid-cols-2 gap-10 py-20">
              <motion.div variants={variants} className="col-span-2 lg:col-span-1">
                <SafariBrower />
              </motion.div>
              <div className="col-span-2 lg:col-span-1">
                <motion.div variants={variants} className="text-3xl font-semibold mb-8 text-white">
                  UI Components Animation
                </motion.div>
                <motion.div variants={variants} className="text-dark-300 text-base mb-10">
                  Framer를 활용하여 Components각각의 애니메이션을 감성까지 고려하여 개발하였습니다. 컴포넌트 별로 구현하여 UI를 변경하거나 import만 하면 쓸 수 있으므로 굉장히 편리합니다. React 환경이면 됩니다. <br></br> Modal, Accodian, Dropdown등 기본적인 UI 뿐만아니라 Form과 Button등 기본적인 element 까지 고려하여 작업하였습니다.
                </motion.div>
                <motion.div variants={variants} className="inline-block px-5 text-sm py-2 rounded-sm border border-dark-300 text-dark-300 hover:bg-white hover:text-dark-900">Component 구매하기</motion.div>
              </div>
            </motion.div>
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.3 }} variants={parentVariants} className="grid grid-cols-2 gap-10 py-20">
              <div className="col-span-2 lg:col-span-1">
                <motion.div variants={variants} className="text-3xl font-semibold mb-8 text-white">
                  Metaverse Platform
                </motion.div>
                <motion.div variants={variants} className="text-dark-300 text-base">
                  Playcanvas를 활용하여 메타버스를 직접 구현하고 서비스와 연계하여 활용 할 수 있도록 개발 합니다.
                </motion.div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                .
              </div>
            </motion.div>
          </div>
        </div>
        <div className="py-20 w-full overflow-hidden bg-dark-900">
          <div className="max-w-screen-2xl mx-auto px-3">
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.3 }} variants={parentVariants} className="flex gap-8 w-full">
              <motion.div variants={variants} className="w-[80%] flex-none aspect-[1216/640] rounded-xl bg-gradient-to-br from-dark-700 via-dark-800 to-dark-800 h-[550px] cursor-pointer shadow-xl shadow-dark-900 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0">
                {/* <Image src="/assets/images/MacbookPro.png" quality={100} layout="responsive" width="100%" height="100%" alt=""></Image> */}
              </motion.div>
              <motion.div variants={variants} className="w-[80%] flex-none aspect-[1216/640] rounded-xl bg-gradient-to-br from-dark-700 via-dark-800 to-dark-800 h-[550px] cursor-pointer shadow-xl shadow-dark-900 transition duration-300 hover:shadow-xs -translate-y-4 hover:translate-y-0"></motion.div>
            </motion.div>
          </div>
        </div>
        <div className="py-20">
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.3 }} variants={parentVariants} className="max-w-screen-2xl mx-auto px-3 lg:px-8 overflow-hidden">
            <div className="flex justify-center">
              <motion.div variants={variants} className="inline font-black text-5xl lg:text-7xl text-gray-700 dark:text-dark-400 text-center">
                Fast perfermance
              </motion.div>
            </div>
            <motion.div variants={variants} className="font-thin text-xl lg:text-3xl text-gray-400 dark:text-dark-100 text-center -mt-6">Responsive everything.</motion.div>
          </motion.div>
        </div>
      </div>
      </DefaultLayout>
  )
}
