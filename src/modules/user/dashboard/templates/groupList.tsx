'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Warning from '@plextype/components/message/Warning'

const DashboardUserGroupList = () => {
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
          <button className="text-sm text-white bg-cyan-600 px-6 py-2 rounded-md">
            저장하기
          </button>
        </div>
      </div>
    </>
  )
}

export default DashboardUserGroupList
