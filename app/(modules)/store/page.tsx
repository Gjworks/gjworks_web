import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 py-20">
        <div className="grid grid-cols-3 gap-8">
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
