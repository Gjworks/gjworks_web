"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
  // 사용자 정보에 해당하는 인터페이스를 정의합니다.
  id:number;
  uuid: string;
  nickname: string;
  password: string;
  email: string;
  createdAt: string;
  updateAt: string;
  
}

interface UserState {
  userInfo: UserInfo | null;
}

const initialState: UserState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    resetUserInfo: (state) => {
      state.userInfo = null;
    },
  },
})

export const { setUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice.reducer;