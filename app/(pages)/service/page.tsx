'use client'

const Page = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-no-repeat bg-cover bg-center">
      <div className="max-w-screen-lg mx-auto py-8 xl:py-20 px-3">
        <div className="text-white text-5xl font-semibold">Service</div>
        <div className="py-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-3">
              <div className="relative overflow-hidden bg-slate-100/80 border border-white dark:border-dark-800/20 dark:bg-dark-900/90 shadow-sm hover:shadow-lg shadow-gray-100 hover:shadow-slate-200 dark:shadow-dark-950 p-8 lg:p-16 rounded-2xl w-full hover:shadow-xs">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-4xl font-medium mb-4 text-center">
                  Rhymix Store
                </div>
                <div className="text-dark-500 text-center">
                  라이믹스의 모듈과 레이아웃을 판매하는{' '}
                  <span className="text-white">라이믹스 스토어</span>를 방문해
                  보세요.
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-3 ">
              <div className="relative overflow-hidden bg-slate-100/80 border border-white dark:border-dark-800/20 dark:bg-dark-900/90 shadow-sm hover:shadow-lg shadow-gray-100 hover:shadow-slate-200 dark:shadow-dark-950 p-8 lg:p-16 rounded-2xl w-full hover:shadow-xs">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-4xl font-medium mb-4 text-center">
                  UI Components
                </div>
                <div className="text-dark-500 text-center">
                  React, Next.js의 컴포넌트를 제공 하고 있습니다.
                  <span className="text-white">페이지</span>를 방문해 보세요.
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-3 ">
              <div className="relative overflow-hidden bg-slate-100/80 border border-white dark:border-dark-800/20 dark:bg-dark-900/90 shadow-sm hover:shadow-lg shadow-gray-100 hover:shadow-slate-200 dark:shadow-dark-950 p-8 lg:p-16 rounded-2xl w-full hover:shadow-xs">
                11111
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
