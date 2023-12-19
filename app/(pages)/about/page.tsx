'use client'

const Page = () => {
  return (
    <>
      <div className="fixed inset-0 bg-[url('/assets/images/tile_pattern.png')]">
        {/* <div className="w-full h-full bg-dark-950/5 backdrop-grayscale "></div> */}
      </div>
      <div className="relative max-w-screen-sm mx-auto px-3 h-[calc(100vh-305px)]">
        <div className="flex justify-center items-center h-full">
          <div className="">
            <div className="flex justify-center pb-5 text-primary-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <div className=" text-center mb-10">
              <span className="text-black text-3xl font-normal">
                Simple & Creative
              </span>
            </div>
            <div className="text-black text-base font-light text-center break-keep">
              지제이웍스는 2018 년 처음시작한 웹과 앱을 개발하기 위한 소규모
              개발팀입니다. 우리는 혁신적이고 미래 지향적 인 기업, 신생 기업 및
              비즈니스와 협력하여 매력적인 제품을 연구하고 개발합니다.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
