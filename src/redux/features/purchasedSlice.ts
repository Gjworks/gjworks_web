"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PurchasedState {
  purchased: boolean;
}

const initialState: PurchasedState = {
  purchased: false,
};

export const purchasedUpdate = createSlice({
  name: 'purchased',
  initialState,
  reducers: {
    purchasedData: (state, action) => {
      state.purchased = !action.payload;
    },
    resetPurchased: (state) => {
      state.purchased = false;
    },
  },
});

export const { purchasedData, resetPurchased } = purchasedUpdate.actions;
// export default trackingUpdate.reducer;