'use client'

import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="flex items-center pt-10 pb-16 gap-4">
          <div className="dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.25}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div className="dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="text-xs font-bold text-gray-400 dark:text-gray-600 uppercase">
            Service
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-3 pb-20">
        <div className="text-6xl font-extrabold text-gray-950 dark:text-white uppercase mb-12">
          Service <span className="font-thin">⌘ ⌥ ⇧</span>
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
          <div className="text-7xl lg:text-9xl font-extrabold text-gray-100 dark:text-dark-600/40 uppercase">
            SERVICE Create
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
