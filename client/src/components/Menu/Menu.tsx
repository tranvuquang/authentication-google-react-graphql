import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { logout } from "../../axios/axiosConfig";
import {
  selectAuth,
  setAccessTokenRedux,
  setRefreshTokenRedux,
  setUserRedux,
} from "../../features/auth/authSlice";
import { userDefaultData } from "../../features/auth/types";

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#0d6efd" : "inherit",
  textDecoration: isActive ? "underLine" : "none",
});

type Props = {};

const Menu = (props: Props) => {
  const { accessToken, user } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(setAccessTokenRedux(""));
    dispatch(setRefreshTokenRedux(""));
    dispatch(setUserRedux(userDefaultData));
  };
  return (
    <div>
      <ul style={{ display: "flex" }}>
        <li style={{ listStyle: "none", margin: "0px 5px " }}>
          <NavLink to="/home" style={navLinkStyle}>
            Home
          </NavLink>
        </li>
        <li style={{ listStyle: "none", margin: "0px 5px " }}>
          <NavLink to="/login" style={navLinkStyle}>
            Login
          </NavLink>
        </li>
        <li style={{ listStyle: "none", margin: "0px 5px " }}>
          <NavLink to="/messengers" style={navLinkStyle}>
            Messengers
          </NavLink>
        </li>
        {accessToken && user && (
          <li style={{ listStyle: "none", margin: "0px 5px " }}>
            <button style={{ margin: "0px ", padding: "2px" }} onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
