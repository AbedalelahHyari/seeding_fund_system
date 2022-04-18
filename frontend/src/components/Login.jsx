import axios from "axios";
import React, { useState } from "react";
import { loginRed } from "../../src/reducers/login/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/esm/Container";
/**************************************************************************** */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /***************************************** */

  const login = async () => {
    try {
      const result = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      if (result.data.success === true) {
        localStorage.setItem("token", result.data.token);
        dispatch(
          loginRed({
            token: result.data.token,
          })
        );

        result.data.role.role === "Admin"
          ? navigate("/admin")
          : navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  /************************* */
  return (
    <>
      <div className="container w-25 mt-5">
        <h1 className="mb-5">Login</h1>
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

        <Container>
          <button onClick={login} className="btn btn-primary shadow">
            Login
          </button>
          <a href="/register" className="btn btn-secondary m-5 shadow">
            Go to Register
          </a>
        </Container>
      </div>
    </>
  );
};
export default Login;
