"use client";

import React, { useEffect, useState, Suspense } from "react";

import PageWrap from "components/page/PageWrap";
import BoardList from "components/list/BoardList";
import PageNavigation from "components/nav/PageNavigation";
import { getData } from "./server"

const Page = (props) => {
  const [documentInfo, setDocumentInfo] = useState<{[key: string]: any}>()

  let items;
  const fetchData = async() => {
    items = await getData()
    setDocumentInfo(items.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <PageWrap>
        <div className="max-w-screen-2xl mx-auto px-3">
          <div className="py-10 text-2xl font-semibold text-white">Blog</div>
          {documentInfo &&
            <BoardList document={documentInfo}></BoardList>
          }
          <PageNavigation></PageNavigation>
        </div>
        
      </PageWrap>
    </>
  )
}

export default Page