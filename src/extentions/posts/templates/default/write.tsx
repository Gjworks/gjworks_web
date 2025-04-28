"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
const Editorjs = dynamic(() => import("@plextype/components/editor/Editorjs"), {
  ssr: false,
});

import Alert from "@plextype/components/message/Alert";

const PostWrite = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = pathname.split("/");
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<{ type: string; message: string } | null>(
    null,
  );
  const [moduleId, setModuleId] = useState<string>("");
  const [moduleInfo, setModuleInfo] = useState<string>("");

  const dataFetch = async () => {
    let data = await fetch(`/api/posts/${params[2]}/create`);
    let posts = await data.json();
    setModuleInfo(posts.data);
  };

  useEffect(() => {
    dataFetch().then((r) => {});
  }, [dataFetch]);

  const handleContentChange = (newContent: object) => {
    setContent(JSON.stringify(newContent));
  };

  const submitPostHandler = async (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("title", event.target.title.value);
    // formData.append("content", content);
    const postData = {
      title: event.target.title.value,
      content: content,
    };
    console.log(JSON.stringify(postData));
    let response = await fetch(`/api/posts/${params[2]}/create`, {
      method: "POST", // HTTP 메서드 설정
      headers: {
        "Content-Type": "application/json", // JSON 요청임을 명시
      },
      body: JSON.stringify(postData), // 요청 본문에 데이터 추가
    });
    console.log(response);
    let posts = await response.json();
  };
  return (
    <>
      <div>
        {error && <Alert message={error.message} type={error.type} />}
        <form onSubmit={submitPostHandler}>
          <div className="pt-6 pb-3 border-b border-gray-100">
            <input
              type="text"
              name="title"
              className="text-gray-900 text-2xl w-full outline-none font-medium bg-transparent"
              placeholder="제목을 입력해주세요."
            />
          </div>
          <div className="py-6">
            <Editorjs
              onChange={handleContentChange}
              holder="editorjs-container"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-white text-gray-500 hover:text-gray-950 focus:text-gray-950 border border-gray-300 hover:border-gray-900 focus:border-gray-900 text-sm py-4 px-16 rounded-md">
              저장하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostWrite;
