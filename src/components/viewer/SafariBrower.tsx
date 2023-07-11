import Image from 'next/image'
const SafariBrower = () => {
  return (
    <>
      <div className="shadow-xl shadow-slate-200 dark:shadow-dark-950/50 sm:rounded-xl min-w-full max-w-full mb-10">
        <div className="sm:rounded-xl ring-1 ring-slate-950/5">
          <div className="sm:rounded-t-xl bg-gradient-to-b from-white to-[#FBFBFB] dark:from-dark-800 dark:to-dark-900">
            <div className="py-2.5 flex px-4 gap-6">
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex-1">
                <div className="bg-slate-100 rounded-md font-medium text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset text-slate-400 ring-slate-900/5 mx-auto w-4/5 dark:bg-dark-950/70 dark:text-dark-400">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="tw-3.5 h-3.5 mr-1.5 text-slate-400 dark:text-dark-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  gjworks.dev
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex justify-center items-center rounded-md shadow-dark-800 text-slate-500 dark:text-dark-100 bg-slate-100 dark:bg-dark-700 w-[1.965rem] h-[1.965rem] cursor-pointer">
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
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 text-xs leading-5 overflow-hidden">
              <div className="pointer-events-none select-none rounded-tr border border-gray-200/5 dark:border-dark-900/5 px-4 py-1.5 -mb-px -ml-px flex items-center justify-center space-x-2 bg-slate-100 dark:bg-dark-950/50 text-slate-400 dark:text-dark-400">
                <div className="truncate">Components</div>
              </div>
              <div className="pointer-events-none select-none font-medium px-4 py-1.5 flex items-center justify-center space-x-2 text-slate-500 dark:text-dark-200">
                <div className="truncate">Workspace</div>
              </div>
              <div className="pointer-events-none select-none rounded-tl border border-slate-200/5 dark:border-dark-900/5 pl-4 pr-8 py-1.5 -mb-px -mr-4 flex items-center justify-center space-x-2 bg-slate-100 dark:bg-dark-950/50 text-slate-400 dark:text-dark-400">
                <div className="truncate">UI</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative border-t border-slate-100 dark:border-dark-950 rounded-b-xl bg-white dark:bg-dark-900">
          <div className="w-full h-20"></div>
        </div>
      </div>
    </>
  )
}

export default SafariBrower
