import React , {useState, useEffect} from'react';
import dynamic from "next/dynamic"
import Link from "next/link";
import axios from 'axios';
import { useRouter } from "next/router";
// import ToastEditor from "../../../components/editor/ToastEditor";

const ToastEditor = dynamic(() => import("../../../components/editor/ToastEditor"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const Edit = (props) => {
  const router = useRouter();
  const [inputs, setInputs] = useState({});
  const [description, setDescription] = useState({});
  const [data] = useState(props);
  const { mid } = router.query;

  useEffect(() => {
    const result =  axios.post('/api/posts/Edit', {
      method: "POST",
      body: {
        mid : mid,
        nickname: 'data',
        email: '23',
        password: 'ddd'
      },
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res)=>{
      console.log(res.json());
    }).catch((error) => {
      return error.response;
    });
    console.log(result);
  }, [])
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const getDescription = (data) => {
    console.log(data)
    setDescription({description: data})
  }

  const handleDocumentSubmit = (e) => {
    e.preventDefault();
    console.log(description)
    Object.assign(inputs, description);
    console.log(inputs)
    // router.push(`/editor?mid=${mid}`);
  }

  return(
    <>
      <div className="max-w-screen-2xl mx-auto px-3 py-20">
        <div className="flex gap-8 flex-wrap mb-3">
          <div className="flex items-center pr-3">
            <select className="bg-dark-700 text-white outline-none focus:border-primary-400 border border-dark-600">
              <option value="">분류</option>
              <option value="">Developer</option>
              <option value="">분류</option>
              <option value="">분류</option>
            </select>
          </div>
          <div className="flex flex-1">
            <label className="hidden w-24 text-dark-300 text-sm px-3 py-3">제목</label>
            <div className="flex-1">
              <input type="text" name="title" defaultValue="" placeholder="제목을 입력해주세요." className="bg-dark-900 text-sm text-dark-300 focus:text-white py-2 px-3 mb-3 lg:mb-0 focus:outline-none w-full border-b border-dark-500 focus:border-primary-400 placeholder-gray-600" onChange={onChange} required />
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
          getDescription={getDescription}
        />
        <div className="flex flex-wrap pt-6">
          <div className="flex gap-8 flex-wrap">
            <div className="flex">
              <label className="hidden w-24 text-dark-300 text-xs px-3 py-3">Name</label>
              <div className="flex-1">
                <input type="text" defaultValue="" name="writerName" onChange={onChange} placeholder="User Name" className="bg-dark-900 text-sm text-dark-300 focus:text-white py-2 px-3 mb-3 lg:mb-0 focus:outline-none w-full border-b border-dark-500 focus:border-primary-400 placeholder-gray-600" required />
              </div>
            </div>
            <div className="flex">
              <label className="hidden w-24 text-dark-300 text-xs px-3 py-3">Password</label>
              <div className="flex-1">
                <input type="password" defaultValue="" name="writerPassword" onChange={onChange} placeholder="User Password" className="bg-dark-900 text-sm text-dark-300 focus:text-white py-2 px-3 mb-3 lg:mb-0 focus:outline-none w-full border-b border-dark-500 focus:border-primary-400 placeholder-gray-600" required />
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="flex justify-end">
              {/* <Link href="/posts/[mid]/Write" as={`/posts/${mid}/Write`} onCl>
                <a className="inline-block bg-dark-800 rounded-sm px-8 py-2 border border-primary-400 text-primary-400 text-sm hover:text-primary-400 hover:border-primary-400 hover:bg-primary-400 hover:bg-opacity-25">Submit</a>
              </Link> */}
              <button onClick={handleDocumentSubmit} className="inline-block bg-dark-800 rounded-sm px-8 py-2 border border-primary-400 text-primary-400 text-sm hover:text-primary-400 hover:border-primary-400 hover:bg-primary-400 hover:bg-opacity-25">Submit</button>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Edit;