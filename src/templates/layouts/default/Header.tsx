/**
 * @file Header.js
 * @author 지제이웍스 (gjworks@kakao.com)
 * @brief 설정 및 환경변수등이 저장되는 파일
 **/
'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Dropdown from 'src/components/dropdown/Dropdown'
import Modal from 'src/components/modal/Modal'
import Left from 'src/components/panel/Left'
import SearchForm from 'src/templates/forms/SearchForm'
import AccountDropwdown from 'src/templates/forms/AccountDropwdown'
import SideNav from 'src/components/nav/SideNav'
import nav from 'src/res/config/navigation.json'
import { motion } from 'framer-motion'

const Header = () => {
  const pathname = usePathname()
  const [showModal, setShowModal] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)
  const [background, setBackground] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  const closeModal = close => {
    setShowModal(close)
    setBackground('bg-transparent dark:bg-transparent')
  }
  const closeLeft = close => {
    setShowLeft(close)
  }
  const handleClickOutside = () => {
    setShowNavigation(false)
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('scroll', handleScroll)
    }, 1000)
    return () => {
      window.removeEventListener('scroll', handleScroll) //clean up
    }
  }, [])

  const handleScroll = () => {
    setShowNavigation(false)
    // console.log('scrolled')
  }

  const headerInitial = {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  }
  const initial = {
    opacity: 0,
    y: '0%',
    transition: {
      duration: 0.5,
    },
  }
  const fixedVariants = {
    open: {
      opacity: 1,
      display: 'block',
      transition: {
        duration: 0.5,
      },
    },
    close: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }
  const headerVariants = {
    open: {
      opacity: 1,
      y: '0%',
      // display: 'block',
      transition: {
        duration: 0.5,
      },
    },
    close: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
      },
      // transitionEnd: {
      //   display: 'none',
      // },
    },
  }
  const wrapVariants = {
    open: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.5,
      },
    },
    close: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
      },
    },
  }
  const variants = {
    open: {
      opacity: 1,
      display: 'block',
      transition: {
        duration: 1.5,
      },
    },
    close: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }
  return (
    <>
      <motion.header
        transition={{ duration: 0.3 }}
        className={
          'relative w-full top-0 backdrop-blur-lg z-101 dark:bg-dark-950/75 bg-white/90 pt-0 lg:pt-5 ' +
          background
        }
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex py-2 px-3">
            <div className="flex items-center">
              <button
                onClick={() => {
                  setBackground('dark:bg-dark-950/75 bg-white/90')
                  setShowLeft(!showLeft)
                }}
                className="group flex lg:hidden items-center px-3"
              >
                <div className="flex relative w-5 h-5 cursor-pointer">
                  <span>
                    {/* <div className="transition-all absolute left-0 top-[3px] h-[1px] w-2 group-hover:w-3 bg-black dark:bg-white"></div> */}
                    <div className="transition-all absolute left-0 top-[6px] h-[1px] w-4 group-hover:w-2 bg-black dark:bg-white"></div>
                    <div className="transition-all absolute left-0 top-[12px] h-[1px] w-3 group-hover:w-4 bg-black dark:bg-white"></div>
                  </span>
                </div>
              </button>

              <button
                onClick={() => setShowNavigation(!showNavigation)}
                className="group hidden items-center px-3"
              >
                <div className="flex relative w-5 h-5 cursor-pointer">
                  <span>
                    <div className="transition-all absolute left-0 top-[3px] h-[1px] w-2 group-hover:w-3 bg-black dark:bg-white"></div>
                    <div className="transition-all absolute left-0 top-[9px] h-[1px] w-4 group-hover:w-2 bg-black dark:bg-white"></div>
                    <div className="transition-all absolute left-0 top-[15px] h-[1px] w-3 group-hover:w-4 bg-black dark:bg-white"></div>
                  </span>
                </div>
              </button>

              <div className="flex items-center">
                <a
                  href={process.env.NEXT_PUBLIC_DEFAULT_URL}
                  className="flex items-center"
                >
                  <Image
                    src="/assets/images/brand/gjworks_white.svg"
                    alt="gjworks logo"
                    width="32"
                    height="32"
                    className="block w-10 h-10"
                  />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_DEFAULT_URL}
                  className="hidden items-center"
                >
                  <div className="flex  pl-2 text-sm lg:text-base font-semibold mr-4">
                    <div className="text-black dark:text-white">지제이웍스</div>
                  </div>
                </a>
                <div className="hidden text-gray-500 dark:text-dark-100 text-xs bg-gray-100/90 dark:bg-dark-100/10 px-4 py-1 rounded-full hover:bg-gray-200/75 dark:hover:bg-gray-100/20 hover:text-black dark:hover:text-white transition duration-300 backdrop-blur-lg cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                    />
                  </svg>
                  <span>0.1.10.beta</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="hidden lg:flex items-center pl-6">
                {nav.header &&
                  Object.entries(nav.header).map((data, index) => {
                    return (
                      <Link
                        href={data[1].route}
                        key={data[1].name}
                        className={
                          'block py-0 lg:py-2 px-1 lg:px-3 mx-2 text-xs lg:text-sm font-normal  ' +
                          (pathname === data[1].route
                            ? 'text-gray-400 dark:text-white'
                            : 'text-gray-800 dark:text-dark-500 hover:text-gray-400 dark:hover:text-white')
                        }
                      >
                        {data[1].title}
                      </Link>
                    )
                  })}
              </div>
            </div>
            <div className="relative flex gap-2 items-center justify-end">
              <div className="flex gap-1 items-center">
                <button
                  className="hover:bg-gray-200 text-gray-500 hover:text-gray-900 dark:text-dark-200 dark:hover:text-white px-2 py-1  rounded-md dark:bg-dark-950 dark:hover:bg-dark-700"
                  onClick={() => setShowModal(!showModal)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
              <button
                className="hidden relative bg-white text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-dark-200 dark:hover:text-white px-2 py-1 rounded-md dark:bg-dark-950 dark:hover:bg-dark-700 "
                onClick={() => {}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
                <div className="absolute -right-0.5 -top-0.5 w-2 h-2 rounded-full bg-rose-600 dark:bg-rose-600"></div>
              </button>
              <button
                className="group relative flex items-center text-black dark:text-white hover:text-black dark:hover:text-white text-xs border border-gray-200 dark:border-dark-600 shadow-inner shadow-gray-200/60 dark:shadow-dark-600/60 rounded-full hover:shadow-md hover:shadow-gray-100 dark:hover:shadow-dark-700"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="flex py-[6px] px-6 lg:px-4">
                  <div className="p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <div className="hidden lg:flex items-center px-3">
                    Account
                  </div>
                </div>
              </button>
              <Dropdown state={showDropdown}>
                <AccountDropwdown />
              </Dropdown>
            </div>
          </div>
        </div>
      </motion.header>
      <Modal state={showModal} close={closeModal}>
        <SearchForm />
      </Modal>
      <Left state={showLeft} close={closeLeft} width="320px">
        <SideNav />
      </Left>
      <motion.div
        initial={headerInitial}
        animate={showNavigation === true ? 'open' : 'close'}
        variants={fixedVariants}
        className="fixed top-0 left-0 right-0 bottom-0 z-99 bg-gray-600/25 dark:bg-dark-800/50 dark:backdrop-blur-sm"
      ></motion.div>
      <motion.div
        initial={headerInitial}
        animate={showNavigation === true ? 'open' : 'close'}
        variants={headerVariants}
        className="fixed top-0 left-0 right-0 z-99 bg-white/90 backdrop-blur-lg dark:backdrop-blur-lg dark:bg-dark-950/90"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={showNavigation === true ? 'open' : 'close'}
          variants={wrapVariants}
          className="relative z-100"
        >
          <div className="max-w-screen-xl mx-auto px-4 pt-5 mt-[84px]">
            <div className="grid grid-cols-12 px-3">
              <div className="col-span-12 lg:col-span-3">
                <div className="py-5">
                  <div className="text-gray-400 dark:text-dark-400 text-sm mb-5">
                    Navigation
                  </div>
                  <Link
                    href="/store"
                    className="text-black dark:text-white text-2xl font-medium mb-3 w-full block hover:text-gray-500 dark:hover:text-dark-200"
                  >
                    Store
                  </Link>
                  <Link
                    href="/components"
                    className="text-black dark:text-white text-2xl font-medium mb-3 w-full block hover:text-gray-500 dark:hover:text-dark-200"
                  >
                    Components
                  </Link>
                  <Link
                    href="/posts/blog"
                    className="text-black dark:text-white text-2xl font-medium mb-3 w-full block hover:text-gray-500 dark:hover:text-dark-200"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="text-black dark:text-white text-2xl font-medium mb-3 w-full block hover:text-gray-500 dark:hover:text-dark-200"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <div className="flex flex-wrap gap-10">
                  <div className="py-3 lg:py-5  px-3 lg:px-5">
                    <div className="text-gray-400 dark:text-dark-400 text-sm mb-5">
                      Sitemap
                    </div>
                    <Link
                      href="#"
                      className="block dark:text-white text-sm mb-3 dark:hover:text-dark-200 text-black hover:text-gray-500"
                    >
                      개발문서
                    </Link>
                    <Link
                      href="#"
                      className="block dark:text-white text-sm mb-3 dark:hover:text-dark-200 text-black hover:text-gray-500"
                    >
                      교육
                    </Link>
                    <Link
                      href="#"
                      className="block dark:text-white text-sm mb-3 dark:hover:text-dark-200 text-black hover:text-gray-500"
                    >
                      유지보수/관리
                    </Link>
                  </div>
                  <div className="py-3 lg:py-5  px-3 lg:px-5">
                    <div className="text-gray-400 dark:text-dark-400 text-sm mb-5">
                      Store
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block dark:text-white text-sm mb-3 dark:hover:text-dark-200 text-black hover:text-gray-500"
                    >
                      XE/라이믹스 스토어
                    </a>
                    <Link
                      href="#"
                      className="block dark:text-white text-sm mb-3 dark:hover:text-dark-200 text-black hover:text-gray-500"
                    >
                      도메인 등록
                    </Link>
                    <Link
                      href="#"
                      className="block dark:text-white text-sm mb-3 dark:hover:text-dark-200 text-black hover:text-gray-500"
                    >
                      세금계산서 신청
                    </Link>
                    <Link
                      href="#"
                      className="block dark:text-white text-sm mb-3 dark:hover:text-dark-200 text-black hover:text-gray-500"
                    >
                      파트너 신청
                    </Link>
                  </div>
                  <div className="py-3 lg:py-5  px-3 lg:px-5">
                    <div className="text-gray-400 dark:text-dark-400 text-sm mb-5">
                      Projects
                    </div>
                    <a
                      href="https://github.com/gjworks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block dark:text-white text-sm mb-3 dark:hover:text-dark-200 text-black hover:text-gray-500"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {scrollPosition > 80 && (
        <motion.div
          className=" fixed left-1.5 right-1.5 z-101 top-2 backdrop-blur-lg bg-opacity-75 mx-auto max-w-screen-lg rounded-full"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ y: -40, opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className=" py-1.5 px-5 lg:px-10 bg-gray-300/25 dark:bg-dark-600/25 rounded-full">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setBackground('dark:bg-dark-950/75 bg-white/90')
                    setShowLeft(!showLeft)
                  }}
                  className="group flex items-center"
                >
                  <div className="flex relative w-5 h-5 cursor-pointer">
                    <span>
                      <div className="transition-all absolute left-0 top-[3px] h-[1px] w-2 group-hover:w-3 bg-black dark:bg-white"></div>
                      <div className="transition-all absolute left-0 top-[9px] h-[1px] w-4 group-hover:w-2 bg-black dark:bg-white"></div>
                      <div className="transition-all absolute left-0 top-[15px] h-[1px] w-3 group-hover:w-4 bg-black dark:bg-white"></div>
                    </span>
                  </div>
                </button>
                <div className="flex items-center">
                  <a
                    href={process.env.NEXT_PUBLIC_DEFAULT_URL}
                    className="flex items-center"
                  >
                    <Image
                      src="/assets/images/brand/gjworks_white.svg"
                      alt="gjworks logo"
                      width="32"
                      height="32"
                      className="block w-8 h-8"
                    />
                  </a>
                  <a
                    href={process.env.NEXT_PUBLIC_DEFAULT_URL}
                    className="hidden items-center"
                  >
                    <div className="flex  pl-2 text-sm font-semibold mr-4">
                      <div className="text-black dark:text-white">
                        지제이웍스
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <div className="hidden items-center">
                  {nav.header &&
                    Object.entries(nav.header).map((data, index) => {
                      return (
                        <Link
                          href={data[1].route}
                          key={data[1].name}
                          className={
                            'block py-0 lg:py-1 px-1 lg:px-3 mx-2 text-xs lg:text-sm font-normal  ' +
                            (pathname === data[1].route
                              ? 'text-gray-400 dark:text-white'
                              : 'text-gray-800 dark:text-dark-300 hover:text-gray-400 dark:hover:text-white')
                          }
                        >
                          {data[1].title}
                        </Link>
                      )
                    })}
                </div>
              </div>
              <div className="relative flex gap-2 items-center justify-end">
                <div className="flex gap-1 items-center">
                  <button
                    className="hover:bg-gray-200 text-gray-500 hover:text-gray-900 dark:text-dark-200 dark:hover:text-white px-2 py-1  rounded-md dark:hover:bg-dark-700"
                    onClick={() => setShowModal(!showModal)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  className="hidden relative text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-dark-200 dark:hover:text-white px-2 py-1 rounded-md dark:hover:bg-dark-700 "
                  onClick={() => {}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                  <div className="absolute -right-0.5 -top-0.5 w-2 h-2 rounded-full bg-rose-600 dark:bg-rose-600"></div>
                </button>
                <button
                  className="group relative flex items-center rounded-md hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-900 hover:text-gray-950 dark:text-white dark:hover:text-white text-xs"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div className="flex py-1 px-2 lg:px-3">
                    <div className="p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <Dropdown state={showDropdown}>
                  <AccountDropwdown />
                </Dropdown>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Header
