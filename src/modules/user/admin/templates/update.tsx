'use client'

import React, { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { getUser } from '@/modules/user/scripts/userModel'
import {
  deleteAdmindUser,
  updateAdminUser,
} from '@/modules/user/admin/scripts/userController'
import { GroupInfo } from '@/modules/user/admin/scripts/groupModel'
import Alert from '@plextype/components/message/Alert'

interface GroupInfo {
  id?: number | null
  groupTitle: string | undefined
  groupName: string | undefined
  groupDesc: string | undefined
  groupDefault: boolean
  // 필요한 다른 속성들도 여기에 추가할 수 있습니다.
}
const DashboardUserUpdate = props => {
  const router = useRouter()
  const accessToken = localStorage.getItem('accessToken')
  const [userInfo, setUserInfo] = useState<any>()
  const [groupList, setGroupList] = useState<GroupInfo[]>([])
  const [error, setError] = useState<{ type: string; message: string } | null>(
    null
  )

  const groupListData = () => {
    GroupInfo().then(response => {
      console.log(response)
      if (response.success) {
        setGroupList(response.data)
      }
    })
  }

  useEffect(() => {
    updateDashboardUser()
    groupListData()
  }, [])

  const updateDashboardUser = async () => {
    await getUser({ id: props.userid })
      .then(response => {
        console.log(response)
        setUserInfo(response)
      })
      .catch(error => {
        console.error('Failed to get user info: ' + error.toString())
      })
  }
  const updateUserInfo = async (formData: FormData) => {
    const selectedGroups = formData.getAll('group') as string[]
    console.log(selectedGroups)
    const params = {
      id: props.userid,
      accessToken: accessToken,
      accountId: formData.get('accountId') as string,
      nickname: formData.get('nickName') as string,
      email: formData.get('email_address') as string,
      isAdmin: formData.get('isAdmin') as string,
      group: selectedGroups,
    }
    await updateAdminUser(params)
      .then(response => {
        console.log(response)
        response?.type &&
          setError({ type: response.type, message: response.message })
        // router.push('/dashboard/user/list')
      })
      .catch(error => {
        console.error('Failed to get user info: ' + error.toString())
      })
  }

  const handlerUserDelete = async () => {
    console.log('delete user')
    await deleteAdmindUser(props.userid)
      .then(response => {
        console.log(response)
        router.push('/dashboard/user/list')
      })
      .catch(error => {
        console.error('Failed to get user delete: ' + error.toString())
      })
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target
    setGroupList(prev => {
      if (!Array.isArray(prev)) {
        return []
      }

      if (typeof value === 'object' && value !== null && 'id' in value) {
        return checked
          ? [...prev, value as GroupInfo]
          : prev.filter(group => group.id !== (value as GroupInfo).id)
      }

      // value가 GroupInfo가 아닌 경우 이전 상태 반환 (변경 없음)
      return prev
    })
  }

  return (
    userInfo && (
      <div className="max-w-screen-2xl mx-auto px-3">
        <form action={updateUserInfo}>
          <input type="hidden" name="userInfoId" defaultValue={props.userid} />
          <div className="max-w-screen-2xl mx-auto">
            <div className="px-3">
              {error && <Alert message={error.message} type={error.type} />}
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
                          <div className="text-sm text-black mb-3">아이디</div>
                        </label>
                        <input
                          type="text"
                          name="email"
                          className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                          placeholder="example@mail.com"
                          defaultValue={userInfo.accountId}
                        />

                        <div className="text-sm text-dark-400 pt-2 font-light">
                          기본로그인이며 계정정보를 찾을 때 사용됩니다.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label>
                          <div className="text-sm text-black mb-3">이메일</div>
                        </label>
                        <input
                          type="text"
                          name="email"
                          className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                          placeholder="example@mail.com"
                          defaultValue={userInfo.email_address}
                        />

                        <div className="text-sm text-dark-400 pt-2 font-light">
                          기본로그인이며 계정정보를 찾을 때 사용됩니다.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label>
                          <div className="text-sm text-black mb-3">닉네임</div>
                        </label>
                        <input
                          type="text"
                          name="nickname"
                          className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                          defaultValue={userInfo.nickName}
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
                            className="peer hidden"
                            id="theme_change"
                            // checked={}
                            // onChange={}
                          />
                          <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white dark:after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:translate-x-6 "></div>
                        </label>
                        <div className="text-sm text-dark-400 pt-2 font-light">
                          관리자 페이지에 접근 가능한 계정입니다. (최고 관리자와
                          동일한 권한을 가지고 있습니다.)
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
                          {groupList.map((group, index) => {
                            const isChecked = userInfo.userGroups.some(
                              userGroup => userGroup.groupId === group.id
                            )
                            return (
                              <label key={index}>
                                <div className="flex gap-2">
                                  <input
                                    type="checkbox"
                                    name="group"
                                    className=""
                                    value={String(group.groupName)}
                                    checked={isChecked ? true : undefined}
                                    onChange={handleCheckboxChange}
                                  ></input>
                                  <div className="text-sm text-dark-400">
                                    {group.groupTitle}
                                  </div>
                                </div>
                              </label>
                            )
                          })}
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
              <a
                onClick={() => {
                  history.back
                }}
                className="cursor-pointer px-5 py-2 text-sm text-white bg-dark-500 rounded-md"
              >
                뒤로가기
              </a>
              <a
                onClick={handlerUserDelete}
                className="px-5 py-2 text-sm text-white bg-red-600 hover:bg-red-500 rounded-md"
              >
                삭제하기
              </a>
              <button
                type="submit"
                className="px-5 py-2 text-sm text-white bg-cyan-600 hover:bg-cyan-500 rounded-md"
              >
                저장하기
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  )
}

export default DashboardUserUpdate
