import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'

const ToastEditor = () => {
  return(
    <>
      <Editor
        initialValue="hello react Editor World!"
        previewStyle="tab"
        height="600px"
        theme="dark"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </>
  )
}

export default ToastEditor;