
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: null,
};

const accountTypeSlice = createSlice({
  name: "accountType",
  initialState,
  reducers: {
    setAccountType: (state, action) => {
      state.type = action.payload;
    },
    resetAccountType: (state) => {
      state.type = null;
    },
  },
});

export const { setAccountType, resetAccountType } = accountTypeSlice.actions;
export default accountTypeSlice.reducer;
