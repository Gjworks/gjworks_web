'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import DefaultNav from '@plextype/components/nav/DefaultNav'
import Warning from '@plextype/components/message/Warning'

import { getUserInfo, updateUserInfo } from './server'

const Page = params => {
  const [error, setError] = useState<any>(false)
  const [userInfo, setUserInfo] = useState<any>()
  const [userNav, setUserNav] = useState<object>([
    {
      title: '회원목록',
      route: '/dashboard/user/list',
    },
    {
      title: '그룹별 회원 목록',
      route: '/dashboard/user/groupUserlist',
    },
    {
      title: '관리자계정',
      route: '/dashboard/user/adminUserlist',
    },
  ])

  console.log(params)
  console.log(params.params.id)

  const userId = parseInt(params.params.id)

  useEffect(() => {
    userId &&
      getUserInfo(userId)
        .then(data => {
          console.log(data)
          setUserInfo(data)
        })
        .catch(error => {
          console.error('Failed to get user info: ' + error.toString())
        })
  }, [])

  useEffect(() => {
    console.log(userInfo)
  }, [userInfo])

  return (
    <>
      <div className="relative">
        <div className="pt-10">
          <div className="max-w-screen-2xl mx-auto px-3">
            <div className="">
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <div className="text-black text-2xl font-semibold">
                  회원 설정
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-[52px] lg:top-[60px] w-full bg-white/90 backdrop-blur-lg z-90 border-b border-gray-100">
          <div className="overflow-scroll-hide overflow-hidden overflow-x-auto flex gap-8 max-w-screen-2xl mx-auto px-3">
            <DefaultNav list={userNav} />
          </div>
        </div>
        {userInfo && (
          <form action={updateUserInfo}>
            <input type="hidden" name="id" defaultValue={params.id} />
            <div className="max-w-screen-2xl mx-auto">
              <div className="px-3">
                <div className="grid grid-cols-4 gap-8 py-10">
                  <div className="col-span-1">
                    <div className="text-lg font-semibold text-gray-600  mb-3">
                      회원 기본설정
                    </div>
                    <div className="text-gray-400 text-sm">
                      회원의 기본설정을 변경합니다.
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="grid grid-col-span-2 gap-8">
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-black mb-3">
                              이메일
                            </div>
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                            placeholder="example@mail.com"
                            defaultValue={userInfo.email}
                          />

                          <div className="text-sm text-dark-400 pt-2 font-light">
                            기본로그인이며 계정정보를 찾을 때 사용됩니다.
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-black mb-3">
                              닉네임
                            </div>
                          </label>
                          <input
                            type="text"
                            name="nickname"
                            className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                          />

                          <div className="text-sm text-dark-400 pt-2 font-light">
                            닉네임은 중복될 수 없는 이름입니다.
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-black mb-3">
                              비밀번호
                            </div>
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                          />
                          <div className="text-sm text-dark-400 pt-2 font-light">
                            비밀번호는 암호화 되어 저장됩니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-px border-b border-gray-200"></div>
              <div className="px-3">
                <div className="grid grid-cols-4 gap-8 py-10">
                  <div className="col-span-1">
                    <div className="text-lg font-semibold text-gray-600  mb-3">
                      추가설정
                    </div>
                    <div className="text-gray-400 text-sm">
                      회원가입시 입력한 내용 이외의 정보를 기입합니다.
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="grid grid-col-span-2 gap-8">
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-black mb-3">
                              관리자 설정
                            </div>
                          </label>
                          <label className="m-0">
                            <input
                              type="checkbox"
                              name="isAdmin"
                              className="peer hidden"
                            />
                            <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:trangray-x-6"></div>
                          </label>
                          <div className="text-sm text-dark-400 pt-2 font-light">
                            관리자 페이지에 접근 가능한 계정입니다. (최고
                            관리자와 동일한 권한을 가지고 있습니다.)
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-black mb-3">
                              그룹설정
                            </div>
                          </label>
                          <div className="flex flex-wrap gap-4">
                            <label>
                              <div className="flex gap-2">
                                <input type="checkbox" className=""></input>
                                <div className="text-sm text-dark-400">
                                  준회원
                                </div>
                              </div>
                            </label>
                            <label>
                              <div className="flex gap-2">
                                <input type="checkbox" className=""></input>
                                <div className="text-sm text-dark-400">
                                  정회원
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="text-sm text-dark-400 pt-2 font-light">
                            회원은 여러그룹을 중복하여 설정할 수 있습니다.
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-black mb-3">메모</div>
                          </label>
                          <textarea className="bg-gradient-to-r text-gray-900 outline-none py-2 px-4 text-sm border-b border-gray-300 w-full bg-gray-300/25 rounded-tl rounded-tr focus:border-orange-500 focus:from-orange-500/25"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-center bg-slate-100/50 pt-5 pb-10 border-t border-slate-200">
                <div className="px-5 py-2 text-sm text-white bg-dark-500 rounded-md">
                  뒤로가기
                </div>
                <button className="px-5 py-2 text-sm text-white bg-orange-500 hover:bg-cyan-600 rounded-md">
                  저장하기
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  )
}

export default Page
