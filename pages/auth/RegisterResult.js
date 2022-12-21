import Link from 'next/link';
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";

const RegisterResult = () => {
  const router = useRouter();
  if (router.query.status == 'success') {
    return (
      <Layout>
      <div className="px-3 py-10 lg:py-20">
        <div className="max-w-screen-sm mx-auto p-3 lg:p-8 rounded-lg bg-dark-600">
          <div className="flex justify-center mb-4 pt-5 text-lime-400">
            <span className="flex bg-lime-300 bg-opacity-25 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            
          </div>
          <h1 className="text-2xl text-dark-50 text-center font-light">
            Successfully registered
          </h1>
          <div className="text-base mb-5 text-dark-300 text-center">
            성공적으로 회원가입을 하였습니다.
          </div>
          <div className="flex overflow-hidden rounded-md">
            <Link href="/">
              <a className="flex items-center bg-dark-500 text-sm text-white py-3 px-5 lg:px-10 hover:bg-dark-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="pl-2">홈으로</span>
              </a>
            </Link>
            <Link href="/auth/Signin">
              <a className="flex-1 flex items-center justify-center bg-primary-700 text-sm text-white py-3 px-3 hover:bg-primary-600 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className="pl-2">로그인 하기</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
        
      </Layout>
    )
  }else{
    // router.replace('/Warning')
  }
}

export default RegisterResult;