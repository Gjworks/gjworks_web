"use client";

import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

interface EditorjsProps {
  holder?: string;
  onChange: (data: OutputData) => void;
  data?: OutputData;
}

const Editorjs: React.FC<EditorjsProps> = ({
  holder = "editorjs",
  onChange,
  data,
}) => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder,
        autofocus: true,
        placeholder: "내용을 입력하세요...",
        data: data || { blocks: [] }, // ✅ 기본값 올바르게 지정
        async onChange(api) {
          const savedData = await api.saver.save();
          onChange(savedData);
        },
      });

      editorRef.current = editor;
    }

    return () => {
      if (
        editorRef.current &&
        typeof editorRef.current.destroy === "function"
      ) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [holder, data, onChange]);

  return <div id={holder} className="min-h-[300px] border rounded-md p-2" />;
};

export default Editorjs;
