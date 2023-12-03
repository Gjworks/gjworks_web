'use client'

import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import nav from 'src/res/config/navigation.json'
import page from 'src/res/config/page.json'
import {usePathname} from 'next/navigation'

interface page {
  name: string
  title: string
  parent: string
  route: string
}
const SubNav = () => {
  const [currentPage, setCurrentPage] = useState<page>()
  const [subMenu, setSubMenu] = useState<any[] | undefined>()
  // const [lastParam, setLastParam] = useState<any | undefined>()

  // const [firstNavTitle, setFirstNavTitle] = useState<string>()
  const pathname = usePathname()

  useEffect(() => {
    const params = pathname?.split('/')

    let _subMenu

    if (params?.length) {
      if (params?.length > 2) {
        setCurrentPage(page[params?.[2]])
      } else {
        setCurrentPage(page[params?.[1]])
      }
    }
    if (currentPage?.parent && nav.header[currentPage?.parent]) {
      _subMenu = nav.header[currentPage?.parent]?.subMenu
      if (_subMenu) {
        if (_subMenu.length > 0) {
          setSubMenu(_subMenu)
        } else {
          _subMenu = Array('')
          setSubMenu(_subMenu)
        }
      }
    } else {
      _subMenu = null
      setSubMenu(_subMenu)
    }
  }, [pathname, currentPage, subMenu])

  const snav = null
  return (
    <>
      <div className="backdrop-blur-lg bg-white/90 top-0 dark:bg-dark-950/10 z-999 border-t border-b border-dark-800">
        <div className="max-w-screen-xl mx-auto px-3">
          <div className="flex flex-wrap gap-8">
            <div className="w-full lg:flex-1 flex gap-8 justify-between">
              <div className="flex items-center">
                {currentPage && (
                  <Link
                    href={currentPage?.route}
                    className="block font-semibold text-xl text-black dark:text-white"
                  >
                    {currentPage ? currentPage?.title : 'Discovery'}
                  </Link>
                )}
              </div>
              <div className="flex-1 relative overflow-hidden overflow-scroll-hide overflow-x-auto">
                <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-dark-950 to-transparent"></div>
                <div className="flex ">
                  <div className="">
                    <div className="px-3">
                      <div className="flex gap-8">
                        {subMenu &&
                          Object.entries(subMenu).map((data, index) => {
                            return (
                              <Link
                                href={data[1].route}
                                key={data[1].name}
                                className={
                                  'block text-xs lg:text-xs font-normal py-4 px-1 border-b-2 border-transparent whitespace-nowrap ' +
                                  (pathname === data[1].route
                                    ? 'text-gray-400 dark:text-white border-white'
                                    : 'text-gray-800 dark:text-dark-400 hover:text-gray-400 dark:hover:text-white')
                                }
                              >
                                {data[1].title}
                              </Link>
                            )
                          })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-r from-transparent to-dark-950"></div>
              </div>

              <div className="">
                <div className="flex items-center justify-end h-full">
                  <Link
                    href="#"
                    className="flex gap-1 text-sm text-dark-400 hover:text-dark-200 hover:underline"
                  >
                    <span className=" ">help me?</span>
                    <span className="">
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
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubNav
