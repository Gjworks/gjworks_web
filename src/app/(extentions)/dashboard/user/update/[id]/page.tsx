import DashboardUserUpdate from "@/extentions/user/admin/templates/update";

const Page = ({ params }: { params: { id: string } }) => {
  return <DashboardUserUpdate id={params.id} />;
};

export default Page;
