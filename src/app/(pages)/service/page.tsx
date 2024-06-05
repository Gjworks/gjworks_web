'use client'

import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto px-3 py-20">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-1">
            <div className="">
              <div className="font-medium text-lg mb-4">2024. 06. 04</div>
              <div className="text-gray-400">
                Write : <span className="font-bold">John Doe</span>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div>
              <div className="font-bold text-lg mb-4">
                To implement authentication in Next.js, familiarize yourself
                with three foundational concepts.
              </div>
              <div className="text-sm text-gray-400 mb-8">
                Authentication verifies a users identity. This happens when a
                user logs in, either with a username and password or through a
              </div>
              <div className="flex gap-4">
                <div className="rounded-xl w-20 h-20 shadow-lg shadow-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
