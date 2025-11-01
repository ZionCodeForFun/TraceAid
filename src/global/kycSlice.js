import { createSlice } from "@reduxjs/toolkit";

const kycSlice = createSlice({
  name: "kyc",
  initialState: {
    step1: {},   
    step2: {}, 
  },
  reducers: {
    saveKycStep1: (state, action) => {
      state.step1 = action.payload;
    },
    saveKycStep2: (state, action) => {
      state.step2 = action.payload;
    },
    clearKyc: (state) => {
      state.step1 = {};
      state.step2 = {};
    },
  },
});

export const { saveKycStep1, saveKycStep2, clearKyc } = kycSlice.actions;
export default kycSlice.reducer;