'use client'

import Link from 'next/link'
import PostsList from '@/modules/posts/templates/default/list'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import PageNavigation from '@plextype/components/nav/PageNavigation'

interface PageProps {
  params: {
    mid: string
  }
}

const Page: React.FC<PageProps> = ({ params }: { params: { mid: string } }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="flex items-center pt-10 pb-16 gap-2">
          <div className="text-gray-950 dark:text-white">
            <HomeIcon className="size-3.5 stroke-1.5" />
          </div>
          <div className="text-gray-700 dark:text-white">
            <ChevronRightIcon className="size-3.5 stroke-1.5" />
          </div>
          <div className="text-xs font-bold text-gray-400 dark:text-gray-600 uppercase">
            Works
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-3 flex items-center gap-2 lg:gap-4 justify-center lg:justify-start flex-wrap">
        <div className="text-3xl font-bold w-full lg:w-auto text-center lg:text-left">
          개발로그
        </div>
        <div className="text-base text-gray-700 w-full lg:w-auto text-center lg:text-left">
          개발관련 정보 공유
        </div>
      </div>

      <PostsList params={params} />
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
                href="/posts/works/create"
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
