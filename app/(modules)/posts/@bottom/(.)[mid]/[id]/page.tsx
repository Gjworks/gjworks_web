'use client'

import Image from 'next/image'
import Bottom from '@components/panel/Bottom'
import PostView from '@templates/posts/PostView'

const Page = () => {
  return (
    <>
      <Bottom>
        <PostView />
      </Bottom>
    </>
  )
}

export default Page
