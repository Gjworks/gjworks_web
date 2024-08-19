'use client'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Page = () => {
  return (
    <>
      <div className="relative w-full bg-[url('/assets/images/bg16.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden from-gray-950/50 via-gray-950/60 to-gray-950/70 bg-gradient-to-b dark:from-dark-950/70 dark:via-dark-950/70 dark:to-dark-950/70"></div>
        <div className="relative max-w-screen-xl mx-auto px-3">
          <div className="flex items-center pt-10 pb-16 gap-2">
            <div className="text-gray-200 dark:text-white">
              <HomeIcon className="size-3.5 stroke-1.5" />
            </div>
            <div className="text-gray-300 dark:text-white">
              <ChevronRightIcon className="size-3.5 stroke-1.5" />
            </div>
            <div className="text-xs font-bold text-gray-100 dark:text-gray-600 uppercase">
              Supports
            </div>
          </div>
        </div>
        <div className="relative max-w-screen-xl mx-auto px-3 flex items-center gap-2 lg:gap-4 justify-center lg:justify-start flex-wrap pb-16">
          <div className="text-3xl font-bold w-full lg:w-auto text-center lg:text-left text-white">
            고객센터
          </div>
          <div className="text-base text-gray-400 w-full lg:w-auto text-center lg:text-left">
            개발관련 정보 공유
          </div>
        </div>
        <div className="relative max-w-screen-xl mx-auto px-3 pb-12">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1">
              <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-md shadow-gray-950/10 overflow-hidden">
                <div className="p-3">
                  <div className="font-semibold text-base mb-3">
                    개발관련 질문을 하려면?
                  </div>
                  <div className="flex mb-8">
                    <div className="bg-gray-950 text-white px-3 py-0.5 rounded-md text-sm">
                      답변대기중
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="text-purple-900 bg-purple-200 py-0.5 px-2 rounded-md text-sm">
                      react.js
                    </div>
                    <div className="text-orange-900 bg-orange-100 py-0.5 px-2 rounded-md text-sm">
                      prisma.js
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-3 border-t border-gray-300 bg-gray-200 pt-3">
                  <div className="text-sm underline">
                    프론트엔드 게시판 가기
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-md shadow-gray-950/10 overflow-hidden">
                <div className="p-3">
                  <div className="font-semibold text-base mb-3">
                    개발관련 질문을 하려면?
                  </div>
                  <div className="flex mb-8">
                    <div className="bg-gray-950 text-white px-3 py-0.5 rounded-md text-sm">
                      답변대기중
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="text-purple-900 bg-purple-200 py-0.5 px-2 rounded-md text-sm">
                      react.js
                    </div>
                    <div className="text-orange-900 bg-orange-100 py-0.5 px-2 rounded-md text-sm">
                      prisma.js
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-3 border-t border-gray-300 bg-gray-200 pt-3">
                  <div className="text-sm underline">
                    프론트엔드 게시판 가기
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-md shadow-gray-950/10 overflow-hidden">
                <div className="p-3">
                  <div className="font-semibold text-base mb-3">
                    개발관련 질문을 하려면?
                  </div>
                  <div className="flex mb-8">
                    <div className="bg-gray-950 text-white px-3 py-0.5 rounded-md text-sm">
                      답변대기중
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="text-purple-900 bg-purple-200 py-0.5 px-2 rounded-md text-sm">
                      react.js
                    </div>
                    <div className="text-orange-900 bg-orange-100 py-0.5 px-2 rounded-md text-sm">
                      prisma.js
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-3 border-t border-gray-300 bg-gray-200 pt-3">
                  <div className="text-sm underline">
                    프론트엔드 게시판 가기
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-3">
          <div className="flex items-center h-24 w-3/5 mx-auto gap-8">
            <div className="text-lg font-semibold text-black dark:text-white">
              Search
            </div>
            <div className="border-b border-gray-300 h-8 flex-1 hover:border-gray-950"></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-dark-950 py-16">
        <div className="max-w-screen-xl mx-auto px-3">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-4 lg:col-span-1">
                  <div className="text-lg font-semibold text-black dark:text-white">
                    BUSINESS INFO
                  </div>
                </div>
                <div className="col-span-4 lg:col-span-3">
                  <div className="mb-10">
                    <div className="mb-2 text-base">
                      <div className="text-dark-300 mb-3 mr-3">
                        gjworks2@gmail.com
                      </div>
                      <div className="flex flex-wrap">
                        <div className="flex w-full gap-2 lg:w-auto">
                          <span className="text-dark-400">사업자등록번호:</span>
                          <span className="mr-3 text-black dark:text-white">
                            892-28-00572
                          </span>
                        </div>
                        <div className="flex w-full gap-2 lg:w-auto">
                          <span className="text-dark-400">대표:</span>
                          <span className="text-black dark:text-white">
                            김규진
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="col-span-4 lg:col-span-1">
                <div className="text-lg font-semibold text-black dark:text-white">
                  소셜네트워크
                </div>
              </div>
              <div className="col-span-4 lg:col-span-3">
                <div className="mb-10">
                  <div className="mb-4 text-base font-semibold text-black dark:text-white">
                    오픈채팅
                  </div>
                  <div className="mb-2 flex items-center text-sm">
                    <div className="pr-2">
                      <span className="inline-block rounded-full bg-yellow-400 px-5 py-1 text-center text-black">
                        카카오톡
                      </span>
                    </div>
                    <div className="flex-1 pl-3 ">
                      <span className="text-dark-400">
                        카카오톡 오픈채팅 문의를 가실려면 클릭해주세요.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-10">
                  <div className="mb-4 flex flex-wrap items-center text-base font-semibold text-black">
                    <div className="mr-2 w-full text-black dark:text-white lg:w-auto">
                      소셜링크
                    </div>
                    <div className="text-dark-400 w-full text-sm lg:w-auto">
                      주요 소셜 네트워크 링크입니다.
                    </div>
                  </div>
                  <div className="mb-2 flex items-center text-sm">
                    <span className="mr-2 inline-block rounded-full bg-blue-700 px-5 py-1 text-center text-white">
                      페이스북
                    </span>
                    <div className="flex-1 pl-3 ">
                      <div className="text-dark-500">@gjworks2</div>
                    </div>
                  </div>
                  <div className="mb-2 flex items-center text-sm">
                    <span className="mr-2 inline-block rounded-full bg-sky-500 px-5 py-1 text-center text-white">
                      트위터
                    </span>
                    <div className="flex-1 pl-3 ">
                      <span className="text-dark-500">@gjworks2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
