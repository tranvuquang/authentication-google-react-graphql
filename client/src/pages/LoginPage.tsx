import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useAuthen } from "../helpers/useAuthen";
import "./login.scss";
import { selectAuth } from "../features/auth/authSlice";
import { loginWithEmailAndPassword, loginWithGoogle } from "../config/auth";

const formDataDefaultValue = {
  email: "admin@gmail.com",
  password: "123456",
};
type Props = {};

const LoginPage = (props: Props) => {
  useAuthen();
  const { loading } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(formDataDefaultValue);
  const { email, password } = formData;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await loginWithEmailAndPassword(email, password, dispatch);
    if (res) {
      console.log(res);
    }
  };

  const handleLoginWithGoogle = async () => {
    const res = await loginWithGoogle(dispatch);
    if (res) {
      console.log(res);
    }
  };
  return (
    <div className="login">
      <div className="background"></div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          Log In{" "}
        </button>
        <div className="social">
          <div
            className="go"
            onClick={handleLoginWithGoogle}
            style={{ cursor: "pointer" }}
          >
            <i className="fab fa-google" /> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook" /> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
