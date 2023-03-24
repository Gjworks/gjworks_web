'use client'

import React, { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getData } from './server'

import Loading from 'src/components/loading/loading'

import Description from './description'

import PageWrap from 'src/components/sections/PageWrap'

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
    console.log(items)
    setDocumentInfo(items)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <PageWrap>
      <div className="max-w-screen-xl mx-auto px-3 py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 mb-2 lg:col-span-2 text-sm">
            <div className="lg:sticky lg:top-20 lg:mb-16 flex justify-between lg:block">
              <div className="mb-10">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-dark-300 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                  <span>Back</span>
                </Link>
              </div>
              <div>
                <div className="text-dark-400 text-scale-1000 text-sm">
                  Share this article
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <Link
                    href="/"
                    className="block text-dark-300 hover:text-primary-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 fill-gray-700 dark:fill-dark-300 dark:hover:fill-primary-400"
                      viewBox="0 0 512 512"
                    >
                      <title>ionicons-v5_logos</title>
                      <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    className="block text-dark-300 hover:text-primary-400"
                  >
                    <svg
                      id="Layer_1"
                      className="w-6 fill-gray-700 dark:fill-dark-300 dark:hover:fill-primary-400"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M480,257.35c0-123.7-100.3-224-224-224s-224,100.3-224,224c0,111.8,81.9,204.47,189,221.29V322.12H164.11V257.35H221V208c0-56.13,33.45-87.16,84.61-87.16,24.51,0,50.15,4.38,50.15,4.38v55.13H327.5c-27.81,0-36.51,17.26-36.51,35v42h62.12l-9.92,64.77H291V478.66C398.1,461.85,480,369.18,480,257.35Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-12 xl:col-span-10">
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
                className="col-span-12 lg:col-span-8 xl:col-span-9 text-dark-300 text-base leading-7"
                initial={{ opacity: 0, y: '20%' }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              >
                <Suspense fallback={<Loading />}>
                  <Description
                    desc={documentInfo?.data.description}
                  ></Description>
                </Suspense>
                <div className="pt-8 pb-16 border-t border-dark-500"></div>
              </motion.div>
              <motion.div
                className="col-span-12 space-y-8 lg:col-span-4 xl:col-span-3 text-dark-100 text-sm"
                initial={{ opacity: 0, y: '20%' }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.95 } }}
              >
                <div className="space-y-8 lg:sticky lg:top-20 lg:mb-16">
                  <div className="flex">
                    <div className="text-primary-500 border border-primary-500 bg-primary-800 bg-opacity-25 text-xs rounded-full py-1 px-3">
                      React
                    </div>
                  </div>
                  <div className="">
                    <div className="text-scale-1200 mb-6 text-white text-base">
                      On this page
                    </div>
                    <div>
                      <Link
                        href=""
                        className="block w-full mb-2 text-dark-400 hover:text-white text-sm"
                      >
                        This article
                      </Link>
                      <Link
                        href=""
                        className="block w-full mb-2 text-dark-400 hover:text-white text-sm"
                      >
                        Components example
                      </Link>
                      <Link
                        href=""
                        className="block w-full mb-2 text-dark-400 hover:text-white text-sm"
                      >
                        Next.js Conf 2022
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageWrap>
  )
}
export default Page
