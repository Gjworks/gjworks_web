"use client";

import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react"
import PageWrap from 'components/page/PageWrap';

declare module "next-auth/react" {
  interface User {
    nickname: string; // Or string
  }
}
const Account = (props:any) => {
  console.log(props)
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session)
  }, [session?.user])

  // if(!!session && session.status === "unauthenticated") {
  //   return (
  //     <Access />
  //   )
  // }
  return (
    <>
      <PageWrap>
        <div className="max-w-screen-2xl mx-auto px-3 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-3">
            </div>
            <div className="col-span-9">
              <h1 className="text-3xl font-bold text-white">Hello, {session?.user?.email}</h1>
            </div>
          </div>
        </div>
      </PageWrap>
    </>
  )
}

export default Account