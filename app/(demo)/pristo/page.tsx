'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1606075920560-c43aa8659a3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed">
        {/* <div className="absolute inset-0 bg-gray-950/5"></div> */}
      </div>
      <div className="relative w-full h-full">
        <div className="relative  max-w-screen-xl mx-auto">
          <div className="relative grid grid-cols-4">
            <div className="relative col-span-2">
              <div className="sticky h-screen inset-0 px-8">
                <div className="relative flex py-6">
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
                  <div className="text-lg font-semibold mb-4">Address</div>
                  <div className="">업체명 : 지제이웍스</div>
                </div>
                <div className="">
                  <div className="text-lg font-semibold mb-4">Copyright</div>
                  <div className=""></div>
                </div>
              </div>
            </div>
            <div className="relative col-span-2 bg-gray-1 bg-white">
              <div className="h-[calc(100vh - 69px)] overflow-hidden overflow-y-scroll">
                <div className="px-4">
                  <header className="sticky top-0 py-5 bg-white/75 backdrop-blur-lg">
                    <div className="flex items-center gap-4 justify-between">
                      <div className="text-gray-950 text-lg font-bold">홈</div>
                      <div className="flex gap-2 items-center text-gray-950 cursor-pointer hover:text-rose-500">
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
                  <div className="h-[333px]">
                    <div className="flex gap-6">
                      <Link
                        href=""
                        className="text-rose-500 text-base border-b-4 py-2 border-rose-500 px-1"
                      >
                        신상품
                      </Link>
                      <Link
                        href=""
                        className="flex gap-1 items-center text-gray-500 hover:text-gray-950 text-base font-semibold border-b-4 py-2 border-transparent"
                      >
                        <span>할인상품</span>
                      </Link>
                      <Link
                        href=""
                        className="flex gap-1 items-center text-gray-500 hover:text-gray-950 border-b-4 py-2 border-transparent"
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
                <div className="relative h-full min-h-full"></div>
              </div>

              <div className="sticky bottom-0 left-0 right-0 border-t border-gray-100 bg-gray-50/50 backdrop-blur-lg">
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-1">
                    <div className="text-center py-3 text-gray-950 cursor-pointer">
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
                    <div className="text-center py-3 text-gray-400 hover:text-gray-950 cursor-pointer">
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
                    <div className="text-center py-3 text-gray-400 hover:text-gray-950 cursor-pointer">
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
                    <div className="text-center py-3 text-gray-400 hover:text-gray-950 cursor-pointer">
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
                    <div className="text-center py-3 text-gray-400 hover:text-gray-950 cursor-pointer">
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
