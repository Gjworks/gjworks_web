'use client'

import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className="relative w-full pt-10 px-3 pb-20">
        <div className="max-w-screen-xl mx-auto h-full">
          <div className="grid grid-cols-7 gap-8 h-full">
            <div className="col-span-2">
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
              <div className="w-full bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-lg shadow-gray-100 mb-5">
                <button className="flex w-full text-sm border-b border-gray-200 py-4 px-8 hover:bg-gray-100">
                  팔로우
                </button>
                <button className="flex w-full text-sm border-b border-gray-200 py-4 px-8 hover:bg-gray-100">
                  스크랩 보기
                </button>
                <button className="flex w-full text-sm border-b border-gray-200 py-4 px-8 hover:bg-gray-100">
                  비밀번호 변경
                </button>
              </div>
              <div className="w-full bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-lg shadow-gray-100">
                <button className="flex w-full text-sm py-4 px-8 hover:bg-gray-100 text-rose-600">
                  회원 탈퇴
                </button>
              </div>
            </div>
            <div className="col-span-3">
              <div className="mb-5">
                <div className=" bg-gray-50 rounded-lg overflow-hidden shadow-md shadow-gray-200/70">
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
                  <div className="border-b border-l border-r border-gray-200 rounded-b-lg ">
                    <div className="text-gray-500 text-sm line-clamp-5 py-6 px-3">
                      In this section, well explore the process of adding basic
                      email-password authentication to a web application. While
                      this method provides a fundamental level of security, its
                      worth considering more advanced options like OAuth or
                      passwordless logins for enhanced protection against common
                      security threats. The authentication flow well discuss is
                      as follows:
                    </div>
                    <div className="flex gap-4 pb-3 pt-3 border-t border-gray-100 bg-gray-50 rounded-b-lg ">
                      <button className="flex-1 text-sm text-gray-500 hover:text-gray-950">
                        댓글 수 23
                      </button>
                      <button className="flex-1 text-sm text-gray-500 hover:text-gray-950">
                        좋아요 4
                      </button>
                      <button className="flex-1 text-sm text-gray-500 hover:text-gray-950">
                        읽은 수 1,923
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className=" bg-gray-50 rounded-lg overflow-hidden shadow-md shadow-gray-200/70">
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
                      src="/assets/images/bg10.jpg"
                      alt="thumbnail"
                      width={580}
                      height={380}
                    />
                  </div>
                  <div className="border-b border-l border-r border-gray-200 rounded-b-lg ">
                    <div className="text-gray-500 text-sm line-clamp-5 py-6 px-3">
                      In this section, well explore the process of adding basic
                      email-password authentication to a web application. While
                      this method provides a fundamental level of security, its
                      worth considering more advanced options like OAuth or
                      passwordless logins for enhanced protection against common
                      security threats. The authentication flow well discuss is
                      as follows:
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
            <div className="col-span-2">
              <div className="bg-gray-100 rounded-xl p-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
