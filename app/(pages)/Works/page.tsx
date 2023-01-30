"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";

import PageWrap from 'components/page/PageWrap';

const Page = (props) => {

  return (
    <>
    <PageWrap>
      <div className="max-w-screen-2xl mx-auto py-8 lg:py-20 px-3">
        <motion.div className="text-white text-4xl font-semibold">Works</motion.div>
      </div>
      </PageWrap>
    </>
  )
}

export default Page