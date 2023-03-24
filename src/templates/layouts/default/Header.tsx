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

const Header = () => {
  const pathname = usePathname()
  const [showModal, setShowModal] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const closeModal = close => {
    setShowModal(close)
  }
  const closeDropdown = close => {
    setShowDropdown(close)
  }
  const closeLeft = close => {
    setShowLeft(close)
  }
  const handleClickOutside = () => {
    setShowDropdown(false)
  }
  // const { mid } = router?.query;
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])
  return (
    <>
      <header className="">
        <div className=" max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center py-3 pr-3">
            <div className="flex items-center justify-center">
              <button
                onClick={() => setShowLeft(!showLeft)}
                className="group flex items-center justify-center mx-auto px-3"
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
                <Link
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
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_DEFAULT_URL}
                  className="hidden lg:flex items-center"
                >
                  <div className="text-black dark:text-white pl-2 text-sm lg:text-sm font-bold mr-4">
                    지제이웍스
                  </div>
                  <div className="flex text-slate-500 dark:text-dark-100 text-xs lg:text-xs bg-slate-100/75 dark:bg-dark-500/25 bg-opacity-75 px-4 py-1 rounded-full hover:bg-slate-300/25 dark:hover:bg-dark-400/25 hover:text-black dark:hover:text-white transition duration-300 backdrop-blur-lg">
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
                    <span>PROJECT G 0.1.10.BETA</span>
                  </div>
                </Link>
              </div>

              <div className="hidden md:flex items-center pl-3">
                {nav.header &&
                  Object.entries(nav.header).map((data, index) => {
                    return (
                      <Link
                        href={data[1].route}
                        key={data[1].name}
                        className={
                          'block py-0 lg:py-2 px-1 lg:px-3 mx-2 text-xs lg:text-sm font-normal uppercase ' +
                          (pathname === data[1].route
                            ? 'text-black dark:text-white'
                            : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
                        }
                      >
                        {data[1].title}
                      </Link>
                    )
                  })}
                {/* <Link
                  href="/components"
                  className={
                    'block py-0 lg:py-2 px-1 lg:px-3 mx-2 text-xs lg:text-sm font-normal ' +
                    (pathname === '/components'
                      ? 'text-black dark:text-white'
                      : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
                  }
                >
                  Components
                </Link>
                <Link
                  href="/metaverse"
                  className={
                    'block py-0 lg:py-2 px-1 lg:px-3 mx-2 text-xs lg:text-sm font-normal ' +
                    (pathname === '/metaverse'
                      ? 'text-black dark:text-white'
                      : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
                  }
                >
                  Metaverse
                </Link>
                <Link
                  href="/posts/[mid]"
                  as="/posts/blog"
                  className={
                    'block py-0 lg:py-2 px-1 lg:px-3 mx-2 text-xs lg:text-sm font-normal ' +
                    (pathname === '/posts/blog'
                      ? 'text-black dark:text-white'
                      : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
                  }
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={
                    'block py-0 lg:py-2 px-1 lg:px-3 mx-2 text-xs lg:text-sm font-normal ' +
                    (pathname === '/contact'
                      ? 'text-black dark:text-white'
                      : 'text-gray-500 dark:text-dark-400 hover:text-black dark:hover:text-white')
                  }
                >
                  Contact
                </Link> */}
              </div>
            </div>
            <div className="relative flex items-center">
              <button
                className="text-gray-500 hover:text-gray-900 dark:text-dark-200 dark:hover:text-white px-3 py-2"
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
              <button
                className="group relative flex items-center"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="flex py-2 px-3 rounded-full bg-dark-800 hover:bg-dark-700 transition duration-300">
                  <div className="text-dark-200 group-hover:text-white p-0">
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
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <div className="hidden text-white group-hover:text-white text-xs">
                    Account
                  </div>
                </div>
              </button>
              <Dropdown state={showDropdown} close={closeDropdown}>
                <AccountDropwdown />
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
      <Modal state={showModal} close={closeModal}>
        <SearchForm />
      </Modal>
      <Left state={showLeft} close={closeLeft} width="320px">
        <SideNav />
      </Left>
    </>
  )
}

export default Header
