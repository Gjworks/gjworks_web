"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Alert from "@plextype/components/message/Alert";

interface Group {
  id: number;
  groupName: string;
  groupTitle: string;
  groupDesc?: string;
}

const DashboardPostCreate = () => {
  const router = useRouter();

  const [posts, setPosts] = useState<any>([]);
  const [error, setError] = useState<{ type: string; message: string } | null>(
    null,
  );
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroupIds, setSelectedGroupIds] = useState<number[]>([]);
  const [permissionsMap, setPermissionsMap] = useState<{
    [key: string]: { subjectType: string; subjectId?: number }[];
  }>({
    listPermissions: [],
    readPermissions: [],
    writePermissions: [],
    commentPermissions: [],
  });

  useEffect(() => {
    // @ts-ignore
    fetch("/api/user/groups")
      .then((res) => res.json())
      .then((res) => setGroups(res.data));
  }, []);

  const togglePermission = (
    type: string,
    subjectType: string,
    subjectId?: number,
  ) => {
    setPermissionsMap((prev) => {
      const alreadyChecked = prev[type]?.some(
        (p) => p.subjectType === subjectType && p.subjectId === subjectId,
      );

      if (alreadyChecked) {
        return {
          ...prev,
          [type]: prev[type].filter(
            (p) =>
              !(p.subjectType === subjectType && p.subjectId === subjectId),
          ),
        };
      }

      return {
        ...prev,
        [type]: [
          ...(prev[type] || []),
          { subjectType, ...(subjectId ? { subjectId } : {}) },
        ],
      };
    });
  };

  const permissions = [
    { label: "목록", permissionsType: "listPermissions" },
    { label: "본문", permissionsType: "readPermissions" },
    { label: "글쓰기", permissionsType: "writePermissions" },
    { label: "댓글", permissionsType: "commentPermissions" },
  ];

  const permissionGroups = [
    { label: "비회원", value: "guest" },
    { label: "로그인 사용자", value: "member" },
    { label: "관리자", value: "admin" },
  ];

  const handleSubmit = async (e) => {
    console.log("선택된 그룹 ID들:", selectedGroupIds);
    e.preventDefault();
    setError(null);

    const permissions = Object.entries(permissionsMap).flatMap(([type, list]) =>
      list.map((p) => ({
        resource: "posts:board:notice",
        action: type.replace("Permissions", ""),
        ...p,
      })),
    );

    const formData = new FormData();
    formData.append("moduleId", e.target.moduleId.value);
    formData.append("moduleName", e.target.moduleName.value);
    formData.append("listCount", e.target.listCount.value);
    formData.append("pageCount", e.target.pageCount.value);
    formData.append("documentLike", e.target.documentLike.value);
    formData.append("consultingState", e.target.consultingState.value);
    formData.append("commentState", e.target.commentState.value);
    formData.append("permissions", JSON.stringify(permissions));

    const response = await fetch("/api/admin/posts", {
      method: "POST",
      body: formData,
      credentials: "include", // 쿠키 포함
    });

    const res = await response.json();
    const { type, message, data, element } = res;
    console.log(type);
    if (type === "error" || type === "warning") {
      setError({ type, message });
    }
    if (type === "success") {
      router.replace("/dashboard/posts/list");
    }
  };

  const PermissionSection = ({ permissionType, label }) => (
    <div className="mb-5">
      <div className="flex gap-2 items-center">
        <div className="w-24 text-sm text-black">{label}</div>
        <div className="flex-1">
          <div className="flex gap-2 flex-wrap">
            {permissionGroups.map(({ label, value }) => (
              <div key={value}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => togglePermission(permissionType, value)}
                    checked={permissionsMap[permissionType]?.some(
                      (p) => p.subjectType === value,
                    )}
                  />
                  {label}
                </label>
              </div>
            ))}

            {groups.map((group) => (
              <div key={group.id}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() =>
                      togglePermission(permissionType, "group", group.id)
                    }
                    checked={permissionsMap[permissionType]?.some(
                      (p) =>
                        p.subjectType === "group" && p.subjectId === group.id,
                    )}
                  />
                  {group.groupTitle}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-3">
        {error && <Alert message={error.message} type={error.type} />}
        <form onSubmit={handleSubmit}>
          {posts.id && <input type="hidden" name="postId" value={posts.id} />}
          <input type="hidden" name="moduleType" value="posts" />
          <div className="max-w-screen-2xl mx-auto">
            <div className="px-3">
              <div className="grid grid-cols-4 gap-8 py-10">
                <div className="col-span-1">
                  <div className="text-lg font-semibold text-gray-600  mb-3">
                    게시판 기본설정
                  </div>
                  <div className="text-gray-400 text-sm">
                    게시판의 기본설정을 입력합니다.
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-col-span-2">
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="moduleId">
                          <div className="text-sm text-black mb-3">모듈ID</div>
                        </label>
                        {posts && (
                          <input
                            type="text"
                            name="moduleId"
                            id="moduleId"
                            className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                            placeholder="/?mid=post"
                            defaultValue={posts?.mid}
                          />
                        )}

                        <div className="text-sm text-dark-400 pt-2 font-light">
                          게시판의 모듈ID는 중복될 수 없는 이름입니다.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="moduleName">
                          <div className="text-sm text-black mb-3">
                            게시판이름
                          </div>
                        </label>
                        {posts && (
                          <input
                            type="text"
                            name="moduleName"
                            id="moduleName"
                            className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                            defaultValue={posts?.moduleName}
                          />
                        )}

                        <div className="text-sm text-dark-400 pt-2 font-light">
                          게시판이름을 정하세요. 브라우저 타이틀 혹은 게시판의
                          명칭을 나타냅니다.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="listCount">
                          <div className="text-sm text-black mb-3">목록 수</div>
                        </label>
                        {posts && (
                          <input
                            type="text"
                            name="listCount"
                            id="listCount"
                            className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-16 py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                            defaultValue={
                              posts.config?.listCount
                                ? posts.config?.listCount
                                : "20"
                            }
                          />
                        )}

                        <div className="text-sm text-dark-400 pt-2 font-light">
                          한 페이지에 표시될 글 수를 지정할 수 있습니다. (기본
                          20개)
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="listCount">
                          <div className="text-sm text-black mb-3">
                            페이지 수
                          </div>
                        </label>
                        {posts && (
                          <input
                            type="text"
                            name="pageCount"
                            id="pageCount"
                            className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-16 py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                            defaultValue={
                              posts.config?.pageCount
                                ? posts.config?.pageCount
                                : "10"
                            }
                          />
                        )}

                        <div className="text-sm text-dark-400 pt-2 font-light">
                          목록 하단, 페이지를 이동하는 링크 수를 지정할 수
                          있습니다. (기본 5개)
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="documentLike">
                          <div className="text-sm text-black mb-3">
                            좋아요 사용
                          </div>
                        </label>
                        <label className="m-0">
                          <input
                            type="checkbox"
                            name="documentLike"
                            id="documentLike"
                            className="peer hidden"
                          />

                          <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white dark:after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:translate-x-6"></div>
                        </label>
                        <div className="text-sm text-dark-400 pt-2 font-light">
                          게시글 본문에 좋아요 기능을 사용합니다.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="consultingState">
                          <div className="text-sm text-black mb-3">
                            상담 기능 사용
                          </div>
                        </label>
                        <label className="m-0">
                          <input
                            type="checkbox"
                            name="consultingState"
                            id="consultingState"
                            className="peer hidden"
                          />

                          <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white dark:after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:translate-x-6"></div>
                        </label>
                        <div className="text-sm text-dark-400 pt-2 font-light">
                          관리자와 자신이 쓴 글만 보이도록 하는 기능입니다.
                          &#40;회원 전용&#41;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-px border-b border-gray-200"></div>
            <div className="px-3">
              <div className="grid grid-cols-4 gap-8 py-10">
                <div className="col-span-1">
                  <div className="text-lg font-semibold text-gray-600  mb-3">
                    댓글설정
                  </div>
                  <div className="text-gray-400 text-sm">
                    댓글 관련 설정을 합니다.
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-col-span-2">
                    <div className="col-span-2 grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                      <div className="col-span-3 sm:col-span-2">
                        <label>
                          <div className="text-sm text-black mb-3">
                            댓글 사용
                          </div>
                        </label>
                        <label htmlFor="commentState" className="m-0">
                          <input
                            type="checkbox"
                            name="commentState"
                            id="commentState"
                            className="peer hidden"
                          />

                          <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white dark:after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:translate-x-6"></div>
                        </label>

                        <div className="text-sm text-dark-400 pt-2 font-light">
                          댓글을 사용할지 여부를 결정합니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-px border-b border-gray-200"></div>
            <div className="px-3">
              <div className="grid grid-cols-4 gap-8 py-10">
                <div className="col-span-1">
                  <div className="text-lg font-semibold text-gray-600  mb-3">
                    권한설정
                  </div>
                  <div className="text-gray-400 text-sm">
                    생성된 게시판의 권한을 설정합니다.
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-cols-3 gap-6 hover:bg-gray-50 p-5">
                    <div className="col-span-3">
                      {permissions.map(({ label, permissionsType }) => (
                        <PermissionSection
                          key={permissionsType}
                          label={label}
                          permissionType={permissionsType}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center pt-5 pb-10 border-t border-slate-200">
              <Link
                href="/dashboard/posts/list"
                className="px-5 py-2 text-sm text-white bg-dark-500 rounded-md"
              >
                뒤로가기
              </Link>
              <button
                type="submit"
                className="px-5 py-2 text-sm text-white bg-orange-500 hover:bg-cyan-600 rounded-md"
              >
                저장하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DashboardPostCreate;
