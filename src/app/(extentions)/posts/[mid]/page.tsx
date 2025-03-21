import React, { Suspense } from "react";
import Link from "next/link";
import PostsList from "@/extentions/posts/templates/default/list";
import {
  HomeIcon,
  ChevronRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import PageNavigation from "@plextype/components/nav/PageNavigation";

import PostsCategories from "@/extentions/posts/templates/default/category";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Page = async (props: { params: Params; searchParams: SearchParams }) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params.slug;
  const query = searchParams.query;
  return (
    <>
      <div className="pt-20">
        <div className="max-w-screen-lg mx-auto px-3">
          <div className="text-3xl text-center font-semibold dark:text-white py-10">
            기술지원1
          </div>
          <div className="mb-6">
            <PostsCategories />
          </div>
          <Suspense fallback={<div>Loading posts...</div>}>
            <PostsList params={{ mid: "supports" }} />
          </Suspense>
        </div>
        <div className="pt-10 pb-20">
          <div className="max-w-screen-lg mx-auto px-3">
            <div className="">
              <div className="flex justify-between gap-4 flex-wrap">
                <div className="w-full flex justify-center">
                  <PageNavigation
                    pathname="/posts/works"
                    totalCount={10}
                    page={1}
                    listCount={10}
                    totalPages={10}
                  />
                </div>
                <div className="flex justify-end flex-1">
                  <Link
                    href="/posts/devlog/create"
                    className="border border-gray-200 bg-white text-sm py-2 px-8 rounded-lg shadow-sm dark:border-dark-800 dark:bg-dark-900 dark:text-dark-200 hover:bg-primary-400"
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
