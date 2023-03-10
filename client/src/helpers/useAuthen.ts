import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/auth/authSlice";

// Chua dang nhap moi cho phep vao
// Da dang nhap roi -> Day qua homepage
function useAuthen() {
  let navigate = useNavigate();
  const { accessToken, user } = useAppSelector(selectAuth);

  useEffect(
    () => {
      if (accessToken && user) {
        navigate("/");
      }
    },
    [accessToken, navigate, user]
  );
}

export { useAuthen };
