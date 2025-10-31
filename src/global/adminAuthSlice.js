
import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    admin: null,
    token: null,
    error: null,
    message: null,
  },
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
      state.token = action.payload?.token;
    },
    logoutAdmin: (state) => {
      state.admin = null;
      state.token = null;
    },
    resetAdminStatus: (state) => {
      state.error = null;
      state.message = null;
    },
  },
});

export const { setAdmin, logoutAdmin, resetAdminStatus } =
  adminAuthSlice.actions;
export default adminAuthSlice.reducer;
