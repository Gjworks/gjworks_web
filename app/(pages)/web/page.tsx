'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

import PageWrap from 'src/components/sections/PageWrap'

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
        <div className="max-w-screen-lg mx-auto py-8 xl:py-20 px-3">
          <motion.div className="text-primary-400 text-5xl font-semibold">
            Web
          </motion.div>
        </div>
        <div className="relative max-w-screen-xl mx-auto px-3">
          <div className="relative h-[445px] bg-[url('/assets/images/yellow/yellow_bg3.jpg')] bg-no-repeat bg-cover bg-center rounded"></div>
        </div>
      </PageWrap>
    </>
  )
}

export default Page
