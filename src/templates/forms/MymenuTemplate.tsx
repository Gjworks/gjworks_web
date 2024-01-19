'use client'
import {motion} from 'framer-motion'
import Link from 'next/link'

const MymenuTemplate = () => {
  const innerAnimation = {
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 0.3,
      },
    },
    close: {
      opacity: 0,
      x: '-20%',
      transition: {
        duration: 0.2,
      },
    },
  }
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 bg-white py-10 min-h-screen">
        <div className="">
          <div className="flex gap-4 px-3">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <div>
              <div className="flex items-center gap-2">
                <div className="text-lg font-semibold">방문자</div>
                <div className="text-gray-600 text-base">님 반갑습니다.</div>
              </div>
              <div className="text-gray-400 text-sm">
                마지막 접속시간 : 2024-01-15 14:23:58
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MymenuTemplate
