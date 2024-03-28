'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const Editorjs = dynamic(() => import('src/components/editor/Editorjs'), {
  ssr: false,
})
const Page = () => {
  const [data, setData] = useState<object | null>(null)
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <>
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="py-5 px-8 rounded-2xl">
          <div className="pt-8 mb-6">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-2">
                <label htmlFor="" className="text-sm">
                  제목
                </label>
              </div>
              <div className="col-span-10">
                <input
                  type="text"
                  name=""
                  className="text-gray-900 text-base w-full outline-none border-b border-gray-200 focus:border-gray-950 px-3"
                  placeholder="제목을 입력해주세요."
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="" className="text-sm">
                  카테고리
                </label>
              </div>
              <div className="col-span-10">
                <div className="flex gap-4">
                  <select className="border-b border-gray-200 focus:border-gray-950 py-2 px-5 outline-none">
                    <option>카테고리를 선택해주세요.</option>
                  </select>
                </div>
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-10">
                <Editorjs onChange={setData} holder="editorjs-container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
