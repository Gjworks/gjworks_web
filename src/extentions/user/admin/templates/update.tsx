import {
  getUserDetail,
  getAllGroups,
} from "@/extentions/user/admin/scripts/group";
import UpdateFormClient from "./updateClient";

type Props = {
  id: string;
};

const DashboardUserUpdate = async ({ id }: Props) => {
  const user = await getUserDetail(id);
  const groupList = await getAllGroups();

  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      {user ? (
        <UpdateFormClient user={user} groupList={groupList} />
      ) : (
        <div>로딩 중...</div>
      )}
    </div>
  );
};

export default DashboardUserUpdate;
