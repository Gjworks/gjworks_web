import dynamic from "next/dynamic"
import Link from "next/link";
import { useRouter } from "next/router";
// import ToastEditor from "../../../components/editor/ToastEditor";

const ToastEditor = dynamic(() => import("../../../components/editor/ToastEditor"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const Write = () => {
  const router = useRouter();
  const { mid } = router.query;
  return(
    <>
      <div className="max-w-screen-2xl mx-auto px-3 py-20">
        <div className="flex gap-8 flex-wrap mb-3">
          <div className="flex items-center pr-3">
            <select className="bg-dark-700 text-white">
              <option value="">분류</option>
              <option value="">Developer</option>
              <option value="">분류</option>
              <option value="">분류</option>
            </select>
          </div>
          <div className="flex flex-1">
            <label className="hidden w-24 text-dark-300 text-sm px-3 py-3">제목</label>
            <div className="flex-1">
              <input type="text" value="" placeholder="제목을 입력해주세요." className="bg-dark-800 text-sm text-dark-300 focus:text-white py-2 px-3 mb-3 lg:mb-0 focus:outline-none w-full border-b border-dark-500 focus:border-primary-400 placeholder-gray-600" required />
            </div>
          </div>
        </div>
        <ToastEditor
          initialValue="hello react Editor World!"
          previewStyle="tab"
          height="600px"
          theme="dark"
          initialEditType="markdown"
          useCommandShortcut={true}
        />
        <div className="flex flex-wrap pt-6">
          <div className="flex gap-8 flex-wrap">
            <div className="flex">
              <label className="hidden w-24 text-dark-300 text-xs px-3 py-3">Name</label>
              <div className="flex-1">
                <input type="text" value="" placeholder="User Name" className="bg-dark-800 text-sm text-dark-300 focus:text-white py-2 px-3 mb-3 lg:mb-0 focus:outline-none w-full border-b border-dark-500 focus:border-primary-400 placeholder-gray-600" required />
              </div>
            </div>
            <div className="flex">
              <label className="hidden w-24 text-dark-300 text-xs px-3 py-3">Password</label>
              <div className="flex-1">
                <input type="password" value="" placeholder="User Password" className="bg-dark-800 text-sm text-dark-300 focus:text-white py-2 px-3 mb-3 lg:mb-0 focus:outline-none w-full border-b border-dark-500 focus:border-primary-400 placeholder-gray-600" required />
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="flex justify-end">
              <Link href="/posts/[mid]/Write" as={`/posts/${mid}/Write`}>
                <a className="inline-block bg-dark-800 rounded-sm px-8 py-2 border border-dark-400 text-dark-200 text-sm hover:text-primary-400 hover:border-primary-400">Write</a>
              </Link>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Write;