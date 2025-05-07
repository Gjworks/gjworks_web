import prisma from "@plextype/utils/db/prisma";

interface HasPermissionParams {
  userId?: number; // 비로그인 사용자면 undefined
  isAdmin?: boolean;
  action: "read" | "write" | "delete";
  module: string; // 예: "posts"
  resource: string; // 예: "board:notice"
}

export async function hasPermission({
  userId,
  isAdmin,
  action,
  module,
  resource,
}: HasPermissionParams): Promise<boolean> {
  if (isAdmin) return true;

  // 게스트 접근 허용된 경우
  const guestAllowed = await prisma.permission.findFirst({
    where: {
      module,
      resource,
      action,
      subjectType: "guest",
    },
  });
  if (guestAllowed) return true;

  if (!userId) return false;

  // 유저가 속한 그룹들 조회
  const userGroupLinks = await prisma.userGroupUser.findMany({
    where: { userId },
    select: { groupId: true },
  });

  const groupIds = userGroupLinks.map((g) => g.groupId);

  if (groupIds.length === 0) return false;

  // 그룹 권한 체크
  const groupPermission = await prisma.permission.findFirst({
    where: {
      module,
      resource,
      action,
      subjectType: "group",
      subjectId: { in: groupIds },
    },
  });

  return !!groupPermission;
}
