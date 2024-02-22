/**
 * @file Header.js
 * @author 지제이웍스 (gjworks@kakao.com)
 * @brief 설정 및 환경변수등이 저장되는 파일
 **/
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Dropdown from "src/components/dropdown/Dropdown";

import Left from "src/components/panel/Left";

import AccountDropwdown from "src/templates/forms/AccountDropwdown";
import SideNav from "src/components/nav/SideNav";
import nav from "src/res/config/navigation.json";
import page from "src/res/config/page.json";
import { motion } from "framer-motion";

import Right from "@gjworks/components/panel/Right";
import MymenuTemplate from "@gjworks/templates/forms/MymenuTemplate";

export type NavType = {
  name: string;
  icon: string;
  title: string;
  parent: string;
  route: string;
};

interface Inspage {
  name: string;
  title: string;
  parent: string;
  route: string;
}

const Header = () => {
  const pathname = usePathname();

  const [showLeft, setShowLeft] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showNavigationList, setShowNavigationList] = useState<NavType[]>();
  const [background, setBackground] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState<Inspage | undefined>();
  const [showRight, setShowRight] = useState(false);

  const closeRight = (close) => {
    setShowRight(close);
  };
  useEffect(() => {
    const params = pathname?.split("/");

    if (params?.length) {
      setCurrentPage(page[params?.[1]]);
    }
  }, [pathname, currentPage]);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const closeLeft = (close) => {
    setShowLeft(close);
  };
  const handleClickOutside = () => {
    setShowNavigation(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 1000);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    setShowNavigation(false);
    // console.log('scrolled')
  };

  const headerInitial = {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  };
  const initial = {
    opacity: 0,
    y: "0%",
    transition: {
      duration: 0.5,
    },
  };
  const fixedVariants = {
    open: {
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.5,
      },
    },
    close: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  const headerVariants = {
    open: {
      opacity: 1,
      y: "0%",
      // display: 'block',
      transition: {
        duration: 0.5,
      },
    },
    close: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
      // transitionEnd: {
      //   display: 'none',
      // },
    },
  };
  const wrapVariants = {
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
      },
    },
    close: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
    },
  };
  const variants = {
    // open: {
    //   opacity: 1,
    //   display: 'block',
    //   transition: {
    //     duration: 1.5,
    //   },
    // },
    // close: {
    //   opacity: 0,
    //   transition: {
    //     duration: 0.5,
    //   },
    //   transitionEnd: {
    //     display: 'none',
    //   },
    // },

    onscreen: {
      opacity: [0, 1],
      transition: {
        y: { stiffness: 300, velocity: -100 },
      },
    },
    offscreen: {
      opacity: 0,
      transition: {
        y: { stiffness: 300 },
      },
    },
  };

  const subMenuVariants = {
    onscreen: {
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
    offscreen: {
      transition: { staggerChildren: 0.2, staggerDirection: -1 },
    },
  };

  const subNavigationView = (showNavigationList) => {
    return <></>;
  };
  return (
    <>
      <motion.header
        transition={{ transition: { duration: 0.3 } }}
        className={
          "z-101 dark:bg-dark-950/10 sticky  top-0 w-full bg-white/90 pt-0 backdrop-blur-lg" +
          (showNavigation === true ? "  " : " ")
        }
      >
        <div className="">
          <div className="grid grid-cols-4 gap-4 px-3 py-2 lg:px-5">
            <div className="col-span-1 flex items-center gap-2">
              <button
                onClick={() => {
                  setBackground("dark:bg-dark-950 bg-white");
                  setShowLeft(!showLeft);
                }}
                className="group flex items-center px-2"
              >
                <div className="relative flex h-5 w-5 cursor-pointer">
                  <span>
                    {/* <div className="transition-all absolute left-0 top-[3px] h-[1px] w-2 group-hover:w-3 bg-black dark:bg-white"></div> */}
                    <div className="absolute left-0 top-[6px] h-[1px] w-4 bg-black transition-all group-hover:w-2 dark:bg-white"></div>
                    <div className="absolute left-0 top-[12px] h-[1px] w-3 bg-black transition-all group-hover:w-4 dark:bg-white"></div>
                  </span>
                </div>
              </button>

              <button
                onClick={() => setShowNavigation(!showNavigation)}
                className="group hidden items-center px-3"
              >
                <div className="relative flex h-5 w-5 cursor-pointer">
                  <span>
                    <div className="absolute left-0 top-[3px] h-[1px] w-2 bg-black transition-all group-hover:w-3 dark:bg-white"></div>
                    <div className="absolute left-0 top-[9px] h-[1px] w-4 bg-black transition-all group-hover:w-2 dark:bg-white"></div>
                    <div className="absolute left-0 top-[15px] h-[1px] w-3 bg-black transition-all group-hover:w-4 dark:bg-white"></div>
                  </span>
                </div>
              </button>

              <div className="flex items-center">
                <a
                  href={process.env.NEXT_PUBLIC_DEFAULT_URL}
                  className="hidden items-center"
                >
                  <div className="mr-4 flex pl-2 text-sm font-semibold lg:text-base">
                    <div className="text-black dark:text-white">지제이웍스</div>
                  </div>
                </a>
                <div className="dark:text-dark-100 dark:bg-dark-100/10 hidden cursor-pointer rounded-full bg-gray-100/90 px-4 py-1 text-xs text-gray-500 backdrop-blur-lg transition duration-300 hover:bg-gray-200/75 hover:text-black dark:hover:bg-gray-100/20 dark:hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                    />
                  </svg>
                  <span>0.1.10.beta</span>
                </div>
              </div>
            </div>
            <div className="relative col-span-2 flex justify-center">
              <div className="relative flex items-center gap-2">
                <div className="flex items-center lg:hidden">
                  <a href={process.env.NEXT_PUBLIC_DEFAULT_URL} className="">
                    <Image
                      src="/assets/images/brand/gjworks.svg"
                      alt="gjworks logo"
                      width="32"
                      height="32"
                      className="block h-8 w-8"
                    />
                  </a>
                </div>
                <div className="dark:before:bg-dark-700 relative hidden items-center justify-center overflow-hidden rounded-full px-4 py-1 lg:flex">
                  <div
                    className=" relative flex"
                    // onMouseEnter={() => setShowNavigation(true)} // 마우스엔터(호버)시 키값이 저장된다
                    // onMouseLeave={} // 마우스리브 시에는 키값이 지워진다
                  >
                    <a
                      href={process.env.NEXT_PUBLIC_DEFAULT_URL}
                      className="flex w-16 items-center justify-center"
                    >
                      <Image
                        src="/assets/images/brand/gjworks.svg"
                        alt="gjworks logo"
                        width="32"
                        height="32"
                        className="block h-8 w-8"
                      />
                    </a>
                    {nav.header &&
                      Object.entries(nav.header).map((data, index) => {
                        return (
                          <Link
                            href={data[1].route}
                            key={data[1].name}
                            onMouseEnter={() => {
                              //   setShowNavigation(true);
                              showNavigation &&
                                setShowNavigationList(data[1].subMenu);
                            }}
                            className={
                              "mx-2 flex items-center gap-2 px-1 py-0 text-xs font-normal lg:px-3 lg:py-2 lg:text-sm  " +
                              (currentPage?.name === data[1].name
                                ? "text-gray-400 dark:text-white"
                                : "dark:text-dark-500 text-gray-800 hover:text-gray-400 dark:hover:text-white")
                            }
                          >
                            {data[1].title}
                            {data[1].subMenu.length > 0 && (
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="h-4 w-4"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    <button
                      onClick={() => {
                        setShowNavigation(true);
                      }}
                      className="flex items-center rounded-md px-3 hover:bg-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-1 flex items-center justify-end gap-2 lg:gap-4">
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-2 text-gray-950 hover:text-gray-400 dark:hover:text-white"
                  // onClick={() => setShowModal(!showModal)}
                  onClick={() => setShowRight(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.25}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  // onClick={() => setShowRight(true)}
                  className="rounded-full border-[0.5px] border-gray-400/50 bg-white/10 px-2 py-1.5 text-black hover:border-gray-950 hover:bg-gray-900 hover:text-white lg:px-4"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <div className="hidden items-center px-3 text-xs md:flex">
                      Account
                    </div>
                  </div>

                  <Dropdown state={showDropdown}>
                    <AccountDropwdown />
                  </Dropdown>
                </button>
              </div>
              <button
                className="dark:text-dark-200 dark:bg-dark-950 dark:hover:bg-dark-700 relative hidden rounded-md bg-white px-2 py-1 text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:hover:text-white "
                onClick={() => {}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
                <div className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-rose-600 dark:bg-rose-600"></div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      <Left state={showLeft} close={closeLeft} width="320px">
        <SideNav />
      </Left>
      <Right state={showRight} close={closeRight}>
        <MymenuTemplate />
      </Right>
      <motion.div
        initial={headerInitial}
        animate={showNavigation === true ? "open" : "close"}
        variants={fixedVariants}
        className="z-99 fixed bottom-0 left-0 right-0 top-0 bg-gray-950/70 backdrop-blur-sm dark:bg-transparent"
      ></motion.div>
      <motion.div
        initial={headerInitial}
        animate={showNavigation === true ? "open" : "close"}
        variants={headerVariants}
        className="z-99 fixed left-0 right-0 top-0 "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={showNavigation === true ? "open" : "close"}
          variants={wrapVariants}
          className={
            "z-100 dark:bg-dark-950 dark:border-dark-600/50 dark:shadow-dark-950/90 relative border-b-[0.5px] border-gray-200/50 bg-white shadow-sm shadow-gray-100/75 dark:shadow-xl " +
            (scrollPosition > 100 ? " pt-[86px]" : " pt-[86px]")
          }
        >
          <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-5">
            <div className="grid grid-cols-12 pl-3 pr-3 lg:pl-20">
              <div className="col-span-12 lg:col-span-2">
                <div className="py-5">
                  <div className="dark:text-dark-400 mb-5 text-sm text-gray-400">
                    Sub Navigation
                  </div>
                  {/* <Link
                    href="/store"
                    className="text-black dark:text-white text-2xl font-medium mb-3 w-full block hover:text-primary-600 dark:hover:text-dark-400"
                  >
                    Store
                  </Link> */}

                  {showNavigationList && (
                    <motion.div
                      initial="offscreen"
                      // viewport={{once: true, amount: 0.1}}
                      // animate={showNavigationList ? 'onscreen' : 'offscreen'}
                      animate="onscreen"
                      variants={subMenuVariants}
                    >
                      {Object.entries(showNavigationList).map((list, key) => {
                        return (
                          <motion.div key={key} variants={variants}>
                            <Link
                              href="/store"
                              className="dark:hover:text-primary-500 mb-3 block w-full text-2xl font-medium text-black hover:text-gray-500 dark:text-white"
                            >
                              {list[1].title}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="flex flex-wrap gap-10">
                  <div className="px-3 py-3  lg:px-5 lg:py-5">
                    <div className="dark:text-dark-400 mb-5 text-sm text-gray-400">
                      Sitemap
                    </div>
                    <Link
                      href="#"
                      className="dark:hover:text-primary-500 mb-3 block text-sm text-black hover:text-gray-500 dark:text-white"
                    >
                      개발문서
                    </Link>
                    <Link
                      href="#"
                      className="dark:hover:text-primary-500 mb-3 block text-sm text-black hover:text-gray-500 dark:text-white"
                    >
                      교육
                    </Link>
                    <Link
                      href="#"
                      className="dark:hover:text-primary-500 mb-3 block text-sm text-black hover:text-gray-500 dark:text-white"
                    >
                      유지보수/관리
                    </Link>
                  </div>
                  <div className="px-3 py-3  lg:px-5 lg:py-5">
                    <div className="dark:text-dark-400 mb-5 text-sm text-gray-400">
                      Store
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark:hover:text-primary-500 mb-3 block text-sm text-black hover:text-gray-500 dark:text-white"
                    >
                      XE/라이믹스 스토어
                    </a>
                    <Link
                      href="#"
                      className="dark:hover:text-primary-500 mb-3 block text-sm text-black hover:text-gray-500 dark:text-white"
                    >
                      도메인 등록
                    </Link>
                    <Link
                      href="#"
                      className="dark:hover:text-primary-500 mb-3 block text-sm text-black hover:text-gray-500 dark:text-white"
                    >
                      세금계산서 신청
                    </Link>
                    <Link
                      href="#"
                      className="dark:hover:text-primary-500 mb-3 block text-sm text-black hover:text-gray-500 dark:text-white"
                    >
                      파트너 신청
                    </Link>
                  </div>
                  <div className="px-3 py-3  lg:px-5 lg:py-5">
                    <div className="dark:text-dark-400 mb-5 text-sm text-gray-400">
                      Projects
                    </div>
                    <a
                      href="https://github.com/gjworks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark:hover:text-primary-500 mb-3 block text-sm text-black hover:text-gray-500 dark:text-white"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="relative flex h-full gap-8 py-10 lg:py-0">
                  <div className="dark:via-dark-700 relative hidden h-full w-px items-center justify-center bg-gradient-to-t from-transparent via-gray-200/75 to-transparent lg:flex"></div>
                  <div className="flex-1">
                    <div className="">
                      <motion.div
                        whileTap={{
                          scale: 0.97,
                          transition: { duration: 0.3 },
                        }}
                        className="from-dark-500/30 via-dark-700/40 to-dark-400/70 h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-tl p-[0.5px] shadow-md shadow-black"
                      >
                        <div className="from-dark-800/90 via-dark-950/75 to-dark-950/90 shadow-dark-900/90 flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-b shadow-inner">
                          <Image
                            src="/assets/images/brand/gjworks_white.svg"
                            alt="gjworks logo"
                            width="32"
                            height="32"
                            className="block h-16 w-16"
                          />
                        </div>
                      </motion.div>
                    </div>
                    <div className="dark:text-dark-500 mb-4 pt-5 text-xs text-gray-500">
                      Each subscription goes towards aggressively adding new
                      features built with customers best interests at heart,
                      including your privacy.
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="dark:text-dark-500 dark:border-dark-700/75 dark:bg-dark-900 dark:hover:bg-dark-950 rounded-lg border border-gray-200 bg-gray-100 px-2 py-[2px] text-xs text-gray-400 hover:bg-gray-200">
                        iOS
                      </div>
                      <div className="dark:text-dark-500 dark:border-dark-700/75 dark:bg-dark-900 dark:hover:bg-dark-950 rounded-lg border border-gray-200 bg-gray-100 px-2 py-[2px] text-xs text-gray-400 hover:bg-gray-200">
                        macOS
                      </div>
                      <div className="dark:text-dark-500 dark:border-dark-700/75 dark:bg-dark-900 dark:hover:bg-dark-950 rounded-lg border border-gray-200 bg-gray-100 px-2 py-[2px] text-xs text-gray-400 hover:bg-gray-200">
                        Android
                      </div>
                    </div>
                    {/* <div className="text-dark-300 hover:text-white text-xs underline">
                      앱 제작이 궁금하다면?
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;
