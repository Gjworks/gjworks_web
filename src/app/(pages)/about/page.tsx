"use client";
import { motion } from "framer-motion";

const Page = () => {
  const variants = {
    start: { pathLength: 0, fill: "rgba(0, 0, 0,0)" },
    end: { pathLength: 1, fill: "rgba(0,0,0,1)" },
  };
  return (
    <>
      <div className="flex items-center min-h-[calc(100vh-236px)] md:min-h-[calc(100vh-162px)]">
        <div className="">
          {/* <div className="w-full h-full bg-dark-950/5 backdrop-grayscale "></div> */}
        </div>
        <div className="relative max-w-screen-sm mx-auto px-3 h-full">
          <div className="justify-center items-center h-full">
            <div className="h-full">
              <div className="flex justify-center pb-5 text-primary-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  preserveAspectRatio="xMidYMid meet"
                  width={250}
                  height={250}
                  viewBox="189.97 99.08 220.05 201.92"
                >
                  <g
                    transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
                    fill="#ffffff"
                    stroke="none"
                  >
                    <path d="M2213 2995 c-124 -27 -228 -109 -281 -223 -34 -72 -43 -224 -18 -298 23 -67 403 -723 445 -767 47 -50 141 -95 225 -108 119 -19 240 16 333 96 39 33 92 115 229 355 26 47 76 135 111 195 35 61 63 116 63 123 0 9 -67 12 -299 12 -165 0 -302 -4 -305 -8 -2 -4 20 -50 51 -102 30 -52 58 -101 60 -108 6 -13 -87 -183 -120 -219 -28 -31 -86 -31 -115 0 -17 18 -152 248 -343 583 -35 61 -37 94 -6 129 l22 26 605 -1 c333 0 614 3 625 6 22 6 198 301 189 316 -3 4 -321 8 -707 7 -552 0 -715 -4 -764 -14z" />
                    <path d="M3927 2833 c-19 -32 -137 -236 -262 -453 -462 -801 -525 -910 -550 -950 -83 -132 -297 -205 -459 -156 -64 20 -70 2 -22 -70 93 -140 221 -213 373 -214 107 0 242 63 307 144 18 22 106 169 196 326 90 157 254 443 366 636 111 193 207 368 213 390 19 67 13 192 -12 256 -26 68 -81 148 -101 148 -8 0 -30 -26 -49 -57z" />
                  </g>
                </svg>
              </div>
              <div className=" text-center mb-10">
                <span className="text-white text-3xl font-normal">
                  Simple & Creative
                </span>
              </div>
              <div className="text-gray-400cd text-base font-light text-center break-keep">
                지제이웍스는 2018 년 처음시작한 웹과 앱을 개발하기 위한 소규모
                개발팀입니다. 우리는 혁신적이고 미래 지향적 인 기업, 신생 기업
                및 비즈니스와 협력하여 매력적인 제품을 연구하고 개발합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
