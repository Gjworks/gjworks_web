'use client'
import {
  HomeIcon,
  ChevronRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline'
import PageNavigation from '@plextype/components/nav/PageNavigation'
const Page = () => {
  return (
    <>
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
              Supports
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-3 flex items-center gap-2 lg:gap-4 justify-center lg:justify-start flex-wrap pb-12">
          <div className="text-3xl font-bold w-full lg:w-auto text-center lg:text-left">
            기술지원
          </div>
          <div className="text-base text-gray-700 w-full lg:w-auto text-center lg:text-left">
            기술지원을 받을 수 있는 곳입니다. <br />
            아이디어를 제안하거나 문의사항을 남겨주세요.
          </div>
        </div>
        <div className="bg-white pt-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="border-t-2 border-gray-900">
              <div className="flex flex-wrap gap-4 lg:gap-2 border-b border-gray-200 py-4 lg:py-8 px-3">
                <div className="flex-1">
                  <div className="text-xl font-normal text-gray-950 hover:underline line-clamp-2 mb-2">
                    기술지원을 받을 수 있는 곳입니다. 아이디어를 제안하거나
                    문의사항을 남겨주세요.
                  </div>
                  <div className="text-gray-500 text-base line-clamp-1 mb-4">
                    관리자가 남긴 글입니다. 테스트용으로 작성되었습니다.
                  </div>
                  <div className="flex items-center">
                    <div className="relative text-teal-600 pr-3 text-sm before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      질문답변
                    </div>
                    <div className="relative text-gray-900 text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      관리자
                    </div>
                    <div className="relative text-gray-500 text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      3일전
                    </div>
                    <div className="relative flex gap-2 px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      <div className="text-sm text-gray-400">댓글</div>
                      <div className="text-sm text-gray-700">4</div>
                    </div>
                    <div className="flex gap-2 px-3">
                      <div className="text-sm text-gray-400">조회수</div>
                      <div className="text-sm text-gray-700">34</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full lg:w-1/5">
                  <div className="flex-1 bg-gray-100 lg:bg-white py-2 rounded-md border lg:border-0 border-gray-200">
                    <div className="flex items-center gap-4 lg:block pl-3 lg:pl-8 border-l border-gray-200">
                      <div className="text-xs text-gray-400 mb-0 lg:mb-3">
                        <ChatBubbleOvalLeftEllipsisIcon className="size-5 stroke-1 text-gray-400" />
                      </div>
                      <div className="flex gap-2 mb-0 lg:mb-1">
                        <div className="text-sm text-gray-900">관리자</div>
                        <div className="text-gray-500 text-sm">16분전</div>
                      </div>
                      <div className="text-sm text-gray-500 line-clamp-1">
                        테스트용으로 작성된 댓글입니다. 테스트용으로 작성된
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 lg:gap-2 border-b border-gray-200 py-4 lg:py-8 px-3">
                <div className="flex-1">
                  <div className="text-xl font-normal text-gray-950 hover:underline line-clamp-2 mb-2">
                    기술지원을 받을 수 있는 곳입니다. 아이디어를 제안하거나
                    문의사항을 남겨주세요.
                  </div>
                  <div className="text-gray-500 text-base line-clamp-1 mb-4">
                    관리자가 남긴 글입니다. 테스트용으로 작성되었습니다.
                  </div>
                  <div className="flex items-center">
                    <div className="relative text-rose-600 pr-3 text-sm before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      버그제보
                    </div>
                    <div className="relative text-gray-900 text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      관리자
                    </div>
                    <div className="relative text-gray-500 text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      3일전
                    </div>
                    <div className="relative flex gap-2 px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      <div className="text-sm text-gray-400">댓글</div>
                      <div className="text-sm text-gray-700">4</div>
                    </div>
                    <div className="flex gap-2 px-3">
                      <div className="text-sm text-gray-400">조회수</div>
                      <div className="text-sm text-gray-700">34</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full lg:w-1/5">
                  <div className="flex-1 bg-gray-100 lg:bg-white py-2 rounded-md border lg:border-0 border-gray-200">
                    <div className="flex items-center gap-4 lg:block pl-3 lg:pl-8 border-l border-gray-200">
                      <div className="text-xs text-gray-400 mb-0 lg:mb-3">
                        <ChatBubbleOvalLeftEllipsisIcon className="size-5 stroke-1 text-gray-400" />
                      </div>
                      <div className="flex gap-2 mb-0 lg:mb-1">
                        <div className="text-sm text-gray-900">관리자</div>
                        <div className="text-gray-500 text-sm">16분전</div>
                      </div>
                      <div className="text-sm text-gray-500 line-clamp-1">
                        테스트용으로 작성된 댓글입니다. 테스트용으로 작성된
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 lg:gap-2 border-b border-gray-200 py-4 lg:py-8 px-3">
                <div className="flex-1">
                  <div className="text-xl font-normal text-gray-950 hover:underline line-clamp-2 mb-2">
                    기술지원을 받을 수 있는 곳입니다. 아이디어를 제안하거나
                    문의사항을 남겨주세요.
                  </div>
                  <div className="text-gray-500 text-base line-clamp-1 mb-4">
                    관리자가 남긴 글입니다. 테스트용으로 작성되었습니다.
                  </div>
                  <div className="flex items-center">
                    <div className="relative text-indigo-500 pr-3 text-sm before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      아이디어
                    </div>
                    <div className="relative text-gray-900 text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      관리자
                    </div>
                    <div className="relative text-gray-500 text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      3일전
                    </div>
                    <div className="relative flex gap-2 px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                      <div className="text-sm text-gray-400">댓글</div>
                      <div className="text-sm text-gray-700">4</div>
                    </div>
                    <div className="flex gap-2 px-3">
                      <div className="text-sm text-gray-400">조회수</div>
                      <div className="text-sm text-gray-700">34</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full lg:w-1/5">
                  <div className="flex-1 bg-gray-100 lg:bg-white py-2 rounded-md border lg:border-0 border-gray-200">
                    <div className="flex items-center gap-4 lg:block pl-3 lg:pl-8 border-l border-gray-200">
                      <div className="text-xs text-gray-400 mb-0 lg:mb-3">
                        <ChatBubbleOvalLeftEllipsisIcon className="size-5 stroke-1 text-gray-400" />
                      </div>
                      <div className="flex gap-2 mb-0 lg:mb-1">
                        <div className="text-sm text-gray-900">관리자</div>
                        <div className="text-gray-500 text-sm">16분전</div>
                      </div>
                      <div className="text-sm text-gray-500 line-clamp-1">
                        테스트용으로 작성된 댓글입니다. 테스트용으로 작성된
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 pb-20">
            <div className="max-w-screen-xl mx-auto px-3">
              <div className="">
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
                  <div className="flex justify-end flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default Page
