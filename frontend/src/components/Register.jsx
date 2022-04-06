import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/********************************************** */
const Register = () => {
  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*********************************************** */
  const register = async () => {
    try {
      const user = {
        userName,
        country,
        email,
        password,
      };
      const res = await axios.post("http://localhost:5000/users", user);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
  /********************************************************* */
  return (
    <>
      <div className="container w-25">
        <h1 className="mb-5 mt-5">Register</h1>
        <div className="form-group">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            className="form-control mb-4"
            placeholder="User Name"
          />

          <input
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            type="text"
            className="form-control mb-4"
            placeholder="Country"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control mb-4"
            placeholder="Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control mb-4"
            placeholder="Password"
          />
          <button onClick={register} className="btn btn-primary">
            Register
          </button>
          <a href="/" className="btn btn-secondary m-4">
            Back to Login
          </a>
        </div>
      </div>
    </>
  );
};
export default Register;
