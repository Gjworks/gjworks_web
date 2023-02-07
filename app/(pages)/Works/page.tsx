"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";

import PageWrap from 'components/page/PageWrap';

const Page = (props) => {

  return (
    <>
    <PageWrap>
      <div className="max-w-screen-2xl mx-auto py-8 xl:py-20 px-3">
        {/* <motion.div className="text-white text-5xl font-semibold">Works</motion.div> */}
        <div className="grid grid-cols-4 gap-8 py-20">
          <div className="col-span-1">
            <div className="text-4xl font-light text-white leading-10">이런 <span className="font-extrabold">프로젝트</span><br></br> 어때요?</div>
            <div className="pt-12 pb-10">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="mb-16">
              <div className="">
                <div className="h-[320px] w-[640px] bg-dark-700 rounded-lg shadow-lg shadow-dark-900"></div>
              </div>
              <div className="max-w-screen-md">
                <div className="pt-5 pb-3 text-xl font-semibold text-dark-100">Playcanvas를 이용한 메타버스 시뮬레이션 구현</div>
                <div className="text-base text-dark-200 mb-5">가상공간에 내가 움직이면서 여라가지 상호작용과 정보를 3D캐릭터로 얻을 수 있습니다. 인터넷이 되고 웹브라우저만 있다면 어디든지 접속이 가능합니다.</div>
              </div>
            </div>
            <div className="mb-16">
              <div className="">
                <div className="h-[320px] w-[640px] bg-dark-700 rounded-lg shadow-lg shadow-dark-900"></div>
              </div>
              <div className="max-w-screen-md">
                <div className="pt-5 pb-3 text-xl font-semibold text-dark-100">Playcanvas를 이용한 메타버스 시뮬레이션 구현</div>
                <div className="text-base text-dark-200 mb-5">가상공간에 내가 움직이면서 여라가지 상호작용과 정보를 3D캐릭터로 얻을 수 있습니다. 인터넷이 되고 웹브라우저만 있다면 어디든지 접속이 가능합니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </PageWrap>
    </>
  )
}

export default Page