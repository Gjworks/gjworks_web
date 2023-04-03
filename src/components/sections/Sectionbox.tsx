'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type SectionData = {
  thumb: string
  title: string
  desc: string
  date: string
}
const Sectionbox: React.FC<SectionData> = props => {
  return (
    <motion.div
      className="col-span-1"
      whileHover={{
        y: '3%',
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
    >
      <Link href="/metaverse">
        <div className="relative dark:bg-dark-700/25 rounded-xl p-5 flex-1 backdrop-blur-lg overflow-hidden">
          <div className="absolute inset-0">
            <div
              className={
                "bg-[url('" + props.thumb + "')] bg-no-repeat bg-cover h-full"
              }
            ></div>
          </div>
          <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-gray-300/50 via-gray-300/25 to-white dark:from-dark-700/25 dark:via-dark-800/50 dark:to-dark-900"></div>
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
            className="text-lg font-medium text-black dark:text-white mb-2"
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
            className="text-xs text-dark-400"
          >
            Date : {props.date}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export default Sectionbox
