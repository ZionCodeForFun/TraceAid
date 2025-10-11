import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export const {} = userSlice.actions;
export default userSlice.reducer;
