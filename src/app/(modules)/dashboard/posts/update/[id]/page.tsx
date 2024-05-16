'use client'

import DashboardPostCreate from 'src/modules/posts/dashboard/views/create'

const Page = params => {
  return (
    <>
      <DashboardPostCreate id={params.params.id} />
    </>
  )
}

export default Page
