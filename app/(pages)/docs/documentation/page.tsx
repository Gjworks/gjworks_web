'use client'

import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 pt-10 pb-10 text-dark-500">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="sticky top-[64px]">
              <div className="mb-8">
                <div className="text-white text-sm mb-4 font-medium">
                  Getting Started
                </div>
                <div className="border-l-[1px] border-dark-600">
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-cyan-400 text-sm text-cyan-400 bg-gradient-to-r from-cyan-500/20 from-10% to-transparent"
                    >
                      <span>Introduce</span>
                    </Link>
                  </div>
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-transparent text-sm hover:text-white hover:border-dark-500 hover:bg-gradient-to-r from-dark-500/20 from-10% to-transparent"
                    >
                      <span>Workspace setup</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-transparent text-sm hover:text-white hover:border-dark-500 hover:bg-gradient-to-r from-dark-500/20 from-10% to-transparent"
                    >
                      <span>Installation</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-transparent text-sm hover:text-white hover:border-dark-500 hover:bg-gradient-to-r from-dark-500/20 from-10% to-transparent"
                    >
                      <span>Databases</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden justify-center items-center py-10">
                <div className="">
                  <div className="rounded-2xl p-[0.5px] w-20 h-20 bg-gradient-to-tl from-dark-500/30 via-dark-700/40 to-dark-400/70 overflow-hidden shadow-md shadow-black">
                    <div className="flex items-center justify-center rounded-2xl w-full h-full bg-gradient-to-b from-dark-700 via-dark-800 to-dark-900 shadow-inner shadow-dark-900/90"></div>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="text-white text-sm mb-4 font-medium">
                  Layouts
                </div>
                <div className="border-l-[1px] border-dark-600">
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-transparent text-sm hover:text-white hover:border-dark-500 hover:bg-gradient-to-r from-dark-500/20 from-10% to-transparent"
                    >
                      <span>레이아웃 적용법</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="text-white text-sm mb-4 font-medium">
                  Resource
                </div>
                <div className="border-l-[1px] border-dark-600">
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-transparent text-sm hover:text-white hover:border-dark-500 hover:bg-gradient-to-r from-dark-500/20 from-10% to-transparent"
                    >
                      <span>페이지</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-transparent text-sm hover:text-white hover:border-dark-500 hover:bg-gradient-to-r from-dark-500/20 from-10% to-transparent"
                    >
                      <span>네비게이션메뉴 설정</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-transparent text-sm hover:text-white hover:border-dark-500 hover:bg-gradient-to-r from-dark-500/20 from-10% to-transparent"
                    >
                      <span>모듈 설정</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="text-white text-sm mb-4 font-medium">
                  Components
                </div>
                <div className="border-l-[1px] border-dark-600">
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-transparent text-sm hover:text-white hover:border-dark-500 hover:bg-gradient-to-r from-dark-500/20 from-10% to-transparent"
                    >
                      <span>Modal</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-transparent text-sm hover:text-white hover:border-dark-500 hover:bg-gradient-to-r from-dark-500/20 from-10% to-transparent"
                    >
                      <span>Panel</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="text-white text-sm mb-4 font-medium">
                  Templates
                </div>
                <div className="border-l-[1px] border-dark-600">
                  <div className="-ml-[1px] mb-2">
                    <Link
                      href="#"
                      className="flex justify-between items-center px-5 py-1 border-l-[1px] border-transparent text-sm hover:text-white hover:border-dark-500 hover:bg-gradient-to-r from-dark-500/20 from-10% to-transparent"
                    >
                      <span>사용방법</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9 text-sm">
            <div className="w-full lg:w-4/5">
              <div className="text-cyan-400 mb-8">Introduce</div>
              <div className="text-white text-2xl font-bold mb-2">
                해당 문서는 접근 권한이 있어야 하는 문서 입니다.
              </div>
              <div className="text-dark-400 text-base font-medium">
                문서는 지제이웍스가 직접 작업한 프로젝트 고객사 혹은 파트너쉽을
                체결한 파트너사에게만 제공 되는 문서와 서비스 입니다. 파트너사의
                혜택과 서비스를 알아보세요.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 py-10">
              <div className="col-span-2">
                <div className="text-white text-lg">고객사</div>
              </div>
              <div className="col-span-1">
                <div className="border-[0.5px] border-dark-600 rounded-lg bg-dark-950 shadow-md shadow-dark-700">
                  <div className=" rounded-t-lg border-b-[0.5px] border-dark-600/80 px-3 py-4 bg-dark-900">
                    <div className="text-cyan-500 text-base mb-1">
                      고객사란?
                    </div>
                    <div className="text-dark-500">
                      지제이웍스와 한번이라도 프로젝트를 진행한 고객을 뜻합니다.
                    </div>
                  </div>
                  <div className="px-3 py-5 text-dark-400 text-sm">
                    버전을 잘 확인하여 문서를 참고하여 해결 할 수 있습니다.
                    <div className="pt-1">
                      <Link
                        href="#"
                        className="text-cyan-600 hover:text-cyan-400 underline"
                      >
                        버전 확인하는 방법
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border-[0.5px] border-dark-600 rounded-lg bg-dark-950 shadow-md shadow-dark-700">
                  <div className=" rounded-t-lg border-b-[0.5px] border-dark-600/80 px-3 py-4 bg-dark-900">
                    <div className="text-cyan-500 text-base mb-1">
                      프로젝트 및 유지보수 지원하기
                    </div>
                    <div className="text-dark-500">
                      신규 프로젝트 지원 혹은 기존 프로젝트 유지보수를
                      신청합니다.
                    </div>
                  </div>
                  <div className="px-3 py-5 text-dark-400 text-sm">
                    버전을 잘 확인하여 문서를 참고하여 해결 할 수 있습니다.
                    <div className="pt-1">
                      <Link
                        href="#"
                        className="text-cyan-600 hover:text-cyan-400 underline"
                      >
                        문의하기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-white text-lg">파트너</div>
              </div>
              <div className="col-span-1">
                <div className="border-[0.5px] border-dark-600 rounded-lg bg-dark-950 shadow-md shadow-dark-700">
                  <div className=" rounded-t-lg border-b-[0.5px] border-dark-600/80 px-3 py-4 bg-dark-900">
                    <div className="text-cyan-500 text-base mb-1">
                      파트너사란?
                    </div>
                    <div className="text-dark-500">
                      지제이웍스와 파트너 관계를 맺어 프로젝트 및 제품을
                      취급합니다.
                    </div>
                  </div>
                  <div className="px-3 py-5 text-dark-400 text-sm">
                    파트너사를 신청해보세요.
                    <div className="pt-1">
                      <Link
                        href="#"
                        className="text-cyan-600 hover:text-cyan-400 underline"
                      >
                        파트너 신청
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border-[0.5px] border-dark-600 rounded-lg bg-dark-950 shadow-md shadow-dark-700">
                  <div className=" rounded-t-lg border-b-[0.5px] border-dark-600/80 px-3 py-4 bg-dark-900">
                    <div className="text-cyan-500 text-base mb-1">
                      파트너사 혜택
                    </div>
                    <div className="text-dark-500">
                      저희는 파트너사에 대해 최대한 혜택을 드릴려고 노력하고
                      있습니다.
                    </div>
                  </div>
                  <div className="px-3 py-5 text-dark-400 text-sm">
                    버전을 잘 확인하여 문서를 참고하여 해결 할 수 있습니다.
                    <div className="pt-1">
                      <Link
                        href="#"
                        className="text-cyan-600 hover:text-cyan-400 underline"
                      >
                        자세히 확인
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
