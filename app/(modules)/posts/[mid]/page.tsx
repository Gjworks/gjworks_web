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
      <div className="grid grid-cols-12 gap-4 pt-3 lg:pt-8 ">
        <div className="hidden md:col-span-2 md:flex">
          <div className="text-lg font-bold text-black lg:text-2xl dark:text-white">
            Store
          </div>
        </div>
        <div className="relative col-span-12 flex items-center overflow-hidden md:col-span-8 px-3">
          <div className="overflow-scroll-hide flex w-full overflow-hidden overflow-x-auto lg:justify-center">
            <div className="flex gap-2">
              <Link
                href="#"
                className="block rounded-full bg-gray-200 px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-300"
              >
                Discover
              </Link>
              <Link
                href="#"
                className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
              >
                Mobile App
              </Link>
              <Link
                href="#"
                className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
              >
                React
              </Link>
              <Link
                href="#"
                className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
              >
                Rhymix
              </Link>
              <Link
                href="#"
                className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
              >
                Web Design
              </Link>
              <Link
                href="#"
                className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
              >
                Service Product
              </Link>
              <Link
                href="#"
                className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
              >
                etc
              </Link>
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
                className="w-4 h-4"
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
          className="col-span-2 hidden md:flex justify-end gap-2"
        >
          <button className="flex cursor-pointer items-center gap-1 rounded-full text-black bg-white hover:bg-gray-900 px-3 py-1 hover:text-white border border-gray-300 lg:px-6 ">
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

      <div className="grid grid-cols-1 gap-12 px-3 pb-20 pt-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7">
        <div className="col-span-1">
          <Link href="/posts/works/1" className="group">
            <div className="dark:shadow-dark-950 mb-10 block h-[360px] rounded-lg bg-[url('/assets/images/bg23.jpg')] bg-cover bg-center shadow-lg shadow-gray-400 transition duration-700 group-hover:scale-[1.08] group-hover:shadow-gray-400"></div>
            <div className="px-1">
              <div className="mb-6 w-full">
                <div className="dark:text-dark-100 mb-3 line-clamp-2 text-2xl font-light text-gray-800">
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
                  <div className="text-xs text-gray-950">구입하기</div>
                  <div className="text-gray-400">+</div>
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
                <div className="dark:text-dark-100 mb-3 line-clamp-2 text-2xl font-light text-gray-800">
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
                  <div className="text-xs text-gray-950">구입하기</div>
                  <div className="text-gray-400">+</div>
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
                <div className="dark:text-dark-100 mb-3 line-clamp-2 text-2xl font-light text-gray-800">
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
                  <div className="text-xs text-gray-950">구입하기</div>
                  <div className="text-gray-400">+</div>
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
