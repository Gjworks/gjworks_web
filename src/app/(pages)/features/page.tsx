"use client";

import Link from "next/link";
import Image from "next/image";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";

const Page = () => {
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
      <div className={`max-w-screen-xl mx-auto px-3 py-20`}>
        <div className={`flex`}>
          <div
            className={`flex items-center gap-1 py-0.5 px-2.5 rounded-full bg-gray-50 border border-gray-100`}
          >
            <div className={`text-primary-500`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
                />
              </svg>
            </div>
            <div className={` text-xs text-gray-700`}>New Discovery</div>
          </div>
        </div>
        <div className={`py-8`}>
          <div
            className={`text-gray-900 text-5xl font-semibold leading-tight tracking-tight`}
          >
            Discover the
          </div>
          <div
            className={`text-gray-900 text-5xl font-semibold leading-tight tracking-tight`}
          >
            World’s Top Developers
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
