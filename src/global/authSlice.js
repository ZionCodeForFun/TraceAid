import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUpUser, loginUser } from "../api/AuthApi";

export const signup = createAsyncThunk(
  "Auth/SignUp",
  async (userData, thunkAPI) => {
    try {
      const res = await signUpUser(userData);
      return res;
    } catch (err) {
   
      return thunkAPI.rejectWithValue(err?.message );
    }
  }
);

export const login = createAsyncThunk(
  "Auth/Login",
  async (userData, thunkAPI) => {
    try {
      const res = await loginUser(userData);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err?.message);
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
    message: "",
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
        state.message = "";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;

        state.token = action.payload.token;
        state.role = action.payload.role;
        state.message = action.payload?.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || action.error?.message ;
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
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error?.message ;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
