"use client";

const Page = () => {
  return (
    <>
      <div className="relative">
        <div className="relative mx-auto max-w-screen-md px-3 py-8 lg:px-8 xl:py-20">
          <div className="text-5xl font-semibold text-black">Supports</div>
          <div className="py-20">
            <div className="grid grid-cols-2 gap-8">
              <div className="lg:order-0 order-1 col-span-2">
                <div className="grid grid-cols-4 gap-8 py-10">
                  <div className="col-span-4 lg:col-span-1">
                    <div className="text-lg font-semibold text-black">
                      BUSINESS INFO
                    </div>
                  </div>
                  <div className="col-span-4 lg:col-span-3">
                    <div className="mb-10 bg-white p-5">
                      <div className="mb-2 text-base">
                        <div className="text-dark-300 mb-3 mr-3">
                          gjworks2@gmail.com
                        </div>
                        <div className="flex flex-wrap">
                          <div className="flex w-full gap-2 lg:w-auto">
                            <span className="text-dark-400">
                              사업자등록번호:
                            </span>
                            <span className="mr-3 text-black">
                              892-28-00572
                            </span>
                          </div>
                          <div className="flex w-full gap-2 lg:w-auto">
                            <span className="text-dark-400">대표:</span>
                            <span className="text-black">김규진</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 lg:col-span-1">
                    <div className="text-lg font-semibold text-black">
                      소셜네트워크
                    </div>
                  </div>
                  <div className="col-span-4 lg:col-span-3">
                    <div className="mb-10 bg-white p-5">
                      <div className="mb-4 text-base font-semibold text-black">
                        오픈채팅
                      </div>
                      <div className="mb-2 flex items-center text-sm">
                        <div className="pr-2">
                          <span className="inline-block rounded-full bg-amber-400 px-5 py-1 text-center text-black">
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
                    <div className="mb-10 bg-white p-5">
                      <div className="mb-4 flex flex-wrap items-center text-base font-semibold text-black">
                        <div className="mr-2 w-full text-black lg:w-auto">
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
        </div>
      </div>
    </>
  );
};

export default Page;
