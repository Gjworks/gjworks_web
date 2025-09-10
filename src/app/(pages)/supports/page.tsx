"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HomeIcon,
  ChevronRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import PageNavigation from "@plextype/components/nav/PageNavigation";
const Page = () => {
  const pathVariants = {
    from: {
      opacity: 0,
      pathLength: 0,
    },
    to: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div className="pt-8">
        <div className="max-w-screen-xl mx-auto px-3">
          <div className="text-lg font-semibold dark:text-white">기술지원</div>
          <div className="text-sm text-gray-600 dark:text-dark-400 mb-6">
            기술지원하는 공간입니다.
          </div>
          <div className="border-t border-gray-200 dark:border-dark-700">
            <div className="flex flex-wrap gap-4 lg:gap-2 border-b border-gray-200 dark:border-dark-700 py-4 lg:py-8">
              <div className="flex-1">
                <div className="text-sm lg:text-lg font-normal text-gray-950 dark:text-white hover:underline line-clamp-2 mb-2">
                  기술지원을 받을 수 있는 곳입니다. 아이디어를 제안하거나
                  문의사항을 남겨주세요.
                </div>
                <div className="text-gray-500 text-xs lg:text-ms line-clamp-1 mb-4">
                  관리자가 남긴 글입니다. 테스트용으로 작성되었습니다.
                </div>
                <div className="flex items-center">
                  <div className="relative text-teal-400 pr-3 text-xs lg:text-sm before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    질문답변
                  </div>
                  <div className="relative text-gray-900 dark:text-dark-100 text-xs lg:text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    관리자
                  </div>
                  <div className="relative text-gray-500 text-xs lg:text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    3일전
                  </div>
                  <div className="relative flex gap-2 px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    <div className="text-xs lg:text-sm text-gray-400">댓글</div>
                    <div className="text-xs lg:text-sm text-gray-700">4</div>
                  </div>
                  <div className="flex gap-2 px-3">
                    <div className="text-xs lg:text-sm text-gray-400">
                      조회수
                    </div>
                    <div className="text-xs lg:text-sm text-gray-700">34</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full lg:w-1/5">
                <div className="flex-1 bg-gray-100 dark:bg-dark-100 lg:dark:bg-dark-950 lg:bg-white py-2 rounded-md border lg:border-0 border-gray-200 dark:border-dark-700">
                  <div className="flex items-center gap-4 lg:block pl-3 lg:pl-8 border-l border-gray-200 dark:border-dark-700">
                    <div className="text-xs text-gray-400 mb-0 lg:mb-3">
                      <ChatBubbleOvalLeftEllipsisIcon className="size-5 stroke-1 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 mb-0 lg:mb-1">
                      <div className="text-xs lg:text-sm text-gray-900 dark:text-dark-100">
                        관리자
                      </div>
                      <div className="text-gray-500 text-xs">1분전</div>
                    </div>
                    <div className="text-xs text-gray-500  line-clamp-1">
                      테스트용으로 작성된 댓글입니다. 테스트용으로 작성된
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 lg:gap-2 border-b border-gray-200 dark:border-dark-700 py-4 lg:py-8">
              <div className="flex-1">
                <div className="text-sm lg:text-lg font-normal text-gray-950 dark:text-white hover:underline line-clamp-2 mb-2">
                  기술지원을 받을 수 있는 곳입니다. 아이디어를 제안하거나
                  문의사항을 남겨주세요.
                </div>
                <div className="text-gray-500 text-xs lg:text-ms line-clamp-1 mb-4">
                  관리자가 남긴 글입니다. 테스트용으로 작성되었습니다.
                </div>
                <div className="flex items-center">
                  <div className="relative text-rose-400 pr-3 text-xs lg:text-sm before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    버그제보
                  </div>
                  <div className="relative text-gray-900 dark:text-dark-100 text-xs lg:text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    관리자
                  </div>
                  <div className="relative text-gray-500 text-xs lg:text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    3일전
                  </div>
                  <div className="relative flex gap-2 px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    <div className="text-xs lg:text-sm text-gray-400">댓글</div>
                    <div className="text-xs lg:text-sm text-gray-700">4</div>
                  </div>
                  <div className="flex gap-2 px-3">
                    <div className="text-xs lg:text-sm text-gray-400">
                      조회수
                    </div>
                    <div className="text-xs lg:text-sm text-gray-700">34</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full lg:w-1/5">
                <div className="flex-1 bg-gray-100 dark:bg-dark-800 lg:bg-white dark:lg:bg-dark-900 py-2 rounded-md border lg:border-0 border-gray-200 dark:border-dark-700">
                  <div className="flex items-center gap-4 lg:block pl-3 lg:pl-8 border-l border-gray-200 dark:border-dark-700">
                    <div className="text-xs text-gray-400 mb-0 lg:mb-3">
                      <ChatBubbleOvalLeftEllipsisIcon className="size-5 stroke-1 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 mb-0 lg:mb-1">
                      <div className="text-xs lg:text-sm text-gray-900 dark:text-dark-100">
                        관리자
                      </div>
                      <div className="text-gray-500 text-xs">16분전</div>
                    </div>
                    <div className="text-xs text-gray-500  line-clamp-1">
                      테스트용으로 작성된 댓글입니다. 테스트용으로 작성된
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 lg:gap-2 border-b border-gray-200 dark:border-dark-700 py-4 lg:py-8">
              <div className="flex-1">
                <div className="text-sm lg:text-lg font-normal text-gray-950 dark:text-white hover:underline line-clamp-2 mb-2">
                  기술지원을 받을 수 있는 곳입니다. 아이디어를 제안하거나
                  문의사항을 남겨주세요.
                </div>
                <div className="text-gray-500 text-xs lg:text-ms line-clamp-1 mb-4">
                  관리자가 남긴 글입니다. 테스트용으로 작성되었습니다.
                </div>
                <div className="flex items-center">
                  <div className="relative text-indigo-400 pr-3 text-xs lg:text-sm before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    아이디어
                  </div>
                  <div className="relative text-gray-900 dark:text-dark-100 text-xs lg:text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    관리자
                  </div>
                  <div className="relative text-gray-500 text-xs lg:text-sm px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    3일전
                  </div>
                  <div className="relative flex gap-2 px-3 before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
                    <div className="text-xs lg:text-sm text-gray-400">댓글</div>
                    <div className="text-xs lg:text-sm text-gray-700">4</div>
                  </div>
                  <div className="flex gap-2 px-3">
                    <div className="text-xs lg:text-sm text-gray-400">
                      조회수
                    </div>
                    <div className="text-xs lg:text-sm text-gray-700">34</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full lg:w-1/5">
                <div className="flex-1 bg-gray-100 dark:bg-dark-800 lg:bg-white dark:lg:bg-dark-900 py-2 rounded-md border lg:border-0 border-gray-200 dark:border-dark-700">
                  <div className="flex items-center gap-4 lg:block pl-3 lg:pl-8 border-l border-gray-200 dark:border-dark-700">
                    <div className="text-xs text-gray-400 mb-0 lg:mb-3">
                      <ChatBubbleOvalLeftEllipsisIcon className="size-5 stroke-1 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 mb-0 lg:mb-1">
                      <div className="text-xs lg:text-sm text-gray-900 dark:text-dark-100">
                        관리자
                      </div>
                      <div className="text-gray-500 text-xs">16분전</div>
                    </div>
                    <div className="text-xs text-gray-500  line-clamp-1">
                      테스트용으로 작성된 댓글입니다. 테스트용으로 작성된
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-20">
          <div className="max-w-screen-xl mx-auto px-3">
            <div className="">
              <div className="flex justify-between gap-4 flex-wrap">
                <div className="w-full flex justify-center">
                </div>
                <div className="flex justify-end flex-1">
                  <Link
                    href="/posts/devlog/create"
                    className="border border-gray-200 dark:border-dark-700 bg-white text-sm py-2 px-8 rounded-lg shadow-sm dark:border-dark-800 dark:bg-dark-900 dark:text-dark-200 hover:bg-primary-400"
                  >
                    글쓰기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
