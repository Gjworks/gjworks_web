import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="">
        <div className="max-w-screen-xl mx-auto px-3 lg:px-8 pt-8">
          <div className="max-w-lg mx-auto py-20">
            <div className="text-base font-bold text-dark-400 mb-4 text-center">
              FULL STACTK DEVELOPER
            </div>
            <div className="text-4xl font-semibold mb-5 text-white text-center">
              React.js + Next.js 로 웹을 제작 합니다.
            </div>
            <div className="text-dark-200 text-xs text-center">제작의뢰는 Contact us 를 통해서만 받고 있습니다.</div>
            <div className="pt-10 lg:pt-20">
              <Image alt="MacbookPro"  width="100%" height="100%" layout="responsive" objectFit="contain" src="/assets/images/MacbookPro.png" />
            </div>
          </div>
        </div>
        <div className="bg-dark-800 py-20">
          <div className="max-w-screen-xl mx-auto  px-3 lg:px-8">
            <div className="flex flex-wrap items-center gap-10">
              <div className="w-full lg:flex-1">
                <span className="text-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">
                  개발자와 디자이너와 함께
                </span>
              </div>
              <div className="w-full lg:flex-1">
                <div className="text-base text-dark-300">
                  최신 FrontEnd 기술 도입과 발맞춰 저희만의 Simple하고 깔끔한 디자인과 Component를 제공하고 다른 디자이너와 협업을 하더라도 통일된 컨셉과 디자인 결과물을 함께 만들기 때문에 만족스러운 결과물과 Perfermance를 기대하실 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="max-w-screen-xl mx-auto  px-3 lg:px-8">
            <div className="flex justify-center mb-6">
              <div className="inline font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-200 to-orange-300 text-center pt-20">
                항상 최신 기술과 트랜드<br></br>
                모바일과 PC의 컨셉을 하나로
              </div>
            </div>
            <div className="flex justify-center mb-10">
              <Link href="/Contact">
                <a className="border border-white rounded-full py-1 px-10 text-white text-base hover:bg-white hover:text-black">
                  Contact us
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-screen-xl mx-auto  px-3 lg:px-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 lg:col-span-1">
                <div className="flex justify-center">
                  <div className="inline font-black text-7xl text-dark-500 text-center">
                    Full Stack
                  </div>
                </div>
                <div className="font-thin text-3xl text-dark-100 text-center -mt-6">최종 목표는 풀 스택 개발자<br /> 가리지 않고 배움에 있어 낮은자세로</div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="text-sm text-dark-300 mb-3">
                  현재 PHP, NodeJS, ReactJS, Tailwindcss등 프론트와 백앤드를 현재 모두 개발을 하고 있습니다. 다음 목표는 React Native가 될지 Flutter가 될지는 잘 모르겠습니다만 현재 단계의 완성도를 끌어 올린다음에 모바일 애플리케이션 개발에 조금 더 많은 시간을 둘려고 합니다.
                </div>
                <div className="text-sm text-dark-300">UI/UX와 디자인에도 많은 관심을 가지고 있습니다. 지난 10년간의 개발노하우와 경험과 트렌드를 반영한 저희만의 디자인을 감상해보세요.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-screen-xl mx-auto px-3 lg:px-8 overflow-hidden">
            <div className="flex justify-center">
              <div className="inline font-black text-5xl lg:text-7xl text-dark-500 text-center">
                fast perfermance
              </div>
            </div>
            <div className="font-thin text-xl lg:text-3xl text-dark-100 text-center -mt-6">Development, Design, Operation</div>
          </div>
        </div>
      </div>
    </>
  )
}
