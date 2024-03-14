"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TrackingState {
  checkboxValue: boolean;
}

const initialState: TrackingState = {
  checkboxValue: false,
};

export const trackingUpdate = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    toggleCheckbox: (state) => {
      state.checkboxValue = !state.checkboxValue;
    },
  },
});

export const { toggleCheckbox } = trackingUpdate.actions;
// export default trackingUpdate.reducer;