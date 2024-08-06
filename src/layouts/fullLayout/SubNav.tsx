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
  }, [pathname, currentPage, subMenu])

  const snav = null
  return (
    <>
      {subMenu && (
        <div className="border-b border-gray-100 dark:border-dark-600/50">
          <div className="max-w-screen-xl mx-auto">
            <div className="sticky top-0">
              <div className="flex gap-4 pt-3 px-3">
                <div className="max-w-32 hidden lg:flex items-center">
                  <div className="flex text-xl font-medium text-black dark:text-white uppercase py-3">
                    {currentPage ? currentPage?.title : 'Discovery'}
                  </div>
                </div>
                <div className="relative flex-1 flex items-center overflow-hidden ">
                  <div className="overflow-scroll-hide flex w-full overflow-hidden overflow-x-auto justify-start md:justify-center">
                    <div className="flex gap-8">
                      {subMenu &&
                        Object.entries(subMenu).map((data, index) => {
                          return (
                            <Link
                              href={data[1].route}
                              key={data[1].name}
                              className={
                                'block whitespace-nowrap px-1 pt-2 pb-3 text-sm text-black hover:text-gray-500 ' +
                                (currentPage?.name === data[1].name
                                  ? ' text-gray-900 border-b-2 border-gray-950 '
                                  : ' text-gray-600 hover:text-gray-100 ')
                              }
                            >
                              {data[1].title}
                            </Link>
                          )
                        })}
                    </div>
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
