"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import nav from "src/res/config/navigation.json";

const SideNav = (props) => {
  const pathname = usePathname();
  console.log(pathname);
  const parentVariants = {
    onscreen: {
      transition: { staggerChildren: 0.1 },
    },
    offscreen: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };
  const variants = {
    onscreen: {
      x: 0,
      opacity: [0, 1],
      transition: {
        duration: 0.4,
      },
    },
    offscreen: {
      x: -25,
      opacity: 0,
    },
  };
  return (
    <>
      <div className="relative h-full overflow-hidden">
        <motion.div
          variants={parentVariants}
          initial="offscreen"
          whileInView="onscreen"
          // initial={{ opacity: 0, x: "-50%" }}
          className="overflow-scroll-hide dark:bg-dark-900/80 absolute bottom-0 top-0 h-full w-[275px] overflow-y-auto bg-white/90 pb-[80px]"
        >
          <motion.div className="px-3">
            <div className="space-y-1">
              <motion.div className="mb-1 px-2 pb-2 pt-5 text-xs font-semibold text-gray-950/40 dark:text-white">
                Default
              </motion.div>
              <motion.div variants={variants}>
                <Link
                  href="/"
                  className={
                    "flex items-center space-x-2 rounded-md px-2 py-2 text-gray-900 lg:px-3 " +
                    (pathname === "/"
                      ? "bg-gray-950 text-white"
                      : "hover:bg-gray-200 hover:text-black")
                  }
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-normal">Home</span>
                </Link>
              </motion.div>
              <motion.div variants={variants}>
                <Link
                  href="/"
                  className="flex items-center space-x-2 rounded-md px-2 py-2 text-gray-900 hover:bg-gray-200 hover:text-black lg:px-3"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6ZM8.05 14.943a33.54 33.54 0 0 0 3.9 0 2 2 0 0 1-3.9 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-normal">Notification</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="px-3">
            <div className="mb-1 px-2 pb-2 pt-5 text-xs font-semibold text-gray-950/40 dark:text-white">
              Nav
            </div>
            <motion.div className="mb-1 space-y-1">
              {nav.header &&
                Object.entries(nav.header).map((data, index) => {
                  return (
                    <motion.div variants={variants} key={data[1].name}>
                      <Link
                        href={data[1].route}
                        className={
                          "flex items-center space-x-2 rounded-md px-2 py-2 lg:px-3 " +
                          (pathname === data[1].route
                            ? "bg-gray-950 text-white dark:text-white"
                            : "dark:text-dark-400 text-gray-900 hover:bg-gray-200 hover:text-black dark:hover:text-white")
                        }
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5V7A2.5 2.5 0 0 0 11 4.5H8.128a2.252 2.252 0 0 1 1.884-1.488A2.25 2.25 0 0 1 12.25 1h1.5a2.25 2.25 0 0 1 2.238 2.012ZM11.5 3.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.25h-3v-.25Z"
                              clipRule="evenodd"
                            />
                            <path
                              fillRule="evenodd"
                              d="M2 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm2 3.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-sm font-normal">
                          {data[1].title}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
            </motion.div>
          </motion.div>
          <motion.div className="px-3">
            <div className="space-y-1">
              <motion.div className="mb-1 px-2 pb-2 pt-5 text-xs font-semibold text-gray-950/40 dark:text-white">
                Default
              </motion.div>
              <motion.div variants={variants}>
                <Link
                  href="/"
                  className="flex items-center space-x-2 rounded-md px-2 py-2 text-gray-900 hover:bg-gray-200 hover:text-black lg:px-3"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-normal">Forum</span>
                </Link>
              </motion.div>
              <motion.div variants={variants}>
                <Link
                  href="/"
                  className="flex items-center space-x-2 rounded-md px-2 py-2 text-gray-900 hover:bg-gray-200 hover:text-black lg:px-3"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6ZM8.05 14.943a33.54 33.54 0 0 0 3.9 0 2 2 0 0 1-3.9 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="flex-1 text-sm font-normal">Github</span>
                  <span className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="dark:bg-dark-600/25 fixed bottom-0 w-[275px] border-t border-gray-200/60 bg-white px-3 pb-5 pt-3 backdrop-blur-lg"
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%", transition: { duration: 1 } }}
          >
            <div className="flex">
              <div className="flex items-center pr-3">
                <div className="dark:bg-dark-400 block h-8 w-8 rounded-full bg-gray-200"></div>
              </div>
              <div className="flex-1">
                <>
                  <div className="dark:text-dark-100 text-sm font-semibold text-gray-500">
                    Account
                  </div>
                  <div className="dark:text-dark-300 text-xs text-gray-400">
                    Sign in or Sign up
                  </div>
                </>
              </div>
              <Link
                href="/auth/Signin"
                className="dark:bg-dark-600 dark:hover:bg-dark-500 flex cursor-pointer items-center rounded-lg bg-gray-100 px-3 hover:bg-gray-200"
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
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
export default SideNav;
