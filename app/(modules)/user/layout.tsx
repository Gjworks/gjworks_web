'use client'

import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import DefaultLayout from '@templates/layouts/fullLayout/Layout'
import ProfileComponent from '@components/account/Profile'
import DefaultNav from '@components/nav/DefaultNav'
import {useSelector} from 'react-redux'
import {RootState} from '@redux/store'

const PageLayout = ({children}) => {
  const route = useRouter()
  const [isLogged, setIsLogged] = useState<boolean | null>()
  const [userNav, setUserNav] = useState<object>({})

  const userInfo = useSelector((state: RootState) => state.userInfo)
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

  return (
    <DefaultLayout>
      <ProfileComponent
        profileName={userInfo?.userInfo?.nickname}
        profileEmail={userInfo?.userInfo?.email}
      />
      <div className="sticky top-[52px] lg:top-[60px] w-full bg-white/90 backdrop-blur-lg z-90 border-b border-gray-100">
        <DefaultNav list={userNav} />
      </div>
      {children}
    </DefaultLayout>
  )
}

export default PageLayout
