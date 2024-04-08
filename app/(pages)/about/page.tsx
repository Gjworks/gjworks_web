'use client'
import { motion } from 'framer-motion'

const Page = () => {
  const variants = {
    start: { pathLength: 0, fill: 'rgba(0, 0, 0,0)' },
    end: { pathLength: 1, fill: 'rgba(0,0,0,1)' },
  }
  return (
    <>
      <div className="flex items-center min-h-[calc(100vh-236px)] md:min-h-[calc(100vh-162px)]">
        <div className="fixed inset-0 bg-[url('/assets/images/tile_pattern.png')] z-[-1]">
          {/* <div className="w-full h-full bg-dark-950/5 backdrop-grayscale "></div> */}
        </div>
        <div className="relative max-w-screen-sm mx-auto px-3 h-full">
          <div className="justify-center items-center h-full">
            <div className="h-full">
              <div className="flex justify-center pb-5 text-primary-500">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="256px"
                  height="256px"
                  viewBox="0 0 162.000000 115.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs></defs>
                  <g
                    transform="translate(0.000000,115.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <motion.path
                      variants={variants}
                      initial="start"
                      animate="end"
                      transition={{
                        default: { duration: 1.8 },
                        fill: { duration: 1, delay: 1.1 },
                      }}
                      id="logoG"
                      d="M910 955 l-74 -75 59 -60 c56 -57 60 -59 77 -43 18 16 25 11 136
-100 l117 -117 -175 -175 -175 -175 58 -57 57 -58 235 235 235 235 -232 232
c-128 128 -235 233 -238 233 -3 0 -39 -34 -80 -75z"
                    />
                    <motion.path
                      variants={variants}
                      initial="start"
                      animate="end"
                      transition={{
                        default: { duration: 1.8 },
                        fill: { duration: 1, delay: 1.1 },
                      }}
                      id="logoJ"
                      strokeLinecap="butt"
                      d="M385 790 l-230 -230 233 -233 232 -232 232 233 233 232 -140 140
-140 140 -140 -140 -140 -140 55 -55 54 -55 81 80 c44 44 85 80 91 80 6 0 21
-11 34 -25 l24 -26 -119 -119 -120 -120 -120 120 -120 120 175 175 175 175
-55 55 c-30 30 -57 55 -60 55 -3 0 -109 -104 -235 -230z"
                    />
                  </g>
                </svg>
              </div>
              <div className=" text-center mb-10">
                <span className="text-black text-3xl font-normal">
                  Simple & Creative
                </span>
              </div>
              <div className="text-black text-base font-light text-center break-keep">
                지제이웍스는 2018 년 처음시작한 웹과 앱을 개발하기 위한 소규모
                개발팀입니다. 우리는 혁신적이고 미래 지향적 인 기업, 신생 기업
                및 비즈니스와 협력하여 매력적인 제품을 연구하고 개발합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
