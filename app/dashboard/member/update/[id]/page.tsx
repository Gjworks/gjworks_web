'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const getData = async () => {
  const params = {
    id: 1,
  }

  const response = await fetch('/api/member/View', {
    method: 'POST',
    body: JSON.stringify(params),
  })

  const result = await response.json()
  return result
}

const updateUserInfo = async info => {
  const params = {
    id: info.id,
    email: info.email,
    nickname: info.nickname,
    password: info.password,
    isAdmin: info.isAdmin,
  }

  const response = await fetch('/api/member/Update', {
    method: 'POST',
    body: JSON.stringify(params),
  })

  const result = await response.json()
  return result
}
const Page = () => {
  const [memberInfo, setMemberInfo] = useState<{ [key: string]: any }>()
  const [emailExist, setEmailExist] = useState<{ [key: string]: any }>()
  let items
  const fetchData = async () => {
    items = await getData()
    setMemberInfo(items.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const inputMemberEmail = async e => {
    console.log(1)
    const params = {
      id: memberInfo.id,
      type: 'email',
      email: e.target.value,
    }
    const response = await fetch('/api/member/Update', {
      method: 'POST',
      body: JSON.stringify(params),
    })

    const result = await response.json()
    console.log(result)
    result.error ? setEmailExist(result.error) : setEmailExist(result.error)
  }
  const inputMemberNickname = e => {}
  const inputMemberPassword = e => {}
  return (
    <>
      <div className="relative">
        <div className="sticky top-0 pt-10 border-b border-dark-800 bg-dark-900/25 backdrop-blur-lg">
          <div className="max-w-screen-2xl mx-auto px-3">
            <div className="">
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <div className="text-white text-2xl font-semibold">
                  회원 설정
                </div>
              </div>
            </div>
            <div className="flex pt-3">
              <Link
                href="#"
                className="text-sm py-2 px-5 cursor-pointer border-b border-sky-500 text-white -mb-[1px]"
              >
                기본정보
              </Link>
              <Link
                href="#"
                className="text-sm text-dark-500 py-2 px-5 cursor-pointer hover:border-b hover:border-sky-500 hover:text-white -mb-[1px]"
              >
                작성 글
              </Link>
              <Link
                href="#"
                className="text-sm text-dark-500 py-2 px-5 cursor-pointer hover:border-b hover:border-sky-500 hover:text-white -mb-[1px]"
              >
                댓글
              </Link>
              <Link
                href="#"
                className="text-sm text-dark-500 py-2 px-5 cursor-pointer hover:border-b hover:border-sky-500 hover:text-white -mb-[1px]"
              >
                소셜정보
              </Link>
            </div>
          </div>
        </div>
        {memberInfo && (
          <div className="pt-10">
            <div className="max-w-screen-2xl mx-auto">
              <div className="px-3">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="text-white text-2xl font-semibold">
                    회원 추가
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-10">
                  <div className="col-span-1">
                    <div className="text-lg font-semibold text-dark-200 mb-3">
                      회원 기본설정
                    </div>
                    <div className="text-dark-500 text-sm">
                      회원의 기본설정을 변경합니다.
                    </div>
                  </div>
                  <div className="col-span-3 rounded-md shadow-sm">
                    <div className="grid grid-col-span-2 gap-8">
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-white mb-3">
                              이메일
                            </div>
                          </label>
                          <input
                            type="email"
                            onBlur={inputMemberEmail}
                            className={
                              'bg-gradient-to-r text-white outline-none py-2 px-4 text-sm border-b border-dark-700 w-full bg-dark-800/25 rounded-tl rounded-tr focus:border-sky-500 focus:from-sky-500/25' +
                              (emailExist
                                ? ' border-rose-500 from-rose-500/25 focus:border-rose-500 focus:from-rose-500/25'
                                : ' focus:border-sky-500 focus:from-sky-500/25')
                            }
                            defaultValue={memberInfo.email}
                          ></input>
                          <div className="text-sm text-dark-400 pt-2">
                            {emailExist
                              ? '‼️중복된 이메일 입니다. 다른 이메일로 변경하세요.'
                              : '기본로그인이며 계정정보를 찾을 때 사용됩니다.'}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-white mb-3">
                              닉네임
                            </div>
                          </label>
                          <input
                            type="text"
                            onChange={inputMemberNickname}
                            className="bg-gradient-to-r text-white outline-none py-2 px-4 text-sm border-b border-dark-700 w-full bg-dark-800/25 focus:border-sky-500 focus:from-sky-500/25 rounded-tl rounded-tr"
                            defaultValue={memberInfo.nickname}
                          ></input>
                          <div className="text-sm text-dark-400 pt-2">
                            닉네임은 중복될 수 없는 이름입니다.
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-white mb-3">
                              비밀번호
                            </div>
                          </label>
                          <input
                            type="password"
                            onChange={inputMemberPassword}
                            className="bg-gradient-to-r text-white outline-none py-2 px-4 text-sm border-b border-dark-700 w-full bg-dark-800/25 focus:border-sky-500 focus:from-sky-500/25 rounded-tl rounded-tr"
                          ></input>
                          <div className="text-sm text-dark-400 pt-2">
                            비밀번호는 암호화 되어 저장됩니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-px border-b border-dark-800"></div>
              <div className="px-3">
                <div className="grid grid-cols-4 gap-8 py-10">
                  <div className="col-span-1">
                    <div className="text-lg font-semibold text-dark-200 mb-3">
                      추가설정
                    </div>
                    <div className="text-dark-500 text-sm">
                      회원가입시 입력한 내용 이외의 정보를 기입합니다.
                    </div>
                  </div>
                  <div className="col-span-3 rounded-md shadow-sm">
                    <div className="grid grid-col-span-2 gap-8">
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-white mb-3">
                              관리자 설정
                            </div>
                          </label>
                          <label className="m-0">
                            <input
                              type="checkbox"
                              className="peer hidden"
                              defaultChecked={
                                memberInfo.isAdmin === true ? true : false
                              }
                            />
                            <div className="block relative rounded-full cursor-pointer bg-dark-600 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-dark-500 dark:after:bg-dark-100 after:transition-all peer-checked:bg-sky-500 after:peer-checked:translate-x-6 "></div>
                          </label>
                          <div className="text-sm text-dark-400 pt-3">
                            ⚠ 체크시 관리자로 인식합니다. 해당 Dashboard에
                            접근이 가능하며 회원 및 게시판등 모든 페이지에
                            접근이 가능한 등급입니다.
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-white mb-3">
                              그룹설정
                            </div>
                          </label>
                          <div className="flex flex-wrap gap-4">
                            <label>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" className=""></input>
                                <div className="text-sm text-dark-400">
                                  준회원
                                </div>
                              </div>
                            </label>
                            <label>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" className=""></input>
                                <div className="text-sm text-dark-400">
                                  정회원
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="text-sm text-dark-400 pt-2">
                            회원은 여러그룹을 중복하여 설정할 수 있습니다.
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label>
                            <div className="text-sm text-white mb-3">메모</div>
                          </label>
                          <textarea className="bg-gradient-to-r text-white outline-none py-2 px-4 text-sm border-b border-dark-700 w-full bg-dark-800/25 focus:border-sky-500 focus:from-sky-500/25 rounded-tl rounded-tr"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-center bg-dark-800/25 pt-5 pb-10 border-t border-dark-800">
                <div className="px-5 py-2 text-sm text-white bg-dark-500 rounded-md">
                  뒤로가기
                </div>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm text-white bg-sky-500 rounded-md"
                >
                  저장하기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Page
