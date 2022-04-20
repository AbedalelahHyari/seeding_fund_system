import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation";
import Form from "react-bootstrap/Form";
//===================================================================
const FundingRequest = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectSector, setProjectSector] = useState("");
  const [sectors, setSectors] = useState([]);
  //=================================================================
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  //=================================================================
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
  //=================================================================
  const getAllSectors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/sectors");
      if (res.data.success) {
        setSectors(res.data.sectors);
      }
    } catch (err) {
      throw err;
    }
  };
  //=================================================================
  useEffect(() => {
    getAllSectors();
  }, []);
  //=================================================================
  return (
    <>
      <Navigation />
      <div className="container w-25">
        <h2 className="mb-5 mt-5">Fund Raising Request</h2>
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
            rows={4}
            onChange={(e) => {
              setProjectDescription(e.target.value);
            }}
            placeholder="Project Description"
            className="form-control"
          />
        </div>
        <Form.Select
          onChange={(e) => {
            setProjectSector(e.target.value);
          }}
          className="mb-5"
          aria-label="Default select example"
        >
          <option>Sector</option>
          {sectors.length ? (
            sectors.map((sector, index) => {
              return (
                <option key={index} value={sector._id}>
                  {sector.sector}
                </option>
              );
            })
          ) : (
            <></>
          )}
        </Form.Select>
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
