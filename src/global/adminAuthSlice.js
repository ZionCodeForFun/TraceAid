import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    admin: null,
    token: null,
    email: null,
    error: null,
    message: null,
  },
  reducers: {
    setAdmin: (state, action) => {
      const payload = action.payload;
      state.admin = payload;
      state.token = payload?.token || null;
      state.email = payload?.email || payload?.admin?.email || null; 
     
    },

    logoutAdmin: (state) => {
      state.admin = null;
      state.token = null;
      state.email = null;
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
