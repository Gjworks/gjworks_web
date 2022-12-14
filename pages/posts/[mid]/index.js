import { useRouter } from "next/router";
import Link from "next/link";
import { PrismaClient } from '@prisma/client'
import BoardList from "../../../components/list/BoardList";
import { useSession, getSession } from "next-auth/react";

const prisma = new PrismaClient();

const Posts = ({data}) => {
  const router = useRouter();
  const { mid } = router.query;

  console.log(data)
  return (
    <>
      <div className="flex flex-wrap max-w-screen-2xl mx-auto py-20 px-3">
        <div className="flex-1">
          <div className="text-2xl mb-10 text-white">블로그</div>
          <div>
            <BoardList />
          </div>
          <div className="flex justify-between py-5">
            <div className="flex-1">
              <input type="" className="rounded-sm w-56 text-dark-300 bg-transparent border border-dark-500 focus:border-primary-400 focus:text-primary-400 hover:border-dark-200 py-2 px-3 outline-none text-sm" />
            </div>
            <div className="flex-1 flex justify-end">
              <Link href="/posts/[mid]/Edit" as={`/posts/${mid}/Edit`}>
                <a className="inline-block rounded-sm px-5 py-2 border border-dark-400 text-dark-200 text-sm hover:text-primary-400 hover:border-primary-400">Write</a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center gap-2 pt-10">
              <Link href="/">
                <a className="flex items-center justify-center text-dark-100 border border-dark-400 hover:text-primary-400 hover:border-primary-400 rounded px-2 h-[34px] text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="flex items-center justify-center bg-primary-400 text-dark-900 border border-primary-400 hover:text-primary-400 hover:border-primary-400 rounded px-3 h-[34px] text-sm">1</a>
              </Link>
              <Link href="/">
                <a className="flex items-center justify-center text-dark-100 border border-dark-400 hover:text-primary-400 hover:border-primary-400 rounded px-3 h-[34px] text-sm">2</a>
              </Link>
              <Link href="/">
                <a className="flex items-center justify-center text-dark-100 border border-dark-400 hover:text-primary-400 hover:border-primary-400 rounded px-3 h-[34px] text-sm">3</a>
              </Link>
              <Link href="/">
                <a className="flex items-center justify-center text-dark-100 border border-dark-400 hover:text-primary-400 hover:border-primary-400 rounded px-3 h-[34px] text-sm">4</a>
              </Link>
              <Link href="/">
                <a className="flex items-center justify-center text-dark-100 border border-dark-400 hover:text-primary-400 hover:border-primary-400 rounded px-3 h-[34px] text-sm">5</a>
              </Link>
              <Link href="/">
                <a className="flex items-center justify-center text-dark-100 border border-dark-400 hover:text-primary-400 hover:border-primary-400 rounded px-3 h-[34px] text-sm">6</a>
              </Link>
              <Link href="/">
                <a className="flex items-center justify-center text-dark-100 border border-dark-400 hover:text-primary-400 hover:border-primary-400 rounded px-2 h-[34px] text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </Link>
            </div>
        </div>
        
      </div>
    </>
  )
}
export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  const user = await prisma.users.findUnique({
    where: {
      email: 'gjworks@kakao.com'
    },
    select: {
      id:true,
      nickname : true,
      email: true,
      password: true,
    }
  });
  console.log('posts list')
  console.log(session)
  return {
      props: {
        data : 'data Fetching server side!!'
      },
    }
}
export default Posts