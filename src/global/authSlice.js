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
      state.role = null;
    },
    resetStatus: (state) => {
      state.role = null;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(action.payload);
    },
     setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { logout, resetStatus, setUser, setRole, setToken } = authSlice.actions;
export default authSlice.reducer;
