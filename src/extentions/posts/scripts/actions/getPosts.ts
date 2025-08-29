// src/extentions/posts/admin/scripts/data/post.ts

import prisma from "@plextype/utils/db/prisma";

export async function getPosts(pid: string) {
  // 1. 게시판 찾기
  const board = await prisma.posts.findUnique({
    where: { pid },
    select: { id: true },
  });

  if (!board) {
    return [];
  }

  // 2. 게시판에 속한 Document (= 게시글) 가져오기
  const posts = await prisma.document.findMany({
    where: {
      resourceType: "post",
      resourceId: board.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      isNotice: true,
      isSecrets: true,
      readCount: true,
      commentCount: true,
      voteCount: true,
      user: {
        select: {
          id: true,
          nickName: true,
        },
      },
    },
  });

  // 3. 직렬화: Date → string
  return posts.map((p) => ({
    ...p,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
  }));
}
