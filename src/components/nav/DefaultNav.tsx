'use client'

import Link from 'next/link'

const DefaultNav = ({list}) => {
  return (
    <>
      <div className="flex justify-center gap-8">
        <Link
          href="/user"
          className="py-3 px-1 text-sm border-b-4 text-gray-950 hover:text-gray-950 border-gray-950"
        >
          대시보드
        </Link>
        <Link
          href="/user/userUpdate"
          className="py-3 px-1 text-sm border-b-4 text-gray-400 hover:text-gray-950 border-white hover:border-gray-950"
        >
          계정&프로필 설정
        </Link>
        <Link
          href="#"
          className="py-3 px-1 text-sm border-b-4 text-gray-400 hover:text-gray-950 border-white hover:border-gray-950"
        >
          API 설정
        </Link>
        <Link
          href="#"
          className="py-3 px-1 text-sm border-b-4 text-gray-400 hover:text-gray-950 border-white hover:border-gray-950"
        >
          타임라인
        </Link>
        <Link
          href="#"
          className="py-3 px-1 text-sm border-b-4 text-gray-400 hover:text-gray-950 border-white hover:border-gray-950"
        >
          1:1문의
        </Link>
      </div>
    </>
  )
}

export default DefaultNav
