'use client'

import React, {useEffect, useState, Suspense} from 'react'
import Link from 'next/link'

import BoardList from 'src/components/list/BoardList'
import PageNavigation from 'src/components/nav/PageNavigation'
import {getData} from './server'

interface PageProps {
  params: {
    mid: string
  }
}

const Page: React.FC<PageProps> = ({params}) => {
  const [documentInfo, setDocumentInfo] = useState<{[key: string]: any}>()
  let items
  const fetchData = async mid => {
    items = await getData(mid)
    setDocumentInfo(items.data)
  }
  useEffect(() => {
    // fetchData(params.mid);
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 gap-12 px-3 pb-20 pt-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="col-span-1">
          <Link href="/posts/works/1" className="group">
            <div className="dark:shadow-dark-950 mb-10 block h-[360px] rounded-lg bg-[url('/assets/images/bg23.jpg')] bg-cover bg-center shadow-lg shadow-gray-400 transition duration-700 group-hover:scale-[1.08] group-hover:shadow-gray-400"></div>
            <div className="px-1">
              <div className="mb-6 w-full">
                <div className="dark:text-dark-100 mb-3 line-clamp-2 text-2xl font-light text-gray-800 group-hover:text-indigo-600">
                  Alien: River of Pain Revisions 2.0
                </div>
                <div className="line-clamp-3 text-sm text-gray-400">
                  The birth of Rebecca Jorden, Known to her famliy as Newt, is a
                  cause for celebration. But as the colony grows and expands,
                  so, too, do the Political struggles between a small
                  be-tachment of Colonial Marines.
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex cursor-pointer items-center gap-2 py-1">
                  <div className="text-xs text-gray-950">Web Design</div>
                  <div className="text-xs text-gray-300">|</div>
                  <div className="text-xs text-gray-400">1달전</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/posts/works/2" className="group">
            <div className="dark:shadow-dark-950 mb-10 block h-[360px] rounded-lg bg-[url('/assets/images/bg17.jpg')] bg-cover bg-center shadow-lg shadow-gray-400 transition duration-700 group-hover:scale-[1.08] group-hover:shadow-gray-400"></div>
            <div className="px-1">
              <div className="mb-6 w-full">
                <div className="dark:text-dark-100 mb-3 line-clamp-2 text-2xl font-light text-gray-800 group-hover:text-indigo-600">
                  Alien: River of Pain Revisions 2.0
                </div>
                <div className="line-clamp-3 text-sm text-gray-400">
                  The birth of Rebecca Jorden, Known to her famliy as Newt, is a
                  cause for celebration. But as the colony grows and expands,
                  so, too, do the Political struggles between a small
                  be-tachment of Colonial Marines.
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex cursor-pointer items-center gap-2 py-1">
                  <div className="text-xs text-gray-950">React</div>
                  <div className="text-xs text-gray-300">|</div>
                  <div className="text-xs text-gray-400">2달전</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/posts/works/3" className="group">
            <div className="dark:shadow-dark-950 mb-10 block h-[360px] rounded-lg bg-[url('/assets/images/bg22.jpg')] bg-cover bg-center shadow-lg shadow-gray-400 transition duration-700 group-hover:scale-[1.08] group-hover:shadow-gray-400"></div>
            <div className="px-1">
              <div className="mb-6 w-full">
                <div className="dark:text-dark-100 mb-3 line-clamp-2 text-2xl font-light text-gray-800 group-hover:text-indigo-600">
                  Alien: River of Pain Revisions 2.0
                </div>
                <div className="line-clamp-3 text-sm text-gray-400">
                  The birth of Rebecca Jorden, Known to her famliy as Newt, is a
                  cause for celebration. But as the colony grows and expands,
                  so, too, do the Political struggles between a small
                  be-tachment of Colonial Marines.
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex cursor-pointer items-center gap-2 py-1">
                  <div className="text-xs text-gray-950">Mobile App</div>
                  <div className="text-xs text-gray-300">|</div>
                  <div className="text-xs text-gray-400">2023. 12. 25</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page
