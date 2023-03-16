'use client'

import React, { useEffect, useState, Suspense } from 'react'

import PageWrap from 'src/components/sections/PageWrap'
import BoardList from 'src/components/list/BoardList'
import PageNavigation from 'src/components/nav/PageNavigation'
import { getData } from './server'

interface PageProps {
  params: {
    mid: string
  }
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [documentInfo, setDocumentInfo] = useState<{ [key: string]: any }>()
  // console.log(params.mid)
  let items
  const fetchData = async mid => {
    items = await getData(mid)
    setDocumentInfo(items.data)
  }
  useEffect(() => {
    fetchData(params.mid)
  }, [])

  return (
    <>
      <PageWrap>
        <div className="max-w-screen-2xl mx-auto px-3">
          <div className="py-10 text-2xl font-semibold text-white">Blog</div>
          {documentInfo && <BoardList document={documentInfo}></BoardList>}
          <div className="py-10">
            <PageNavigation></PageNavigation>
          </div>
        </div>
      </PageWrap>
    </>
  )
}

export default Page
