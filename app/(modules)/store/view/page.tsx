const Page = () => {
  return (
    <>
      <div className="max-w-[2560px] mx-auto relative pt-20 pb-20  overflow-hidden bg-[url('/assets/images/bg20.jpg')] bg-cover bg-center bg-no-repeat h-[350px]">
        <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden bg-dark-950/40 bg-gradient-to-b from-dark-950/30 via-dark-950/50 to-dark-950/75"></div>
      </div>
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="dark:bg-dark-950/20 bg-white/90 backdrop-blur-lg rounded-lg p-5 -mt-[120px] border dark:border-dark-800/50 border-gray-200/75 shadow-md shadow-gray-100 dark:shadow-black">
          <div className="flex gap-8 flex-wrap mb-8">
            <div className="w-20 h-20 rounded-lg bg-gray-200"></div>
            <div className="flex-1">
              <div className="text-lg text-black dark:text-white mb-1">
                Dynamic Property Applications
              </div>
              <div className="text-dark-500 mb-1">
                지제이웍스 웹애플리케이션
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </span>
                <span className="text-sky-400 text-sm underline">
                  https://gjworks.dev/store
                </span>
              </div>
            </div>
            <div className="">
              <div className="flex gap-2">
                <div className="inline-block text-white bg-blue-700 hover:bg-blue-600 rounded py-2 px-4 text-xs cursor-pointer">
                  Download
                </div>
                <div className="inline-block text-white bg-dark-700 hover:bg-dark-600 rounded py-2 px-4 text-xs cursor-pointer">
                  Link
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200/70 dark:border-dark-800/75 bg-white/90 dark:bg-dark-900/50 rounded-lg p-5 mb-8">
            <div className="grid grid-cols-4 gap-10">
              <div className="col-span-1">
                <div className="text-base text-sky-600 mb-3">1,200</div>
                <div className="text-sm text-dark-400">Download Count</div>
              </div>
              <div className="col-span-1">
                <div className="text-base text-sky-600 mb-3">1,200</div>
                <div className="text-sm text-dark-400">Like Count</div>
              </div>
              <div className="col-span-1">
                <div className="text-base text-sky-600 mb-3">1,200</div>
                <div className="text-sm text-dark-400">Review Count</div>
              </div>
              <div className="col-span-1">
                <div className="text-base text-sky-600 mb-3">1,200</div>
                <div className="text-sm text-dark-400">Readed Count</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-base text-black dark:text-white mb-1">
              About us
            </div>
            <div className="text-sm text-gray-400 dark:text-dark-300">
              I’ve written a few thousand words on why traditional “semantic
              class names” are the reason CSS is hard to maintain, but the truth
              is you’re never going to believe me until you actually try it.
            </div>
          </div>
          <div></div>
        </div>
        <div className="max-w-screen-md mx-auto px-3 py-10">
          <div className="text-black dark:text-white text-xl mb-8">
            Properties
          </div>
          <div className="text-base text-gray-600 mb-5 dark:text-dark-300">
            다사다난했던 지난 날을 뒤로 하고 드디어 2022년 새해가 다가왔다.
            Happy New Year, 나 자신. 많은 일들이 있었고, 많은 변화가 있었지만
            나는 이렇게 어엿한 3년차 Front-End 개발자가 되었다. 2021년 초부터
            협업을 하기 시작했던 스타트업에 입사를 하게 되어 디자인과 개발을
            병행했으며, 많은 결과물을 만들어냈다. 다만 아쉽게도 개인과 회사의
            성장은 동일하지 않기 때문에 나는 더 나은 성장 방향성을 잡기 위해
            회사를 그만두고 나왔다. 오늘은 그간 JOOTEK 이라는 스타트업에서
            근무하며, UI/UX부터 시작하여 브랜드 컬러 재정립, 디자인 시스템 구축,
            React 기반 프로젝트의 대규모 리팩토링까지 다양했던 경험들을
            소개해보려고 한다.
          </div>
          <div className="ttext-base text-gray-600 mb-5 dark:text-dark-300">
            지금의 색상을 만들어내기까지 상당한 시간이 걸렸다. 세련되고 신뢰감을
            줄 수 있는 브랜드 컬러가 필요했지만 경쟁업체가 이미 파란색을
            사용하고 있다는 이유로 푸른 계열의 색상을 사용할 수 없었으며, 당시
            브런치와 같은 디자인을 선호했던 대표님의 취향과 입김이 반영되어
            하늘색과 녹색의 중간 단계, 옥색에 가까운 컬러를 사용했었다. 건축물과
            떼어놓을 수 없는 자연적 요소와 안락한 보금자리를 상징하는 초록색과
            신뢰를 상징하는 파란색을 섞은 결과이다.
          </div>
          <div className="ttext-base text-gray-600 mb-5 dark:text-dark-300">
            하지만 쨍한 컬러가 유행하는 이 시점에서 애매한 색상은 호불호가
            갈렸고, 무엇보다 하나의 컬러 코드를 다양한 곳에서 사용하기에는 색상
            자체가 대비가 높지 않다보니 면에 사용하면 지나치게 눈에 띄고,
            텍스트에 사용하면 가독성이 떨어지는 문제가 생겼다. 때문에 3차
            리뉴얼을 거치면서 서비스의 모든 디자인 언어를 새롭게 바꾸게 되었고,
            이를 통해 지금의 네X버가 떠오르는 정직한 녹색이 채택되었다. 또한
            유색이 들어가면 과하게 붕 뜨는 로고의 특성을 개선하기 위해 심볼에만
            브랜드 컬러를 적용하도록 하여 산뜻한 느낌을 유지하면서도 로고의
            색상이 붕 뜨지 않고 단단하게 자리잡을 수 있도록 했다.
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
