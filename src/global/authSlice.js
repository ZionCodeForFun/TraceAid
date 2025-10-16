import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUpUser, loginUser } from "../api/AuthApi";

export const signup = createAsyncThunk(
  "Auth/SignUp",
  async (userData, { rejectedWithValue }) => {
    try {
      const res = await signUpUser(userData);
      return res;
    } catch (error) {
      return rejectedWithValue(error?.response?.data);
    }
  }
);

export const login = createAsyncThunk(
  "Auth/Login",
  async (userData, { rejectedWithValue }) => {
    try {
      const res = loginUser(userData);
      return res;
    } catch (error) {
      return rejectedWithValue(error?.response?.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    token: null,
    error: null,
    role: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
