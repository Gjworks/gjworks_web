"use client";

import { useParams } from "next/navigation";
import DashboardUserUpdate from "@/extentions/user/admin/templates/update";

const Page = () => {
  const params = useParams();
  const userId = params.id ? Number(params.id) : null; //타입을 강제로 변환

  return <>{userId && <DashboardUserUpdate userid={userId} />}</>;
};

export default Page;
