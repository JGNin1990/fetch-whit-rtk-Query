import { createSlice } from "@reduxjs/toolkit";

const AuthSlicer = createSlice({
  name: "Auth",
  initialState: {
    token: null,
    isAuthorization: false,
    user: null,
  },
  reducers: {
    loginReducer: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isAuthorization = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logOutReducer: (state) => {
      localStorage.removeItem("token");
      state.isAuthorization = false;
      state.token = null;
      state.user = null;
    },
  },
});

export default AuthSlicer.reducer;
export const { loginReducer, logOutReducer } = AuthSlicer.actions;
