import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 pt-8 pb-20">
        <div className="flex justify-between gap-4 mb-10">
          <div className="flex gap-2 items-center">
            <div className="text-2xl font-bold text-black dark:text-white">
              Store
            </div>
            <div className="text-lg font-semibold text-gray-700 dark:text-dark-400">
              악세사리
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 bg-gray-950 hover:bg-gray-700 dark:bg-white dark:hover:bg-dark-300 rounded-full py-2 px-8 cursor-pointer text-white dark:text-black">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div className="hidden md:flex text-sm">장바구니</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-3 md:col-span-1">
            <Link
              href="/store/view"
              className="block rounded-lg bg-gray-100 hover:bg-gray-200 py-20 mb-6 h-[120px]"
            ></Link>
            <div className="flex gap-4">
              <div className="flex-1">
                <Link
                  href="/store/view"
                  className="text-gray-800 text-base font-medium mb-2 line-clamp-1"
                >
                  지제이웍스 웹애플리케이션 디자인
                </Link>
                <div className="text-gray-400 text-sm line-clamp-1">
                  Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-white text-xs bg-blue-600 rounded-full py-1 px-4 hover:bg-blue-500 cursor-pointer">
                  구입하기
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <Link
              href="/store/view"
              className="block rounded-lg bg-gray-100 hover:bg-gray-200 py-20 mb-6 h-[120px]"
            ></Link>
            <div className="flex gap-4">
              <div className="flex-1">
                <Link
                  href="/store/view"
                  className="text-gray-800 text-base font-medium mb-2 line-clamp-1"
                >
                  지제이웍스 웹애플리케이션 디자인
                </Link>
                <div className="text-gray-400 text-sm line-clamp-1">
                  Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-white text-xs bg-blue-600 rounded-full py-1 px-4 hover:bg-blue-500 cursor-pointer">
                  구입하기
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <Link
              href="/store/view"
              className="block rounded-lg bg-gray-100 hover:bg-gray-200 py-20 mb-6 h-[120px]"
            ></Link>
            <div className="flex gap-4">
              <div className="flex-1">
                <Link
                  href="/store/view"
                  className="text-gray-800 text-base font-medium mb-2 line-clamp-1"
                >
                  지제이웍스 웹애플리케이션 디자인
                </Link>
                <div className="text-gray-400 text-sm line-clamp-1">
                  Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-white text-xs bg-blue-600 rounded-full py-1 px-4 hover:bg-blue-500 cursor-pointer">
                  구입하기
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden grid-cols-3 gap-8">
          <div className="col-span-3 lg:col-span-1">
            <div className="group relative rounded-lg bg-opacity-70 bg-white/75 dark:bg-dark-900 overflow-hidden shadow-lg shadow-slate-400 dark:shadow-dark-950/50 bg-[url('/assets/images/bg9.jpg')] bg-no-repeat bg-cover bg-center ">
              <div className="absolute inset-0 backdrop-blur-lg bg-dark-900/60"></div>
              <div className="relative h-[200px] overflow-hidden">
                <div className="group relative h-[200px]">
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/40 to-dark-950"></div> */}
                  <Link
                    href="/store/view"
                    className="block relative w-full h-full bg-slate-950 bg-[url('/assets/images/bg9.jpg')] bg-no-repeat bg-cover bg-center transition duration-700 group-hover:scale-[1.08]"
                  ></Link>
                  <div className="absolute bottom-3 left-3">
                    <div className="relative text-white bg-white/10 py-1 px-3 backdrop-blur-lg rounded-lg text-xs">
                      Next.js
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center p-3 gap-4">
                <div className="w-10 h-10 bg-dark-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="text-base text-white line-clamp-1">
                    지제이웍스 웹애플리케이션 디자인
                  </div>
                  <div className="text-sm text-dark-400 line-clamp-1">
                    Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                  </div>
                </div>
                <div className="flex items-center bg-slate-700 dark:bg-dark-700 text-sky-400 text-sm py-1 px-5 rounded-full">
                  120,000
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <div className="group relative rounded-lg bg-dark-900 overflow-hidden shadow-lg shadow-slate-400 dark:shadow-dark-950/50 bg-[url('/assets/images/bg10.jpg')] bg-no-repeat bg-cover bg-center ">
              <div className="absolute inset-0 backdrop-blur-lg bg-dark-900/60"></div>
              <div className="relative h-[200px] overflow-hidden">
                <div className="group relative h-[200px]">
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/40 to-dark-950"></div> */}
                  <div className="relative w-full h-full bg-primary-500 bg-[url('/assets/images/bg10.jpg')] bg-no-repeat bg-cover bg-center transition duration-700 group-hover:scale-[1.08]"></div>
                  <div className="absolute bottom-3 left-3">
                    <div className="relative text-white bg-white/10 py-1 px-3 backdrop-blur-lg rounded-lg text-xs">
                      Next.js
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center p-3 gap-4">
                <div className="w-10 h-10 bg-dark-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="text-base text-white line-clamp-1">
                    지제이웍스 웹애플리케이션 플러그인
                  </div>
                  <div className="text-sm text-dark-400 line-clamp-1">
                    Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                  </div>
                </div>
                <div className="flex items-center bg-slate-700 dark:bg-dark-700 text-sky-400 text-sm py-1 px-5 rounded-full">
                  180,000
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <div className="group relative rounded-lg bg-opacity-75 bg-slate-900/75 dark:bg-dark-900 overflow-hidden shadow-lg shadow-slate-400 dark:shadow-dark-950/50 bg-[url('/assets/images/primary/primary_bg3.jpg')] bg-no-repeat bg-cover bg-center ">
              <div className="absolute inset-0 backdrop-blur-lg bg-dark-900/60"></div>
              <div className="relative h-[200px] overflow-hidden">
                <div className="group relative h-[200px]">
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/40 to-dark-950"></div> */}
                  <div className="relative w-full h-full bg-slate-950 bg-[url('/assets/images/primary/primary_bg3.jpg')] bg-no-repeat bg-cover bg-center transition duration-700 group-hover:scale-[1.08]"></div>
                  <div className="absolute bottom-3 left-3">
                    <div className="relative text-white bg-white/10 py-1 px-3 backdrop-blur-lg rounded-lg text-xs">
                      Next.js
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center p-3 gap-4">
                <div className="w-10 h-10 bg-gray-700 dark:bg-dark-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="text-base text-white line-clamp-1">
                    지제이웍스 웹애플리케이션 애드온
                  </div>
                  <div className="text-sm text-dark-400 line-clamp-1">
                    Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                  </div>
                </div>
                <div className="flex items-center bg-gray-700 dark:bg-dark-700 text-sky-400 text-sm py-1 px-5 rounded-full">
                  80,000
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
