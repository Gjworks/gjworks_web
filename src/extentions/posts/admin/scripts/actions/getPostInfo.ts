"use server";

import {
  findPostById,
  PostInfoData,
} from "@/extentions/posts/admin/scripts/data/post";

/**
 * 게시판 정보 조회 서버 액션
 * @param id 게시판 ID
 * @returns PostInfoData | null
 */
const getPostInfo = async (id: string): Promise<PostInfoData | null> => {
  const postId = Number(id);

  if (isNaN(postId)) {
    console.warn("Invalid post ID:", id);
    return null;
  }

  return await findPostById(postId);
};

export { getPostInfo };
