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
        <div className="max-w-screen-xl mx-auto px-0">
          <div className="flex flex-wrap gap-8">
            <div className="w-full lg:flex-1 flex gap-8 justify-between">
              <div className="hidden items-center">
                {currentPage && (
                  <Link
                    href={currentPage?.route}
                    className="block font-semibold text-xl text-black dark:text-white"
                  >
                    {currentPage ? currentPage?.title : 'Discovery'}
                  </Link>
                )}
              </div>
              <div className="flex-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-dark-950 to-transparent"></div>
                <div className="flex overflow-hidden overflow-scroll-hide overflow-x-auto">
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

              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubNav
