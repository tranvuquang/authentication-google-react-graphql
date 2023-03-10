import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import { queryClient } from "../../graphql-client/config";
import { getUsersQuery } from "../../graphql-client/queries";

type Props = {};

const MessengerHomePage = (props: Props) => {
  const { accessToken } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      if (accessToken) {
        const resData = (await queryClient(
          accessToken,
          dispatch,
          getUsersQuery,
          {}
        )) as any;
        if (resData) {
          console.log(resData.data);
        }
      }
    })();
  }, [accessToken, dispatch]);
  return <div>MessengerHomePage</div>;
};

export default MessengerHomePage;
