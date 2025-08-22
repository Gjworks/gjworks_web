import PostsListClient from "./listClient";
import { getPostInfo } from "@/extentions/posts/scripts/actions/getPostInfo";
import PostNotFound from "./notFound";

interface PostsListProps {
  params: {
    pid: string;
  };
}

const PostsList = async ({ params }: PostsListProps) => {
  const { pid } = params;
  console.log(pid);

  // 게시판 정보 + 권한 가져오기
  const postInfo: PostInfoData | null = await getPostInfo(pid);

  if (!postInfo) {
    return <PostNotFound />;
  }

  // list 권한 체크 (예: guest, member, admin 등)
  const canList = postInfo.permissions.listPermissions.length > 0; // 예시: 권한 존재 여부

  if (!canList) {
    return <div>목록 권한이 없습니다.</div>;
  }

  return <PostsListClient params={{ pid }} />;
};

export default PostsList;
