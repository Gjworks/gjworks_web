'use client'

import React from 'react'
import { motion } from 'framer-motion'

type SectionData = {
  img: string
  title: string
  desc: string
  date: string
}
const Sectionbox: React.FC<SectionData> = props => {
  return (
    <div className="col-span-1">
      <div className="relative bg-dark-700/25 rounded-xl p-5 flex-1 backdrop-blur-lg overflow-hidden">
        <div className="absolute inset-0">
          <div
            className={
              "bg-[url('" + props.img + "')] bg-no-repeat bg-cover h-full"
            }
          ></div>
        </div>
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-dark-900/25 via-dark-900/50 to-dark-900"></div>
        <div className="relative h-40"></div>
      </div>
      <div className="relative px-5 -mt-10">
        <motion.div
          initial={{ opacity: 0, y: '10%' }}
          animate={{
            opacity: 1,
            y: '0%',
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className="text-2xl font-extrabold text-primary-400 mb-5"
        >
          {props.title}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: '10%' }}
          animate={{
            opacity: 1,
            y: '0%',
            transition: { duration: 0.5, delay: 0.5 },
          }}
          className="text-sm text-dark-300 mb-10"
        >
          {props.desc}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.7 },
          }}
          className="text-xs text-dark-600"
        >
          Date : {props.date}
        </motion.div>
      </div>
    </div>
  )
}

export default Sectionbox
