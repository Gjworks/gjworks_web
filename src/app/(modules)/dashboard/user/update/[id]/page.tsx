'use client'

import DashboardUserUpdate from 'src/modules/user/dashboard/views/update'

const Page = params => {
  const userId = parseInt(params.params.id)

  return <>{userId && <DashboardUserUpdate userid={userId} />}</>
}

export default Page
