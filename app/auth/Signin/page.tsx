'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import PageWrap from 'components/sections/PageWrap'

const Signin = () => {
  const router = useRouter()
  const [formMessage, setFormMessage] = useState<string>()
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  const { status } = useSession()

  const submitHandler = async e => {
    e.preventDefault()
    const userEmail = emailInputRef.current?.value
    const userPassword = passwordInputRef.current?.value

    const result = await signIn('credentials', {
      redirect: false,
      email: userEmail,
      password: userPassword,
      callbackUrl: process.env.NEXT_PUBLIC_DEFAULT_URL,
    })
    if (!result.error) {
      router.replace(result.url)
    } else {
      setFormMessage(result.error)
    }
  }

  // if (status === "authenticated") {
  //   router.replace(process.env.NEXT_PUBLIC_DEFAULT_URL);
  //   return (
  //     <div>
  //       <h1>Log in</h1>
  //       <div>You are already logged in.</div>
  //       <div>Now redirect to main page.</div>
  //     </div>
  //   );
  // }
  return (
    <PageWrap>
      <div className="pt-10 lg:pt-10 pb-20 lg:pb-20">
        <div className="max-w-lg mx-auto p-5">
          <form onSubmit={submitHandler}>
            <div className="py-10 text-center">
              <div className="text-lg text-dark-500 dark:text-dark-50">
                Sign in
              </div>
            </div>
            {formMessage && (
              <div className="py-5">
                <div className=" text-rose-500 bg-rose-700 bg-opacity-25 py-3 px-3 rounded-sm text-sm">
                  {formMessage}
                </div>
              </div>
            )}
            <div className="flex px-3 mb-5 w-full">
              <label className="flex items-center w-24 text-dark-300 text-xs">
                Email
              </label>
              <input
                type="text"
                ref={emailInputRef}
                name="email"
                id="email"
                className="bg-dark-50 dark:bg-dark-900 text-sm text-dark-500 dark:text-dark-300 focus:text-white py-3 px-3 focus:outline-none w-full border-b border-dark-400 dark:border-dark-500 focus:border-primary-500 placeholder-dark-400 dark:placeholder-dark-600"
                placeholder="What's your Email"
              />
            </div>
            <div className="flex px-3 mb-5 w-full">
              <label className="flex items-center w-24 text-dark-300 text-xs">
                Password
              </label>
              <input
                type="password"
                ref={passwordInputRef}
                name="password"
                id="password"
                className="bg-dark-50 dark:bg-dark-900 text-sm text-dark-500 dark:text-dark-300 focus:text-white py-3 px-3 focus:outline-none w-full border-b border-dark-400 dark:border-dark-500 focus:border-primary-500 placeholder-dark-400 dark:placeholder-dark-600"
                placeholder="Password"
              />
            </div>
            <div className="flex mb-4">
              <button
                type="submit"
                className="flex justify-center items-center w-full bg-primary-600 hover:bg-primary-500 text-white py-3 px-5 rounded-sm transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <span className="pl-2 text-sm">Sign In</span>
              </button>
            </div>
          </form>
          <div className="divider">
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white dark:bg-dark-900 px-4 text-xs text-dark-400">
                  OR
                </span>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="flex gap-4">
              <button
                onClick={() => signIn()}
                className="flex-1 flex justify-center bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600 rounded-md px-3 py-3 mb-2 cursor-pointer"
              >
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 stroke-1 fill-dark-500 dark:fill-primary-100"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                  >
                    <title>ionicons-v5_logos</title>
                    <path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z" />
                    <path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z" />
                  </svg>
                </div>
                <div className="text-sm text-dark-300">Apple</div>
              </button>
              <button
                onClick={() => signIn()}
                className="flex-1 flex justify-center bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600 rounded-md px-3 py-3 mb-2 cursor-pointer"
              >
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 stroke-1 fill-dark-500 dark:fill-primary-100"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                  >
                    <title>ionicons-v5_logos</title>
                    <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
                  </svg>
                </div>
                <div className="text-sm text-dark-300">Github</div>
              </button>
              <button
                onClick={() => signIn('github')}
                className="flex-1 flex justify-center bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600 rounded-md px-3 py-3 mb-2 cursor-pointer"
              >
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 stroke-1 fill-dark-500 dark:fill-primary-100"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                  >
                    <title>ionicons-v5_logos</title>
                    <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                  </svg>
                </div>
                <div className="text-sm text-dark-300">Twitter</div>
              </button>
            </div>
          </div>
          <div className="pb-10">
            <div className="flex flex-wrap">
              <div className="w-full">
                <Link
                  href="/auth/Register"
                  className="group text-sm text-dark-300"
                >
                  회원가입을 하시려면{' '}
                  <span className="group-hover:text-primary-400 text-primary-500 underline">
                    회원가입 하기
                  </span>
                </Link>
              </div>
              <div className="w-full">
                <Link href="/" className="group text-sm text-dark-400">
                  이메일과 비밀번호를 잊어버리 셨나요?{' '}
                  <span className="group-hover:text-primary-300 text-primary-500 underline">
                    Email/비밀번호 찾기
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrap>
  )
}

export default Signin
