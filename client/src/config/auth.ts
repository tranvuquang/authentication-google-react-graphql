import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  setAccessTokenRedux,
  setLoadingRedux,
  setRefreshTokenRedux,
  setUserRedux,
} from "../features/auth/authSlice";
import { userDefaultData } from "../features/auth/types";
import { mutationClient } from "../graphql-client/config";
import { authenticateMutation } from "../graphql-client/mutations";
import { auth, provider } from "./firebase";

export const loginWithGoogle = async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(setLoadingRedux(true));
    const res = (await signInWithPopup(auth, provider)) as any;
    if (res.user) {
      const { uid, accessToken, refreshToken, email } = res.user;
      dispatch(setRefreshTokenRedux(refreshToken));
      const { resData } = (await mutationClient(
        "",
        dispatch,
        authenticateMutation,
        { uid, email }
      )) as any;
      if (resData) {
        dispatch(setUserRedux(resData.data.authenticate));
        dispatch(setAccessTokenRedux(accessToken));
        return {
          user: resData.data.authenticate,
          accessToken,
          refreshToken,
        };
      }
    }
  } catch (error) {
  } finally {
    dispatch(setLoadingRedux(false));
  }
};

export const loginWithEmailAndPassword = async (
  email: string = "",
  password: string = "",
  dispatch: Dispatch<AnyAction>
) => {
  try {
    dispatch(setLoadingRedux(true));
    const res = (await signInWithEmailAndPassword(
      auth,
      email,
      password
    )) as any;
    if (res.user) {
      const { uid, accessToken, refreshToken, email } = res.user;
      dispatch(setRefreshTokenRedux(refreshToken));
      const { resData } = (await mutationClient(
        "",
        dispatch,
        authenticateMutation,
        { uid, email }
      )) as any;
      if (resData) {
        dispatch(setUserRedux(resData.data.authenticate));
        dispatch(setAccessTokenRedux(accessToken));
        return {
          user: resData.data.authenticate,
          accessToken,
          refreshToken,
        };
      }
    }
  } catch (error) {
  } finally {
    dispatch(setLoadingRedux(false));
  }
};

export const logoutWithGoogle = async (dispatch: Dispatch<AnyAction>) => {
  const auth = getAuth();
  auth.signOut();
  dispatch(setAccessTokenRedux(""));
  dispatch(setRefreshTokenRedux(""));
  dispatch(setUserRedux(userDefaultData));
};
