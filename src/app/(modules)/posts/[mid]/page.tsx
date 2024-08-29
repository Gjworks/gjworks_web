'use client'

import Link from 'next/link'
import PostsList from '@/modules/posts/templates/default/list'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import PageNavigation from '@plextype/components/nav/PageNavigation'
import { motion } from 'framer-motion'

interface PageProps {
  params: {
    mid: string
  }
}

const Page: React.FC<PageProps> = ({ params }: { params: { mid: string } }) => {
  const pathVariants = {
    from: {
      opacity: 0,
      pathLength: 0,
    },
    to: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
      },
    },
  }
  return (
    <>
      {/* <div className="max-w-screen-xl mx-auto px-3">
        <div className="flex items-center pt-10 pb-16 gap-2">
          <div className="text-gray-950 dark:text-white">
            <HomeIcon className="size-3.5 stroke-1.5" />
          </div>
          <div className="text-gray-700 dark:text-white">
            <ChevronRightIcon className="size-3.5 stroke-1.5" />
          </div>
          <div className="text-xs font-bold text-gray-400 dark:text-gray-400 uppercase">
            Works
          </div>
        </div>
      </div> */}
      <div className="max-w-screen-xl mx-auto px-3 flex items-center gap-2 lg:gap-4 justify-center lg:justify-start flex-wrap pt-20">
        <div className="relative lg:w-auto text-center lg:text-left">
          <div className="relative text-3xl font-bold text-gray-950 dark:text-white">
            개발로그
          </div>
          {/* <div className="absolute -bottom-1.5 stroke-primary-600 fill-primary-600 w-32">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 32.61">
              <motion.path
                d="M5 14.11s54-8 125-9 120 5 120 5-200.5-5.5-239.5 17.5"
                initial="from"
                animate="to"
                variants={pathVariants}
              />
            </svg>
          </div> */}
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
