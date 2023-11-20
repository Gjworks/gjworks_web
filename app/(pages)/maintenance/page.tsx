'use client'

import Sectionbox from '@gjworks/components/sections/Sectionbox'

const Page = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto py-8 xl:py-20 px-3">
        <div className="text-black dark:text-white text-5xl font-semibold">
          Maintenance
        </div>
        <div className=" py-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 lg:col-span-1">
              <Sectionbox>
                <div className="py-10 px-5">
                  <div className="text-white font-bold text-xl mb-5">
                    홈페이지 유지보수
                  </div>
                </div>
              </Sectionbox>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Sectionbox>
                <div className="py-10 px-5">
                  <div className="text-white font-bold text-xl mb-5">
                    홈페이지 유지보수
                  </div>
                </div>
              </Sectionbox>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Sectionbox>
                <div className="py-10 px-5">
                  <div className="text-white font-bold text-xl mb-5">
                    홈페이지 유지보수
                  </div>
                </div>
              </Sectionbox>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Sectionbox>
                <div className="py-10 px-5">
                  <div className="text-white font-bold text-xl mb-5">
                    홈페이지 유지보수
                  </div>
                </div>
              </Sectionbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
