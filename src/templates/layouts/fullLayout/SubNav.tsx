'use client'

import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import nav from 'src/res/config/navigation.json'
import page from 'src/res/config/page.json'
import {usePathname} from 'next/navigation'

interface Inspage {
  name: string
  title: string
  parent: string
  route: string
}
const SubNav = () => {
  const [currentPage, setCurrentPage] = useState<Inspage | undefined>()
  const [subMenu, setSubMenu] = useState<any[] | undefined>()
  // const [lastParam, setLastParam] = useState<any | undefined>()

  // const [firstNavTitle, setFirstNavTitle] = useState<string>()
  const pathname = usePathname()

  useEffect(() => {
    const params = pathname?.split('/')

    let _subMenu
    if (params?.length) {
      // if (params?.length > 2) {
      //   console.log(params[2])
      //   setCurrentPage(page[params?.[2]])
      // } else {
      //   setCurrentPage(page[params?.[1]])
      // }
      setCurrentPage(page[params?.[1]])
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
      <div className="relative max-w-screen-3xl mx-auto px-3">
        <div className="grid grid-cols-12 gap-4 pt-3 lg:pt-6 pb-8">
          <div className="hidden md:col-span-2 md:flex">
            <div className="text-lg font-bold text-black lg:text-2xl dark:text-white">
              {currentPage ? currentPage?.title : 'Discovery'}
            </div>
          </div>
          <div className="relative col-span-12 flex items-center overflow-hidden px-3 md:col-span-8">
            <div className="overflow-scroll-hide flex w-full overflow-hidden overflow-x-auto lg:justify-center">
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="block rounded-full bg-gray-200 px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-300"
                >
                  Discover
                </Link>
                <Link
                  href="#"
                  className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:bg-gray-100 hover:text-gray-500"
                >
                  Mobile App
                </Link>
                <Link
                  href="#"
                  className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:bg-gray-100 hover:text-gray-500"
                >
                  React
                </Link>
                <Link
                  href="#"
                  className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:bg-gray-100 hover:text-gray-500"
                >
                  Rhymix
                </Link>
                <Link
                  href="#"
                  className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:bg-gray-100 hover:text-gray-500"
                >
                  Web Design
                </Link>
                <Link
                  href="#"
                  className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:bg-gray-100 hover:text-gray-500"
                >
                  Service Product
                </Link>
                <Link
                  href="#"
                  className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:bg-gray-100 hover:text-gray-500"
                >
                  etc
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 top-0 flex w-12 items-center justify-end bg-gradient-to-r from-transparent via-gray-50 to-gray-50 lg:hidden">
              <Link
                href="#"
                className="flex h-5 w-5 items-center justify-center rounded-md border border-gray-200 bg-gray-100 text-sm text-gray-400 hover:text-gray-950"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div
            onClick={() => {}}
            className="col-span-2 hidden justify-end gap-2 md:flex"
          >
            <button className="flex cursor-pointer items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1 text-black hover:bg-gray-900 hover:text-white lg:px-6 ">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="absolute left-0 right-0 top-0 z-10 hidden">
          <div className="mt-10 flex justify-center text-6xl font-extrabold text-gray-300">
            {currentPage ? currentPage?.title : 'Discovery'}
          </div>
        </div>
        <div className="dark:bg-dark-950/10 relative top-0 z-20 bg-white/5 backdrop-blur-md">
          <div className="mx-auto max-w-screen-xl">
            <div className="flex flex-wrap gap-8">
              <div className="flex w-full justify-between gap-8 lg:flex-1">
                <div className="hidden items-center">
                  {currentPage && (
                    <Link
                      href={currentPage?.route}
                      className="block text-xl font-semibold text-black dark:text-white"
                    >
                      {currentPage ? currentPage?.title : 'Discovery'}
                    </Link>
                  )}
                </div>
                <div className="relative flex-1 overflow-hidden">
                  {/* <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-dark-950 to-transparent"></div> */}
                  <div className="overflow-scroll-hide flex justify-center overflow-hidden overflow-x-auto">
                    <div className="">
                      <div className="px-3">
                        <div className="flex gap-4 lg:gap-8">
                          {subMenu &&
                            Object.entries(subMenu).map((data, index) => {
                              // console.log(pathname)
                              // console.log(currentPage)
                              return (
                                <Link
                                  href={data[1].route}
                                  key={data[1].name}
                                  className={
                                    'block whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-xs font-normal lg:text-sm ' +
                                    (currentPage?.name === data[1].name
                                      ? 'border-gray-950 text-gray-950 dark:text-white'
                                      : 'dark:text-dark-400 text-gray-400 hover:text-gray-900 dark:hover:text-white')
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
                  <div className="dark:to-dark-950 absolute bottom-0 right-0 top-0 w-12 bg-gradient-to-r from-transparent to-gray-50"></div>
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
