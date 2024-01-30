"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import nav from "src/res/config/navigation.json";
import page from "src/res/config/page.json";
import { usePathname } from "next/navigation";

interface Inspage {
  name: string;
  title: string;
  parent: string;
  route: string;
}
const SubNav = () => {
  const [currentPage, setCurrentPage] = useState<Inspage | undefined>();
  const [subMenu, setSubMenu] = useState<any[] | undefined>();
  // const [lastParam, setLastParam] = useState<any | undefined>()

  // const [firstNavTitle, setFirstNavTitle] = useState<string>()
  const pathname = usePathname();

  useEffect(() => {
    const params = pathname?.split("/");

    let _subMenu;
    if (params?.length) {
      // if (params?.length > 2) {
      //   console.log(params[2])
      //   setCurrentPage(page[params?.[2]])
      // } else {
      //   setCurrentPage(page[params?.[1]])
      // }
      setCurrentPage(page[params?.[1]]);
    }
    if (currentPage?.parent && nav.header[currentPage?.parent]) {
      _subMenu = nav.header[currentPage?.parent]?.subMenu;
      if (_subMenu) {
        if (_subMenu.length > 0) {
          setSubMenu(_subMenu);
        } else {
          _subMenu = Array("");
          setSubMenu(_subMenu);
        }
      }
    } else {
      _subMenu = null;
      setSubMenu(_subMenu);
    }
  }, [pathname, currentPage, subMenu]);

  const snav = null;
  return (
    <>
      {subMenu && (
        <div className="relative pt-20">
          <div className="absolute left-0 right-0 top-0 z-10">
            <div className="mt-10 flex justify-center text-6xl font-extrabold text-gray-300">
              {currentPage ? currentPage?.title : "Discovery"}
            </div>
          </div>
          <div className="dark:bg-dark-950/10 relative top-0 z-20 bg-white/5 backdrop-blur-md">
            <div className="mx-auto max-w-screen-xl">
              <div className="flex flex-wrap gap-8">
                <div className="flex w-full justify-between gap-8 lg:flex-1">
                  <div className="hidden items-center">
                    {currentPage && (
                      <Link
                        href={currentPage?.route}
                        className="block text-xl font-semibold text-black dark:text-white"
                      >
                        {currentPage ? currentPage?.title : "Discovery"}
                      </Link>
                    )}
                  </div>
                  <div className="relative flex-1 overflow-hidden">
                    {/* <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-dark-950 to-transparent"></div> */}
                    <div className="overflow-scroll-hide flex justify-center overflow-hidden overflow-x-auto">
                      <div className="">
                        <div className="px-3">
                          <div className="flex gap-4 lg:gap-8">
                            {subMenu &&
                              Object.entries(subMenu).map((data, index) => {
                                // console.log(pathname)
                                // console.log(currentPage)
                                return (
                                  <Link
                                    href={data[1].route}
                                    key={data[1].name}
                                    className={
                                      "block whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-xs font-normal lg:text-sm " +
                                      (currentPage?.name === data[1].name
                                        ? "border-gray-950 text-gray-950 dark:text-white"
                                        : "dark:text-dark-400 text-gray-400 hover:text-gray-900 dark:hover:text-white")
                                    }
                                  >
                                    {data[1].title}
                                  </Link>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dark:to-dark-950 absolute bottom-0 right-0 top-0 w-12 bg-gradient-to-r from-transparent to-gray-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubNav;
