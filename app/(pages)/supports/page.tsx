'use client'

const Page = () => {
  return (
    <>
      <div className="relative bg-[url('/assets/images/bg15.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950"></div>
        <div className="relative max-w-screen-xl mx-auto py-8 xl:py-20 px-3">
          <div className="text-white text-5xl font-semibold">Supports</div>
          <div className="py-20">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 lg:col-span-1 order-1 lg:order-0">
                <div className="grid grid-cols-4 gap-8 py-10">
                  <div className="col-span-4 lg:col-span-1">
                    <div className="text-lg font-semibold text-white">
                      BUSINESS INFO
                    </div>
                  </div>
                  <div className="col-span-4 lg:col-span-3">
                    <div className="pb-10">
                      <div className="text-base mb-2">
                        <div className="text-dark-300 mr-3 mb-3">
                          gjworks2@gmail.com
                        </div>
                        <div className="flex flex-wrap">
                          <div className="w-full lg:w-auto mb-2">
                            <span className="text-dark-400">
                              사업자등록번호:
                            </span>
                            <span className="text-white mr-3">
                              892-28-00572
                            </span>
                          </div>
                          <div className="w-full lg:w-auto mb-2">
                            <span className="text-dark-400">대표:</span>
                            <span className="text-white">김규진</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 lg:col-span-1">
                    <div className="text-lg font-semibold text-white">
                      소셜네트워크
                    </div>
                  </div>
                  <div className="col-span-4 lg:col-span-3">
                    <div className="pb-10">
                      <div className="text-white text-base font-semibold mb-4">
                        오픈채팅
                      </div>
                      <div className="flex items-center text-sm mb-2">
                        <div className="pr-2">
                          <span className="inline-block bg-amber-400 text-black rounded-full text-center py-1 px-5">
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
                    <div>
                      <div className="flex items-center flex-wrap text-white text-base font-semibold mb-4">
                        <div className="w-full lg:w-auto mr-2 text-white">
                          소셜링크
                        </div>
                        <div className="w-full lg:w-auto text-dark-400 text-sm">
                          주요 소셜 네트워크 링크입니다.
                        </div>
                      </div>
                      <div className="flex items-center mb-2 text-sm">
                        <span className="inline-block bg-blue-700 text-white rounded-full text-center py-1 mr-2 px-5">
                          페이스북
                        </span>
                        <div className="flex-1 pl-3 ">
                          <div className="text-dark-500">@gjworks2</div>
                        </div>
                      </div>
                      <div className="flex items-center mb-2 text-sm">
                        <span className="inline-block bg-sky-500 text-white rounded-full text-center py-1 mr-2 px-5">
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
              <div className="col-span-2 lg:col-span-1 order-0 lg:order-1">
                <div className="relative overflow-hidden bg-white/90 border border-white dark:border-dark-800/20 dark:bg-dark-900/70 backdrop-blur-xl p-8 lg:p-16 rounded-2xl w-full">
                  <div className="text-black dark:text-white">고객문의</div>
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
