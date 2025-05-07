"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  HomeIcon,
  ChevronRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

interface PageProps {
  params: {
    pid: string;
  };
}

const PostsListClient: React.FC<PageProps> = ({
  params,
}: {
  params: { pid: string };
}) => {
  const [documentInfo, setDocumentInfo] = useState<{ [key: string]: any }>();
  console.log(params.pid);

  return (
    <>
      <div className="border-t border-gray-200 dark:border-dark-700">
        <div className="flex flex-wrap gap-4 lg:gap-2 border-b border-gray-200 dark:border-dark-700 py-4 lg:py-8">
          <div className="flex-1">
            <Link
              href="/posts/supports/view/1"
              className="text-sm lg:text-xl font-medium text-gray-950 dark:text-white hover:underline line-clamp-2 mb-2"
            >
              기술지원을 받을 수 있는 곳입니다. 아이디어를 제안하거나 문의사항을
              남겨주세요.
            </Link>

            <div className="flex items-center">
              <div className="relative text-primary-500 pr-3 text-xs lg:text-sm before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
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
                <div className="text-xs lg:text-sm text-gray-400">조회수</div>
                <div className="text-xs lg:text-sm text-gray-700">34</div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full lg:w-1/5">
            <div className="flex-1 bg-gray-100 dark:bg-dark-900 dark:lg:bg-transparent lg:bg-white py-2 rounded-md border lg:border-0 border-gray-200 dark:border-dark-800">
              <div className="flex items-center gap-4 lg:block pl-3 lg:pl-8 border-l border-gray-200 dark:border-dark-800">
                <div className="flex items-center gap-2 mb-0 lg:mb-1">
                  <ChatBubbleOvalLeftEllipsisIcon className="size-5 stroke-1 text-gray-400" />
                  <div className="text-xs lg:text-sm text-gray-900 dark:text-dark-100">
                    관리자
                  </div>
                  <div className="text-gray-500 text-xs">26분전</div>
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
            <Link
              href="/posts/supports/view/1"
              className="text-sm lg:text-xl font-medium text-gray-950 dark:text-white hover:underline line-clamp-2 mb-2"
            >
              기술지원을 받을 수 있는 곳입니다. 아이디어를 제안하거나 문의사항을
              남겨주세요.
            </Link>

            <div className="flex items-center">
              <div className="relative text-primary-500 pr-3 text-xs lg:text-sm before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
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
                <div className="text-xs lg:text-sm text-gray-400">조회수</div>
                <div className="text-xs lg:text-sm text-gray-700">34</div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full lg:w-1/5">
            <div className="flex-1 bg-gray-100 dark:bg-dark-800 lg:bg-white dark:lg:bg-dark-900 py-2 rounded-md border lg:border-0 border-gray-200 dark:border-dark-700">
              <div className="flex items-center gap-4 lg:block pl-3 lg:pl-8 border-l border-gray-200 dark:border-dark-700">
                <div className="flex items-center gap-2 mb-0 lg:mb-1">
                  <ChatBubbleOvalLeftEllipsisIcon className="size-5 stroke-1 text-gray-400" />
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
            <Link
              href="/posts/supports/view/1"
              className="text-sm lg:text-xl font-medium text-gray-950 dark:text-white hover:underline line-clamp-2 mb-2"
            >
              기술지원을 받을 수 있는 곳입니다. 아이디어를 제안하거나 문의사항을
              남겨주세요.
            </Link>

            <div className="flex items-center">
              <div className="relative text-primary-500 pr-3 text-xs lg:text-sm before:absolute before:h-[12px] before:w-[1px] before:right-0 before:top-[4px] before:bg-gray-300">
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
                <div className="text-xs lg:text-sm text-gray-400">조회수</div>
                <div className="text-xs lg:text-sm text-gray-700">34</div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full lg:w-1/5">
            <div className="flex-1 bg-gray-100 dark:bg-dark-800 lg:bg-white dark:lg:bg-dark-900 py-2 rounded-md border lg:border-0 border-gray-200 dark:border-dark-700">
              <div className="flex items-center gap-4 lg:block pl-3 lg:pl-8 border-l border-gray-200 dark:border-dark-700">
                <div className="flex items-center gap-2 mb-0 lg:mb-1">
                  <ChatBubbleOvalLeftEllipsisIcon className="size-5 stroke-1 text-gray-400" />
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
    </>
  );
};

export default PostsListClient;
