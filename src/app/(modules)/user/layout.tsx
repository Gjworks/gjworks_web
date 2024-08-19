'use client'

import { useState, useEffect, use } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import DefaultLayout from 'src/layouts/fullLayout/Layout'
import ProfileComponent from '@plextype/components/account/Profile'
import DefaultNav from '@plextype/components/nav/DefaultNav'
import { useSelector } from 'react-redux'
import { RootState } from '@plextype/redux/store'

const PageLayout = ({ children }) => {
  const route = useRouter()
  const pathname = usePathname()
  const [isLogged, setIsLogged] = useState<boolean | null>()
  const [userNav, setUserNav] = useState<object>([
    {
      title: '대시보드',
      route: '/user',
    },
    {
      title: '계정 프로필 설정',
      route: '/user/userUpdate',
    },
    {
      title: 'API 설정',
      route: '/user/apiSettings',
    },
    {
      title: '타임라인',
      route: '/user/timeline',
    },
    {
      title: '1:1문의',
      route: '/user/1n1contact',
    },
    {
      title: '회원탈퇴',
      route: '/user/userDelete',
    },
  ])
  const [loggedInfo, setLoggedInfo] = useState<UserInfo | undefined>(undefined)
  const [params, setParams] = useState<any[]>([])
  const userInfo = useSelector((state: RootState) => state.userInfo)

  useEffect(() => {
    userInfo && userInfo?.session && setLoggedInfo(userInfo.session)
  }, [userInfo])
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const isLoggedIn = accessToken !== null
    setIsLogged(isLoggedIn)
  }, [])

  useEffect(() => {
    if (isLogged === false) {
      alert('로그인 상태가 아닙니다. 메인으로 이동합니다.')
      route.push('/')
    }
  }, [isLogged])

  useEffect(() => {
    const params = pathname?.split('/')
    setParams(params)
  }, [])

  return (
    <DefaultLayout>
      <div className="pt-16">
        <ProfileComponent
          profileName={loggedInfo && loggedInfo && loggedInfo.nickName}
          profileEmail={loggedInfo && loggedInfo && loggedInfo.email_address}
        />
      </div>
      <div className="flex justify-center sticky top-[48px] lg:top-[52px] w-full bg-gray-100/90 dark:bg-dark-950/40 backdrop-blur-lg z-90 border-b border-gray-200 dark:border-dark-700">
        <DefaultNav list={userNav} params={params[0]} />
      </div>
      {children}
    </DefaultLayout>
  )
}

export default PageLayout
