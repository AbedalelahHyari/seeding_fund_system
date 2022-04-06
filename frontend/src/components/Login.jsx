import axios from "axios";
import React, { useState } from "react";
import { loginRed } from "../../src/reducers/login/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
/**************************************************************************** */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  /************************************** */
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  /*************************************** */
  const login = () => {
    axios
      .post("http://localhost:5000/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        if (result.data.success === true) {
          localStorage.setItem("token", result.data.token);
          dispatch(
            loginRed({
              token: result.data.token,
            })
          );
          //navigate("/dashboard");
        }
      })
      .catch((err) => {
        setStatus(err.response.data.message);
      });
  };
  return (
    <>
      <div className="container w-25">
        <h1 className="mb-5 mt-5">Login</h1>
        <div className="form-group">
          <input
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control mb-5"
            placeholder="Email"
          />
        </div>
        <div className="form-group mb-5">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </div>

        <button onClick={login} className="btn btn-primary shadow">
          Login
        </button>
        <a href="/register" className="btn btn-secondary m-4 shadow">
          Go to Register
        </a>
        <div className="alert">{status}</div>
      </div>
    </>
  );
};
export default Login;
