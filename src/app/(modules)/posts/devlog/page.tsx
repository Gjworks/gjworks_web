'use client'

import Link from 'next/link'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import PostsCategories from '@/modules/posts/templates/default/category'
import PageNavigation from '@plextype/components/nav/PageNavigation'
import { motion } from 'framer-motion'

interface PageProps {
  params: {
    mid: string
  }
}

const Page: React.FC<PageProps> = ({ params }: { params: { mid: string } }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 flex items-center gap-2 lg:gap-4 justify-center lg:justify-start flex-wrap pt-20">
        <div className="relative flex justify-center w-full pt-10">
          <div className="relative text-3xl font-bold text-gray-950 dark:text-white">
            개발로그
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-3">
        <div className="pt-10">
          <PostsCategories />
        </div>
        <div className="grid grid-cols-1 gap-12 pb-20 pt-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <div className="col-span-1">
            <Link href="/posts/devlog/view/1" className="group">
              <div className="relative dark:shadow-dark-950 mb-10 block shadow-lg rounded-lg shadow-gray-400 group-hover:shadow-gray-400/75 dark:group-hover:shadow-black overflow-hidden duration-700">
                <div className="h-[360px] rounded-lg bg-[url('/assets/images/bg39.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-[1.08]">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/30 to-gray-950/40 dark:from-dark-950/25 dark:via-dark-950/50 dark:to-dark-950/75"></div>
                </div>
              </div>
              <div className="px-1">
                <div className="mb-6 w-full">
                  <div className="dark:text-dark-100 mb-3 line-clamp-2 text-2xl font-light text-gray-600 group-hover:text-black dark:group-hover:text-white">
                    Alien: River of Pain Revisions 2.0
                  </div>
                  <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white">
                    The birth of Rebecca Jorden, Known to her famliy as Newt, is
                    a cause for celebration. But as the colony grows and
                    expands, so, too, do the Political struggles between a small
                    be-tachment of Colonial Marines.
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex cursor-pointer items-center gap-2 py-1">
                    <div className="text-xs text-gray-950 dark:text-dark-200">
                      Web Design
                    </div>
                    <div className="text-xs text-gray-300 dark:text-dark-600">
                      |
                    </div>
                    <div className="text-xs text-gray-400 dark:text-dark-500">
                      1달전
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* <PostsList params={params} /> */}
      </div>
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="pb-20">
          <div className="flex justify-between gap-4 flex-wrap">
            <div className="w-full flex justify-center">
              <PageNavigation
                pathname="/posts/works"
                totalCount={10}
                page={1}
                listCount={10}
                totalPages={10}
              />
            </div>
            <div className="flex justify-end flex-1">
              <Link
                href="/posts/devlog/create"
                className="border border-gray-200 bg-white text-sm py-2 px-8 rounded-lg shadow-sm dark:border-dark-800 dark:bg-dark-900 dark:text-dark-200 hover:bg-primary-400"
              >
                글쓰기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
