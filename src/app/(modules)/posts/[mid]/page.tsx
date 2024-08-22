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
        <div className="relative text-3xl font-bold w-full lg:w-auto text-center lg:text-left">
          개발로그
          <div className="absolute -bottom-1 fill-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68.63723"
              height="5.4181"
              viewBox="0 0 68.63723 5.4181"
            >
              <path
                d="M2.41484,5.41803c21.26918-.13932,42.53836-.27864,63.80754-.41797,3.21622-.02107,3.22336-5.02111,0-5L2.41484,.41803c-3.21622,.02107-3.22336,5.02111,0,5h0Z"
                origin="undraw"
              />
            </svg>
          </div>
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
