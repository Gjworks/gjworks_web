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
        <div className="max-w-screen-2xl mx-auto py-8 xl:py-20 px-3">
          <motion.div className="text-white text-5xl font-semibold">
            Web
          </motion.div>
        </div>
      </PageWrap>
    </>
  )
}

export default Page
