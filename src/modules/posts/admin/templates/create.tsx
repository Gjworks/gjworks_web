'use client'

import React, { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Warning from '@plextype/components/message/Warning'

import { createPosts } from '@/modules/posts/admin/scripts/postsController'
import { getPost } from '@/modules/posts/admin/scripts/postsModel'

interface PostProps {
  id?: number | null
}

const DashboardPostCreate = (props: PostProps) => {
  const router = useRouter()

  const [posts, setPosts] = useState<any>([])
  const [error, setError] = useState<any>(false)
  const [isDocumentLike, setIsDocumentLike] = useState<boolean>(false)
  const [isCommentLike, setisCommentLike] = useState<boolean>(false)
  const [isCommentState, setIsCommentState] = useState<boolean>(false)
  const [isConsultingState, setIsConsultingState] = useState<boolean>(false)
  const [writePermissions, setWritePermissions] = useState<string[]>([])
  const [commentPermissions, setCommentPermissions] = useState<string[]>([])
  const [listPermissions, setListPermissions] = useState<string[]>([])
  const [readPermissions, setReadPermissions] = useState<string[]>([])

  useEffect(() => {
    if (props.id) {
      getPost({ id: props.id }).then(response => {
        if (response.type === 'error') {
          setError(response.data.message)
        } else {
          if (response.data.postInfo && response.type === 'success') {
            setPosts(response.data.postInfo)
            setListPermissions(response.data.postInfo.config.permissions.list)
            setReadPermissions(response.data.postInfo.config.permissions.read)
            setWritePermissions(response.data.postInfo.config.permissions.write)
            setCommentPermissions(response.data.postInfo.config.permissions.comment)
          }
        }
      })
    }
  }, [props.id])

  useEffect(() => {
    // console.log(posts?.config?.grant.commentPermissions)
    if (posts?.config?.documentLike !== undefined) {
      setIsDocumentLike(posts.config.documentLike)
    }
    if (posts?.config?.commentLike !== undefined) {
      setisCommentLike(posts.config.commentLike)
    }
    if (posts?.config?.commentState !== undefined) {
      setIsCommentState(posts.config.commentState)
    }
    if (posts?.config?.consultingState !== undefined) {
      setIsConsultingState(posts.config.consultingState)
    }
  }, [posts])

  const handleDocumentLike = event => {
    setIsDocumentLike(event.target.checked)
  }
  const handleCommentLike = event => {
    setisCommentLike(event.target.checked)
  }
  const handleCommentState = event => {
    setIsCommentState(event.target.checked)
  }
  const handleConsultingState = event => {
    setIsConsultingState(event.target.checked)
  }

  const submitHandler = async (formData: FormData) => {
    const selectedCommentGroups = formData.getAll('commentPermissions') as string[]
    const selectedWriteGroups = formData.getAll('writePermissions') as string[]
    const selectedListGroups = formData.getAll('listPermissions') as string[]
    const selectedReadGroups = formData.getAll('readPermissions') as string[]

    const params = {
      postId: formData.get('postId') as string,
      moduleId: formData.get('moduleId') as string,
      moduleName: formData.get('moduleName') as string,
      moduleType: formData.get('moduleType') as string,
      listCount: formData.get('listCount') as string,
      pageCount: formData.get('pageCount') as string,
      documentLike: formData.get('documentLike') as string,
      consultingState: formData.get('consultingState') as string,
      commentState: formData.get('commentState') as string,
      commentLike: formData.get('commentLike') as string,
      permissions: {
        comment: selectedCommentGroups,
        write: selectedWriteGroups,
        list: selectedListGroups,
        read: selectedReadGroups,
      },
    }
    console.log(params)
    await createPosts(params)
      .then(response => {
        console.log(response)
        if (response?.data.code === 'error') {
          setError(response?.data.message)
        } else {
          router.replace('/dashboard/posts/list')
        }
      })
      .catch(error => {
        console.error('Failed to register: ' + error.toString())
      })
  }
  // const isCheckedComment =
  //   posts?.grant && posts.config.grant.commentPermissions.includes(String(0))

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value, id, name } = event.target
    name === 'comment' &&
      setCommentPermissions(prev => {
        if (!Array.isArray(prev)) {
          return []
        }
        return checked ? [...prev, value] : prev.filter(id => id !== value)
      })

    name === 'write' &&
      setWritePermissions(prev => {
        if (!Array.isArray(prev)) {
          return []
        }
        return checked ? [...prev, value] : prev.filter(id => id !== value)
      })

    name === 'list' &&
      setListPermissions(prev => {
        if (!Array.isArray(prev)) {
          return []
        }
        return checked ? [...prev, value] : prev.filter(id => id !== value)
      })

    name === 'read' &&
      setReadPermissions(prev => {
        if (!Array.isArray(prev)) {
          return []
        }
        return checked ? [...prev, value] : prev.filter(id => id !== value)
      })
  }

  const isCheckedWrite = posts.config?.permissions?.write && writePermissions.includes(String('guest'))
  const isCheckedWriteMember = posts.config?.permissions?.write && writePermissions.includes(String('member'))
  const isCheckedWriteAdmin = posts.config?.permissions?.write && writePermissions.includes(String('admin'))

  const isCheckedComment = posts.config?.permissions?.comment && commentPermissions.includes(String('guest'))
  const isCheckedCommentMember = posts.config?.permissions?.comment && commentPermissions.includes(String('member'))
  const isCheckedCommentAdmin = posts.config?.permissions?.comment && commentPermissions.includes(String('admin'))

  const isCheckedList = posts.config?.permissions?.list && listPermissions.includes(String('guest'))
  const isCheckedListMember = posts.config?.permissions?.list && listPermissions.includes(String('member'))
  const isCheckedListAdmin = posts.config?.permissions?.list && listPermissions.includes(String('admin'))

  const isCheckedRead = posts.config?.permissions?.read && readPermissions.includes(String('guest'))
  const isCheckedReadMember = posts.config?.permissions?.read && readPermissions.includes(String('member'))
  const isCheckedReadAdmin = posts.config?.permissions?.read && readPermissions.includes(String('admin'))

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-3">
        <form action={submitHandler}>
          {posts.id && <input type="hidden" name="postId" value={posts.id} />}
          <input type="hidden" name="moduleType" value="posts" />
          <div className="max-w-screen-2xl mx-auto">
            <div className="px-3">
              <div className="grid grid-cols-4 gap-8 py-10">
                <div className="col-span-1">
                  <div className="text-lg font-semibold text-gray-600  mb-3">게시판 기본설정</div>
                  <div className="text-gray-400 text-sm">게시판의 기본설정을 입력합니다.</div>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-col-span-2">
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="moduleId">
                          <div className="text-sm text-black mb-3">모듈ID</div>
                        </label>
                        {posts && <input type="text" name="moduleId" id="moduleId" className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100" placeholder="/?mid=post" defaultValue={posts?.mid} />}

                        <div className="text-sm text-dark-400 pt-2 font-light">게시판의 모듈ID는 중복될 수 없는 이름입니다.</div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="moduleName">
                          <div className="text-sm text-black mb-3">게시판이름</div>
                        </label>
                        {posts && <input type="text" name="moduleName" id="moduleName" className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100" defaultValue={posts?.moduleName} />}

                        <div className="text-sm text-dark-400 pt-2 font-light">게시판이름을 정하세요. 브라우저 타이틀 혹은 게시판의 명칭을 나타냅니다.</div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="listCount">
                          <div className="text-sm text-black mb-3">목록 수</div>
                        </label>
                        {posts && <input type="text" name="listCount" id="listCount" className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-16 py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100" defaultValue={posts.config?.listCount ? posts.config?.listCount : '20'} />}

                        <div className="text-sm text-dark-400 pt-2 font-light">한 페이지에 표시될 글 수를 지정할 수 있습니다. (기본 20개)</div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="listCount">
                          <div className="text-sm text-black mb-3">페이지 수</div>
                        </label>
                        {posts && <input type="text" name="listCount" id="listCount" className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-16 py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100" defaultValue={posts.config?.pageCount ? posts.config?.pageCount : '10'} />}

                        <div className="text-sm text-dark-400 pt-2 font-light">목록 하단, 페이지를 이동하는 링크 수를 지정할 수 있습니다. (기본 5개)</div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="documentLike">
                          <div className="text-sm text-black mb-3">좋아요 사용</div>
                        </label>
                        <label className="m-0">
                          <input type="checkbox" name="documentLike" id="documentLike" className="peer hidden" onChange={handleDocumentLike} checked={isDocumentLike} />

                          <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white dark:after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:translate-x-6"></div>
                        </label>
                        <div className="text-sm text-dark-400 pt-2 font-light">게시글 본문에 좋아요 기능을 사용합니다.</div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="consultingState">
                          <div className="text-sm text-black mb-3">상담 기능 사용</div>
                        </label>
                        <label className="m-0">
                          <input type="checkbox" name="consultingState" id="consultingState" className="peer hidden" onChange={handleConsultingState} checked={isConsultingState} />

                          <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white dark:after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:translate-x-6"></div>
                        </label>
                        <div className="text-sm text-dark-400 pt-2 font-light">관리자와 자신이 쓴 글만 보이도록 하는 기능입니다. &#40;회원 전용&#41;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-px border-b border-gray-200"></div>
            <div className="px-3">
              <div className="grid grid-cols-4 gap-8 py-10">
                <div className="col-span-1">
                  <div className="text-lg font-semibold text-gray-600  mb-3">댓글설정</div>
                  <div className="text-gray-400 text-sm">댓글 관련 설정을 합니다.</div>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-col-span-2">
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label>
                          <div className="text-sm text-black mb-3">댓글 사용</div>
                        </label>
                        <label htmlFor="commentState" className="m-0">
                          <input type="checkbox" name="commentState" id="commentState" className="peer hidden" onChange={handleCommentState} checked={isCommentState} />

                          <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white dark:after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:translate-x-6"></div>
                        </label>

                        <div className="text-sm text-dark-400 pt-2 font-light">댓글을 사용할지 여부를 결정합니다.</div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="commentLike">
                          <div className="text-sm text-black mb-3">좋아요 사용</div>
                        </label>
                        <label className="m-0">
                          <input type="checkbox" name="commentLike" id="commentLike" className="peer hidden" onChange={handleCommentLike} checked={isCommentLike} />

                          <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white dark:after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:translate-x-6"></div>
                        </label>
                        <div className="text-sm text-dark-400 pt-2 font-light">댓글에 좋아요 기능을 사용합니다.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-px border-b border-gray-200"></div>
            <div className="px-3">
              <div className="grid grid-cols-4 gap-8 py-10">
                <div className="col-span-1">
                  <div className="text-lg font-semibold text-gray-600  mb-3">권한설정</div>
                  <div className="text-gray-400 text-sm">생성된 게시판의 권한을 설정합니다.</div>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-col-span-2">
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3">
                        <div className="mb-5">
                          <div className="flex gap-2 items-center">
                            <div className="w-24 text-sm text-black">목록</div>
                            <div className="flex-1">
                              <div className="flex gap-2 flex-wrap">
                                <div>
                                  <label htmlFor="listPermissions" className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="listPermissions" id="listPermissionsGuest" value="guest" checked={isCheckedList ? true : false} onChange={handleCheckboxChange} />
                                    비회원
                                  </label>
                                </div>

                                <div>
                                  <label htmlFor="listPermissionsMember" className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="listPermissions" id="listPermissionsMember" value="member" checked={isCheckedListMember ? true : false} onChange={handleCheckboxChange} />
                                    로그인 사용자
                                  </label>
                                </div>

                                {posts?.grant &&
                                  posts?.grant?.map((item, index) => {
                                    const isChecked = listPermissions?.includes(String(item.id))
                                    // console.log(isChecked)
                                    return (
                                      <div key={item.groupName}>
                                        <label htmlFor={`listPermissions${item.groupName}`} className="text-sm flex gap-2 items-center">
                                          <input type="checkbox" name="listPermissions" id={`listPermissions${item.groupName}`} value={item.id} checked={isChecked ? true : false} onChange={handleCheckboxChange} />
                                          {item.groupTitle}
                                        </label>
                                      </div>
                                    )
                                  })}

                                <div>
                                  <label htmlFor="listPermissionsAdmin" className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="listPermissions" id="listPermissionsAdmin" value="admin" checked={isCheckedListAdmin ? true : false} onChange={handleCheckboxChange} />
                                    관리자
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="flex gap-2 items-center">
                            <div className="w-24 text-sm text-black">본문</div>
                            <div className="flex-1">
                              <div className="flex gap-2 flex-wrap">
                                <div>
                                  <label htmlFor="readPermissions" className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="readPermissions" id="readPermissions" value="guest" checked={isCheckedRead ? true : false} onChange={handleCheckboxChange} />
                                    비회원
                                  </label>
                                </div>

                                <div>
                                  <label htmlFor="readPermissionsMember" className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="readPermissions" id="readPermissionsMember" value="member" checked={isCheckedReadMember ? true : false} onChange={handleCheckboxChange} />
                                    로그인사용자
                                  </label>
                                </div>

                                {posts?.grant &&
                                  posts?.grant?.map((item, index) => {
                                    const isChecked = readPermissions?.includes(String(item.groupName))
                                    // console.log(isChecked)
                                    return (
                                      <div key={item.groupName}>
                                        <label htmlFor={`readPermissions${item.groupName}`} className="text-sm flex gap-2 items-center">
                                          <input type="checkbox" name="readPermissions" id={`readPermissions${item.groupName}`} value={item.id} checked={isChecked ? true : false} onChange={handleCheckboxChange} />
                                          {item.groupTitle}
                                        </label>
                                      </div>
                                    )
                                  })}

                                <div>
                                  <label htmlFor="readPermissionsAdmin" className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="readPermissions" id="readPermissionsAdmin" value="admin" checked={isCheckedReadAdmin ? true : false} onChange={handleCheckboxChange} />
                                    관리자
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="flex gap-2 items-center">
                            <div className="w-24 text-sm text-black">글쓰기</div>
                            <div className="flex-1">
                              <div className="flex gap-2 flex-wrap">
                                <div>
                                  <label htmlFor="writePermissionsGuest" className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="writePermissions" id="writePermissionsGuest" value="guest" checked={isCheckedWrite ? true : false} onChange={handleCheckboxChange} />
                                    비회원
                                  </label>
                                </div>
                                <div>
                                  <label htmlFor="writePermissionsMember" className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="writePermissions" id="writePermissionsMember" value="member" checked={isCheckedWriteMember ? true : false} onChange={handleCheckboxChange} />
                                    로그인사용자
                                  </label>
                                </div>

                                {posts?.grant &&
                                  posts?.grant?.map((item, index) => {
                                    const isChecked = writePermissions?.includes(String(item.id))
                                    // console.log(isChecked)
                                    return (
                                      <div key={item.groupName}>
                                        <label htmlFor={`writePermissions${item.groupName}`} className="text-sm flex gap-2 items-center">
                                          <input type="checkbox" name="writePermissions" id={`writePermissions${item.groupName}`} value={item.id} checked={isChecked ? true : false} onChange={handleCheckboxChange} />
                                          {item.groupTitle}
                                        </label>
                                      </div>
                                    )
                                  })}
                                <div>
                                  <label htmlFor="writePermissionsAdmin" className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="writePermissions" id="writePermissionsAdmin" value="admin" checked={isCheckedWriteAdmin ? true : false} onChange={handleCheckboxChange} />
                                    관리자
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="flex gap-2 items-center">
                            <div className="w-24 text-sm text-black">댓글</div>
                            <div className="flex-1">
                              <div className="flex gap-2 flex-wrap">
                                <div>
                                  <label htmlFor="commentPermissionsGuest" className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="commentPermissions" id="commentPermissionsGuest" value="guest" checked={isCheckedComment ? true : false} onChange={handleCheckboxChange} />
                                    비회원
                                  </label>
                                </div>
                                <div>
                                  <label className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="commentPermissions" id="commentPermissionsMember" value="member" checked={isCheckedCommentMember ? true : false} onChange={handleCheckboxChange} />
                                    로그인사용자
                                  </label>
                                </div>

                                {posts?.grant &&
                                  posts?.grant?.map((item, index) => {
                                    const isChecked = commentPermissions.includes(String(item.id))
                                    // console.log(isChecked)
                                    return (
                                      <div key={item.groupName}>
                                        <label htmlFor={`commentPermissions${item.groupName}`} className="text-sm flex gap-2 items-center">
                                          <input type="checkbox" name="commentPermissions" id={`commentPermissions${item.groupName}`} value={item.id} checked={isChecked ? true : false} onChange={handleCheckboxChange} />
                                          {item.groupTitle}
                                        </label>
                                      </div>
                                    )
                                  })}

                                <div>
                                  <label className="text-sm flex gap-2 items-center">
                                    <input type="checkbox" name="commentPermissions" id="commentPermissionsAdmin" value="admin" checked={isCheckedCommentAdmin ? true : false} onChange={handleCheckboxChange} />
                                    관리자
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center pt-5 pb-10 border-t border-slate-200">
              <Link href="/dashboard/posts/list" className="px-5 py-2 text-sm text-white bg-dark-500 rounded-md">
                뒤로가기
              </Link>
              <button className="px-5 py-2 text-sm text-white bg-orange-500 hover:bg-cyan-600 rounded-md">저장하기</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default DashboardPostCreate
