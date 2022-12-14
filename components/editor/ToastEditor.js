import React , {useRef} from'react';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'

const ToastEditor = ({getDescription, ...props}) => {
  const editorRef = useRef();
  const onDescriptionChange = (event) => {
    getDescription(editorRef.current?.getInstance().getMarkdown())
  };
  return(
    <>
      <Editor
      onChange={onDescriptionChange}
      ref={editorRef}
      {...props}
      />
    </>
  )
}

export default ToastEditor;