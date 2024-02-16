"use client";
import React, { useState } from "react";
import Link from "next/link";

import Popup from "@gjworks/components/modal/Popup";

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = (close) => {
    setShowPopup(close);
  };
  return (
    <>
      <div className="rounded-t-2xl">
        <div className="mx-auto px-3 py-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
              <div className="text-2xl font-bold text-black dark:text-white">
                Store
              </div>
            </div>
            <div className="relative col-span-8 flex items-center overflow-hidden">
              <div className="overflow-scroll-hide flex w-full overflow-hidden overflow-x-auto lg:justify-center">
                <div className="flex gap-2">
                  <Link
                    href="javascript:void(0)"
                    className="block rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-700"
                  >
                    Discover
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
                  >
                    Mobile App
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
                  >
                    React
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
                  >
                    Rhymix
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
                  >
                    Web Design
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
                  >
                    Service Product
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-black hover:text-gray-500"
                  >
                    etc
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 top-0 flex w-12 items-center justify-end bg-gradient-to-r from-transparent via-white to-white lg:hidden">
                <Link
                  href="javascript:void(0)"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-sm text-black hover:text-gray-950"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div
              onClick={() => {
                setShowPopup(true);
              }}
              className="col-span-2 flex justify-end gap-2"
            >
              <button className="dark:hover:bg-dark-300 flex cursor-pointer items-center gap-1 rounded-full border border-gray-700 bg-black px-3 py-2 text-white hover:bg-gray-950 hover:text-white hover:shadow-lg lg:px-8 lg:shadow-gray-400 dark:bg-white dark:text-black">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-4 w-4 lg:h-5 lg:w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
                <div className="hidden text-sm md:flex">장바구니</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mx-auto px-3 pb-20 pt-8">
          {/* <div className="mx-auto mb-10 max-w-screen-md rounded-lg bg-rose-200/25 p-8"></div> */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7">
            <div className="col-span-1">
              <Link
                href="/store/view/1"
                className="dark:shadow-dark-950 mb-6  block h-[120px] rounded-lg bg-[url('/assets/images/bg37.jpg')] bg-cover bg-center py-20 shadow-lg shadow-gray-300"
              ></Link>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Link
                    href="/store/view/1"
                    className="dark:text-dark-100 mb-2 line-clamp-1 text-base font-medium text-gray-800"
                  >
                    지제이웍스 웹애플리케이션 디자인
                  </Link>
                  <div className="line-clamp-1 text-sm text-gray-400">
                    Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="black cursor-pointer rounded-full bg-gray-950 px-4 py-1 text-xs text-white hover:bg-gray-700">
                    구입완료
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <Link
                href="/store/view/1"
                className="dark:bg-dark-800 dark:hover:bg-dark-900 dark:shadow-dark-950 mb-6 block h-[120px] rounded-lg bg-gray-100 py-20 shadow-lg shadow-gray-300/50 hover:bg-gray-200"
              ></Link>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Link
                    href="/store/view/1"
                    className="dark:text-dark-100 mb-2 line-clamp-1 text-base font-medium text-gray-800"
                  >
                    지제이웍스 웹애플리케이션 디자인
                  </Link>
                  <div className="line-clamp-1 text-sm text-gray-400">
                    Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="cursor-pointer rounded-full bg-blue-700 px-4 py-1 text-xs text-white hover:bg-blue-600">
                    구입하기
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <Link
                href="/store/view/1"
                className="dark:bg-dark-800 dark:hover:bg-dark-900 dark:shadow-dark-950 mb-6 block h-[120px] rounded-lg bg-gray-100 py-20 shadow-lg shadow-gray-300/50 hover:bg-gray-200"
              ></Link>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Link
                    href="/store/view/1"
                    className="dark:text-dark-100 mb-2 line-clamp-1 text-base font-medium text-gray-800"
                  >
                    지제이웍스 웹애플리케이션 디자인
                  </Link>
                  <div className="line-clamp-1 text-sm text-gray-400">
                    Web Components를 최신 UI/UX 트렌드에 맞게 제공하고 있습니다.
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="cursor-pointer rounded-full bg-gray-400 px-4 py-1 text-xs text-white hover:bg-gray-700">
                    판매중지
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden grid-cols-3 gap-8">
            <div className="col-span-3 lg:col-span-1">
              <div className="dark:bg-dark-900 dark:shadow-dark-950/50 group relative overflow-hidden rounded-lg bg-white/75 bg-opacity-70 bg-[url('/assets/images/bg9.jpg')] bg-cover bg-center bg-no-repeat shadow-lg shadow-slate-400 ">
                <div className="bg-dark-900/60 absolute inset-0 backdrop-blur-lg"></div>
                <div className="relative h-[200px] overflow-hidden">
                  <div className="group relative h-[200px]">
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/40 to-dark-950"></div> */}
                    <Link
                      href="/store/view"
                      className="relative block h-full w-full bg-slate-950 bg-[url('/assets/images/bg9.jpg')] bg-cover bg-center bg-no-repeat transition duration-700 group-hover:scale-[1.08]"
                    ></Link>
                    <div className="absolute bottom-3 left-3">
                      <div className="relative rounded-lg bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-lg">
                        Next.js
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center gap-4 p-3">
                  <div className="bg-dark-700 h-10 w-10 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="line-clamp-1 text-base text-white">
                      지제이웍스 웹애플리케이션 디자인
                    </div>
                    <div className="text-dark-400 line-clamp-1 text-sm">
                      Web Components를 최신 UI/UX 트렌드에 맞게 제공하고
                      있습니다.
                    </div>
                  </div>
                  <div className="dark:bg-dark-700 flex items-center rounded-full bg-slate-700 px-5 py-1 text-sm text-sky-400">
                    120,000
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <div className="bg-dark-900 dark:shadow-dark-950/50 group relative overflow-hidden rounded-lg bg-[url('/assets/images/bg10.jpg')] bg-cover bg-center bg-no-repeat shadow-lg shadow-slate-400 ">
                <div className="bg-dark-900/60 absolute inset-0 backdrop-blur-lg"></div>
                <div className="relative h-[200px] overflow-hidden">
                  <div className="group relative h-[200px]">
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/40 to-dark-950"></div> */}
                    <div className="bg-primary-500 relative h-full w-full bg-[url('/assets/images/bg10.jpg')] bg-cover bg-center bg-no-repeat transition duration-700 group-hover:scale-[1.08]"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className="relative rounded-lg bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-lg">
                        Next.js
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center gap-4 p-3">
                  <div className="bg-dark-700 h-10 w-10 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="line-clamp-1 text-base text-white">
                      지제이웍스 웹애플리케이션 플러그인
                    </div>
                    <div className="text-dark-400 line-clamp-1 text-sm">
                      Web Components를 최신 UI/UX 트렌드에 맞게 제공하고
                      있습니다.
                    </div>
                  </div>
                  <div className="dark:bg-dark-700 flex items-center rounded-full bg-slate-700 px-5 py-1 text-sm text-sky-400">
                    180,000
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <div className="dark:bg-dark-900 dark:shadow-dark-950/50 group relative overflow-hidden rounded-lg bg-slate-900/75 bg-opacity-75 bg-[url('/assets/images/bg37.jpg')] bg-cover bg-center bg-no-repeat shadow-lg shadow-slate-400 ">
                <div className="bg-dark-900/60 absolute inset-0 backdrop-blur-lg"></div>
                <div className="relative h-[200px] overflow-hidden">
                  <div className="group relative h-[200px]">
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/40 to-dark-950"></div> */}
                    <div className="relative h-full w-full bg-slate-950 bg-[url('/assets/images/primary/primary_bg3.jpg')] bg-cover bg-center bg-no-repeat transition duration-700 group-hover:scale-[1.08]"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className="relative rounded-lg bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-lg">
                        Next.js
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center gap-4 p-3">
                  <div className="dark:bg-dark-700 h-10 w-10 rounded-lg bg-gray-700"></div>
                  <div className="flex-1">
                    <div className="line-clamp-1 text-base text-white">
                      지제이웍스 웹애플리케이션 애드온
                    </div>
                    <div className="text-dark-400 line-clamp-1 text-sm">
                      Web Components를 최신 UI/UX 트렌드에 맞게 제공하고
                      있습니다.
                    </div>
                  </div>
                  <div className="dark:bg-dark-700 flex items-center rounded-full bg-gray-700 px-5 py-1 text-sm text-sky-400">
                    80,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup state={showPopup} title="장바구니" close={closePopup}>
        <div className="p-8">
          <div className="text-sm font-normal text-gray-700">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <Link
                  href="/store/view/1"
                  className="dark:shadow-dark-950 mb-6  block h-[80px] rounded-lg bg-[url('/assets/images/bg37.jpg')] bg-cover bg-center py-20 shadow-lg shadow-gray-300"
                ></Link>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Link
                      href="/store/view/1"
                      className="dark:text-dark-100 mb-2 line-clamp-1 text-base font-medium text-gray-800"
                    >
                      지제이웍스 웹애플리케이션 디자인
                    </Link>
                    <div className="line-clamp-1 flex text-sm text-gray-400">
                      <button>제거</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
            <div className="pt-8">
              <button className="w-full rounded-lg bg-gray-950 py-3 text-center text-black text-white hover:bg-gray-700">
                구매하기
              </button>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default Page;
