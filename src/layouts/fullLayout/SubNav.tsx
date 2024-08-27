'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import nav from '@plextype/res/config/navigation.json'
import { usePathname } from 'next/navigation'
import DefaultNav from '@plextype/components/nav/DefaultNav'

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
      if (params?.length > 2) {
        setCurrentPage(nav.header[params?.[2]])
      } else {
        setCurrentPage(nav.header[params?.[1]])
      }
      // setCurrentPage(nav.header[params?.[1]])
    }

    if (currentPage) {
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

    console.log(subMenu)
  }, [pathname, currentPage])

  const snav = null
  return (
    <>
      {subMenu && (
        <div className="sticky top-0 bg-white/90 backdrop-blur-lg z-50">
          <div className="max-w-screen-xl mx-auto border-t border-gray-100">
            <div className="sticky top-0">
              <div className="flex gap-4 px-3">
                <div className="max-w-32 items-center">
                  <div className="flex text-xl font-medium text-black dark:text-white uppercase py-3">
                    {currentPage ? currentPage?.title : 'Discovery'}
                  </div>
                </div>
                <div className="flex-1"></div>
                <div className="relative flex items-center overflow-hidden ">
                  <div className="relative overflow-scroll-hide flex gap-4 w-full items-center overflow-hidden overflow-x-auto justify-start md:justify-center">
                    {subMenu && (
                      <div className="relative pr-4">
                        <div className="flex gap-4 border-gray-100 after:absolute after:right-0 after:top-1 after:h-3 after:w-[1px] after:bg-gray-300">
                          {Object.entries(subMenu).map(
                            ([key, value], index) => {
                              if (value.route) {
                                return (
                                  <div key={value.name}>
                                    <Link
                                      href={value.route}
                                      className={
                                        'block whitespace-nowrap px-1 text-[0.782rem] text-black hover:text-gray-500 ' +
                                        (pathname === value.route
                                          ? ' text-gray-900  dark:text-white '
                                          : ' text-gray-400 hover:text-gray-100 dark:text-dark-600 dark:hover:text-dark-300')
                                      }
                                    >
                                      {value.title}
                                    </Link>
                                  </div>
                                )
                              } else {
                                return null
                              }
                            }
                          )}
                        </div>
                      </div>
                    )}
                    <Link
                      href="/plextype"
                      className="relative flex dark:text-dark-100 dark:bg-dark-100/10 cursor-pointer rounded-full bg-gray-100 px-4 py-1 text-xs text-gray-500 backdrop-blur-lg transition duration-300 hover:bg-gray-200/75 hover:text-black dark:hover:bg-gray-100/20 dark:hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="mr-2 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                        />
                      </svg>
                      <span>Plextype 0.1.10.beta</span>
                    </Link>
                  </div>
                </div>
                {/* <div className="max-w-32 hidden lg:flex items-center">
                  <Link
                    href="#"
                    className="text-gray-950 hover:text-gray-600 text-sm dark:bg-primary-"
                  >
                    Download
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SubNav
