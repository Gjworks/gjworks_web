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
      <div className="sticky backdrop-blur-lg bg-white/80 top-[44px] z-[50] dark:bg-dark-950/60 pb-1 border-b dark:border-dark-800/75">
        <div className="max-w-screen-lg mx-auto px-3 overflow-hidden overflow-scroll-hide overflow-x-auto">
          <div className="flex gap-8 justify-between h-[52px]">
            {currentPage && (
              <Link
                href={currentPage?.route}
                className="block font-semibold text-xl py-3 text-black dark:text-white"
              >
                {currentPage ? currentPage?.title : ''}
              </Link>
            )}

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
                className="whitespace-nowrap block ml-2 text-xs text-dark-900 px-3 py-1 rounded-full bg-primary-400 hover:bg-dark-700 hover:text-primary-400"
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
