import { cookies } from "next/headers";
import { decodeJwt } from "jose";

import PostsListClient from "./listClient";
import { getPostInfo } from "@/extentions/posts/scripts/actions/getPostInfo";
import { checkPermissions } from "@/extentions/posts/scripts/actions/hasPermission";
import PostNotFound from "./notFound";
import PostNotPermission from "./notPermission";

interface PostsListProps {
  params: {
    pid: string;
  };
}

interface CurrentUser {
  id: number;
  accountId: string;
  isAdmin: boolean;
  groups: number[]; // 사용자가 속한 그룹 ID 배열
  loggedIn: boolean; // 로그인 상태
}

const PostsList = async ({ params }: PostsListProps) => {
  const { pid } = params;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  let currentUser: CurrentUser | null = null;
  if (accessToken) {
    try {
      // JWT에서 우리가 넣은 custom claims로 단언
      const decoded = decodeJwt(accessToken) as {
        id: number;
        accountId: string;
        isAdmin: boolean;
        groups: number[];
      } | null;

      if (decoded) {
        currentUser = { ...decoded, loggedIn: true };
      }
    } catch (err) {
      console.log("JWT decode 실패", err);
    }
  }

  // 게시판 정보 + 권한 가져오기
  const postInfo = await getPostInfo(pid);

  if (!postInfo) {
    return <PostNotFound />;
  }

  // list 권한 체크 (예: guest, member, admin 등)
  const permissionResult = checkPermissions(postInfo.permissions, currentUser);

  if (!permissionResult.doList) {
    return <PostNotPermission />;
  }

  return <PostsListClient params={{ pid }} />;
};

export default PostsList;
