'use client'

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@plextype/redux/store'
import { useRouter } from 'next/navigation'
import Dropdown from '@plextype/components/dropdown/Dropdown'
import Avator from '@plextype/components/avator/Avator'
import DefaultList from '@plextype/components/nav/DefaultList'
import { store } from '@plextype/redux/store'
import { resetUserInfo } from '@plextype/redux/features/userSlice'

// import { Signout, Refresh } from '@/modules/user/scripts/authController'

interface Item {
  title: string
  name: string
  route: string
  condition?: {
    operation: string
    name: string
    variable: string | boolean
  }
}

const AccountDropwdown = () => {
  const router = useRouter()
  const [showDropdown, setShowDropdown] = useState(false)
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [loggedInfo, setLoggedInfo] = useState<UserInfo | undefined>(undefined)
  const userInfo = useSelector((state: RootState) => state.userInfo)

  useEffect(() => {
    const dispatch = store.dispatch

    const accessToken = localStorage.getItem('accessToken')
    const isLoggedIn = accessToken !== null

    // if (userInfoString) {
    //   const parsedUserInfo = JSON.parse(userInfoString)
    //   const userInfoObject = JSON.parse(parsedUserInfo.userInfo)
    //   setLoggedInfo(userInfoObject.userInfo)
    // }
    setIsLogged(isLoggedIn)

    // userInfo && console.log(userInfo)
    userInfo && setLoggedInfo(userInfo?.session)

    if (isLoggedIn && accessToken) {
      accessToken && fetchUserData(accessToken)
    } else {
      localStorage.getItem('persist:userInfo') &&
        localStorage.removeItem('persist:userInfo')
      dispatch(resetUserInfo())
    }
  }, [])

  useEffect(() => {
    userInfo && userInfo?.session && setLoggedInfo(userInfo.session)
  }, [userInfo])

  const closeDropdown = close => {
    setShowDropdown(close)
  }

  const [guestNav, setGuestNav] = useState<Array<Item>>([
    {
      title: '로그인',
      name: 'Signin',
      route: '/auth/Signin',
    },
    {
      title: '회원가입',
      name: 'Register',
      route: '/auth/Register',
    },
    {
      title: '',
      name: 'divider',
      route: '',
    },
    {
      title: '설정',
      name: 'settings',
      route: '#right',
    },
  ])
  const [userNav, setUserNav] = useState<Array<Item>>([
    {
      title: '내 정보',
      name: 'user',
      route: '/user',
    },
    {
      title: '나의 서비스',
      name: 'user',
      route: '/user',
    },
    {
      title: '알림',
      name: 'notification',
      route: '#right',
    },
    {
      title: '',
      name: 'divider',
      route: '',
    },
    {
      title: '설정',
      name: 'settings',
      route: '#right',
    },
    {
      title: '관리자',
      name: 'dashboard',
      route: '/dashboard',
      condition: {
        operation: 'equals',
        name: 'isAdmin',
        variable: true,
      },
    },
    {
      title: '',
      name: 'divider',
      route: '',
    },

    {
      title: '로그아웃',
      name: 'Signout',
      route: '/',
    },
  ])

  const handleSignOut = async () => {
    // const accessToken = localStorage.getItem('accessToken')
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    })
    const result = await response.json()
    if (result) {
      localStorage.removeItem('persist:userInfo')
      localStorage.removeItem('accessToken')
      window.location.href = '/'
    }
    // await Signout(accessToken).then(data => {
    //   if (data) {
    //     localStorage.removeItem('persist:userInfo')
    //     localStorage.removeItem('accessToken')
    //     window.location.href = '/'
    //   }
    // })
  }

  const fetchUserData = async (accessToken: string) => {
    const url = '/api/auth/refresh'
    let options = {
      method: 'POST',
      headers: {}, // headers 객체를 미리 초기화
    }
    try {
      if (accessToken) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`,
        }
      }
      const response = await fetch(url, options)
      const result = await response.json()

      // await Refresh(accessToken).then(response => {
      if (result.code === 'new_accessToken' && result.accessToken) {
        localStorage.setItem('accessToken', result.accessToken)
      }
      if (
        result.code === 'refreshToken_expires' &&
        result.accessToken === null
      ) {
        localStorage.removeItem('persist:userInfo')
        localStorage.removeItem('accessToken')
        alert(result.message)
        window.location.href = '/'
      }
      // })
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  const callbackName = name => {
    name === 'Signout' && handleSignOut()
  }
  return (
    <>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="hover:bg-gray-100/20 py-2 px-3 rounded-md dark:hover:bg-dark-700/75"
      >
        <Avator username={loggedInfo?.nickName} />
      </button>
      <Dropdown state={showDropdown} close={closeDropdown}>
        {isLogged ? (
          <DefaultList
            list={userNav}
            loggedInfo={loggedInfo}
            callback={callbackName}
          />
        ) : (
          <DefaultList list={guestNav} callback={callbackName} />
        )}
      </Dropdown>
    </>
  )
}

export default AccountDropwdown
