const Page = () => {
  return (
    <>
      <div className="relative flex items-end h-[400px] lg:h-[600px] bg-[url('/assets/images/bg13.jpg')] bg-no-repeat bg-cover bg-bottom">
        <div className="absolute bottom-0 left-0 right-0 h-[400px] lg:h-[600px] bg-gradient-to-b from-gray-900/10 via-gray-950/50 to-gray-950"></div>
        <div className="relative flex justify-center h-full items-end max-w-screen-sm mx-auto py-10">
          <div className="bg-gray-800/60 backdrop-blur-lg rounded-lg text-center p-10">
            <div className="text-gray-400 font-semibold text-xl mb-1">
              Store
            </div>
            <div className="text-white text-3xl font-bold mb-4">
              1앱 또는 1도메인 <br></br>1개의 제품만 적용됩니다.
            </div>
            <div className="text-black bg-yellow-500 backdrop-blur-lg border border-yellow-500 shadow-lg shadow-yellow-500/40 py-3 px-8 rounded-lg hover:bg-yellow-400 hover:text-black cursor-pointer">
              구매내역
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-3 py-20">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-3 md:col-span-1">
            <div className="group relative rounded-lg bg-gray-900 overflow-hidden bg-[url('/assets/images/bg9.jpg')] bg-no-repeat bg-cover bg-center ">
              <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/60"></div>
              <div className="relative h-[200px] overflow-hidden">
                <div className="group relative h-[200px]">
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-gray-950"></div> */}
                  <div className="relative w-full h-full bg-yellow-500 bg-[url('/assets/images/bg9.jpg')] bg-no-repeat bg-cover bg-center transition duration-700 group-hover:scale-[1.08]"></div>
                  <div className="absolute bottom-3 left-3">
                    <div className="relative text-white bg-white/10 py-1 px-3 backdrop-blur-lg rounded-lg text-xs">
                      Next.js
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center p-3 gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="text-base text-white line-clamp-1">
                    지제이웍스 웹애플리케이션 디자인
                  </div>
                  <div className="text-sm text-gray-400 line-clamp-1">
                    Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                  </div>
                </div>
                <div className="flex items-center bg-gray-700 text-yellow-400 text-sm py-1 px-5 rounded-full">
                  120,000
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <div className="group relative rounded-lg bg-gray-900 overflow-hidden bg-[url('/assets/images/bg10.jpg')] bg-no-repeat bg-cover bg-center ">
              <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/60"></div>
              <div className="relative h-[200px] overflow-hidden">
                <div className="group relative h-[200px]">
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-gray-950"></div> */}
                  <div className="relative w-full h-full bg-yellow-500 bg-[url('/assets/images/bg10.jpg')] bg-no-repeat bg-cover bg-center transition duration-700 group-hover:scale-[1.08]"></div>
                  <div className="absolute bottom-3 left-3">
                    <div className="relative text-white bg-white/10 py-1 px-3 backdrop-blur-lg rounded-lg text-xs">
                      Next.js
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center p-3 gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="text-base text-white line-clamp-1">
                    지제이웍스 웹애플리케이션 플러그인
                  </div>
                  <div className="text-sm text-gray-400 line-clamp-1">
                    Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                  </div>
                </div>
                <div className="flex items-center bg-gray-700 text-yellow-400 text-sm py-1 px-5 rounded-full">
                  180,000
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <div className="group relative rounded-lg bg-gray-900 overflow-hidden bg-[url('/assets/images/yellow/yellow_bg3.jpg')] bg-no-repeat bg-cover bg-center ">
              <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/60"></div>
              <div className="relative h-[200px] overflow-hidden">
                <div className="group relative h-[200px]">
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-gray-950"></div> */}
                  <div className="relative w-full h-full bg-yellow-500 bg-[url('/assets/images/yellow/yellow_bg3.jpg')] bg-no-repeat bg-cover bg-center transition duration-700 group-hover:scale-[1.08]"></div>
                  <div className="absolute bottom-3 left-3">
                    <div className="relative text-white bg-white/10 py-1 px-3 backdrop-blur-lg rounded-lg text-xs">
                      Next.js
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center p-3 gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="text-base text-white line-clamp-1">
                    지제이웍스 웹애플리케이션 애드온
                  </div>
                  <div className="text-sm text-gray-400 line-clamp-1">
                    Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                  </div>
                </div>
                <div className="flex items-center bg-gray-700 text-yellow-400 text-sm py-1 px-5 rounded-full">
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
