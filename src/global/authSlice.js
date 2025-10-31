import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    role: null,
    message: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    resetStatus: (state) => {
      state.message = null;
      state.error = null;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { logout, resetStatus, setUser, setRole } = authSlice.actions;
export default authSlice.reducer;
