'use client'

import HEADER from 'src/templates/layouts/default/Header'
import Footer from 'src/components/footer/FooterComponent'
import SearchForm from 'src/templates/forms/SearchForm'
const Page = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 py-10 lg:py-20">
        <div className="text-4xl font-bold text-white mb-10">Components</div>
        <div className="text-base text-dark-400">
          지제이웍스에서 제작한 Component들입니다. 해당 Component들을 활용해서
          template을 완성합니다.
        </div>
        <div className="text-base text-dark-400 mb-1">
          해당 Component들은 Tailwindcss를 통해서 제작되었습니다.
        </div>
        <div className="py-10">
          <div className="text-white text-xl font-bold mb-3">Headers</div>
          <div className=" bg-dark-900/90 rounded-2xl overflow-hidden">
            <div className="relative z-10  p-5">
              <div className="absolute inset-0 z-999"></div>
              <HEADER />
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="text-white text-xl font-bold mb-3">Footers</div>
          <div className=" bg-dark-900/90 rounded-2xl overflow-hidden">
            <div className="relative z-10  p-5">
              <div className="absolute inset-0 z-999"></div>
              <Footer />
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="text-white text-xl font-bold mb-3">Search Forms</div>
          <div className=" bg-dark-900/90 rounded-2xl overflow-hidden">
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
