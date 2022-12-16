import Link from "next/link";
import Layout from "../components/layouts/Layout";

const Works = () => {
  return (
    <Layout>
    <div className="flex flex-wrap gap-8 max-w-screen-2xl mx-auto py-8 lg:py-20 px-3">
      <div className="w-64 h-full">
        <div className="">
          <div className="flex items-center gap-4 mb-3 group">
            <div className="flex justify-center items-center w-6 h-6 rounded-md bg-dark-600 text-white group-hover:bg-lime-400 group-hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            </div>
            <div className="flex items-center text-base font-normal text-dark-300 cursor-pointer group-hover:text-white">Introduce</div>
          </div>
          <div className="flex items-center gap-4 mb-3 group">
            <div className="flex justify-center items-center w-6 h-6 rounded-md bg-dark-600 text-white group-hover:bg-lime-400 group-hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <div className="flex items-center text-base font-normal text-dark-300 cursor-pointer group-hover:text-white">Documentation</div>
          </div>
          <div className="flex items-center gap-4 mb-3 group">
            <div className="flex justify-center items-center w-6 h-6 rounded-md bg-dark-600 text-white group-hover:bg-lime-400 group-hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <div className="flex items-center text-base font-normal text-dark-300 cursor-pointer group-hover:text-white">Components</div>
          </div>
        </div>
      </div>
      <div className="flex-1 text-dark-100">
        <div className="text-lime-400 mb-10 text-base">Installation</div>
        <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Get started with Tailwind CSS</div>
        <div className="mt-4 text-lg text-dark-200">Tailwind CSS works by scanning all of your HTML files, <Link href="/"><a className="text-sky-500 underline underline-offset-4 hover:text-sky-400">JavaScript components</a></Link>, and any other templates for <code className="bg-dark-600 rounded-md p-1 text-sm text-orange-600">class</code> names, generating the corresponding styles and then writing them to a static CSS file.</div>
        <div className="py-5">
          <div className="rounded-lg bg-dark-500 bg-opacity-25 p-10"></div>
        </div>
        <div className="flex gap-1">
          <div className="flex items-center justify-center h-96 flex-1 rounded-lg bg-dark-50 text-dark-900">
            50
          </div>
          <div className="flex items-center justify-center h-96 flex-1 rounded-lg bg-dark-100 text-dark-900">
            100
          </div>
          <div className="flex items-center justify-center h-96 flex-1 rounded-lg bg-dark-200 text-dark-900">
            200
          </div>
          <div className="flex items-center justify-center h-96 flex-1 rounded-lg bg-dark-300 text-dark-900">
            300
          </div>
          <div className="flex items-center justify-center h-96 flex-1 rounded-lg bg-dark-400 text-dark-900">
            400
          </div>
          <div className="flex items-center justify-center h-96 flex-1 rounded-lg bg-dark-500">
            500
          </div>
          <div className="flex items-center justify-center h-96 flex-1 rounded-lg bg-dark-600">
            600
          </div>
          <div className="flex items-center justify-center h-96 flex-1 rounded-lg bg-dark-700">
            700
          </div>
          <div className="flex items-center justify-center h-96 flex-1 rounded-lg bg-dark-800">
            800
          </div>
          <div className="flex items-center justify-center h-96 flex-1 rounded-lg bg-dark-900">
            900
          </div>
        </div>
        
      </div>
    </div>
    
    </Layout>
  )
}

export default Works