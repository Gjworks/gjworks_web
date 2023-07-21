'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import nav from 'src/res/config/navigation.json'
import page from 'src/res/config/page.json'
import { usePathname } from 'next/navigation'

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
      <div className="sticky backdrop-blur-lg bg-white/90 top-0 z-[50] dark:bg-dark-950/90 border-b border-gray-100 dark:border-dark-800">
        <div className="max-w-screen-xl mx-auto px-3 overflow-hidden overflow-scroll-hide overflow-x-auto">
          <div className="flex gap-8 justify-between h-[52px]">
            <div>
              {currentPage && (
                <Link
                  href={currentPage?.route}
                  className="block font-semibold text-xl py-3 text-black dark:text-white"
                >
                  {currentPage ? currentPage?.title : 'Discovery'}
                </Link>
              )}
            </div>
            <div className="flex items-center">
              {subMenu &&
                Object.entries(subMenu).map((data, index) => {
                  return (
                    <Link
                      href={data[1].route}
                      key={data[1].name}
                      className={
                        'block py-0 lg:py-2 px-1 lg:px-3 mx-1 text-xs lg:text-xs font-normal ' +
                        (pathname === data[1].route
                          ? 'text-gray-400 dark:text-white'
                          : 'text-gray-800 dark:text-dark-200 hover:text-gray-400 dark:hover:text-white')
                      }
                    >
                      {data[1].title}
                    </Link>
                  )
                })}
              <Link
                href="#"
                className="whitespace-nowrap block text-primary-200 dark:text-primary-200 text-xs py-0 lg:py-1 px-1 lg:px-3 mx-1 hover:text-white dark:hover:text-white transition duration-300 cursor-pointer bg-primary-600 hover:bg-primary-700 rounded-full"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubNav
