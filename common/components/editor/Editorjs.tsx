"use client";

import React, { memo, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import EditorConstants from "./EditorConstants";

type Props = {
  data?: OutputData;
  onChange: (val: OutputData) => void;
  holder: string;
};

const Editor = ({ data, onChange, holder }: Props) => {
  const editorRef = useRef<EditorJS | null>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;

      const initializeEditor = async () => {
        if (!editorRef.current) {
          const editor = new EditorJS({
            holder,
            tools: EditorConstants,
            minHeight: 100,
            placeholder: "내용을 입력해주세요.",
            data,
            async onChange(api) {
              const savedData = await api.saver.save();
              onChange(savedData);
            },
          });

          editorRef.current = editor;
        }
      };

      initializeEditor();
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [data, holder, onChange]);

  return <div id={holder} className="prose max-w-full" />;
};

export default memo(Editor);
