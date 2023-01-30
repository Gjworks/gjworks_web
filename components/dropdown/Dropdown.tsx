"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
// import { unstable_getServerSession } from "next-auth/next";
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
const Dropdown = (props) => {
  const session = useSession();
  // const session = await unstable_getServerSession();
  // const { data: session } = useSession()
  // console.log(data)

  const [isOpen, setIsOpen] = useState(false);
  const initial = {
    opacity: 0
  }
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  const variants = {
    open: { 
      opacity: 1, 
      y: 0, 
      display: "block",
      transition : {
        duration: 0.3,
        delayChildren: 0.1,
        staggerChildren: 0.1,
      }
    },
    close: { 
      opacity: 0, 
      y: "15%",
      transitionEnd: {
        display: "none",
      },
    }
  }
  const innerAnimation = {
    open: {
      opacity: 1, 
      x: "0%",
      transition : {
        duration: 0.3,
      }
    },
    close: {
      opacity: 0, 
      x: "-20%",
      transition : {
        duration: 0.2,
      }
    }
  }
  return (
    <>
      <button className="group relative flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex py-2 px-3 lg:px-5 rounded-full bg-primary-600 hover:bg-primary-500 transition duration-300">
          <div className="text-white group-hover:text-white p-0 lg:pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          {session.status !== "authenticated" ?
          <div className="hidden lg:block text-white group-hover:text-white text-xs">Account</div>
          :
          <div className="hidden lg:block text-white group-hover:text-white text-xs">{session.data?.user?.nickname}</div>
          }
        </div>
        
      </button>
      <motion.div initial={initial} animate={isOpen===true ? "open" : "close"} variants={variants} transition={{ duration: 0.5 }} className="absolute top-8 right-0 mt-2 mr-2 w-56 rounded-md backdrop-blur-lg  shadow-lg bg-white/90 dark:bg-dark-500/25 dark:shadow-black/50 border border-gray-200 dark:border-dark-600 overflow-hidden shadow-xs p-2">
            {session.status !== "authenticated" ?
            <>
              <motion.div variants={innerAnimation}>
                <Link href="/auth/Signin" className="block rounded px-4 py-2 text-xs text-gray-500 dark:text-dark-200 hover:bg-primary-600 hover:text-white focus:outline-none focus:bg-dark-800 focus:text-dark-300">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg>
                      <div className="pl-2">Sign In</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
              <motion.div variants={innerAnimation}>
                <Link href="/auth/Register" className="block rounded px-4 py-2 text-xs text-gray-500 dark:text-dark-200 hover:bg-primary-600 hover:text-white focus:outline-none focus:bg-dark-800 focus:text-dark-300">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>

                        <div className="pl-2">Register</div>
                      </div>
                    </div>
                </Link>
              </motion.div>
              
            </>
            :
            <>
              <motion.div variants={innerAnimation}>
                <Link href="/user/Account" className="block rounded px-4 py-2 text-xs text-gray-500 dark:text-dark-200 hover:bg-primary-600 hover:text-white focus:outline-none focus:bg-dark-800 focus:text-dark-300">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                        <div className="pl-2">My page</div>
                      </div>
                    </div>
                  </Link>
              </motion.div>
            </>
            }
            <div className="block border-b border-gray-300 dark:border-dark-500 my-2 mx-3"></div>
            {/* <div className="block rounded px-4 py-2 text-xs text-gray-500 dark:text-dark-200 hover:bg-primary-600 hover:text-white focus:outline-none focus:bg-dark-800 focus:text-dark-300"></div> */}
            {session.status === "authenticated" ?
              <>
              <motion.div variants={innerAnimation}>
                <Link href="#" onClick={() => signOut()} className="block rounded px-4 py-2 text-xs text-gray-500 dark:text-dark-200 hover:bg-primary-600 hover:text-white focus:outline-none focus:bg-dark-800 focus:text-dark-300">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div className="pl-2">Sign Out</div>
                      </div>
                    </div>
                </Link>
              </motion.div>
              </>
              :
              <>
              <motion.div variants={innerAnimation}>
                <Link href="#" className="block rounded px-4 py-2 text-xs text-gray-500 dark:text-dark-200 hover:bg-primary-600 hover:text-white focus:outline-none focus:bg-dark-800 focus:text-dark-300">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <div className="pl-2">Infomation</div>
                      </div>
                    </div>
                </Link>
              </motion.div>
              </>
            }
      </motion.div>
    </>
  )
}

export default Dropdown