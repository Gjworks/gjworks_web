'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SafariBrower from '@plextype/components/viewer/SafariBrower'
import { motion } from 'framer-motion'
import MainLayout from 'src/layouts/main/Layout'
import Codehighlighte from '@plextype/components/codehighlight/Codehighlighter'
import Popup from '@plextype/components/modal/Popup'
import {
  PaperAirplaneIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline'

export default function Page() {
  const [showPopup, setShowPopup] = useState(false)
  const closePopup = close => {
    setShowPopup(close)
  }

  const [showPopup2, setShowPopup2] = useState(false)
  const closePopup2 = close => {
    setShowPopup2(close)
  }

  const parentVariants = {
    onscreen: {
      transition: { staggerChildren: 0.2 },
    },
    offscreen: {
      transition: { staggerChildren: 0.2, staggerDirection: -1 },
    },
  }
  const variants = {
    onscreen: {
      y: 0,
      opacity: [0, 1],
      transition: {
        duration: 0.4,
      },
    },
    offscreen: {
      y: 25,
      opacity: 0,
    },
  }
  const codeString = `import Dropdown from 'src/components/dropdown/Dropdown'

<button onClick={() => setShowDropdown(!showDropdown)}>
  Dropdown
</button>
<Dropdown state={showDropdown}>
  <AccountDropwdown />
</Dropdown>`

  return (
    <MainLayout>
      {/* <div className="-mt-[111px] h-[111px] bg-black/80 w-full"></div> */}
      <div className="relative">
        {/* <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: '3%' }}
        animate={{ opacity: 1, y: '0%', transition: { duration: 1 } }}
      >
      </motion.div>
      <div className="absolute inset-0 overflow-hidden bg-dark-900/90 backdrop-blur-2xl"></div> */}

        <div className="relative max-w-screen-3xl mx-auto px-3 pb-20">
          <div className="relative bg-[url('/assets/images/bg46.jpg')] bg-no-repeat bg-cover bg-center rounded-b-3xl overflow-hidden">
            <div className="absolute inset-0 overflow-hidden bg-[url('/assets/images/scene_bg_dot.png')]"></div>
            <div className="relative flex justify-center items-center py-20">
              <div className="relative w-full py-0 lg:py-20 dark:border-0 overflow-hidden ">
                <div className="relative mx-auto max-w-screen-lg gap-8 pt-0">
                  <div className="relative flex items-center justify-center pt-20 pb-[220px] lg:pb-20 lg:col-span-8 z-10">
                    <motion.div
                      variants={parentVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: false, amount: 0.3 }}
                      className="grid w-full grid-cols-12 gap-8"
                    >
                      <div className="md:order-0 z-10 order-1 col-span-12 md:col-span-12">
                        <div className="">
                          <div className="relative grid grid-cols-1 gap-1 px-4">
                            <motion.div
                              variants={variants}
                              className="col-span-1 px-1 lg:mb-2"
                            >
                              <div className="flex flex-wrap gap-2 text-4xl font-normal md:font-medium !leading-tight tracking-tight text-white lg:text-5xl lg:gap-0 dark:text-white w-full justify-center text-center">
                                Building digital experience ✨
                              </div>
                            </motion.div>

                            <motion.div
                              variants={variants}
                              className="mb-10 pl-0 text-4xl font-normal md:font-medium tracking-tight text-white lg:text-5xl dark:text-white text-center"
                            >
                              Creative platform service
                            </motion.div>
                          </div>
                        </div>
                        <div className="w-full px-4">
                          <motion.div
                            variants={variants}
                            className="relative mx-auto mb-6 max-w-lg py-3"
                          >
                            <div className="flex gap-8 rounded-full bg-gray-950/50 dark:bg-dark-900/30 p-2 backdrop-blur-lg lg:p-2">
                              <div className="flex flex-1 items-center px-3">
                                <div className="dark:text-dark-400 line-clamp-1 text-sm text-gray-100">
                                  Launch Your Service.
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  setShowPopup(true)
                                }}
                                className="flex gap-2 rounded-full bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-500 dark:text-white px-3 py-1.5 text-sm text-white hover:bg-primary-400 hover:text-white lg:px-5 lg:py-3"
                              >
                                <span>
                                  <PaperAirplaneIcon className="size-5 stroke-1" />
                                </span>
                                <span className="hidden lg:flex">
                                  Get Started
                                </span>
                              </button>
                            </div>
                          </motion.div>
                          <motion.div
                            variants={variants}
                            className="relative mx-auto flex items-center justify-center gap-4 px-3 md:w-3/5 lg:w-2/5"
                          >
                            <div className="dark:bg-dark-700/75 rounded-lg bg-white p-3 backdrop-blur-2xl">
                              <Square3Stack3DIcon className="size-5 text-gray-900 dark:text-white stroke-1" />
                            </div>
                            <div className="flex-1">
                              <div className="dark:text-dark-100 mb-2 text-left text-sm text-gray-50">
                                Various Projects
                              </div>
                              <div className="dark:text-dark-300 text-left text-xs text-gray-400">
                                다양한 프로젝트를 만나보시고 좋은 의견과
                                아이디어를 주시면 반영하겠습니다.
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-0 bottom-0 rounded-tl-3xl pl-3 pt-3 bg-white z-40 max-w-[410px]">
              <div className="absolute -left-[30px] -bottom-[2px] z-50 bg-no-repeat w-8 h-8 -rotate-90">
                <img src="/assets/svg/roundBox.svg" />
              </div>
              <div className="rounded-3xl hover:bg-gray-100">
                <div className="px-5 py-4">
                  <div className="text-lg font-semibold">
                    Self Made React UI Components
                  </div>
                  <div className="text-gray-500 text-sm">
                    Tailwindcss + Framer motion을 활용하여 자체 제작한 UI
                    컴포넌트가 있습니다.
                  </div>
                  <div className="pt-12 text-sm hover:underline">
                    자세히보기
                  </div>
                </div>
              </div>
              <div className="absolute -right-[2px] -top-[30px] z-50 bg-no-repeat w-8 h-8 -rotate-90">
                <img src="/assets/svg/roundBox.svg" />
              </div>
            </div>
          </div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            variants={parentVariants}
            className="py-20"
          >
            <div className="relative mx-auto max-w-screen-xl px-3">
              <div className="grid grid-cols-12 gap-0 lg:gap-8 py-10">
                <div className="col-span-12">
                  <div className="flex justify-center">
                    <div className="w-full lg:w-3/5">
                      <motion.div
                        variants={variants}
                        className="flex justify-center mb-6"
                      >
                        <span className="border border-gray-200 py-0.5 px-4 rounded-full text-sm text-gray-400">
                          Premium Quality
                        </span>
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="mb-4 text-xl font-semibold text-black lg:text-4xl dark:text-white text-center !leading-tight tracking-tight"
                      >
                        BEST UI TEMPLATES
                      </motion.div>
                      <motion.div
                        variants={variants}
                        className="dark:text-dark-500 text-sm lg:text-base text-gray-500 text-center"
                      >
                        컴포넌트는 React와 Next.js에서 사용할 수 있습니다. 모든
                        Component는 tailwindcss와 Framer motion을 활용하여
                        애니메이션과 스타일을 정의했습니다.
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Popup state={showPopup} close={closePopup}>
        <div className="p-8">
          <div className="mb-5 text-2xl font-bold text-gray-950">
            안녕하세요^^
          </div>
          <div className="text-sm font-normal text-gray-700">
            팝업의 역할을 할 것입니다. 팝업의 기능은 언제든 이런 형태로 호출이
            가능하게 할것이며 모달과는 다르게 아래에서 팝업이되며 바탕을
            누른다고 없어지지 않습니다. 그리고 기간의 값을 입력하면 해당 기간
            동안 팝업이 뜨지 않을 것입니다.
          </div>
        </div>
      </Popup>
      <Popup state={showPopup2} title="서비스 제안하기" close={closePopup2}>
        <div className="p-8">
          <div className="text-sm font-normal text-gray-700">
            <div className="flex justify-center items-center rounded-2xl bg-gray-100 p-8 text-sm text-gray-400">
              서비스 제안서 작성
            </div>
          </div>
        </div>
      </Popup>
    </MainLayout>
  )
}
