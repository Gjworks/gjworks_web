'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Warning from 'src/components/message/Warning'
import TextInput from 'src/components/form/TextInput'
import registerUser from './server'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickName, setNickName] = useState('')

  const [error, setError] = useState<{ [key: string]: any }>()
  const router = useRouter()
  const strSpace = /\s/

  const getEmail = (msg: string) => {
    setEmail(msg)
  }
  const getPassword = (msg: string) => {
    setPassword(msg)
  }

  const getNickname = (msg: string) => {
    console.log(msg)
    setNickName(msg)
  }

  const submitHandler = async e => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      nickname: e.target.nickName.value,
    }
    // console.log(data)
    // const result = registerUser(data)
    // console.log(result)
    try {
      const res = await registerUser(data)
      console.log('res', res)
    } catch (err) {
      // setError(err)
      console.error(err)
    }
  }

  // const registerUser = async e => {
  //   e.preventDefault()
  //   const userData = await axios
  //     .post('/api/auth/register', {
  //       method: 'POST',
  //       body: {
  //         nickname: nickName.trim(),
  //         email: email.trim(),
  //         password: password.trim(),
  //       },
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then(res => {
  //       router.replace('/auth/Signin')
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       console.log('Error >> ' + error.code, error.response.data.message)
  //       setError(error.response.data.message)
  //       return error.response
  //     })
  //   // signIn("credentials", {
  //   //   email, password, callbackUrl: `${window.location.origin}/Account`, redirect: false }
  //   // ).then(function(result) {
  //   //   router.push(result.url)
  //   // }).catch(err => {
  //   //   alert("Failed to register: " + err.toString())
  //   // });
  // }

  return (
    <>
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
                className="w-10 h-10 text-black dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
            </div>

            <div className="text-2xl text-dark-800 dark:text-dark-50">
              Register
            </div>
            <div className="text-dark-600 text-sm pt-5">
              회원가입을 해주셔서 감사드립니다.
            </div>
          </div>
          {error && <Warning message={error} />}
          <form onSubmit={submitHandler}>
            <div className="relative mb-5 w-full">
              <div className="flex items-center w-full text-xs">
                <TextInput
                  inputType="email"
                  inputName="email"
                  inputTitle="이메일"
                  getData={getEmail}
                  placeholder="example@mail.com"
                  theme="light"
                  value=""
                ></TextInput>
              </div>
            </div>

            <div className="relative mb-5 w-full">
              <div className="flex items-center w-full text-xs">
                <TextInput
                  inputType="password"
                  inputName="password"
                  inputTitle="비밀번호"
                  getData={getPassword}
                  placeholder="User Password"
                  theme="light"
                  value=""
                ></TextInput>
              </div>
              <div className="text-dark-400 text-sm pt-2 px-2">
                비밀번호는 암호화 되어 안전하게 저장됩니다.
              </div>
            </div>
            <div className="relative mb-5 w-full">
              <div className="flex items-center w-full text-xs">
                <TextInput
                  inputType="text"
                  inputName="nickName"
                  inputTitle="닉네임"
                  getData={getNickname}
                  placeholder="User nick name"
                  theme="light"
                  value=""
                ></TextInput>
              </div>
            </div>

            <div className="flex mb-2">
              <button className="flex justify-center items-center w-full bg-slate-900 dark:bg-dark-100 dark:hover:bg-dark-400 hover:text-black dark:hover:text-white dark:text-primary-200 text-white py-4 px-5 rounded-lg transition duration-300 hover:bg-slate-200">
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
                <span className="bg-white dark:bg-dark-950 px-4 text-xs text-dark-400">
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
                  className="group text-sm text-dark-500"
                >
                  계정이 이미 있으시다면{' '}
                  <span className="group-hover:text-primary-500 text-primary-600 underline">
                    Sign In
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
