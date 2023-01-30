"use client";

import React , {useState, useEffect} from'react';
import dynamic from "next/dynamic"
import Link from "next/link";
import axios from 'axios';
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

declare module 'next-auth' {
  interface Session {
    user: {
      id: Number,
      name: string
      email: string
      image: string
      nickname: string,
      isManagers: boolean,
      isAdmin: boolean
    }
  }
}

const ToastEditor = dynamic(() => import("components/editor/ToastEditor"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const loadDocumentEdit = async ()=> {
  const result =  axios.post('/api/posts/Edit', {
    method: "POST",
    body: {
      // mid : query.mid,
      userId: 1,
      title: '23',
      description: 'ddd'
    },
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res)=>{
    console.log(res)
  }).catch((error) => {
    return error.response;
  });
  console.log(result)
  return result
}

const Edit = (props) => {
  const router = usePathname();
  const [editInfo, setEditInfo] = useState();
  const [inputs, setInputs] = useState<{[key: string]: any}>();
  const [description, setDescription] = useState({});
  const [data] = useState(props);
  const session = useSession()
  console.log(session)
  // const  query  = router.query;
  // console.log(query)
  
  useEffect(() => {
    async function fetchEdit(){
      const data = await loadDocumentEdit()
      console.log(data);
      // setEditInfo(data);
    }
    fetchEdit();
  }, [])
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  // 에디터에 있는 글을 가져오기 위함
  const getDescription = (data) => {
    console.log(data)
    setDescription({description: data})
  }

  const handleDocumentSubmit = (e) => {
    e.preventDefault();
    Object.assign(inputs, description);
    e.preventDefault();
    const postData = async () => {
      const data = {
        // mid : mid,
        moduleId : 1,
        published : true,
        authorId : session.data.user.id,
        title : inputs.title,
        description : inputs.description,
      };

      const response = await fetch("/api/posts/Post", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      alert(data.message);
    });
    // router.push(`/editor?mid=${mid}`);
  }

  return(
    <>

      <div className="max-w-screen-2xl mx-auto px-3 py-20">
        <div className="flex gap-8 flex-wrap">
          <div className="w-full lg:w-auto flex items-center pr-3">
            <select className="bg-dark-700 text-white outline-none focus:border-primary-400 border border-dark-600 mb-3 w-full">
              <option value="">분류</option>
              <option value="">Developer</option>
              <option value="">분류</option>
              <option value="">분류</option>
            </select>
          </div>
          <div className="flex w-full lg:flex-1">
            <label className="hidden w-24 text-dark-300 text-sm px-3 py-3">제목</label>
            <div className="flex-1">
              <input type="text" name="title" defaultValue="" placeholder="제목을 입력해주세요." className="bg-dark-900 text-sm text-dark-300 focus:text-white py-2 px-3 mb-3 focus:outline-none w-full border-b border-dark-500 focus:border-primary-500 placeholder-dark-300" onChange={onChange} required />
            </div>
          </div>
        </div>
        <ToastEditor
          previewStyle="tab"
          height="600px"
          theme="dark"
          // initialEditType="markdown"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          getDescription={getDescription}
        />
        <div className="grid grid-cols-2 gap-8 pt-6">
          <div className="col-span-2 flex gap-4 flex-wrap">
            <div className="flex w-full lg:w-auto">
              <label className="hidden w-24 text-dark-300 text-xs px-3 py-3">Name</label>
              <div className="flex-1">
                <input type="text" defaultValue="" name="writerName" onChange={onChange} placeholder="User Name" className="w-full lg:w-96 bg-dark-900 text-sm text-dark-300 focus:text-white py-2 px-3 lg:mb-0 focus:outline-none border-b border-dark-500 focus:border-primary-600 placeholder-gray-600" required />
              </div>
            </div>
            <div className="flex w-full lg:w-auto">
              <label className="hidden w-24 text-dark-300 text-xs px-3 py-3">Password</label>
              <div className="flex-1">
                <input type="password" defaultValue="" name="writerPassword" onChange={onChange} placeholder="User Password" className="w-full lg:w-96 bg-dark-900 text-sm text-dark-300 focus:text-white py-2 px-3 lg:mb-0 focus:outline-none border-b border-dark-500 focus:border-primary-600 placeholder-gray-600" required />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex justify-end gap-2">
              <button onClick={event => console.log(event)} className="bg-dark-800 rounded-sm px-8 py-2 border border-dark-300 text-dark-300 text-sm hover:text-dark-50 hover:border-dark-100 hover:bg-dark-100 hover:bg-opacity-25 w-full lg:w-auto">Back</button>
              <button onClick={handleDocumentSubmit} className="bg-dark-800 rounded-sm px-8 py-2 border border-primary-600 text-primary-600 text-sm hover:text-primary-600 hover:border-primary-600 hover:bg-primary-500 hover:bg-opacity-25 w-full lg:w-auto">Submit</button>
            </div>
        </div>
      </div>

    </>
  )
}

export default Edit;