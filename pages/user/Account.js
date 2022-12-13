import React, {useState, useEffect} from 'react';
import { useSession } from "next-auth/react"
import Access from "../../components/message/Access";
import Nav from "./Nav";

const Myinfo = (props) => {
  console.log(props)
  const session = useSession();

  useEffect(() => {
    console.log(session.data?.user)
  }, [session.data?.user])

  // if(!!session && session.status === "unauthenticated") {
  //   return (
  //     <Access />
  //   )
  // }
  return(
    <>
      <div className="max-w-screen-2xl mx-auto px-3 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <Nav />
          </div>
          <div className="col-span-9">
            <h1 className="text-3xl font-bold text-white">Hello, {session.data?.user.nickname}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Myinfo;