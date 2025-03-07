'use client'

import { useEffect } from 'react'
import Header from 'src/layouts/fullLayout/Header'
import Footer from 'src/layouts/fullLayout/Footer'
import SubNav from 'src/layouts/fullLayout/SubNav'
import FootAlert from 'src/layouts/fullLayout/FootAlert'

const FullLayout = ({ children }) => {
  useEffect(() => {
    // const htmlElement = document.documentElement
    // // 조건에 따라 클래스를 추가 또는 제거
    // if (!htmlElement.classList.contains('dark')) {
    //   htmlElement.classList.add('dark')
    // }
  }, []) // 빈 배열을 두 번째 인수로 전달하면 컴포넌트가 처음 마운트될 때만 실행됩니다.
  return (
    <div className="">
        <div className="relative z-20 overflow-hidden">
            <Header/>
            <div className="relative max-w-screen-2xl mx-auto">
                <div
                    className="absolute left-0 top-0 bottom-0 w-8 max-sm:hidden text-gray-950/5 border-x border-x-current bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)]"></div>
                <main className="relative min-h-[calc(100vh-226px)] sm:px-8">
                    {children}
                </main>
                <div
                    className="absolute right-0 top-0 bottom-0 w-8 max-sm:hidden text-gray-950/5 border-x border-x-current bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)]"></div>
                <footer className="px-8 before:absolute before:w-[200vw] before:border-t before:border-gray-100 before:left-[-100vw]">
                    <Footer/>
                </footer>
            </div>
        </div>
    </div>
  )
}

export default FullLayout
