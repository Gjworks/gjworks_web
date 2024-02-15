"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Modal from "src/components/modal/Modal";
import SearchForm from "src/templates/forms/SearchForm";

const MymenuTemplate = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = (close) => {
    setShowModal(close);
  };
  const innerAnimation = {
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3,
      },
    },
    close: {
      opacity: 0,
      x: "-20%",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl bg-white/10 px-3 pb-10 pt-8 backdrop-blur-lg">
        <div className="mb-3">
          <div className="flex gap-4 px-3">
            <div
              className="text-xl font-semibold text-white drop-shadow-lg"
              style={{ textShadow: " 0px 0px 10px #333" }}
            >
              알림센터
            </div>
          </div>
        </div>
        <div className="py-4">
          <div className="">
            <button
              className="flex w-full items-center gap-4 rounded-full bg-gray-400/10 px-3 py-2 text-gray-400 backdrop-blur-lg hover:bg-gray-600/60 hover:text-white"
              onClick={() => setShowModal(!showModal)}
            >
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div className="text-sm">검색어를 입력하세요.</div>
            </button>
          </div>
        </div>
        <div className="py-3">
          <div className="rounded-xl border border-gray-400/25 bg-gray-300/20 p-5 backdrop-blur-lg"></div>
        </div>
        <div className="py-3">
          <div className="rounded-xl border border-gray-400/25 bg-gray-300/20 p-5 backdrop-blur-lg"></div>
        </div>
      </div>
      <Modal state={showModal} close={closeModal}>
        <SearchForm />
      </Modal>
    </>
  );
};
export default MymenuTemplate;
