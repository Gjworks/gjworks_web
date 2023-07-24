'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 xl:py-20 px-3">
      <h1 className="text-white text-5xl font-semibold">Service</h1>
      <div className="py-10">
        <div className="flex justify-center">
          <div className="relative w-[300px] bg-dark-900 h-[468px] rounded-lg">
            <span className="absolute top-32 -inset-20 text-white text-3xl font-bold">
              Rhymix Store
            </span>
            <div className="absolute bottom-24 -right-20 text-dark-700 text-sm bg-white backdrop-blur-xl py-3 px-5 w-64">
              라이믹스 스토어입니다. 모듈과 레이아웃을 판매하는 사이트
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
