import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AuthState, IUser, userDefaultData } from "./types";
import jwt_decode from "jwt-decode";

const accessToken = localStorage.getItem("accessToken") || "";
const refreshToken = localStorage.getItem("refreshToken") || "";

const getUser = () => {
  let user: IUser = userDefaultData;
  if (accessToken) {
    const { email, user_id } = jwt_decode(accessToken) as any;
    user = { uid: user_id, email, id: user_id };
  }
  return user;
};

const initialState: AuthState = {
  user: getUser(),
  accessToken,
  refreshToken,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserRedux: (state, action) => {
      state.user = action.payload;
    },
    setAccessTokenRedux: (state, action) => {
      console.log(action.payload);
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    setRefreshTokenRedux: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("refreshToken", action.payload);
    },
    setLoadingRedux: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setUserRedux,
  setAccessTokenRedux,
  setLoadingRedux,
  setRefreshTokenRedux,
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
