'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getData } from './server'

import Loading from 'src/components/loading/loading'

import Description from './description'

//
interface PageProps {
  params: {
    postId: string
  }
}
const Page: React.FC<PageProps> = ({ params }) => {
  const [documentInfo, setDocumentInfo] = useState<{ [key: string]: any }>()

  let items
  console.log(params.postId)
  const fetchData = async () => {
    items = await getData()
    setDocumentInfo(items)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="max-w-screen-lg mx-auto px-3 py-16 lg:py-20">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-12 xl:col-span-12">
          <motion.div
            className="mb-16 max-w-5xl space-y-8"
            initial={{ opacity: 0, y: '20%' }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            <div className="space-y-4">
              <div className="text-primary-400">Blog post</div>
              <h1 className="text-white font-light text-3xl">
                {documentInfo?.data.title}
              </h1>
              <motion.div
                className="text-scale-500 flex space-x-2 text-sm text-dark-400 font-normal"
                initial={{ opacity: 0, y: '20%' }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              >
                <div></div>
                <div>카테고리</div>
                <div>Topic 34</div>
              </motion.div>
              <motion.div
                className="flex flex-col gap-3 pt-6 md:flex-row md:gap-0 lg:gap-3"
                initial={{ opacity: 0, y: '20%' }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              >
                <div className="mr-4 w-max">
                  <div className="flex items-center gap-3">
                    <div className="w-10">
                      <div className="w-10 h-10 rounded-full bg-dark-600"></div>
                    </div>
                    <div className="">
                      <div className="text-scale-1200 mb-0 text-sm text-white">
                        Jon Meyers
                      </div>
                      <div className="text-scale-900 mb-0 text-xs text-dark-400">
                        Developer Advocate
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="grid grid-cols-12 gap-8">
            <div className="hidden col-span-12">
              <div className=" flex items-center justify-center max-w-screen-lg w-full h-[480px] rounded-lg shadow-lg shadow-dark-900 bg-dark-800 mb-8 text-3xl font-extrabold text-dark-400/25">
                <div>
                  <div className="flex justify-center w-full mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-16 h-16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <div>No Image.</div>
                </div>
              </div>
            </div>
            <motion.div
              className="col-span-12"
              initial={{ opacity: 0, y: '20%' }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            >
              <Description desc={documentInfo?.data.description}></Description>
              <div className="pt-8 pb-16 "></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page
