'use client'

import PostsList from '@/modules/posts/templates/default/list'

interface PageProps {
  params: {
    mid: string
  }
}

const Page: React.FC<PageProps> = ({ params }: { params: { mid: string } }) => {
  return (
    <>
      <PostsList params={params} />
    </>
  )
}

export default Page
