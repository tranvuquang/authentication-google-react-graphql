import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/auth/authSlice";

type Props = { children: ReactNode };

const PrivateRoute = ({ children }: Props) => {
  const { accessToken, user } = useAppSelector(selectAuth);
  
  return (
    <>
      {accessToken && user ? children : <Navigate to="/login" />}
    </>
  );
};

export default PrivateRoute;
