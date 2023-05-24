'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import nav from 'src/res/config/navigation.json'
import {
  usePathname,
  useRouter,
  useSearchParams,
  useParams,
} from 'next/navigation'

const SubNav = () => {
  const [firstParams, setFirstParams] = useState<string[] | undefined>()
  const [firstNav, setFirstNav] = useState<string>()
  const [firstNavTitle, setFirstNavTitle] = useState<string>()
  const pathname = usePathname()

  useEffect(() => {
    // const firstNav =
    setFirstParams(pathname?.split('/'))
    setFirstNav(firstParams?.[1])
    console.log(firstParams)
    if (firstNav !== undefined) {
      console.log(nav.header[firstNav].title)
      setFirstNavTitle(nav.header[firstNav].title)
    } else {
      // 'firstNav'가 'undefined'인 경우에 대한 처리 또는 기본값 설정
    }

    console.log(firstNavTitle)
  }, [pathname, firstNav, firstNavTitle])

  const snav = null
  return (
    <>
      {snav && (
        <div className="sticky top-[60px] z-[50] bg-white/80 backdrop-blur-lg dark:backdrop-blur-lg border-b border-slate-100 dark:bg-dark-950/80 dark:border-dark-950">
          <div className="max-w-screen-xl mx-auto">
            <div>
              {nav.header &&
                Object.entries(nav.header).map((data, index) => {
                  return (
                    <div className="flex gap-8 px-3" key={index}>
                      {pathname === data[1].route &&
                        Object.entries(data[1].subMenu).map((data2, index2) => {
                          return (
                            <Link
                              href={data2[1].route}
                              key={index2}
                              className={
                                'text-black hover:text-black text-sm px-1 py-4 flex border-b-2' +
                                (pathname === data2[1].route
                                  ? 'text-black dark:text-white border-slate-800 dark:border-dark-100 '
                                  : 'text-slate-500 dark:text-dark-400 hover:text-black dark:hover:text-white border-transparent')
                              }
                            >
                              {data2[1].title}
                            </Link>
                          )
                        })}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      )}
      <div className="sticky backdrop-blur-lg bg-white/80 top-[44px] z-[50] dark:bg-dark-950/60 pb-1">
        <div className="max-w-screen-lg mx-auto px-3 overflow-hidden overflow-scroll-hide overflow-x-auto">
          <div className="flex gap-8 justify-between">
            <Link
              href="/"
              className="block font-semibold text-xl py-3 text-black dark:text-white"
            >
              {firstNavTitle ? firstNavTitle : 'Discovery'}
            </Link>
            <div className="flex items-center">
              {nav.header &&
                Object.entries(nav.header).map((data, index) => {
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
