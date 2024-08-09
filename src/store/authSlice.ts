import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authToken",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});
export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
