"use server";

import prisma from "@plextype/utils/db/prisma";
import type { Prisma } from "@prisma/client";

// 게시판(PostInfo) 기본 데이터 타입
export type PostInfoData = {
  permissions: {
    listPermissions: any[];
    readPermissions: any[];
    writePermissions: any[];
    commentPermissions: any[];
  };
  id: number;
  moduleId: string; // Posts.pid
  moduleName: string; // Posts.postName
  listCount: number; // config.listCount
  pageCount: number; // config.pageCount
  documentLike: boolean; // config.documentLike
  consultingState: boolean; // config.consultingState
};

/**
 * DB → PostInfoData 변환
 */
async function mapPostToPostInfoData(post: any): Promise<PostInfoData | null> {
  const cfg = (post.config as any) || {};
  return {
    id: post.id,
    moduleId: post.pid,
    moduleName: post.postName,
    listCount: cfg.listCount ?? 20,
    pageCount: cfg.pageCount ?? 10,
    documentLike: cfg.documentLike ?? false,
    consultingState: cfg.consultingState ?? false,
    permissions: cfg.permissions ?? {
      listPermissions: [],
      readPermissions: [],
      writePermissions: [],
      commentPermissions: [],
    },
  };
}

/**
 * 특정 게시판(모듈) 조회
 */
export async function findPostById(id: number): Promise<PostInfoData | null> {
  const post = await prisma.posts.findUnique({
    where: { id },
  });
  if (!post) return null;
  return mapPostToPostInfoData(post);
}

/**
 * moduleId(pid)로 게시판 조회
 */
export async function findPostByModuleId(
  moduleId: string,
): Promise<PostInfoData | null> {
  const post = await prisma.posts.findFirst({
    where: { pid: moduleId },
  });
  console.log(post);
  if (!post) return null;
  return mapPostToPostInfoData(post);
}

/**
 * 게시판 목록 조회 (검색/필터 포함)
 */
export async function findPosts(keyword?: string): Promise<PostInfoData[]> {
  const posts = await prisma.posts.findMany({
    where: keyword
      ? {
          OR: [
            { pid: { contains: keyword } },
            { postName: { contains: keyword } },
          ],
        }
      : {},
    orderBy: { createdAt: "desc" },
  });

  // mapPostToPostInfoData를 동기화
  const postInfos: PostInfoData[] = posts.map((post) => {
    const cfg = (post.config as any) || {};
    return {
      id: post.id, // ← 필수
      moduleId: post.pid,
      moduleName: post.postName,
      listCount: cfg.listCount ?? 20,
      pageCount: cfg.pageCount ?? 10,
      documentLike: cfg.documentLike ?? false,
      consultingState: cfg.consultingState ?? false,
      permissions: cfg.permissions ?? {
        listPermissions: [],
        readPermissions: [],
        writePermissions: [],
        commentPermissions: [],
      },
    };
  });

  return postInfos;
}

/**
 * 게시판 생성
 */
export async function createPost(data: PostInfoData) {
  return prisma.posts.create({
    data: {
      pid: data.moduleId,
      postName: data.moduleName,
      config: {
        listCount: data.listCount,
        pageCount: data.pageCount,
        documentLike: data.documentLike,
        consultingState: data.consultingState,
      },
    },
  });
}

/**
 * 게시판 업데이트
 */
export async function updatePost(id: number, data: PostInfoData) {
  return prisma.posts.update({
    where: { id },
    data: {
      pid: data.moduleId,
      postName: data.moduleName,
      config: {
        listCount: data.listCount,
        pageCount: data.pageCount,
        documentLike: data.documentLike,
        consultingState: data.consultingState,
      },
    },
  });
}
