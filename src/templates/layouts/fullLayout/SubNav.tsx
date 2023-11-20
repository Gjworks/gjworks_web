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
      <div className="backdrop-blur-lg bg-white/90 top-0 dark:bg-dark-950/10 z-999 py-4">
        <div className="max-w-screen-xl mx-auto px-3 overflow-hidden overflow-scroll-hide overflow-x-auto">
          <div className="flex flex-wrap gap-8">
            <div className="w-full flex-1">
              <div className="hidden py-2">
                {currentPage && (
                  <Link
                    href={currentPage?.route}
                    className="block font-semibold text-xl text-black dark:text-white"
                  >
                    {currentPage ? currentPage?.title : 'Discovery'}
                  </Link>
                )}
              </div>
              <div className="flex justify-center ">
                <div className="rounded-full p-[0.5px] bg-gradient-to-tl from-dark-500/30 via-dark-700/40 to-dark-400/70 overflow-hidden shadow-md shadow-dark-500/10">
                  <div className="px-8 py-1 rounded-full bg-gradient-to-b from-dark-800/90 via-dark-950/75 to-dark-950/90">
                    <div className="flex gap-10">
                      {subMenu &&
                        Object.entries(subMenu).map((data, index) => {
                          return (
                            <Link
                              href={data[1].route}
                              key={data[1].name}
                              className={
                                'block py-2 text-xs lg:text-xs font-normal ' +
                                (pathname === data[1].route
                                  ? 'text-gray-400 dark:text-white'
                                  : 'text-gray-800 dark:text-dark-200 hover:text-gray-400 dark:hover:text-white')
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubNav
