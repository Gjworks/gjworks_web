'use client'

import HEADER from '@gjworks/templates/layouts/fullLayout/Header'
import Footer from 'src/components/footer/FooterComponent'
import SearchForm from 'src/templates/forms/SearchForm'
const Page = () => {
  return (
    <>
      <div className="py-10 bg-gray-950 dark:bg-dark-900"></div>
      <div className="max-w-screen-xl mx-auto px-3 py-10 lg:py-20">
        <div className="text-4xl font-bold text-black dark:text-white mb-10">
          Components
        </div>
        <div className="text-base text-slate-400 dark:text-dark-400">
          지제이웍스에서 제작한 Component들입니다. 해당 Component들을 활용해서
          template을 완성합니다.
        </div>
        <div className="text-base text-slate-400 dark:text-dark-400 mb-1">
          해당 Component들은{' '}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="text-primary-500 underline"
          >
            Tailwindcss
          </a>
          와{' '}
          <a
            href="https://www.framer.com/motion/"
            target="_blank"
            className="text-primary-500 underline"
          >
            Framer Motion
          </a>
          을 활용하여 제작되었습니다.
        </div>
        <div className="py-10">
          <div className="text-white text-xl font-bold mb-3">Headers</div>
          <div className=" bg-slate-100 dark:bg-dark-800 rounded-2xl overflow-hidden">
            <div className="relative z-10  p-5">
              <div className="absolute inset-0 z-999"></div>
              <HEADER />
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="text-white text-xl font-bold mb-3">Footers</div>
          <div className=" bg-slate-100 dark:bg-dark-800 rounded-2xl overflow-hidden">
            <div className="relative z-10  p-5">
              <div className="absolute inset-0 z-999"></div>
              <Footer />
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="text-white text-xl font-bold mb-3">Search Forms</div>
          <div className=" bg-slate-100 dark:bg-dark-800 rounded-2xl overflow-hidden">
            <div className="relative z-10  p-5">
              <div className="absolute inset-0 z-999"></div>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
