'use client'

const Page = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 py-10 lg:py-20 h-[2400px]">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-4 sm:col-span-2 lg:col-span-1">
            <div className="rounded-xl p-5 border bg-white hover:border-primary-600 border-gray-200 dark:border-dark-600 dark:hover:border-primary-600 dark:bg-dark-900 h-full">
              <div className="flex justify-center text-black dark:text-white mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
              </div>
              <div className="text-black dark:text-white font-bold mb-3 text-xl text-center">
                Modal
              </div>
              <div className="text-sm text-gray-500 dark:text-dark-200 mb-3">
                애니메이션 모달을 사용 할 수 있습니다.
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-2 lg:col-span-1">
            <div className="rounded-xl p-5 border bg-white hover:border-primary-600 border-gray-200 dark:border-dark-600 dark:hover:border-primary-600 dark:bg-dark-900 h-full">
              <div className="flex justify-center text-black dark:text-white mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
              </div>
              <div className="text-black dark:text-white font-bold mb-3 text-xl text-center">
                Dropdown
              </div>
              <div className="text-sm text-gray-500 dark:text-dark-200 mb-3">
                애니메이션 모달을 사용 할 수 있습니다.
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-2 lg:col-span-1">
            <div className="rounded-xl p-5 border bg-white hover:border-primary-600 border-gray-200 dark:border-dark-600 dark:hover:border-primary-600 dark:bg-dark-900 h-full">
              <div className="flex justify-center text-black dark:text-white mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
              </div>
              <div className="text-black dark:text-white font-bold mb-3 text-xl text-center">
                Side Navigation
              </div>
              <div className="text-sm text-gray-500 dark:text-dark-200 mb-3">
                애니메이션 모달을 사용 할 수 있습니다.
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-2 lg:col-span-1">
            <div className="rounded-xl p-5 border bg-white hover:border-primary-600 border-gray-200 dark:border-dark-600 dark:hover:border-primary-600 dark:bg-dark-900 h-full">
              <div className="flex justify-center text-black dark:text-white mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <div className="text-black dark:text-white font-bold mb-3 text-xl text-center">
                Editor
              </div>
              <div className="text-sm text-gray-500 dark:text-dark-200 mb-3">
                애니메이션 모달을 사용 할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="bg-dark-800/80 py-8 px-8 rounded-lg">
            <div className="text-2xl mb-5 text-white">Dark color palette</div>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-dark-50 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
              <div className="bg-dark-100 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
              <div className="bg-dark-200 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
              <div className="bg-dark-300 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
              <div className="bg-dark-400 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
              <div className="bg-dark-500 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
              <div className="bg-dark-600 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
              <div className="bg-dark-700 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
              <div className="bg-dark-800 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
              <div className="bg-dark-900 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
              <div className="bg-dark-950 col-span-1 h-24 rounded-lg shadow-lg shadow-dark-950"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
