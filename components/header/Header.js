/**
 * @file Header.js
 * @author 지제이웍스 (gjworks@kakao.com)
 * @brief 설정 및 환경변수등이 저장되는 파일
 **/

import React, {useState, useEffect} from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Dropdown from "../dropdown/Dropdown";
import Modal from "../modal/Modal";
import SearchForm from '../form/SearchForm';

const Header = () => {
  const router = useRouter();
  const { status } = useSession();
  const [showModal, setShowModal] = useState(false);

  const closeModal = (close) => {
    setShowModal(close);
  }
  const { mid } = router.query;

  return(
      <>
      <div className="flex relative bg-primary-400 shadow-black z-20">
        <div className="max-w-screen-2xl mx-auto px-3 py-3 text-black text-sm text-center">
          홈페이지가 리뉴얼 중입니다. 🎗️
        </div>
      </div>
      <header className="sticky top-0 max-w-screen-2xl mx-auto bg-opacity-25 backdrop-blur-lg px-0 z-[90]">
        <div className="flex justify-between items-center py-4 pr-3">
          <div className="flex items-center justify-center">
            <div className="group flex items-center justify-center mx-auto pr-1 lg:pr-3" data-component="sideNav" data-target="sideNav">
              <div className="hidden relative w-5 h-5 cursor-pointer">
                <span>
                  <div className="transition-all absolute left-0 top-[3px] h-[1px] w-2 group-hover:w-3 bg-white"></div>
                  <div className="transition-all absolute left-0 top-[9px] h-[1px] w-4 group-hover:w-2 bg-white"></div>
                  <div className="transition-all absolute left-0 top-[15px] h-[1px] w-3 group-hover:w-4 bg-white"></div>
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Link href={process.env.NEXT_PUBLIC_DEFAULT_URL}>
                <a className="flex items-center">
                  <Image src="/assets/images/brand/gjworks_white.svg" alt="gjworks logo" width="32" height="32" className="block w-8 h-8" />
                </a>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_DEFAULT_URL}>
                <a className="hidden lg:flex items-center">
                  <div className="text-white pl-2 text-sm lg:text-sm font-bold mr-4">지제이웍스</div>
                  <div className="flex text-dark-200 text-xs lg:text-xs bg-dark-600 bg-opacity-75 px-4 py-1 rounded-full hover:bg-dark-500 hover:text-white transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                    </svg>

                    웹사이트와 앱을 한번에 서비스 하세요.
                  </div>
                </a>
              </Link>
            </div>
            
            <div className="flex items-center pl-3">
              <Link href="/Works">
                <a className={"block py-0 lg:py-2 px-1 lg:px-3 mx-2 text-xs lg:text-sm font-normal " + (router.pathname === "/Works" ? "text-white" : "text-dark-200 hover:text-white")}>Works</a>
              </Link>
              <Link href="/posts/[mid]" as="/posts/blog">
                <a className={"block py-0 lg:py-2 px-1 lg:px-3 mx-2 text-xs lg:text-sm font-normal " + (mid === "blog" ? "text-white" : "text-dark-200 hover:text-white")}>Blog</a>
              </Link>
              <Link href="/Contact">
                <a className={"block py-0 lg:py-2 px-1 lg:px-3 mx-2 text-xs lg:text-sm font-normal " + (router.pathname === "/Contact" ? "text-white" : "text-dark-200 hover:text-white")}>Contact</a>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center">
            <button className="text-white pr-5" onClick={() => setShowModal(!showModal)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <Dropdown></Dropdown>
          </div>
        </div>
      </header>
      <Modal state={showModal} close={closeModal}>
        <SearchForm />
      </Modal>
    </>
  )
}

export default Header;