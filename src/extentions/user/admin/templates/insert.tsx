"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Alert from "@plextype/components/message/Alert";

const DashboardUserInsert = () => {
  const router = useRouter();
  const [error, setError] = useState<{ type: string; message: string } | null>(
    null,
  );

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("accountId", e.target.accountId.value);
    formData.append("password", e.target.password.value);
    formData.append("nickname", e.target.nickname.value);

    const response = await fetch("/api/admin/user", {
      method: "POST",
      body: formData,
      credentials: "include", // 쿠키 포함
    });

    const res = await response.json();
    const { type, message, data, accessToken, element } = res;

    console.log(type);
    if (res.type === "error") {
      setError({ type, message });
    }

    if (res.type === "success") {
      router.replace("/auth/signin");
    }
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-3">
        {error && <Alert message={error.message} type={error.type} />}
        <form onSubmit={submitHandler}>
          <div className="max-w-screen-2xl mx-auto">
            <div className="px-3">
              <div className="grid grid-cols-4 gap-8 py-10">
                <div className="col-span-1">
                  <div className="text-lg font-semibold text-gray-600  mb-3">
                    회원 기본설정
                  </div>
                  <div className="text-gray-400 text-sm">
                    회원의 기본설정을 변경합니다.
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-col-span-2 gap-8">
                    <div className="col-span-2 grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label>
                          <div className="text-sm text-black mb-3">아이디</div>
                        </label>
                        <input
                          type="text"
                          name="accountId"
                          className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                          placeholder="example@mail.com"
                        />

                        <div className="text-sm text-dark-400 pt-2 font-light">
                          기본로그인이며 계정정보를 찾을 때 사용됩니다.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label>
                          <div className="text-sm text-black mb-3">닉네임</div>
                        </label>
                        <input
                          type="text"
                          name="nickname"
                          className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                        />

                        <div className="text-sm text-dark-400 pt-2 font-light">
                          닉네임은 중복될 수 없는 이름입니다.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label>
                          <div className="text-sm text-black mb-3">
                            비밀번호
                          </div>
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="border border-gray-200 hover:border-gray-950 focus:border-gray-950 w-full py-2 px-3 outline-none rounded-md text-sm shadow-sm shadow-gray-100"
                        />
                        <div className="text-sm text-dark-400 pt-2 font-light">
                          비밀번호는 암호화 되어 저장됩니다.
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
                    추가설정
                  </div>
                  <div className="text-gray-400 text-sm">
                    회원가입시 입력한 내용 이외의 정보를 기입합니다.
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-col-span-2 gap-8">
                    <div className="col-span-2 grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label>
                          <div className="text-sm text-black mb-3">
                            관리자 설정
                          </div>
                        </label>
                        <label className="m-0">
                          <input type="checkbox" className="peer hidden" />
                          <div className="block relative rounded-full cursor-pointer bg-gray-200 w-12 h-6 after:content-[''] after:absolute top-[1px] after:rounded-full after:h-6 after:w-6 after:shadow-md after:bg-white after:transition-all peer-checked:bg-cyan-500 after:peer-checked:trangray-x-6"></div>
                        </label>
                        <div className="text-sm text-dark-400 pt-2 font-light">
                          관리자 페이지에 접근 가능한 계정입니다. (최고 관리자와
                          동일한 권한을 가지고 있습니다.)
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label>
                          <div className="text-sm text-black mb-3">
                            그룹설정
                          </div>
                        </label>
                        <div className="flex flex-wrap gap-4">
                          <label>
                            <div className="flex gap-2">
                              <input type="checkbox" className=""></input>
                              <div className="text-sm text-dark-400">
                                준회원
                              </div>
                            </div>
                          </label>
                          <label>
                            <div className="flex gap-2">
                              <input type="checkbox" className=""></input>
                              <div className="text-sm text-dark-400">
                                정회원
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="text-sm text-dark-400 pt-2 font-light">
                          회원은 여러그룹을 중복하여 설정할 수 있습니다.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label>
                          <div className="text-sm text-black mb-3">메모</div>
                        </label>
                        <textarea className="bg-gradient-to-r text-gray-900 outline-none py-2 px-4 text-sm border-b border-gray-300 w-full bg-gray-300/25 rounded-tl rounded-tr focus:border-orange-500 focus:from-orange-500/25"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center bg-slate-100/50 pt-5 pb-10 border-t border-slate-200">
              <div className="px-5 py-2 text-sm text-white bg-dark-500 rounded-md">
                뒤로가기
              </div>
              <button className="px-5 py-2 text-sm text-white bg-orange-500 hover:bg-cyan-600 rounded-md">
                저장하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DashboardUserInsert;
