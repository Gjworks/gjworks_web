"use client";

import DashboardPostCreate from "@/modules/posts/admin/templates/create";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;

  if (!resolvedParams?.id) {
    return <p>Error: Missing or invalid `id` parameter</p>;
  }

  const postId = Number(resolvedParams.id);
  return (
    <>
      <DashboardPostCreate id={postId} />
    </>
  );
};

export default Page;
