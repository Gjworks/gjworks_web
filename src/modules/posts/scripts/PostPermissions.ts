import { PrismaClient } from "@prisma/client";

interface PermissionsInfo {
  success: boolean;
  status: number;
  errorCode?: string;
  message?: string;
  data?: any;
}

interface UserInfo {
  isAdmin: boolean;
  userGroups: { groupId: number }[];
}

class PostPermissions {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async validateUserPermissions(
    mid: string,
    type: "member" | "admin" | "guest" | string,
    userInfo?: UserInfo,
  ): Promise<PermissionsInfo> {
    if (!mid) {
      return {
        success: false,
        status: 400,
        errorCode: "MISSING_MODULE_ID",
        message: "Module ID is required.",
      };
    }

    try {
      const postInfo = await this.prisma.module.findUnique({
        where: { mid },
      });

      if (!postInfo) {
        return {
          success: false,
          status: 404,
          errorCode: "MODULE_NOT_FOUND",
          message: "Module not found.",
        };
      }

      const permissionInfo = (postInfo.config as { permissions: any })
        ?.permissions;
      if (!permissionInfo || !permissionInfo[type]) {
        return {
          success: false,
          status: 403,
          errorCode: "INVALID_PERMISSION_TYPE",
          message: "Permission type is invalid or not defined.",
        };
      }

      // Permission checks
      // @ts-ignore
      if (permissionInfo[type].includes("member") && !userInfo) {
        return {
          success: false,
          status: 403,
          errorCode: "INSUFFICIENT_PERMISSIONS",
          message: "You need to be a member to access this resource.",
        };
      }

      if (permissionInfo[type].includes("admin") && !userInfo?.isAdmin) {
        return {
          success: false,
          status: 403,
          errorCode: "INSUFFICIENT_PERMISSIONS",
          message: "Admin privileges required.",
        };
      }

      if (permissionInfo[type].includes("guest")) {
        return {
          success: true,
          status: 200,
          message: "Access granted for guests.",
        };
      }

      if (userInfo) {
        const permissionIds = permissionInfo[type].map((id: string) =>
          parseInt(id, 10),
        );
        const hasGrantPermission = userInfo.userGroups.some((group) =>
          permissionIds.includes(group.groupId),
        );

        if (!hasGrantPermission) {
          return {
            success: false,
            status: 403,
            errorCode: "INSUFFICIENT_PERMISSIONS",
            message: "You do not have sufficient permissions.",
          };
        }

        return {
          success: true,
          status: 200,
          message: "Access granted.",
        };
      }

      return {
        success: false,
        status: 403,
        errorCode: "INSUFFICIENT_PERMISSIONS",
        message: "You do not have sufficient permissions.",
      };
    } catch (error) {
      console.error("Error validating user permissions:", error);
      return {
        success: false,
        status: 500,
        errorCode: "SERVER_ERROR",
        message: "An error occurred while processing the request.",
      };
    }
  }
}

export default PostPermissions;
