"use client";

import React, { useState } from "react";
import Editorjs from "@plextype/components/editor/Editorjs";

const PostWriteClient = () => {
  const [content, setContent] = useState({});

  const handleContentChange = (data: object) => {
    setContent(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("저장할 데이터:", content);

    await fetch("/api/posts/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="제목을 입력해주세요."
        className="w-full border rounded p-2"
      />
      <Editorjs onChange={handleContentChange} />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        저장하기
      </button>
    </form>
  );
};

export default PostWriteClient;
