"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JsonDataState {
  jsonData: any[]; // 또는 원하는 형식으로 배열 타입을 지정합니다.
}

const initialState: JsonDataState = {
  jsonData: [],
};

export const updateSlice = createSlice({
  name: "coordinate",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<any>) => {
      state.jsonData.push(action.payload);
    },
    resetData: (state) => {
      state.jsonData = [];
    },
  },
});

export const { updateData, resetData } = updateSlice.actions;