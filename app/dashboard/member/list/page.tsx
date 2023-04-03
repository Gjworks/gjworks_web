'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import PageNavigation from 'src/components/nav/PageNavigation'

const getData = async () => {
  const params = {}

  const response = await fetch('/api/member/List', {
    method: 'POST',
    body: JSON.stringify(params),
  })

  const result = await response.json()
  return result
}

const Page = () => {
  const [memberList, setMemberList] = useState<{ [key: string]: any }>()
  let items
  const fetchData = async () => {
    items = await getData()
    setMemberList(items.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  // const { data: session } = useSession();
  const documentInfo = ''
  return (
    <>
      <div className="relative">
        <div className="sticky top-0 pt-10 border-b bg-slate-200 dark:border-dark-700 bg-white/80 dark:bg-dark-900/25 backdrop-blur-lg">
          <div className="max-w-screen-2xl mx-auto px-3">
            <div className="">
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <div className="text-black dark:text-white text-2xl font-semibold">
                  회원 설정
                </div>
              </div>
            </div>
            <div className="flex pt-3">
              <Link
                href="#"
                className="text-sm py-2 px-5 cursor-pointer border-b border-orange-500 text-black dark:text-white -mb-[1px]"
              >
                회원 목록
              </Link>
              <Link
                href="#"
                className="text-sm text-dark-500 py-2 px-5 cursor-pointer hover:border-b hover:border-orange-500 hover:text-slate-600 dark:hover:text-white -mb-[1px]"
              >
                관리자 계정
              </Link>
            </div>
          </div>
        </div>
        <div></div>
        <div className="py-10">
          <div className="max-w-screen-2xl mx-auto px-3">
            <div className="">
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <div className="text-white text-2xl font-semibold">
                  회원 목록
                </div>
                <div className="flex-1"></div>
                <div className="flex items-center w-full lg:w-auto">
                  <div className="flex items-center bg-slate-100 dark:bg-dark-800 dark:focus:bg-dark-700 dark:hover:bg-dark-700 rounded-md overflow-hidden w-full lg:w-auto px-3">
                    <select className="bg-transparent py-2 text-slate-600 dark:text-dark-200 px-3 outline-none text-sm rounded-md">
                      <option value="">이메일</option>
                      <option value="">닉네임</option>
                    </select>
                    <input
                      type="text"
                      className="bg-transparent py-2 text-dark-200 px-3 outline-none text-sm w-full lg:w-44"
                    ></input>
                    <button className="hover:text-white text-dark-200 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-200 dark:bg-black bg-opacity-50 backdrop-blur-lg">
                      <th
                        scope="col"
                        className="text-xs text-dark-300 uppercase py-2 px-3 w-32"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="w-auto text-xs text-dark-300 uppercase py-2 px-3"
                      >
                        이메일 주소
                      </th>
                      <th
                        scope="col"
                        className="text-xs text-dark-300 uppercase py-2 px-3 w-32"
                      >
                        닉네임
                      </th>
                      <th
                        scope="col"
                        className="text-xs text-dark-300 uppercase py-2 px-3 w-32"
                      >
                        그룹
                      </th>
                      <th
                        scope="col"
                        className="text-xs text-dark-300 uppercase py-2 px-3 w-32"
                      >
                        최근접속일
                      </th>
                      <th
                        scope="col"
                        className="text-xs text-dark-300 uppercase py-2 px-3 w-32"
                      >
                        조회/수정
                      </th>
                      <th className="py-2 px-3 w-12">
                        <input
                          type="checkbox"
                          className="checked:bg-lime-400"
                        ></input>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {memberList &&
                      Object.entries(memberList).map((item, index) => {
                        return (
                          <tr
                            key={index}
                            className="border-b border-slate-200 dark:border-dark-700 hover:bg-slate-200 dark:hover:bg-dark-500 hover:bg-opacity-25"
                          >
                            <td className="text-dark-300 text-xs py-3 px-3 text-center">
                              1
                            </td>
                            <td className="text-dark-300 text-xs py-3 px-3 text-center">
                              {item[1].email}
                            </td>
                            <td className="text-dark-300 text-sm py-3 px-3 text-center">
                              {item[1].nickname}
                            </td>
                            <td className="text-dark-300 text-xs py-3 px-3 text-center">
                              준회원
                            </td>
                            <td className="text-dark-300 text-xs py-3 px-3 text-center">
                              {item[1].updateAt}
                            </td>
                            <td className="text-dark-300 text-xs py-3 px-3 text-center">
                              <Link
                                href={`/dashboard/member/update/${item[1].id}`}
                                className="text-orange-500 underline"
                              >
                                조회/수정
                              </Link>
                            </td>
                            <td className="px-3 py-3 text-center">
                              <input
                                type="checkbox"
                                className="checked:bg-lime-400"
                              ></input>
                            </td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-2 gap-8 py-5">
                <div className="col-span-2 xl:col-span-1 flex items-center justify-center xl:justify-start">
                  <PageNavigation />
                </div>
                <div className="col-span-2 xl:col-span-1 flex items-center justify-end gap-2 ">
                  <Link
                    className="py-2 px-5 text-white rounded text-sm bg-orange-500 hover:bg-orange-600"
                    href="/dashboard/member/create"
                  >
                    회원추가
                  </Link>
                  <Link
                    className="py-2 px-5 text-white rounded text-sm bg-dark-500 hover:bg-cyan-600"
                    href="/dashboard/member/modify"
                  >
                    수정
                  </Link>
                  <Link
                    className="py-2 px-5 text-white rounded text-sm bg-dark-500 hover:bg-red-600"
                    href="/dashboard/member/delete"
                  >
                    삭제
                  </Link>
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
