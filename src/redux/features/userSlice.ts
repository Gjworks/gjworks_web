"use client"

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface DataInfo {
  // 사용자 정보에 해당하는 인터페이스를 정의합니다.
  code :string
  element : string
  message : string
  userInfo : {
    id:number;
    uuid: string;
    nickname: string;
    password: string;
    email: string;
    createdAt: string;
    updateAt: string;
  }
}

interface UserState {
  userInfo: DataInfo | null;
  loading: boolean,
  error: string | undefined,
}

const initialState: UserState = {
  userInfo: null,
  loading: false,
  error: undefined,
};

interface FetchSignInPayload {
  formData: FormData;
}

interface FetchUserInfoPayload {
  accessToken: string;
  formData: FormData;
}

interface FetchSignInResponse {
  userInfo: DataInfo;
  accessToken: string;
}

export const fetchSignIn = createAsyncThunk<FetchSignInResponse, FetchSignInPayload>(
  'userInfo/fetchSignIn',
  async ({formData}: { formData: FormData }):Promise<{ userInfo: DataInfo; accessToken: string }> => {
    console.log(formData)
    const response = await fetch('/api/auth/signIn', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    console.log(result)
    // return data.data.userInfo;
    return { userInfo: result.data, accessToken: result.accessToken };
  }
);

export const fetchUserInfo = createAsyncThunk<DataInfo, FetchUserInfoPayload>(
  'userInfo/fetchUserInfo',
  async ({accessToken, formData}: { accessToken: string, formData: FormData }):Promise<DataInfo> => {
    console.log(accessToken, formData);
    const response = await fetch('/api/user/userUpdate', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    console.log(result.data)
    return result.data;
  }
);

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // setUserInfo: (state, action: PayloadAction<UserInfo>) => {
    //   console.log(action.payload)
    //   state.userInfo = action.payload;
    // },
    // resetUserInfo: (state) => {
    //   state.userInfo = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload)
        if(action.payload) state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.loading = false;
        // 사용자 정보와 accessToken 받아오기
        console.log(action.payload)
        const { userInfo, accessToken } = action.payload;
        // fetchSignIn에서 받아온 사용자 정보로 덮어쓰기
        state.userInfo = userInfo;
        // localStorage에 accessToken 저장
        localStorage.setItem('accessToken', accessToken);
      })
      .addCase(fetchSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})

// export const { setUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice.reducer;