"use client";

import Link from "next/link";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import PostsCategories from "@/extentions/posts/templates/default/category";
import PageNavigation from "@plextype/components/nav/PageNavigation";
import { motion } from "framer-motion";
import React from "react";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Page = (props: { params: Params; searchParams: SearchParams }) => {
  const params = props.params;
  const searchParams = props.searchParams;
  type Params = { slug: string };
  type SearchParams = { [key: string]: string | string[] | undefined };

  const parentVariants = {
    onscreen: {
      transition: { staggerChildren: 0.2 },
    },
    offscreen: {
      transition: { staggerChildren: 0.2, staggerDirection: -1 },
    },
  };
  const variants = {
    onscreen: {
      y: 0,
      opacity: [0, 1],
      transition: {
        duration: 0.4,
      },
    },
    offscreen: {
      y: 25,
      opacity: 0,
    },
  };
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
        variants={parentVariants}
        className=""
      >
        <div className="relative mx-auto px-3">
          <div className="grid grid-cols-12 gap-0 lg:gap-8 py-10">
            <div className="col-span-12">
              <div className="">
                <div className="w-full lg:w-3/5">
                  <motion.div
                    variants={variants}
                    className="text-orange-600 text-sm dark:text-white"
                  >
                    BEST UI TEMPLATES
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="mb-4 text-xl font-semibold text-black lg:text-4xl dark:text-white !leading-tight tracking-tight"
                  >
                    UPDATES
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="dark:text-dark-500 text-sm lg:text-base text-gray-500 "
                  >
                    컴포넌트는 React와 Next.js에서 사용할 수 있습니다. 모든
                    Component는 tailwindcss와 Framer motion을 활용하여
                    애니메이션과 스타일을 정의했습니다.
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="hidden justify-center pt-8"
                  >
                    <Link
                      href="#"
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-8 rounded-full text-sm font-semibold"
                    >
                      자세히보기
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <div className="py-5 block-line">
          <PostsCategories />
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full ">
          <div className="col-span-1 border-r border-gray-950/5"></div>
          <div className="col-span-1 border-r border-l border-gray-950/5"></div>
          <div className="col-span-1 border-r border-l border-gray-950/5"></div>
          <div className="col-span-1 border-r border-l border-gray-950/5"></div>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="col-span-1 py-4 p-3">
            <Link href="/posts/update/view/1" className="group">
              <div className="relative overflow-hidden duration-700">
                <div className="h-[420px] bg-[url('/assets/images/bg39.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-[1.08]">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/30 to-gray-950/40 dark:from-dark-950/25 dark:via-dark-950/50 dark:to-dark-950/75"></div>
                </div>
              </div>
              <div className="px-1 py-6">
                <div className="mb-6 w-full">
                  <div className="dark:text-dark-100 mb-3 line-clamp-2 text-2xl font-light text-gray-600 group-hover:text-black dark:group-hover:text-white">
                    Alien: River of Pain Revisions 2.0
                  </div>
                  <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white">
                    The birth of Rebecca Jorden, Known to her famliy as Newt, is
                    a cause for celebration. But as the colony grows and
                    expands, so, too, do the Political struggles between a small
                    be-tachment of Colonial Marines.
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex cursor-pointer items-center gap-2 py-1">
                    <div className="text-xs text-gray-950 dark:text-dark-200">
                      Web Design
                    </div>
                    <div className="text-xs text-gray-300 dark:text-dark-600">
                      |
                    </div>
                    <div className="text-xs text-gray-400 dark:text-dark-500">
                      1달전
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 py-4  p-3">
            <Link href="/posts/update/view/1" className="group">
              <div className="relative overflow-hidden duration-700">
                <div className="h-[420px] bg-[url('/assets/images/bg42.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-[1.08]">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/30 to-gray-950/40 dark:from-dark-950/25 dark:via-dark-950/50 dark:to-dark-950/75"></div>
                </div>
              </div>
              <div className="px-1 py-6">
                <div className="mb-6 w-full">
                  <div className="dark:text-dark-100 mb-3 line-clamp-2 text-2xl font-light text-gray-600 group-hover:text-black dark:group-hover:text-white">
                    Alien: River of Pain Revisions 2.0
                  </div>
                  <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white">
                    The birth of Rebecca Jorden, Known to her famliy as Newt, is
                    a cause for celebration. But as the colony grows and
                    expands, so, too, do the Political struggles between a small
                    be-tachment of Colonial Marines.
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex cursor-pointer items-center gap-2 py-1">
                    <div className="text-xs text-gray-950 dark:text-dark-200">
                      Web Design
                    </div>
                    <div className="text-xs text-gray-300 dark:text-dark-600">
                      |
                    </div>
                    <div className="text-xs text-gray-400 dark:text-dark-500">
                      1달전
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* <PostsList params={params} /> */}
      </div>
      <div className="relative mb-6">
        <div className="block-line">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 flex py-3">
              <PageNavigation
                pathname="/posts/works"
                totalCount={10}
                page={1}
                listCount={10}
                totalPages={10}
              />
            </div>
            <div className="flex items-center justify-end border-l border-gray-950/5 px-5">
              <Link
                href="/posts/update/create"
                className="w-full flex border border-gray-200 text-sm py-3 px-12 rounded bg-gray-950 hover:bg-gray-700 text-white"
              >
                글쓰기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
