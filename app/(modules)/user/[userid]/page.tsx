'use client'

import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className="w-full md:pt-6 px-3 md:px-6 pb-20">
        <div className="max-w-screen-xl mx-auto h-full">
          <div className="grid grid-cols-7 gap-8 h-full">
            <div className="col-span-7 sm:col-span-3 lg:col-span-2">
              <div className="md:sticky top-16 z-10">
                <div className="w-full bg-black rounded-xl overflow-hidden shadow-lg shadow-gray-300 mb-5">
                  <div className="flex gap-4 pb-5 px-5 pt-8">
                    <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                    <div className="flex-1">
                      <div className="text-white text-lg font-bold mb-3">
                        지제이웍스
                      </div>
                      <div className="flex gap-2">
                        <div className="text-gray-500 text-sm">회원등급</div>
                        <div className="text-gray-300 text-sm">준회원</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="text-gray-500 text-sm">Last login</div>
                        <div className="text-gray-300 text-sm">
                          2024년 02월 12일 15:42:11
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <button className="text-gray-400 text-sm hover:text-primary-400 flex-1 flex justify-center items-center py-4 border border-gray-800">
                      정보수정
                    </button>
                    <button className="text-gray-400 text-sm hover:text-primary-400 flex-1 flex justify-center items-center py-4 border border-gray-800">
                      프로필 설정
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex md:flex-wrap overflow-scroll-hide overflow-x-auto overflow-hidden gap-2 sm:gap-4 pr-6 md:pr-0">
                  <div className="md:w-full bg-gray-50 border border-gray-200 rounded-xl shadow-lg shadow-gray-100">
                    <div className="flex sm:block">
                      <button className="flex w-full whitespace-nowrap text-sm border-b border-gray-200 py-4 px-8 hover:bg-gray-100">
                        비밀번호 변경
                      </button>
                      <button className="flex w-full whitespace-nowrap text-sm border-b border-gray-200 py-4 px-8 hover:bg-gray-100">
                        팔로우
                      </button>
                      <button className="flex w-full whitespace-nowrap text-sm border-b border-gray-200 py-4 px-8 hover:bg-gray-100">
                        스크랩 보기
                      </button>
                    </div>
                  </div>
                  <div className="md:w-full bg-gray-50 border border-gray-200 rounded-xl shadow-lg shadow-gray-100">
                    <button className="flex w-full  whitespace-nowrap text-sm py-4 px-8 hover:bg-gray-100 text-rose-600">
                      회원 탈퇴
                    </button>
                  </div>

                  <div className="absolute bottom-0 right-0 top-0 flex w-12 items-center justify-end bg-gradient-to-r from-transparent via-white/50 to-white md:hidden">
                    <div className="flex h-full w-5 items-center justify-center rounded-md border border-gray-200 bg-gray-100 text-sm text-gray-400 hover:text-gray-950">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-400 px-2 py-4">
                현재 페이지는 공개 여부와 상관없이 Feed는 확인 할 수 있습니다.
              </div>
            </div>
            <div className="col-span-7 sm:col-span-4 lg:col-span-5">
              <div className="grid grid-cols-5 gap-8">
                <div className="col-span-5 lg:col-span-3">
                  <div className="mb-5">
                    <div className="rounded-lg overflow-hidden">
                      <div className="flex gap-4 py-3 px-3 border-t border-l border-r border-gray-200 rounded-t-lg ">
                        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                        <div className="flex-1">
                          <div className="">
                            <div className="text-gray-950 text-base font-bold">
                              지제이웍스
                            </div>
                            <div className="text-gray-400 text-sm">
                              2024.02.12 15:42:11
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <Image
                          src="/assets/images/bg23.jpg"
                          alt="thumbnail"
                          width={580}
                          height={380}
                        />
                      </div>
                      <div className="border-b border-l border-r border-gray-200 rounded-b-lg overflow-hidden">
                        <div className="text-gray-500 text-sm line-clamp-2 my-6 px-3">
                          In this section, well explore the process of adding
                          basic email-password authentication to a web
                          application. While this method provides a fundamental
                          level of security, its worth considering more advanced
                          options like OAuth or passwordless logins for enhanced
                          protection against common security threats. The
                          authentication flow well discuss is as follows:
                        </div>
                        <div className="flex gap-4 pb-3 pt-3 border-t border-gray-100 rounded-b-lg ">
                          <button className="flex items-center justify-center gap-4 flex-1 text-sm text-gray-500 hover:text-gray-950">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.25}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                />
                              </svg>
                            </div>
                            <div>52</div>
                          </button>
                          <button className="flex items-center justify-center gap-4 flex-1 text-sm text-gray-500 hover:text-gray-950">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.25}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                              </svg>
                            </div>
                            <div>11</div>
                          </button>
                          <button className="flex items-center justify-center gap-4 flex-1 text-sm text-gray-500 hover:text-gray-950">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.25}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </div>
                            <div>1,223</div>
                          </button>
                        </div>
                        <div className="flex gap-3 pt-3 pb-5 px-4 border-t border-gray-100 bg-gray-50 rounded-b-lg">
                          <div className="flex gap-2 py-3">
                            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                          </div>
                          <div className="bg-gray-200 rounded-2xl py-3 px-5 text-sm hover:bg-gray-300 text-gray-500 hover:text-gray-900">
                            <div className="mb-2">
                              <div className="flex items-center gap-2">
                                <div className="text-gray-950 text-sm font-medium">
                                  지제이웍스
                                </div>
                                <div className="text-gray-500 text-xs">
                                  7일전
                                </div>
                              </div>
                            </div>
                            <div className="line-clamp-2">
                              Since async Server Components are new to the React
                              ecosystem, some tools do not fully support them.
                              In the meantime, we recommend using End-to-End
                              Testing over Unit Testing for async components.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="rounded-lg overflow-hidden">
                      <div className="flex gap-4 py-3 px-3 border-t border-l border-r border-gray-200 rounded-t-lg ">
                        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                        <div className="flex-1">
                          <div className="">
                            <div className="text-gray-950 text-base font-bold">
                              지제이웍스
                            </div>
                            <div className="text-gray-400 text-sm">
                              2024.02.12 15:42:11
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-l border-r border-gray-200 rounded-b-lg overflow-hidden">
                        <div className="text-gray-500 text-sm line-clamp-2 my-6 px-3">
                          In this section, well explore the process of adding
                          basic email-password authentication to a web
                          application. While this method provides a fundamental
                          level of security, its worth considering more advanced
                          options like OAuth or passwordless logins for enhanced
                          protection against common security threats.
                        </div>
                        <div className="flex gap-4 pb-3 pt-3 border-t border-gray-100 bg-gray-50 rounded-b-lg ">
                          <button className="flex-1 text-sm text-gray-500 hover:text-gray-950">
                            댓글 수 54
                          </button>
                          <button className="flex-1 text-sm text-gray-500 hover:text-gray-950">
                            좋아요 14
                          </button>
                          <button className="flex-1 text-sm text-gray-500 hover:text-gray-950">
                            읽은 수 10,234
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center mb-5">
                <div className="flex bg-gray-200/75 rounded-lg p-1">
                  <button className="text-sm rounded-lg py-1 px-6 text-gray-800 bg-white">
                    게시글
                  </button>
                  <button className="text-sm rounded-lg py-1 px-6 text-gray-500">
                    댓글
                  </button>
                </div>
              </div> */}
                <div className="col-span-5 lg:col-span-2">
                  <div className="bg-gray-100 rounded-xl p-5 text-sm mb-5">
                    <div className="text-xl font-medium text-gray-950">
                      최근 알림
                    </div>
                  </div>
                  <div className="bg-primary-100 rounded-xl p-5 text-sm mb-5">
                    <div className="text-xl font-medium text-gray-950">
                      1:1 문의
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
