'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1606075920560-c43aa8659a3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-white/50"></div>
      </div>
      <div className="relative w-full h-full">
        <div className="relative max-w-screen-xl mx-auto">
          <div className="relative grid grid-cols-4">
            <div className="hidden xl:block relative col-span-2">
              <div className="sticky h-screen inset-0 px-8">
                <div className="relative flex">
                  <div className="text-4xl font-extrabold text-black">
                    <Image
                      src="/assets/pristo/images/pristo_logo.png"
                      width={400}
                      height={400}
                      alt="Pristo Layout Logo"
                      style={{objectFit: 'contain'}}
                    ></Image>
                  </div>
                </div>
                <div className="mb-10">
                  <div className="text-lg font-semibold mb-4 text-black">
                    고객센터
                  </div>
                  <div className="flex gap-2 text-2xl font-bold text-rose-700 mb-3">
                    1588-4443
                  </div>
                  <div className="flex gap-2 text-base">
                    <span className="text-slate-900 font-medium">업무시간</span>
                    <span className="text-slate-600">AM 10:00 ~ 19:00</span>
                  </div>
                  <div className="flex gap-2 text-base">
                    <span className="text-slate-900 font-medium">이메일</span>
                    <span className="text-slate-600">contact@gjworks.dev</span>
                  </div>
                </div>
                <div className="mb-10">
                  <div className="text-lg font-semibold mb-4 text-black">
                    Company Info
                  </div>
                  <div className="flex flex-wrap gap-x-4">
                    <div className="flex gap-2 text-base">
                      <span className="text-slate-900 font-medium">업체명</span>
                      <span className="text-slate-600">지제이웍스</span>
                    </div>
                    <div className="flex gap-2 text-base">
                      <span className="text-slate-900 font-medium">대표자</span>
                      <span className="text-slate-600">김규진</span>
                    </div>
                    <div className="flex gap-2 text-base">
                      <span className="text-slate-900 font-medium">
                        사업소재지
                      </span>
                      <span className="text-slate-600">서울 동작구</span>
                    </div>
                    <div className="flex gap-2 text-base">
                      <span className="text-slate-900 font-medium">
                        사업자등록번호
                      </span>
                      <span className="text-slate-600">892-28-00572</span>
                    </div>
                    <div className="flex gap-2 text-base">
                      <span className="text-slate-900 font-medium">
                        통신판매업번호
                      </span>
                      <span className="text-slate-600">000-서울동작-0000</span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="text-lg font-semibold mb-4">Copyright</div>
                  <div className="flex flex-wrap gap-x-4">
                    <div className="flex gap-2 text-base">
                      <span className="text-slate-900 font-medium">업체명</span>
                      <span className="text-slate-600">지제이웍스</span>
                    </div>
                    <div className="flex gap-2 text-base">
                      <span className="text-slate-900 font-medium">업체명</span>
                      <span className="text-slate-600">지제이웍스</span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-900">
                    Copyright © 지제이웍스. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-4 xl:col-span-2 bg-slate-1 bg-white">
              <div className="">
                <header className="sticky top-0 py-5 bg-white/75 backdrop-blur-lg px-4 z-50">
                  <div className="flex items-center gap-4 justify-between">
                    <div className="text-slate-950 text-lg font-bold">홈</div>
                    <div className="flex gap-2 items-center text-slate-950 cursor-pointer hover:text-rose-500">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-base font-bold">장바구니</div>
                    </div>
                  </div>
                </header>
                <div className="px-4">
                  <div className="min-h-fit">
                    <div className="flex gap-6">
                      <Link
                        href=""
                        className="text-rose-500 text-base border-b-4 py-2 border-rose-500 px-1"
                      >
                        신상품
                      </Link>
                      <Link
                        href=""
                        className="flex gap-1 items-center text-slate-500 hover:text-slate-950 text-base font-semibold border-b-4 py-2 border-transparent"
                      >
                        <span>할인상품</span>
                      </Link>
                      <Link
                        href=""
                        className="flex gap-1 items-center text-slate-500 hover:text-slate-950 border-b-4 py-2 border-transparent"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                            />
                          </svg>
                        </span>
                        <span className="text-base font-semibold ">쿠폰</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative pt-5 pb-20">
                  <div className="px-4">
                    <div className="h-[320px] bg-[url('/assets/images/bg19.jpg')] bg-cover rounded-lg mb-8"></div>
                    <div className="mb-8">
                      <div className="text-base font-bold mb-4">
                        진행중인 이벤트
                      </div>
                      <div className="rounded-lg h-[220px] bg-slate-200 hover:bg-slate-300"></div>
                    </div>
                  </div>

                  <div className="mb-8 bg-slate-50 py-8 px-4">
                    <div className="text-lg font-normal mb-4">
                      새로 추가된 신상품을<br></br>
                      마음껏 구경하세요.
                    </div>
                    <div className="mb-5">
                      <div className="rounded-lg h-[220px] bg-slate-200 hover:bg-slate-300 mb-2"></div>
                      <div className="text-slate-700 mb-1 text-base">
                        iPhone Pro 15
                      </div>
                      <div className="text-slate-500 mb-1 text-sm">
                        최신 제품을 소개 합니다.
                      </div>
                    </div>
                    <div className="mb-5">
                      <div className="rounded-lg h-[220px] bg-slate-200 hover:bg-slate-300 mb-2"></div>
                      <div className="text-slate-700 mb-1 text-base">
                        iPhone Pro 15
                      </div>
                      <div className="text-slate-500 mb-1 text-sm">
                        최신 제품을 소개 합니다.
                      </div>
                    </div>
                  </div>
                  <div className="mb-8 py-8 px-4">
                    <div className="text-lg font-normal mb-4">
                      새로 추가된 신상품을<br></br>
                      마음껏 구경하세요.
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="col-span-1 h-[333px] bg-slate-100 hover:bg-slate-200"></div>
                      <div className="col-span-1 h-[333px] bg-slate-100 hover:bg-slate-200"></div>
                      <div className="col-span-1 h-[333px] bg-slate-100 hover:bg-slate-200"></div>
                      <div className="col-span-1 h-[333px] bg-slate-100 hover:bg-slate-200"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fixed xl:w-[640px] bottom-0 left-0 xl:left-[50%] right-0 border-t border-slate-100 bg-slate-50/50 backdrop-blur-lg">
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-1">
                    <div className="text-center py-3 text-slate-950 cursor-pointer">
                      <div className="flex justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </div>
                      <div className="text-xs">홈</div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-center py-3 text-slate-400 hover:text-slate-950 cursor-pointer">
                      <div className="flex justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs">상품</div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-center py-3 text-slate-400 hover:text-slate-950 cursor-pointer">
                      <div className="flex justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs">검색</div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-center py-3 text-slate-400 hover:text-slate-950 cursor-pointer">
                      <div className="flex justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs">MY</div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-center py-3 text-slate-400 hover:text-slate-950 cursor-pointer">
                      <div className="flex justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs">전체</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page
