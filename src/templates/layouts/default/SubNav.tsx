/**
 * @file Header.js
 * @author 지제이웍스 (gjworks@kakao.com)
 * @brief 설정 및 환경변수등이 저장되는 파일
 **/
'use client'
import Link from 'next/link'
import nav from 'src/res/config/navigation.json'
import { usePathname, useSearchParams } from 'next/navigation'

const SubNav = ({}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  return (
    <>
      <div className="sticky top-[60px] z-[50] bg-white/80 backdrop-blur-lg dark:backdrop-blur-lg border-b border-slate-100 dark:bg-dark-900/80 dark:border-dark-800">
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
    </>
  )
}

export default SubNav
