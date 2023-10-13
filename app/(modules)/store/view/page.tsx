const Page = () => {
  return (
    <>
      <div className="max-w-[2560px] mx-auto relative pt-20 pb-20  overflow-hidden bg-[url('/assets/images/bg20.jpg')] bg-cover bg-center bg-no-repeat h-[350px]">
        <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden bg-dark-950/40 dark:bg-gradient-to-b dark:from-dark-950/40 dark:via-dark-950/75 dark:to-dark-950"></div>
      </div>
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="bg-dark-950/20 backdrop-blur-lg rounded-lg p-5 -mt-[120px] border border-dark-800/50">
          <div className="flex gap-8 flex-wrap mb-8">
            <div className="w-20 h-20 rounded-lg bg-blue-700"></div>
            <div className="flex-1">
              <div className="text-lg text-white mb-1">
                Dynamic Property Applications
              </div>
              <div className="text-dark-500 mb-1">
                지제이웍스 웹애플리케이션
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">
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
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </span>
                <span className="text-sky-400 text-sm underline">
                  https://gjworks.dev/store
                </span>
              </div>
            </div>
            <div className="">
              <div className="flex gap-2">
                <div className="inline-block text-white bg-blue-700 hover:bg-blue-600 rounded py-2 px-4 text-xs cursor-pointer">
                  Download
                </div>
                <div className="inline-block text-white bg-dark-700 hover:bg-dark-600 rounded py-2 px-4 text-xs cursor-pointer">
                  Link
                </div>
              </div>
            </div>
          </div>
          <div className="border border-dark-800/75 bg-dark-900/50 rounded-lg p-5 mb-8">
            <div className="grid grid-cols-4 gap-10">
              <div className="col-span-1">
                <div className="text-base text-sky-600 mb-3">1,200</div>
                <div className="text-sm text-dark-400">Download Count</div>
              </div>
              <div className="col-span-1">
                <div className="text-base text-sky-600 mb-3">1,200</div>
                <div className="text-sm text-dark-400">Like Count</div>
              </div>
              <div className="col-span-1">
                <div className="text-base text-sky-600 mb-3">1,200</div>
                <div className="text-sm text-dark-400">Review Count</div>
              </div>
              <div className="col-span-1">
                <div className="text-base text-sky-600 mb-3">1,200</div>
                <div className="text-sm text-dark-400">Readed Count</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-base text-white mb-1">About us</div>
            <div className="text-sm text-dark-300">
              I’ve written a few thousand words on why traditional “semantic
              class names” are the reason CSS is hard to maintain, but the truth
              is you’re never going to believe me until you actually try it.
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="text-white text-xl mb-8">Properties</div>
        </div>
      </div>
    </>
  )
}

export default Page
