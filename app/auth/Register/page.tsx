'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Warning from 'src/components/message/Warning'
import PageWrap from 'src/components/sections/PageWrap'

const Register = () => {
  const [nickName, setNickName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()
  const { status } = useSession()
  const strSpace = /\s/

  const nickNameHandler = e => {
    if (strSpace.exec(e.target.value)) {
      setError('공백은 넣으실 수 없습니다.')
      return false
    } else {
      setError(false)
      setNickName(e.target.value)
    }
  }
  const emailHandler = e => {
    if (strSpace.exec(e.target.value)) {
      setError('공백은 넣으실 수 없습니다.')
      return false
    } else {
      setError(false)
      setEmail(e.target.value)
    }
  }
  const passwordHandler = e => {
    if (strSpace.exec(e.target.value)) {
      setError('공백은 넣으실 수 없습니다.')
      return false
    } else {
      setError(false)
      setPassword(e.target.value)
    }
  }
  const registerUser = async e => {
    e.preventDefault()
    const userData = await axios
      .post('/api/auth/register', {
        method: 'POST',
        body: {
          nickname: nickName.trim(),
          email: email.trim(),
          password: password.trim(),
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        router.replace('/auth/Signin')
      })
      .catch(error => {
        console.log(error)
        console.log('Error >> ' + error.code, error.response.data.message)
        setError(error.response.data.message)
        return error.response
      })
    // signIn("credentials", {
    //   email, password, callbackUrl: `${window.location.origin}/Account`, redirect: false }
    // ).then(function(result) {
    //   router.push(result.url)
    // }).catch(err => {
    //   alert("Failed to register: " + err.toString())
    // });
  }

  if (status === 'authenticated') {
    router.replace('/')
    return (
      <div>
        <h1>Log in</h1>
        <div>You are already logged in.</div>
        <div>Now redirect to main page.</div>
      </div>
    )
  }
  return (
    <PageWrap>
      <div className="pt-10 lg:pt-10 pb-20 lg:pb-20">
        <div className="max-w-xl mx-auto p-5">
          <div className="py-10 text-center">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
            </div>

            <div className="text-2xl text-dark-500 dark:text-dark-50">
              Register
            </div>
          </div>
          {error && <Warning message={error} />}
          <form onSubmit={registerUser}>
            <div className="px-3 mb-5 w-full">
              <div className="flex">
                <label className="flex w-24 text-dark-300 text-xs px-3 py-3">
                  NickName
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    value={nickName}
                    onChange={nickNameHandler}
                    placeholder="User nick name"
                    className="bg-dark-50 dark:bg-dark-900 text-sm text-dark-500 dark:text-dark-300 focus:text-white py-3 px-3 focus:outline-none w-full border-b border-dark-400 dark:border-dark-500 focus:border-primary-500 placeholder-dark-400 dark:placeholder-dark-600 dark:focus:border-primary-600"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="px-3 mb-5 w-full">
              <div className="flex">
                <label className="flex w-24 text-dark-300 text-xs px-3 py-3">
                  Email
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    value={email}
                    onChange={emailHandler}
                    placeholder="example@mail.com"
                    className="bg-dark-50 dark:bg-dark-900 text-sm text-dark-500 dark:text-dark-300 focus:text-white py-3 px-3 focus:outline-none w-full border-b border-dark-400 dark:border-dark-500 focus:border-primary-500 placeholder-dark-400 dark:placeholder-dark-600 dark:focus:border-primary-600"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                  <div></div>
                </div>
              </div>
            </div>
            <div className="px-3 mb-5 w-full">
              <div className="flex">
                <label className="flex w-24 text-dark-300 text-xs px-3 py-3">
                  Password
                </label>
                <div className="flex-1">
                  <input
                    type="password"
                    value={password}
                    onChange={passwordHandler}
                    placeholder="User Password"
                    className="bg-dark-50 dark:bg-dark-900 text-sm text-dark-500 dark:text-dark-300 focus:text-white py-3 px-3 mb-2 focus:outline-none w-full border-b border-dark-400 dark:border-dark-500 focus:border-primary-500 placeholder-dark-400 dark:placeholder-dark-600 dark:focus:border-primary-600"
                    required
                  />
                  <div className="text-sm text-dark-300">
                    비밀번호는 안전하게 암호화 되어 저장됩니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mb-2">
              <button className="block w-full bg-primary-700 hover:bg-primary-600 text-sm text-white py-3 px-5 rounded-sm transition duration-300">
                Register Completed
              </button>
            </div>
          </form>
          <div className="divider">
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-dark-500 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white dark:bg-dark-900 px-4 text-xs text-dark-400">
                  OR
                </span>
              </div>
            </div>
          </div>
          <div className="pb-10">
            <div className="flex flex-wrap">
              <div className="w-full">
                <Link
                  href="/auth/Signin"
                  className="group text-sm text-dark-300"
                >
                  계정이 이미 있으시다면{' '}
                  <span className="group-hover:text-primary-300 text-primary-500 underline">
                    Sign In
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

export default Register
