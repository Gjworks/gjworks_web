"use client"
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

/*
  비동기를 처리 하기 위해  thunk 보다 일단 toolkit에 내장되어 있는 createAsyncThunk 함수를 활용
*/
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
  userInfo: UserInfo | null; // 또는 원하는 형식으로 배열 타입을 지정합니다.
  loading: boolean; // loading 속성 추가
  error: string | null;
}

const initialState: UserState = {
  userInfo:  null as UserInfo | null,
  loading: false,
  error: null as string | null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    resetUserInfo: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userInfoAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userInfoAsync.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(userInfoAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const userInfoAsync = createAsyncThunk<void, UserInfo>(
  'user/userInfo',
  async (data, { dispatch }) => {
    dispatch(userSlice.actions.setUserInfo(data));
    await new Promise((resolve) => {
      console.log(`User info`, data)
    });

  },
);

export const { setUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice;