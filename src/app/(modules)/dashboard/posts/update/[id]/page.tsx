'use client'

import DashboardPostCreate from '@/modules/posts/dashboard/templates/create'

const Page = params => {
  return (
    <>
      <DashboardPostCreate id={params.params.id} />
    </>
  )
}

export default Page
