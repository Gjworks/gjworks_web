'use client'

import Image from 'next/image'
import Bottom from '@plextype/components/panel/Bottom'
import PostView from '@plextype/templates/posts/PostView'

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
