'use client'

const Coming = () => {
  return (
    <div className="relative w-full">
      <div className="bg-[url('/assets/images/bg11.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-dark-950/10"></div>
        <div className="relative max-w-screen-xl mx-auto px-3 h-[calc(100vh-305px)]">
          <div className="flex justify-center items-center w-full h-full">
            <div className="rounded-md p-[0.5px] bg-gradient-to-tl from-dark-500/30 via-dark-700/40 to-dark-400/70 overflow-hidden shadow-md shadow-dark-500/10">
              <div className="flex items-center justify-center rounded-md w-full h-full bg-gradient-to-b from-dark-800/90 via-dark-950/75 to-dark-950/90">
                <div className="py-3 px-8">
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-700 to-gray-900 dark:from-indigo-500 dark:to-sky-500 font-normal text-base">
                    페이지 준비중...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        src="/assets/images/bg11.jpg"
        alt="Main Visual Image"
        width="1265"
        height="468"
        loading="lazy"
        className="rounded-2xl"
      /> */}
    </div>
  )
}
export default Coming
