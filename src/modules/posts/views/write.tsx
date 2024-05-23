'use client'

import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
const Editorjs = dynamic(() => import('@plextype/components/editor/Editorjs'), {
  ssr: false,
})

import { createPost } from 'src/modules/posts/controllers/posts'
import { getModuleByName } from 'src/modules/dashboard/models/module'

import Alert from '@plextype/components/message/Alert'

const PostWrite = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = pathname.split('/')
  const [content, setContent] = useState<string>('')
  const [error, setError] = useState<{ type: string; message: string } | null>(
    null
  )
  const [moduleId, setModuleId] = useState<string>('')
  const [moduleInfo, setModuleInfo] = useState<string>('')

  const postInfo = async moduleId => {
    let moduleName = ''
    await getModuleByName(moduleId)
      .then(response => {
        console.log(response)
        setModuleInfo(response.data)
      })
      .catch(error => {
        setError({ type: 'error', message: error.toString() })
        console.error('Failed to get module: ' + error.toString())
      })
    return moduleName
  }
  useEffect(() => {
    setModuleId(params[2])
  }, [])

  useEffect(() => {
    postInfo(moduleId)
  }, [moduleId])

  useEffect(() => {
    console.log(moduleInfo)
  }, [moduleInfo])

  const handleContentChange = (newContent: object) => {
    setContent(JSON.stringify(newContent)) // 변경된 내용을 문자열로 변환하여 저장
  }

  const submitPostHandler = async event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('title', event.target.title.value)
    formData.append('content', content)
    // formData.append('moduleId', moduleInfo.moduleId)
    console.log(content)

    await createPost(formData)
      .then(response => {
        console.log(response)
        if (response?.type === 'error') {
          console.log(response)
          setError({ type: response.type, message: response.message })
        } else {
          // router.replace('/auth/Signin')
        }
      })
      .catch(error => {
        console.error('Failed to insert document: ' + error.toString())
      })
  }
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
  )
}

export default PostWrite
