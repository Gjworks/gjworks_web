'use client'

import Image from 'next/image'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Page = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="flex items-center pt-10 pb-16 gap-2">
          <div className="text-gray-950 dark:text-white">
            <HomeIcon className="size-3.5 stroke-1.5" />
          </div>
          <div className="text-gray-700 dark:text-white">
            <ChevronRightIcon className="size-3.5 stroke-1.5" />
          </div>
          <div className="text-xs font-bold text-gray-400 dark:text-gray-600 uppercase">
            Service
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-3 pb-20">
        <div className="text-6xl font-extrabold text-gray-950 dark:text-white uppercase mb-12">
          Service
        </div>
        <div className="text-3xl font-bold text-gray-700 dark:text-dark-400">
          효율적인 업무 진행에
        </div>
        <div className="text-3xl font-bold text-gray-700 dark:text-dark-400">
          필요한 모든 것이 한 곳에
        </div>
      </div>
      <div className="pb-20 pt-20">
        <div className="realtive max-w-[2560px] mx-auto">
          <div className="text-7xl lg:text-9xl font-extrabold text-gray-200 dark:text-dark-600/40 uppercase">
            SERVICE Create
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
