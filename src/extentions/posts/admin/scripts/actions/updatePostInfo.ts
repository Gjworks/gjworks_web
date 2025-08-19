"use server";

import prisma from "@plextype/utils/db/prisma";
import type { Prisma } from "@prisma/client";

import { updatePost } from "@/extentions/posts/admin/scripts/data/post";
import type { PostInfoData } from "@/extentions/posts/admin/scripts/data/post";

/**
 * 게시판 정보 업데이트 서버 액션
 * @param id 게시판 ID
 * @param data 업데이트할 PostInfoData
 */
export async function updatePostInfo(id: number, data: PostInfoData) {
  if (!id) throw new Error("게시판 ID가 필요합니다.");
  try {
    const updated = await updatePost(id, data);

    // 2. 기존 권한 삭제
    await prisma.permission.deleteMany({
      where: {
        module: "posts",
        resource: `posts:${data.moduleId}`,
      },
    });

    // 3. 새 권한 생성
    const newPermissions = Object.entries(data.permissions).flatMap(
      ([type, list]) =>
        list.map((p) => ({
          module: "posts",
          resource: `posts:${data.moduleId}`,
          action: type.replace("Permissions", "").toLowerCase(), // listPermissions → list
          subjectType: p.subjectType,
          subjectId: p.subjectId ?? null,
        })),
    );

    if (newPermissions.length > 0) {
      await prisma.permission.createMany({ data: newPermissions });
    }

    return updated;
  } catch (error) {
    console.error("게시판 업데이트 실패:", error);
    throw new Error("게시판 업데이트 중 오류가 발생했습니다.");
  }
}
