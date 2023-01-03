import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const auth = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = auth.actions;

export default auth.reducer;
