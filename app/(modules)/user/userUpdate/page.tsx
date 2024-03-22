'use client'

import React, {useState, useEffect} from 'react'

const Page = (props: any) => {
  return (
    <>
      <div className="max-w-screen-md mx-auto px-3 py-20">
        <div className="border-b border-gray-200">
          <div className="grid grid-cols-3 gap-4 py-3 mb-2 border-b border-gray-100">
            <div className="col-span-1 text-base text-gray-400 p-2">이메일</div>
            <div className="col-span-2 text-base text-gray-900 p-2">
              gjworks@kakao.com
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-3 mb-2 border-b border-gray-100">
            <div className="col-span-1 text-base text-gray-400 p-2">
              프로필 이미지
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-8">
                <div className="relative text-gray-300 rounded-full w-20 h-20 bg-gray-200 hover:bg-gray-300"></div>
                <div className="flex gap-2">
                  <button className="text-xs border-green-500 border py-1 px-3 rounded-lg hover:bg-green-500 hover:text-white text-green-500">
                    변경하기
                  </button>
                  <button className="text-xs border-rose-500 border py-1 px-3 rounded-lg hover:bg-rose-500 hover:text-white text-rose-500">
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-3 mb-2 border-b border-gray-100">
            <div className="col-span-1 text-base text-gray-400 p-2">
              비밀번호
            </div>
            <div className="col-span-2">
              <input
                type="password"
                name="password"
                className="w-full py-2 border border-gray-200 hover:border-gray-900 focus:border-gray-900 px-5 rounded-lg outline-none"
                placeholder="비밀번호 변경"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-3 mb-2">
            <div className="col-span-1 text-base text-gray-400 p-2">닉네임</div>
            <div className="col-span-2">
              <input
                type="text"
                name="nickname"
                className="w-full py-2 border border-gray-200 hover:border-gray-900 focus:border-gray-900 px-5 rounded-lg outline-none"
                placeholder="변경할 닉네임을 입력해주세요."
                value="지제이웍스"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 pb-10 bg-gray-50 px-3">
          <button className="text-sm border-rose-500 border py-2 px-5 rounded-lg hover:bg-rose-500 hover:text-white text-rose-500">
            뒤로가기
          </button>
          <button className="text-sm border-blue-500 border py-2 px-5 rounded-lg hover:bg-blue-500 hover:text-white text-blue-500">
            저장하기
          </button>
        </div>
      </div>
    </>
  )
}

export default Page
