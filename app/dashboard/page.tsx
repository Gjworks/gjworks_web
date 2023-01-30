"use client";

import React, { useState, useEffect } from 'react';
import PageWrap from 'components/page/PageWrap';
import { useSession, signOut } from "next-auth/react";

declare module 'next-auth' {
  interface Session {
    user: {
      id: Number,
      name: string
      email: string
      image: string
      nickname: string,
      isManagers: boolean,
      isAdmin: boolean
    }
  }
}
const Page = () => {
  // const { data: session } = useSession();
  const session = useSession();

  if (session?.data?.user?.isManagers !== true) {
    return (
      <PageWrap>
        <div className="text-white">Access Deine</div>
      </PageWrap>
    )
  }
  

  return (
    <>
      <PageWrap>
        <div className="text-white">Dashboard</div>
      </PageWrap>
    </>
  )
}

export default Page;