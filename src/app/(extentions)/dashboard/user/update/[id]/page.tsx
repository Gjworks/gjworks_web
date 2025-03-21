"use client";

import DashboardUserUpdate from "@/extentions/user/admin/templates/update";

const Page = (params) => {
  const userId = parseInt(params.params.id);

  return <>{userId && <DashboardUserUpdate userid={userId} />}</>;
};

export default Page;
