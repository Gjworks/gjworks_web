'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Sectionbox from 'src/components/sections/Sectionbox'

const Page = props => {
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
    <>
      <div className="max-w-screen-xl mx-auto py-8 xl:py-20 px-3">
        {/* <motion.div className="text-black dark:text-white text-5xl font-semibold mb-16">
            Portfolio
          </motion.div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <Sectionbox
            thumb="/assets/images/MackbookPro.png"
            title="Web Metaverse를 VR로 즐겨보세요."
            desc="Playcanvas를 활용하여 웹에서 VR HMD로 볼 수 있습니다. 언제 어디서든 이용 가능 합니다."
            date="2023 / 02 / 28"
          ></Sectionbox>
          <Sectionbox
            thumb="/assets/images/photo.jpg"
            title="Playcanvas"
            desc="Playcanvas를 활용하여 웹에서 접근이 가능한 메타버스 서비스를 구축 할 수 있게 도와드리겠습니다."
            date="2023 / 02 / 28"
          ></Sectionbox>
        </div>
      </div>
    </>
  )
}

export default Page
