'use client'

import DashboardPostCreate from '@/modules/posts/admin/templates/create'

const Page = params => {
  return (
    <>
      <DashboardPostCreate id={params.params.id} />
    </>
  )
}

export default Page
