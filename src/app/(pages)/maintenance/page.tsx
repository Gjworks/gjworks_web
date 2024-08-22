'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
      <div className="max-w-screen-xl mx-auto py-8 xl:pt-20 px-3">
        <div>
          <motion.div className="bg-gradient-to-r from-primary-400 via-primary-500 to-black inline-block text-transparent bg-clip-text text-5xl font-semibold mb-4">
            Maintenance
          </motion.div>
        </div>
        <div>
          <motion.div className="bg-gradient-to-r from-primary-400 via-primary-500 to-black inline-block text-transparent bg-clip-text text-3xl font-semibold">
            새로운 세대의 애플리케이션을 위한 플랫폼
          </motion.div>
        </div>
      </div>
      <div className="relative max-w-screen-xl mx-auto px-3 pb-20">
        <div className="relative h-[645px] bg-[url('/assets/images/yellow/yellow_bg6.jpg')] bg-no-repeat bg-cover bg-center rounded"></div>
      </div>
    </>
  )
}

export default Page
