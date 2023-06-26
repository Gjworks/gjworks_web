'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SafariBrower from 'src/components/viewer/SafariBrower'
import { motion } from 'framer-motion'
import DefaultLayout from 'src/templates/layouts/default/Layout'
import Bottom from 'src/components/panel/Bottom'

export default function Page() {
  const [showBottom, setShowBottom] = useState(false)

  const closeBottom = close => {
    setShowBottom(close)
  }
  const parentVariants = {
    onscreen: {
      transition: { staggerChildren: 0.3 },
    },
    offscreen: {
      transition: { staggerChildren: 0.3, staggerDirection: -1 },
    },
  }
  const variants = {
    onscreen: {
      opacity: [0, 1],
      transition: {
        duration: 0.6,
      },
    },
    offscreen: {
      opacity: 0,
    },
  }
  return (
    <DefaultLayout>
      <div className="relative -mt-[111px]">
        {/* <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: '3%' }}
        animate={{ opacity: 1, y: '0%', transition: { duration: 1 } }}
      >
      </motion.div>
      <div className="absolute inset-0 overflow-hidden bg-dark-900/90 backdrop-blur-2xl"></div> */}
        <div className="relative">
          <motion.div className="flex items-center bg-[url('/assets/images/bg12.jpg')] bg-no-repeat bg-cover bg-center h-[600px] lg:h-[860px]">
            <div className="absolute inset-0 overflow-hidden bg-dark-950/40 dark:bg-dark-950/50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-transparent via-dark-950/60 to-dark-950"></div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              className="relative w-full z-10"
            >
              <div className="flex max-w-screen-xl mx-auto px-3">
                <div className="relative">
                  <motion.div
                    variants={variants}
                    className="text-sm lg:text-base font-bold text-yellow-600 dark:text-yellow-400 mb-3"
                  >
                    TEAM THAT MAKES THE SERVICE
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-300 to-yellow-600"
                  >
                    <div className="">
                      <div>Build web and app</div>
                      <div className="hidden md:flex absolute -top-12 md:-top-3 right-0 md:-right-16">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 62.63443 48.83955"
                          className="fill-yellow-500 stroke-1 w-16 h-16"
                        >
                          <path
                            d="M44.98697,17.27072c3.02152-4.51246,6.04304-9.02491,9.06455-13.53737h-4.31735c2.40533,3.96877,4.81066,7.93755,7.216,11.90632,.34353,.56682,.68706,1.13365,1.03059,1.70047,.69922,1.15371,2.24206,1.58614,3.42047,.89688,1.15413-.67506,1.59935-2.2614,.89688-3.42047-2.40533-3.96877-4.81066-7.93755-7.216-11.90632-.34353-.56682-.68706-1.13365-1.03059-1.70047-1.01399-1.67307-3.27826-1.55182-4.31735,0-3.02152,4.51246-6.04304,9.02491-9.06455,13.53737-.75151,1.12234-.21797,2.7684,.89688,3.42047,1.22766,.71806,2.66719,.22811,3.42047-.89688h0Z"
                            origin="undraw"
                          />
                          <path d="M2.5,48.54032c9.98476-1.10812,19.23175-7.01358,24.027-15.93333,2.57961-4.79839,4.1285-11.12074,1.05639-16.08048-2.76184-4.45884-8.78327-6.86452-13.37808-3.572-4.65048,3.33241-5.40732,9.23623-4.16926,14.46374,.63378,2.67602,1.65266,5.29118,2.6765,7.83978,.92629,2.30578,1.9356,4.61149,3.35298,6.66419,2.95718,4.2827,7.44023,7.17352,12.79181,6.89937,5.40109-.27669,10.27355-3.15896,13.66494-7.28503,3.97582-4.83709,6.41813-10.83763,8.35242-16.73667,2.1236-6.47637,3.3803-13.21153,3.88983-20.00421,.10112-1.34804-1.2214-2.5-2.5-2.5-1.43699,0-2.39859,1.14808-2.5,2.5-.72105,9.61263-3.11196,19.4488-7.5363,28.05291-1.94694,3.78626-4.50102,7.445-8.33595,9.50003-3.33345,1.78631-7.49538,2.16839-10.71346-.0623-3.04595-2.11138-4.69295-5.8781-5.98461-9.22046-1.50713-3.89995-3.7081-8.6514-2.34844-12.87282,1.02202-3.17312,4.20143-5.00393,7.04753-2.69742,3.32838,2.69736,2.63287,7.49083,1.10972,10.98162-3.53242,8.09567-11.73046,14.08948-20.50302,15.06307-1.3418,.14892-2.5,1.04242-2.5,2.5,0,1.23594,1.14939,2.64989,2.5,2.5h0Z" />
                        </svg>
                      </div>
                      <div className="absolute -top-20 md:-top-20 right-0 md:-right-24">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50.23402 58.64887"
                          className="fill-yellow-500 stroke-[2px] w-16 h-16"
                        >
                          <g>
                            <path
                              d="M28.46337,44.55151c6.36189-9.71435,12.72379-19.42871,19.08568-29.14306,1.55066-2.3678,2.79596-4.48171,2.67712-7.39614-.05964-1.4625,.06345-2.92101-.2737-4.36392-.91786-3.92822-4.93361-4.09579-8.17045-3.20597-1.1335,.3116-2.28784,.53346-3.35373,1.08262-1.07549,.55411-2.01442,1.4281-2.84498,2.29615-1.92728,2.01427-3.7985,4.08446-5.70867,6.11523-3.89371,4.13953-7.81605,8.252-11.71923,12.38258-2.00782,2.1248-4.01062,4.25436-6.00185,6.39471-.97682,1.04997-1.79857,1.79889-3.01626,2.55662-1.16064,.72223-2.49961,1.37356-3.49583,2.32208-2.1485,2.04565-1.36904,4.82317,.71644,6.52033,1.12807,.91801,2.27324,1.81569,3.41211,2.72021,3.13138,2.48702,6.26932,4.9658,9.39644,7.45818,1.77736,1.41659,3.88241,3.56806,6.32617,2.22984,1.41617-.7755,1.79115-2.29637,2.11672-3.74607,.35771-1.59282,.71542-3.18564,1.07313-4.77846l-.64293,1.10317,.03289-.04212c.83011-1.06313,1.03683-2.49871,0-3.53553-.86428-.86428-2.69989-1.07021-3.53553,0-.84172,1.07801-.97201,2.46418-1.26604,3.77344-.14308,.63713-.28617,1.27426-.42925,1.91139-.07154,.31853-.14079,.63769-.21463,.95569-.2272,.97855-.20151,.05188,.59397-.13135h1.3292c-.66294-.09052-1.62372-1.09709-2.34659-1.67248-1.12326-.8941-2.24794-1.78643-3.37274-2.67858-2.38549-1.89209-4.77305-3.7816-7.15484-5.67836-.2676-.21311-2.21608-2.07758-2.47139-2.00335-.13143,.03821-.03914,1.26262-.13753,1.22104-.00285-.0012,.45912-.30287,.52147-.34214,.48192-.30347,.96712-.60181,1.45065-.90269,1.05576-.65697,2.26492-1.24937,3.15829-2.11731,3.36371-3.26793,6.44277-6.89642,9.6698-10.30243,3.29444-3.47715,6.59623-6.94738,9.87662-10.43781,1.61307-1.71635,3.21858-3.43966,4.82023-5.16666,.57768-.62289,1.15635-1.31699,1.8574-1.80332,.70334-.48792,1.50216-.53641,2.31242-.77505,.65027-.19152,1.48151-.40522,1.89503-.43693,.12346-.00947,.88805-.04102,.58341-.03056-.38629,.01327,.08592,.00142,.05691,.01687,.22036,.07043,.23061,.06526,.03076-.01551-.16489-.07814-.1891-.08665-.07262-.0255,.03703,.03459-.3198-.33705,.02321,.03961-.23947-.26297-.19877-.21804-.23605-.35353,.0538,.19553,.10444,.39018,.15264,.5874,.03232,.13227,.03858,.4647-.0102-.09937,.01165,.13466,.02784,.26996,.03224,.40512,.03842,1.17988,.25168,2.60034,.06635,3.75115-.14423,.89559-.74824,1.71112-1.22711,2.45553-.66351,1.03143-1.34315,2.05279-2.01506,3.07878-5.95582,9.09429-11.91163,18.18858-17.86745,27.28287-1.76803,2.69971,2.55952,5.20774,4.31735,2.5236Z"
                              origin="undraw"
                            />
                            <path d="M22.11795,18.48893c-4.18141,.14043-8.36283,.28086-12.54424,.42129-2.01306,.06761-4.11161,.11305-5.82979,1.30878-1.52139,1.05877-2.52677,2.59536-3.41952,4.18796-.48906,.87244-.47577,2.3477,.39091,3.02956,2.69652,2.12149,5.39305,4.24298,8.08957,6.36447,1.06011,.83404,2.50116,1.03438,3.53553,0,.86709-.86709,1.06701-2.69606,0-3.53553-2.69652-2.12149-5.39305-4.24298-8.08957-6.36447l.39091,3.02956c.56522-1.00831,1.20808-2.29913,2.12039-2.70623,1.22083-.54477,3.01671-.32099,4.3796-.36677,3.65874-.12288,7.31747-.24575,10.97621-.36863,1.3499-.04534,2.5-1.11656,2.5-2.5,0-1.31943-1.14433-2.54553-2.5-2.5h0Z" />
                            <path d="M32.18107,31.24753l2.22168,10.35451c.17828,.83092,.35729,1.66168,.53485,2.49275,.14641,.68528,.39522,1.48767,.25243,2.20108-.20092,1.00387-1.37507,1.97701-2.14498,2.70295h3.53553c-2.71205-2.10161-5.42409-4.20322-8.13614-6.30483-1.06614-.82617-2.49626-1.03928-3.53553,0-.86147,.86147-1.0734,2.70374,0,3.53553,2.71205,2.10161,5.42409,4.20322,8.13614,6.30483,1.09323,.84716,2.45019,1.02336,3.53553,0,1.38026-1.30144,2.72533-2.73952,3.31294-4.58798,.64694-2.03513,.09238-4.12321-.34024-6.13954-.85027-3.96284-1.70054-7.92567-2.55082-11.88851-.28336-1.32065-1.82715-2.08911-3.0753-1.7461-1.36582,.37535-2.03029,1.75077-1.7461,3.0753h0Z" />
                            <path d="M13.6982,42.39911c-3.0834,.43241-6.1097,1.29683-7.94456,4.01837-.87879,1.30345-1.01453,2.86401-1.22631,4.37355-.21931,1.56312-.43861,3.12625-.65792,4.68937-.12853,.91611-.04938,1.74005,.64293,2.43237,.62107,.62107,1.5815,.8949,2.43237,.64293,.20349-.06026,.407-.11374,.61534-.15462,.65493-.1285-.37541-.0025,.14642-.02173,.36837-.01358,.73491-.04019,1.10398-.04186,.79821-.0036,1.59736,.03688,2.39491-.01187,1.9777-.12087,3.97018-.72729,5.31181-2.2728,1.30536-1.50374,1.95833-3.32423,2.10116-5.29669,.14432-1.99305-.38035-4.00691-.89318-5.91584-.33924-1.26276-1.79604-2.16008-3.0753-1.7461-1.2957,.41931-2.10967,1.72195-1.7461,3.0753,.2131,.79323,.42578,1.5875,.58223,2.39426,.04069,.20981,.07347,.42064,.10966,.63119,.05212,.30323-.02071-.4157,.00147,.07465,.01929,.42641,.05244,.84603,.03337,1.27361-.00771,.17279-.04915,.37324-.04378,.54615l.04117-.33166c-.01882,.11093-.04038,.22132-.06469,.33117-.06749,.30478-.16987,.59248-.26414,.88913-.09147,.28785,.24397-.45433,.01901-.05816-.08231,.14495-.15365,.29542-.24111,.43773-.04288,.07093-.08798,.1404-.1353,.20841-.10618,.15259-.05761,.09441,.14569-.17456-.116,.09134-.22377,.25986-.32987,.36545l-.11846,.11331c-.20293,.17425-.16126,.14788,.12501-.07913,.00156,.05187-.30854,.20165-.3474,.22407-.07569,.04501-.15318,.08673-.23248,.12515,.29848-.11614,.36085-.1415,.1871-.07607-.14082,.04392-.27848,.09692-.42111,.13591-.06387,.01746-.45367,.16223-.51882,.11464,.34159-.03993,.41583-.04909,.22271-.02747-.08927,.01051-.17874,.01911-.26839,.0258-.36373,.02913-.72895,.036-1.09369,.0366-1.56995,.00262-3.15039-.06728-4.67646,.38464l3.0753,3.0753c.19381-1.38136,.38761-2.76273,.58142-4.14409,.09618-.68551,.18704-1.37203,.28956-2.05662,.04659-.31113,.09734-.62242,.17512-.92754,.01865-.07314,.15806-.64467,.06241-.27793-.08069,.30937,.05668-.10706,.09587-.17696,.05478-.09771,.11715-.19011,.17581-.28536,.27492-.4464-.24745,.23925-.03105,.04235,.11956-.10878,.49903-.38504,.54399-.53-.26307,.19556-.31972,.23903-.16994,.13042,.04566-.03388,.09225-.06643,.13977-.09766,.11777-.07986,.23797-.15609,.36098-.22764,.09831-.05719,.19824-.11199,.29933-.1641,.02354-.01213,.52346-.24457,.17947-.09478-.35197,.15326,.18034-.06114,.25351-.08615,.15972-.0546,.32119-.10391,.48351-.15012,.29281-.08335,.58902-.1539,.887-.21615,.66462-.13885,1.33778-.2325,2.00983-.32674,.57453-.08057,1.21625-.67413,1.49408-1.1489,.31358-.53587,.44644-1.32563,.25202-1.9264-.19576-.60492-.57063-1.18855-1.1489-1.49408-.63625-.33616-1.22086-.35096-1.9264-.25202h0Z" />
                          </g>
                          <path d="M38.69601,13.26445l.0001,.00007c.28696,.18269,.59679,.28158,.9295,.29667,.3323,.07442,.6646,.05953,.9969-.04465,.32533-.07735,.60873-.22651,.85018-.44748,.27216-.17628,.48679-.41009,.64389-.70142l.25202-.5972c.11907-.44307,.11907-.88613,0-1.3292l-.25202-.5972c-.22225-.37567-.52121-.67463-.89688-.89688l-.0001-.00007c-.28696-.18269-.59679-.28158-.9295-.29667-.3323-.07442-.6646-.05953-.9969,.04465-.32533,.07735-.60873,.22651-.85018,.44748-.27216,.17628-.48679,.41009-.64389,.70142l-.25202,.5972c-.11907,.44307-.11907,.88613,0,1.3292l.25202,.5972c.22225,.37567,.52121,.67463,.89688,.89688h0Z" />
                        </svg>
                      </div>
                    </div>
                    <div>Quickly and simply</div>
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="text-gray-400 dark:text-dark-200 text-sm lg:text-lg mb-6"
                  >
                    서비스에 도움이 되는 제품을 만들어 드리겠습니다.
                  </motion.div>
                  <div className="hidden">
                    <div className="bg-dark-950/80 backdrop-blur-lg rounded-lg border border-dark-800 py-3 px-5">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-black backdrop-blur-lg"></div>
                        <div className="flex-1">
                          <div className="text-white text-sm font-bold">
                            Github Repository
                          </div>
                          <div className="text-dark-500 text-sm font-medium">
                            $git clone gjworks
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/auth/Signin"
                    className="inline-block text-yellow-400 bg-transparent backdrop-blur-lg border border-yellow-400 shadow-lg shadow-yellow-400/40 py-3 px-5 rounded-lg hover:bg-yellow-400 hover:text-white"
                  >
                    Sign in & Sign up
                  </Link>
                </div>
              </div>
            </motion.div>
            <div className="hidden lg:flex flex-wrap absolute left-0 right-0 bottom-10">
              <div className="w-full flex flex-wrap justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-10 h-10 text-dark-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="w-full text-center text-gray-500 text-xs font-light">
                Scroll Down
              </div>
            </div>
          </motion.div>
        </div>

        <div className="py-20">
          <div className="relative max-w-screen-xl mx-auto px-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                variants={variants}
                className="relative overflow-hidden bg-gray-100 dark:bg-dark-800 shadow-lg shadow-dark-950 p-10 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0"
              >
                <div className="text-2xl font-light text-center text-black dark:text-white mb-5">
                  Rhymix 제작 및 유지보수를 해드립니다.
                </div>
                <div className="text-base text-gray-400 dark:text-dark-400 text-center mb-10">
                  라이믹스 모듈제작과 데이터 이전 그리고 유지보수까지 모든
                  부분의 제작을 의뢰를 통해 하고 있습니다. 결제 모듈과 카카오톡
                  메세지 전송까지 다양한 서드파티 모듈을 가지고 있으며
                  라이믹스의 모든 부분에 해당 기능을 추가하여 코어 수정 없이
                  지원합니다.
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className="relative overflow-hidden bg-gray-100 dark:bg-dark-800 shadow-lg shadow-dark-950 p-10 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 "
              >
                <div className="text-2xl font-light text-center text-black dark:text-white mb-5">
                  Web UI Components
                </div>
                <div className="text-base text-center text-gray-400 dark:text-dark-400 mb-10">
                  Next.js + Prisma + Tailwindcss + Framer Motion등을 활용하여
                  프론트엔드에서 뛰어난 퍼포먼스와 일관성 있는 UI/UX를
                  제작합니다.
                </div>
                <div className="flex flex-wrap gap-8 justify-between">
                  <div>
                    <div className="w-[240px] rounded-md backdrop-blur-lg shadow-lg bg-white/90 dark:bg-dark-800 dark:shadow-black border border-slate-200 dark:border-dark-700 overflow-hidden shadow-xs p-2 z-[101]">
                      <div className="relative z-[100]">
                        <div className="w-56">
                          <div className="block rounded px-4 py-2 cursor-pointer text-xs dark:text-black hover:text-white text-black bg-yellow-400 dark:bg-yellow-500 focus:outline-none focus:bg-dark-800 focus:text-dark-300">
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1"
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                                  ></path>
                                </svg>
                                <div className="pl-2">Sign In</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="block rounded px-4 py-2 cursor-pointer text-xs text-slate-500 dark:text-dark-200 focus:outline-none focus:bg-dark-800 focus:text-dark-300">
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1"
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                  ></path>
                                </svg>
                                <div className="pl-2">Register</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="block border-b border-slate-300 dark:border-dark-700 my-2 mx-3"></div>
                        <div>
                          <div className="block rounded px-4 py-2 cursor-pointer text-xs text-slate-500 dark:text-dark-200 focus:outline-none focus:bg-dark-800 focus:text-dark-300">
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1"
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                  ></path>
                                </svg>
                                <div className="pl-2">Infomation</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-[240px]">
                      <div className="relative bg-dark-700 rounded-lg p-2 text-dark-200 text-sm font-normal mb-1 shadow-md shadow-dark-900 overflow-hidden">
                        <div className="absolute bg-dark-600 -left-6 bottom-0 rounded-full w-20 h-20"></div>
                        <div className="ml-16">Example</div>
                      </div>
                      <div className="relative bg-black rounded-lg p-2 text-white text-sm font-normal mb-1 shadow-md shadow-dark-900 overflow-hidden">
                        <div className="absolute bg-yellow-400 -left-6 bottom-0 rounded-full w-20 h-20"></div>
                        <div className="ml-16 text-yellow-400">
                          Data Fetching
                        </div>
                      </div>
                      <div className="relative bg-dark-700 rounded-lg p-2 text-dark-200 text-sm font-normal mb-1 shadow-md shadow-dark-900 overflow-hidden">
                        <div className="absolute bg-dark-600 -left-6 bottom-0 rounded-full w-20 h-20"></div>
                        <div className="ml-16">Network</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="py-20">
          <div className="relative max-w-screen-xl mx-auto px-3">
            <div className="absolute hidden items-center justify-center -top-28 right-3 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-indigo-700 to-indigo-800 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>

            <motion.div className="relative max-w-screen-lg mx-auto">
              <div className="relative">
                <SafariBrower />
              </div>
              <div className="absolute inset-0 overflow-hidden bg-gradient-to-b dark:from-dark-950/25 dark:via-dark-950/50 dark:to-dark-950"></div>
            </motion.div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={parentVariants}
            className="max-w-screen-md mx-auto text-center px-3"
          >
            <motion.div
              variants={variants}
              className="text-3xl font-medium text-black dark:text-white mb-8"
            >
              라이믹스 전용 레이아웃 출시 예정
            </motion.div>
            <motion.div
              variants={variants}
              className="text-base text-slate-500 dark:text-dark-300 text-center mb-5"
            >
              최근 데스크탑 환경에서 모바일 UI를 적극 활용한 디자인들을 많이
              선보이고 있습니다. 그에 맞춰 그전에는 없는 느낌의 레이아웃을 출시
              하려고 합니다. 현재 작업중에 있으며 6월중에 출시 예정입니다.
            </motion.div>
            <button
              onClick={() => setShowBottom(!showBottom)}
              className="inline-block text-yellow-400 bg-transparent backdrop-blur-lg border border-yellow-400 shadow-lg shadow-yellow-400/40 py-3 px-5 rounded-lg hover:bg-yellow-400 hover:text-black"
            >
              자세히 보기
            </button>
          </motion.div>
        </div>
        <div className="py-20 hidden">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={parentVariants}
            className="max-w-screen-xl mx-auto px-3 xl:px-8 overflow-hidden pt-0 lg:py-20"
          >
            <div className="flex justify-center">
              <div className="relative mx-auto bg-gradient-to-b from-white to-[#FBFBFB] dark:from-dark-800 shadow-xl shadow-black dark:to-dark-900 flex justify-center items-center rounded-[2.5rem] h-[600px] w-[300px]">
                <div className="h-[32px] w-[3px] bg-dark-800 dark:bg-dark-800 absolute -left-[3px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-dark-800 dark:bg-dark-800 absolute -left-[3px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-dark-800 dark:bg-dark-800 absolute -left-[3px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-dark-800 dark:bg-dark-800 absolute -right-[3px] top-[142px] rounded-r-lg"></div>
                <div className="relative rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-dark-950">
                  <div className="bg-black h-8 absolute top-4 left-16 right-16 rounded-full"></div>
                  1
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="py-20 hidden">
          <div className="relative max-w-screen-xl mx-auto px-3">
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-2 grid grid-cols-2 gap-8">
                <div className="flex flex-wrap gap-8 col-span-1 h-full">
                  <div className="w-full rounded-lg shadow-lg shadow-black p-5 bg-cyan-500">
                    <div className="text-white text-lg">Store</div>
                  </div>
                  <div className="w-full rounded-lg shadow-lg shadow-black p-5 bg-indigo-500">
                    <div className="text-white text-lg">Store</div>
                  </div>
                </div>
                <div className="col-span-1 h-full">
                  <div className="w-full h-full rounded-lg shadow-lg shadow-black p-5 bg-lime-400">
                    <div className="text-white text-lg">Store</div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-8">
                <div className="col-span-1 h-full">
                  <div className="w-full rounded-lg shadow-lg shadow-black p-5 bg-dark-500">
                    <div className="text-white text-lg">Store</div>
                  </div>
                </div>

                <div className="col-span-2 h-full">
                  <div className="w-full rounded-lg shadow-lg shadow-black p-5 bg-rose-600">
                    <div className="text-white text-lg">Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="relative max-w-screen-xl mx-auto px-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                variants={variants}
                className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-10 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 shadow-lg shadow-dark-950"
              >
                <div className="text-2xl text-black dark:text-black font-light text-center mb-8">
                  Store
                </div>
                <div className="text-base text-yellow-900 dark:text-dark-800 mb-10 text-center">
                  React 뿐만아니라 라이믹스 CMS기능까지 모두 만나보실 수
                  있습니다.
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className=" bg-gray-100 dark:bg-dark-800 p-10 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 shadow-lg shadow-dark-950"
              >
                <div className="text-2xl text-black dark:text-white font-light text-center mb-8">
                  Partners
                </div>
                <div className="text-base text-gray-400 dark:text-dark-400 mb-10 text-center">
                  저희 파트너사가 된다면 20% 할인된 금액으로 모든 상품을
                  다운로드 받을 수 있습니다.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="hidden py-20">
          <div className="max-w-screen-xl mx-auto px-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-8"
            >
              <motion.div
                variants={variants}
                className="bg-slate-100 dark:bg-dark-700 p-5 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 "
              >
                <div className="text-2xl font-bold text-black dark:text-white mb-5">
                  Web UI Components
                </div>
                <div className="text-sm text-dark-300 mb-10">
                  Next.js + Prisma + Tailwindcss + Framer Motion등을 활용하여
                  SSR 홈페이지를 구축 하기 쉽도록 제작하였습니다.
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className="bg-white border border-slate-200 dark:border-dark-700 dark:bg-dark-800 p-5 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 "
              >
                <div className="text-2xl font-bold text-black dark:text-white mb-5">
                  Metaverse Platform
                </div>
                <div className="text-sm text-dark-300 mb-10">
                  Playcanvas를 활용하여 가상의 공간에 나만의 캐릭터가 움직이며
                  온라인으로 다양한 사람들과 커뮤니케이션을 하며 상호작용을
                  통해서 데이터를 주고 받을 수 있습니다.
                </div>
                <div className="">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-xs text-black dark:text-white w-12">
                      DB
                    </div>
                    <div className="relative flex-1 bg-slate-200 dark:bg-dark-500 rounded-full h-[6px] overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-yellow-600 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white"> 60%</div>
                  </div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-xs text-black dark:text-white w-12">
                      Front
                    </div>
                    <div className="relative flex-1 bg-slate-200 dark:bg-dark-500 rounded-full h-[6px] overflow-hidden">
                      <motion.div className="absolute left-0 top-0 bottom-0 w-[20%] bg-yellow-600 rounded-full"></motion.div>
                    </div>
                    <div className="text-xs text-white"> 20%</div>
                  </div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-xs text-black dark:text-white w-12">
                      Server
                    </div>
                    <div className="relative flex-1 bg-slate-200 dark:bg-dark-500 rounded-full h-[6px] overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-yellow-600 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white"> 30%</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                className="flex flex-wrap items-center gap-8 bg-gradient-to-br from-yellow-600 to-secondary-600 p-5 rounded-md w-full lg:flex-1 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 "
              >
                <div>
                  <div className="text-2xl font-bold text-white mb-5 text-center">
                    Projects
                  </div>
                  <div className="w-full text-sm text-white mb-10 text-center">
                    저희는 현재 개발에서 멈추지 않고 미래를 위한 개발과 투자를
                    하고 있습니다. 다음 프로젝트에 대해 의견을 주시면
                    감사하겠습니다.
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="hidden py-20 w-full overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.1 }}
              variants={parentVariants}
              className="flex gap-8 w-full"
            >
              <motion.div
                variants={variants}
                className="relative w-[80%] flex-none aspect-[1216/640] rounded-md cursor-pointer shadow-xl shadow-dark-900 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900/25 via-dark-900/50 to-dark-900/90 z-10"></div>
                <Image
                  src="/assets/images/playcanvas.png"
                  quality={100}
                  fill
                  alt=""
                ></Image>
              </motion.div>
              <motion.div
                variants={variants}
                className="relative w-[80%] flex-none aspect-[1216/640] rounded-md cursor-pointer shadow-xl shadow-dark-900 transition duration-300 hover:shadow-xs -translate-y-2 hover:translate-y-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900/25 via-dark-900/50 to-dark-900/90 z-10"></div>
                <Image
                  src="/assets/images/photo.jpg"
                  quality={100}
                  fill
                  alt=""
                ></Image>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="hidden py-20">
          <div className="max-w-screen-xl mx-auto px-3">
            <div className="grid grid-cols-5 gap-10 lg:gap-8 w-full">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.3 }}
                variants={parentVariants}
                className="flex items-center col-span-5 lg:col-span-3"
              >
                <motion.div className="flex-1">
                  <motion.div
                    className="text-yellow-600 mb-5"
                    variants={variants}
                  >
                    Front End Platform
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="text-2xl font-bold text-black dark:text-white mb-7"
                  >
                    Simple 하면서도 Creative한 생각
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="text-base text-dark-400 dark:text-dark-300 mb-6"
                  >
                    지제이웍스는 2018 년 처음시작한 웹과 앱을 개발하기 위한
                    소규모 개발팀입니다. 우리는 혁신적이고 미래 지향적 인 기업,
                    신생 기업 및 비즈니스와 협력하여 매력적인 제품을 연구하고
                    개발합니다.
                    {/* Front-end 기술을 기반으로 서비스를 제작하고 배포 합니다. React
                  + Next.js를 기반으로 웹 개발을 진행하고 그 노하우를 활용하여
                  다양한 자원들과 Components등 더 나은 제품을 개발하고 있습니다. */}
                  </motion.div>
                  <motion.div
                    variants={variants}
                    className="inline rounded-full bg-slate-500 dark:bg-dark-600 py-2 px-5 text-sm text-slate-100 dark:white dark:hover:text-black hover:bg-yellow-500 dark:hover:bg-yellow-500 cursor-pointer"
                  >
                    Read more
                  </motion.div>
                </motion.div>
              </motion.div>
              <div className="col-span-5 lg:col-span-2 flex items-center py-10 justify-center">
                <div className="flex justify-center items-center dark:bg-transparent border border-dark-50/10 w-[440px] h-[440px] rounded-full">
                  <div className="flex justify-center items-center dark:bg-transparent border border-dark-700/70 w-[290px] h-[290px] rounded-full">
                    <div className="dark:bg-dark-50/10 backdrop-blur-lg w-[160px] h-[160px] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-[calc(100vh-312px)]">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={parentVariants}
            className="relative max-w-screen-xl mx-auto py-20 px-3 "
          >
            <div className="flex justify-center mb-6">
              <div>
                <motion.div
                  variants={variants}
                  className="block font-medium text-transparent text-5xl bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-center pt-20 mb-3"
                >
                  We Are Creative
                </motion.div>
                <motion.div
                  variants={variants}
                  className="block font-medium text-transparent text-5xl bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-center mb-10 leading-normal"
                >
                  Responsive everything.
                </motion.div>
              </div>
            </div>
            <motion.div
              variants={variants}
              className="flex justify-center mb-10"
            >
              <Link
                href="/contact"
                className="border bg-transparent backdrop-blur-lg border-slate-900 dark:border-dark-300 rounded-full py-1 px-10 text-black dark:text-dark-300 text-base hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black dark:shadow-lg dark:shadow-dark-600"
              >
                Contact us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="py-20 hidden">
          <div className="max-w-screen-xl mx-auto  px-3 xl:px-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 xl:col-span-1">
                <div className="flex justify-center">
                  <div className="inline font-black text-7xl text-dark-500 text-center">
                    Full Stack
                  </div>
                </div>
                <div className="font-thin text-3xl text-dark-100 text-center -mt-6">
                  Responsive everything.
                </div>
              </div>
              <div className="col-span-2 xl:col-span-1">
                <div className="text-sm text-dark-300 mb-3">
                  Wrestling with a bunch of complex media queries in your CSS
                  sucks, so Tailwind lets you build responsive designs right in
                  your HTML instead.
                </div>
                <div className="text-sm text-dark-300">
                  Throw a screen size in front of literally any utility class
                  and watch it magically apply at a specific breakpoint.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 hidden">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={parentVariants}
            className="max-w-screen-xl mx-auto px-3 xl:px-8 overflow-hidden pt-0 lg:py-20"
          >
            <div className="flex justify-center">
              <motion.div
                variants={variants}
                className="inline font-black text-5xl md:text-7xl text-slate-700 dark:text-dark-600/75 text-center"
              >
                WE ARE CRATEIVE
              </motion.div>
            </div>
            <motion.div
              variants={variants}
              className="font-thin text-xl xl:text-3xl text-slate-400 dark:text-dark-100 text-center -mt-6"
            >
              Responsive everything.
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Bottom
        state={showBottom}
        close={closeBottom}
        title="현재 미출시 제품입니다."
      >
        <div className="text-dark-300 text-base text-center">
          빠른시일내에 출시 할 수 있도록 하겠습니다.
        </div>
      </Bottom>
    </DefaultLayout>
  )
}
