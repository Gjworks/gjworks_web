'use client'

import PostsList from '@/modules/posts/templates/default/list'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

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
    </>
  )
}

export default Page
