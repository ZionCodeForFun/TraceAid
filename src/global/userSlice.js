import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: null,
  loading: false,
  error: null,
 
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.userInfo = actions.payload;
    },
    clearUser: (state) => {
      state.userInfo = null;
    },
  },
});
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
