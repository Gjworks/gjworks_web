'use client'

import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

const AccountDropwdown = () => {
  const router = useRouter()
  const [isLogged, setIsLogged] = useState<boolean>(false)
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const isLoggedIn = accessToken !== null
    setIsLogged(isLoggedIn)
  }, [])

  const handleSignOut = async event => {
    event.preventDefault()
    localStorage.removeItem('accessToken')

    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      })
      console.log(response)
      if (response.ok) {
        if (response.status === 200) {
          const callback = await response.json()
          console.log(callback.message)
          router.push('/')
        }

        if (response.status === 401) {
          const callback = await response.json()
          console.log(callback.message)
          alert(callback.message)
        }
      } else {
        throw new Error('Failed')
      }
    } catch (error) {
      console.error('Error Event handleSignOut:', error)
    }
  }

  const innerAnimation = {
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 0.3,
      },
    },
    close: {
      opacity: 0,
      x: '-20%',
      transition: {
        duration: 0.2,
      },
    },
  }
  return (
    <>
      {isLogged ? (
        <>
          <motion.div className="w-56" variants={innerAnimation}>
            <Link
              href="/auth/Signin"
              className="dark:hover:bg-dark-600/50 block rounded bg-transparent px-4 py-2 text-xs text-gray-800 hover:bg-gray-950 hover:text-white dark:text-white dark:hover:text-white"
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>
                  <div className="pl-2">마이 페이지</div>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div variants={innerAnimation}>
            <button
              onClick={handleSignOut}
              className="dark:hover:bg-dark-600/50 block block w-full rounded bg-transparent px-4 py-2 text-xs text-gray-800 hover:bg-gray-950 hover:text-white dark:text-white dark:hover:text-white"
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>

                  <div className="pl-2">Sign Out</div>
                </div>
              </div>
            </button>
          </motion.div>

          <div className="dark:border-dark-700 mx-3 my-2 block border-b border-gray-200/75"></div>
        </>
      ) : (
        <>
          <motion.div className="w-56" variants={innerAnimation}>
            <Link
              href="/auth/Signin"
              className="dark:hover:bg-dark-600/50 block rounded bg-transparent px-4 py-2 text-xs text-gray-800 hover:bg-gray-950 hover:text-white dark:text-white dark:hover:text-white"
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>
                  <div className="pl-2">Sign In</div>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div variants={innerAnimation}>
            <Link
              href="/auth/Register"
              className="dark:hover:bg-dark-600/50 block rounded bg-transparent px-4 py-2 text-xs text-gray-800 hover:bg-gray-950 hover:text-white dark:text-white dark:hover:text-white"
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>

                  <div className="pl-2">Register</div>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="dark:border-dark-700 mx-3 my-2 block border-b border-gray-200/75"></div>
        </>
      )}
    </>
  )
}

export default AccountDropwdown
