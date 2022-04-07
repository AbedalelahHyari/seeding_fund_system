import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/********************************************** */
const Register = () => {
  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  /*********************************************** */
  const register = async () => {
    try {
      const user = {
        userName,
        country,
        email,
        password,
        role,
      };
      const res = await axios.post("http://localhost:5000/users", user);
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
        setTimeout(() => {
          navigate("/");
        }, 1000);
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
  /*********************************************************** */
  const getAllRoles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/roles");
      if (res.data.success) {
        setRoles(res.data.roles);
      }
    } catch (error) {
      throw error;
    }
  };
  /****************************** */
  useEffect(() => {
    getAllRoles();
  }, []);
  console.log(role);
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
          <Form.Select
            onChange={(e) => {
              setRole(e.target.value);
            }}
            className="mb-5"
            aria-label="Default select example"
          >
            <option>Role</option>
            {roles.length ? (
              roles.map((role, index) => {
                return (
                  <option key={index} value={role._id}>
                    {role.role}
                  </option>
                );
              })
            ) : (
              <></>
            )}
          </Form.Select>
          <button onClick={register} className="btn btn-primary">
            Register
          </button>
          <a href="/" className="btn btn-secondary m-5">
            Back to Login
          </a>
        </div>
      </div>
    </>
  );
};
export default Register;
