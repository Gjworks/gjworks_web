'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Warning from '@plextype/components/message/Warning'
import Modal from '@plextype/components/modal/Modal'

import {
  upsertGroup,
  deleteGroup,
} from '@/modules/user/scripts/groupController'

const DashboardUserGroupList = () => {
  const [showModal, setShowModal] = useState(false)
  const closeModal = close => {
    setShowModal(close)
  }

  const handleGroupInfo = async (formData: FormData) => {
    const rawFormData = {
      groupTitle: formData.get('groupTitle'),
      groupDesc: formData.get('groupDesc'),
      groupDefault: formData.get('groupDefault'),
    }

    await upsertGroup(rawFormData)
  }

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-3">
        <table className="w-full">
          <thead>
            <th className="text-sm bg-gray-100 py-1.5">그룹명</th>
            <th className="text-sm bg-gray-100 py-1.5">그룹소개</th>
            <th className="text-sm bg-gray-100 py-1.5">기본 그룹</th>
            <th className="text-sm bg-gray-100 py-1.5">삭제</th>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-100">
              <td className="py-2 px-2">
                <input
                  type="text"
                  name="groupTitle"
                  className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-2/3 py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                  placeholder="그룹 이름"
                />
              </td>
              <td className="py-2 px-2">
                <input
                  type="text"
                  name="groupDesc"
                  className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-2/3 py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                  placeholder="그룹 설명"
                />
              </td>
              <td className="py-2 px-2 text-center">
                <input type="radio" name="groupDefault" />
              </td>
              <td className="py-2 px-2 text-center">
                <button className="text-sm text-cyan-600 underline">
                  삭제
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end pt-4 pb-8">
          <button
            onClick={() => setShowModal(!showModal)}
            className="text-sm text-white bg-cyan-600 px-6 py-2 rounded-md"
          >
            추가하기
          </button>
        </div>
      </div>
      <Modal
        state={showModal}
        close={closeModal}
        size="sm"
        position="center"
        escClose={true}
        overlay={true}
        overlayClose={true}
      >
        <div className="bg-white">
          <div className="flex gap-8 px-3 py-3 border-b border-gray-100">
            <div className="flex items-center flex-1">
              <div className="text-base font-medium text-gray-950 line-clamp-1 px-3">
                그룹추가
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowModal(!showModal)}
                className="rounded-full bg-gray-200 hover:bg-gray-200 transition hover:duration-300 hover:scale-125 p-1 z-10"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    className="w-5 h-5 text-black dark:text-white "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div>
            <form action={handleGroupInfo}>
              <div className="p-3 text-gray-900">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-center py-2">
                    <label
                      htmlFor="groupTitle"
                      className="w-32 text-center block text-sm font-medium text-gray-700"
                    >
                      그룹명
                    </label>
                    <input
                      type="text"
                      name="groupTitle"
                      id="groupTitle"
                      className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-2/3 py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                      placeholder="그룹 이름"
                    />
                  </div>
                  <div className="flex gap-4 items-center py-2">
                    <label
                      htmlFor="groupDesc"
                      className="w-32 text-center block text-sm font-medium text-gray-700"
                    >
                      그룹소개
                    </label>
                    <input
                      type="text"
                      name="groupDesc"
                      id="groupDesc"
                      className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-2/3 py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                      placeholder="그룹 설명"
                    />
                  </div>
                  <div className="flex gap-4 items-center py-2">
                    <label
                      htmlFor="groupDefault"
                      className="w-32 text-center block text-sm font-medium text-gray-700"
                    >
                      기본 그룹
                    </label>
                    <div className="px-3">
                      <label className="m-0">
                        <input
                          type="checkbox"
                          name="groupDefault"
                          className="peer hidden"
                          id="groupDefault"
                          // checked={}
                          // onChange={}
                        />
                        <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white dark:after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:translate-x-6 "></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end p-3 bg-gray-100">
                <button className="text-sm text-white bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-md">
                  추가하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DashboardUserGroupList
