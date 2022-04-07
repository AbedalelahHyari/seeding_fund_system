import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation";
/**************************************************** */
const FundingRequest = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectSector, setProjectSector] = useState("");
  /********************************************************** */
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  /******************************************************* */
  const submitFundingRequest = async () => {
    try {
      const request = {
        projectName,
        projectDescription,
        projectSector,
      };
      const res = await axios.post("http://localhost:5000/funding", request, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
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
  return (
    <>
      <Navigation />
      <div className="container w-25">
        <h1 className="mb-5 mt-5">Fund Raising</h1>
        <div className="form-group">
          <input
            required
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
            type="text"
            className="form-control mb-5"
            placeholder="Project Name"
          />
        </div>
        <div className="form-group mb-5">
          <textarea
            onChange={(e) => {
              setProjectDescription(e.target.value);
            }}
            placeholder="Project Description"
            className="form-control"
          />
        </div>
        <input
          required
          onChange={(e) => {
            setProjectSector(e.target.value);
          }}
          type="text"
          className="form-control mb-5"
          placeholder="Project Sector"
        />
        <button
          onClick={submitFundingRequest}
          className="btn btn-primary shadow"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default FundingRequest;
