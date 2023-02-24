'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

import PageWrap from 'components/sections/PageWrap'
import Sectionbox from 'components/sections/Sectionbox'

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
      <PageWrap>
        <div className="max-w-screen-2xl mx-auto py-8 xl:py-20 px-3">
          <motion.div className="text-white text-5xl font-semibold mb-16">
            Metaverse
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            <Sectionbox
              img="/assets/images/photo.jpg"
              title="Web Metaverse를 VR로 즐겨보세요."
              desc="Playcanvas를 활용하여 웹에서 VR HMD로 볼 수 있습니다. 언제 어디서든 이용 가능 합니다."
              date="2023 / 02 / 28"
            ></Sectionbox>
            <Sectionbox
              img="/assets/images/bg.jpg"
              title="Playcanvas"
              desc="Playcanvas를 활용하여 웹에서 접근이 가능한 메타버스 서비스를 구축 할 수 있게 도와드리겠습니다."
              date="2023 / 02 / 28"
            ></Sectionbox>
          </div>
        </div>
      </PageWrap>
    </>
  )
}

export default Page
