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
  subMenu: []
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
      console.log(params?.length)
      if (params?.length > 2) {
        setCurrentPage(nav.header[params?.[2]])
      } else {
        setCurrentPage(nav.header[params?.[1]])
      }
      // setCurrentPage(nav.header[params?.[1]])
    }

    if (currentPage) {
      console.log(currentPage)
      _subMenu = currentPage.subMenu
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
                {subMenu &&
                  Object.entries(subMenu).map((data, index) => {
                    // console.log(pathname)
                    // console.log(currentPage)
                    return (
                      <Link
                        href={data[1].route}
                        key={data[1].name}
                        className={
                          'block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:bg-gray-100 hover:text-gray-500 ' +
                          (currentPage?.name === data[1].name
                            ? 'bg-gray-300 text-gray-950 dark:text-white'
                            : 'dark:text-dark-400 text-gray-400 hover:text-gray-900 dark:hover:text-white')
                        }
                      >
                        {data[1].title}
                      </Link>
                    )
                  })}
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
            <button className="flex cursor-pointer items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1 text-black hover:bg-black hover:text-white hover:border-black lg:px-6 ">
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
      </div>
    </>
  )
}

export default SubNav
